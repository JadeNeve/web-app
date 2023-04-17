import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    password: null,
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;