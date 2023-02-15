import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://63de89673d94d02c0bad00a6.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUpUser = createAsyncThunk(
  'user/signUp',
  async (userRegData, thunkAPI) => {
    try {
      const resp = await axios.post(`/users/signup`, userRegData);
      console.log(resp.data);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/login',
  async (userRegData, thunkAPI) => {
    try {
      const resp = await axios.post('/users/login', userRegData);
      setAuthHeader(resp.data.token);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'users/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().auth;

    console.log(state.token);
    if (!state.token) {
      return thunkAPI.rejectWithValue('no valid message');
    }
    // clearAuthHeader();
    setAuthHeader();
    try {
      const resp = await axios.get('/users/current');
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', text);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const delContact = createAsyncThunk(
  'contacts/delContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
