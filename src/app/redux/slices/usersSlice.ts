import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserUpdateAdmin } from "../../../models/user.model";

// Estado inicial
interface UsersState {
  users: IUserUpdateAdmin[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// Acción asíncrona para obtener usuarios
export const fetchUsers = createAsyncThunk<IUserUpdateAdmin[], void, { rejectValue: string }>(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://skillswapriwi.azurewebsites.net/api/UsersGet/GetUsersAll");
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }
      
      // Extraer y mapear los datos
      const data = await response.json();
      const users = data.data.response.map((user: IUser): IUserUpdateAdmin => ({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        urlImage: user.urlImage,
        jobTitle: user.jobTitle,
        description: user.description,
        birthdate: user.birthdate, // Convertir fecha a Date
        email: user.email,
        phoneNumber: user.phoneNumber,
        category: user.category,
        abilities: user.abilities, // Convertir string a array
        urlLinkedin: user.urlLinkedin,
        urlGithub: user.urlGithub,
        urlBehance: user.urlBehance,
        idStateUser: user.idStateUser,
        idRoleUser: user.idRoleUser,
        suspensionDate: user.suspensionDate,
        reactivationDate: user.reactivationDate,
      }));

      return users;
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);


// Slice de Redux
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<IUserUpdateAdmin>) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUserUpdateAdmin[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Exporta las acciones y el reducer
export const { updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;

