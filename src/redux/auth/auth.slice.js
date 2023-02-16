import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { initAuthData } from './auth.intit-state';
import {
  loginUser,
  logoutUser,
  refreshUser,
  signUpUser,
} from 'redux/operations';

const authHandlePending = state => {
  return state;
};
const handleRejected = (state, action) => {
  // state.isLoggedIn = false;
  // state.error = action.payload;
  return state;
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthData,
  extraReducers: builder => {
    builder
      .addCase(signUpUser.pending, state => {
        return state;
      })
      .addCase(signUpUser.rejected, state => {
        return state;
      })
      .addCase(signUpUser.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
        console.log(state);
        // return state;
      });
    builder
      .addCase(loginUser.pending, authHandlePending)
      .addCase(loginUser.rejected, handleRejected)
      .addCase(loginUser.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      });
    builder
      .addCase(logoutUser.pending, authHandlePending)
      .addCase(logoutUser.rejected, handleRejected)
      .addCase(logoutUser.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
      });
    builder
      .addCase(refreshUser.pending, authHandlePending)
      .addCase(refreshUser.rejected, handleRejected)
      .addCase(refreshUser.fulfilled, (state, actions) => {
        state.user = actions.payload;
        state.isLoggedIn = true;
      });
  },
});
export const authReducer = authSlice.reducer;

const persistConfig = {
  key: 'userToken',
  storage,
  whitelist: ['token'],
};

export const authPersistReducer = persistReducer(persistConfig, authReducer);
