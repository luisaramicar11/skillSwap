import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from "./slices/authSlice";
import usersReducer from "./slices/usersSlice";
import reportsReducer from "./slices/reportsSlice"

const store = configureStore({
    reducer: {
        auth: authReducer, 
        users: usersReducer,
        reports: reportsReducer,
    },
});

// Define el tipo RootState basado en el store
export type RootState = ReturnType<typeof store.getState>;

// Define el tipo AppDispatch si es necesario
export type AppDispatch = typeof store.dispatch;

export default store;
