"use client";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, IUserLoginRequest, IUserLoginResponse } from "../../models/login.model";
import { IUserRegister } from "../../models/register.model"

// Estado inicial
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Acción asíncrona para iniciar sesión
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: IUserLoginRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://skillswap-hugegnd4ewbse8ah.eastus-01.azurewebsites.net/api/UsersPost/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        // Si la respuesta no es correcta (4xx o 5xx)
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      // Si hay un error de red u otro problema
      return rejectWithValue(error);
    }
  }
);

// Acción asíncrona para registro
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    newUser:IUserRegister,
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("https://skillswap-hugegnd4ewbse8ah.eastus-01.azurewebsites.net/api/UsersPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        // Si la respuesta no es exitosa (4xx o 5xx)
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      // Si hay un error de red u otro problema
      return rejectWithValue(error.message);
    }
  }
);


// Slice de Redux
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
     .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
     .addCase(loginUser.fulfilled, (state, action: PayloadAction<IUserLoginResponse>) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
     .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
     .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
     .addCase(registerUser.fulfilled, (state, action: PayloadAction<IUserLoginResponse>) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
     .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
     })
  }
});

// Exporta las acciones y el reducer
export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;