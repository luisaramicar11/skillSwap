import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/admin.users.model";

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
      const response = await fetch("https://skillswapriwi.azurewebsites.net/api/UsersGet");
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
        dateBirthday: new Date(user.birthdate), // Convertir fecha a Date
        urlImage: user.urlImage,
        email: user.email,
        category: user.abilityCategory,
        skills: user.abilities.split(',').map((skill: string) => skill.trim()), // Convertir string a array
        phoneNumber: user.phoneNumber,
        urlLinkedin: user.urlLinkedin,
        urlGithub: user.urlGithub,
        urlBehance: user.urlBehance,
        role: user.roleName, // Asignar roleName a role
        idState: 0, // Dependiendo de la estructura, puedes ajustar esto
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
    createUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<IUser>) => {
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
