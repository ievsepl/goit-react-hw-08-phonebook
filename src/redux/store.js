import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsInitState } from './contacts/contacts.init-state';
import { filterInitState } from 'redux/filter/filter.init-state';
import { contactReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';
import { initAuthData } from './auth/auth.intit-state';
import { authPersistReducer } from './auth/auth.slice';
// import axios from 'axios';

const initState = {
  contacts: contactsInitState,
  filter: filterInitState,
  auth: initAuthData,
};

export const store = configureStore({
  preloadedState: initState,
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    // auth: authReducer,
    auth: authPersistReducer,
  },
  devTools: true,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
