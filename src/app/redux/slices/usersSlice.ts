import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserUpdateAdmin } from "../../../models/user.model";

// Estado inicial
interface UsersState {
  users: IUser[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// Acción asíncrona para obtener usuarios
export const fetchUsers = createAsyncThunk<IUser[], void, { rejectValue: string }>(
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
      const users = data.data.obj.map((user: any): IUser => ({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        jobTitle: user.jobTitle,
        description: user.description,
        birthdate: new Date(user.birthdate), // Convertir fecha a Date
        email: user.email,
        urlImage: user.urlImage,
        phoneNumber: user.phoneNumber,
        abilityCategory: user.abilityCategory,
        abilities: user.abilities.split(',').map((skill: string) => skill.trim()), // Convertir string a array
        urlLinkedin: user.urlLinkedin,
        urlGithub: user.urlGithub,
        urlBehance: user.urlBehance,
        idStateUser: user.idStateUser,
        idRoleUser: user.idRoleUser,
        suspensionDate: user.suspensionDate,
        reactivationDate: user.reactivationDate,
        nameStateUser: user.nameStateUser,
        roleName: user.roleName, // Asignar roleName a role
      }));

      return users;
    } catch (error: any) {
      return rejectWithValue(error.message);
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
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// Exporta las acciones y el reducer
export const { createUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
