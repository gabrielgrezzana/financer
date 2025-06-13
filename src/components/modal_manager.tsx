// components/ModalManager.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';
import { selectActiveModal, closeModal } from '../redux/modalSlice';
import { ModalType } from '../types/menu.types';

import Financer from '../pages/authed/financer';
import Metamask from '../pages/authed/metamask';
import Labels from '../pages/authed/labels';

const ModalManager: React.FC = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector(selectActiveModal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case ModalType.FINANCER:
        return <Financer />;
      case ModalType.LABEL:
        return <Labels />;
      case ModalType.METAMASK:
        return <Metamask />;
      default:
        return null;
    }
  };

  const getModalSize = () => {
    switch (activeModal) {
      case ModalType.FINANCER:
        return 'xl';
      case ModalType.LABEL:
        return 'lg';
      case ModalType.HISTORY:
        return '6xl';
      case ModalType.METAMASK:
        return 'md';
      default:
        return 'md';
    }
  };

  return (
    <Modal 
      isOpen={!!activeModal} 
      onClose={handleClose}
      size={getModalSize()}
      isCentered
      closeOnOverlayClick={true}
      closeOnEsc={true}              
    >
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent
        bg="rgba(30, 8, 47, 0.95)"
        border="1px solid purple"
        boxShadow="0 0 20px purple"
        maxH="90vh"
        minH="80vh"
        minW="75vw"
        
        overflowY="auto"
      >
        <ModalCloseButton color="white" />
        {renderModalContent()}
      </ModalContent>
    </Modal>
  );
};

export default ModalManager;