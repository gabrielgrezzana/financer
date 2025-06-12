import { configureStore } from '@reduxjs/toolkit'
import userReducer from './authSlice'
import modalReducer from './modalSlice'

export const store = configureStore({
    reducer: {
        auth: userReducer,
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['moda/openModal'],
            ignoredPaths: ['modal.modalData'],
        }
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;