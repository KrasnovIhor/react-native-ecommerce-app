import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface UsersState {
  isAuthenticated: boolean | null;
  loading: boolean;
}

const initialState: UsersState = {
  isAuthenticated: null,
  loading: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    load(state, action) {
      state.loading = false;
      state.isAuthenticated = action.payload;
    },
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const {
  login: authLogin,
  logout: authLogout,
  load: authLoad,
} = authSlice.actions;

export const useAuthSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
