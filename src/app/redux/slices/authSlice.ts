import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, IUserLoginRequest, IUserLoginResponse } from "../../../models/login.model";
import { IUserRegister } from "../../../models/register.model";

// Estado inicial
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Acción asíncrona para iniciar sesión
export const loginUser = createAsyncThunk<IUserLoginResponse, IUserLoginRequest>(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://skillswapriwi.azurewebsites.net/api/Auth/PostAuthLogin",
        {
          method: "POST",
          headers: {
            "accept": "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.error.message || "An error occurred");
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error || "An error occurred");
    }
  }
);

// Acción asíncrona para registro
export const registerUser = createAsyncThunk<IUserLoginResponse, IUserRegister>(
  "auth/registerUser",
  async (newUser, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch("https://skillswapriwi.azurewebsites.net/api/UsersPost/PostUserCreate", {
        method: "POST",
        headers: {
          "accept": "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "An error occurred");
      }

      const data = await response.json();
      
      // Inicia sesión automáticamente después de registrar el usuario
      const loginCredentials: IUserLoginRequest = {
        email: newUser.email,
        password: newUser.password,
      };

      await dispatch(loginUser(loginCredentials)); // Ejecutar loginUser después de registrar

      return data;
    } catch (error) {
      return rejectWithValue(error || "An error occurred");
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
      localStorage.removeItem("authToken");
      localStorage.removeItem("userId"); 
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
        localStorage.setItem("authToken", action.payload.data.response.token);
        localStorage.setItem("userId", action.payload.data.response.id.toString());
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
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
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Exporta las acciones y el reducer
export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
