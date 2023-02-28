import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContacts = persistReducer(persistConfig, contactSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContacts,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
