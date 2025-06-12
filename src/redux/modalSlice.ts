// redux/modalSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ModalType } from '../types/menu.types';

interface ModalState {
  activeModal: ModalType | null;
  modalData?: any; // Para passar dados específicos para o modal
}

const initialState: ModalState = {
  activeModal: null,
  modalData: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ type: ModalType; data?: any }>) => {
      state.activeModal = action.payload.type;
      state.modalData = action.payload.data;
    },
    closeModal: (state) => {
      state.activeModal = null;
      state.modalData = null;
    },
    updateModalData: (state, action: PayloadAction<any>) => {
      state.modalData = action.payload;
    },
  },
});

export const { openModal, closeModal, updateModalData } = modalSlice.actions;
export default modalSlice.reducer;

// Selectors
export const selectActiveModal = (state: { modal: ModalState }) => state.modal.activeModal;
export const selectModalData = (state: { modal: ModalState }) => state.modal.modalData;