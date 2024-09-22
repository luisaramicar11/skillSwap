// 0. instalar redux toolkit
import { configureStore } from "@reduxjs/toolkit"; // 1. es como configurar O MANEJADOR DEL el local storage pero solo para mi proyecto
import authReducer from "./slices/authSlice";
import usersReducer from "./slices/usersSlice";
import reportsReducer from "./slices/reportsSlice"

const store = configureStore({
    reducer: {
        auth: authReducer, // 2. son cada uno de los estados que guardaremos en nuestro configureStore. UN STATE ES UNA ESPECIE DE LOCALSTORAGE
        users: usersReducer,
        reports: reportsReducer,
         // CADA ES UNA SLICE DEL "reducer"
    },
});

// Define el tipo RootState basado en el store
export type RootState = ReturnType<typeof store.getState>; // 3. tipado del useSelector (EL QUE PERMITE MANEJAR LOS ESTADOS)

// Define el tipo AppDispatch si es necesario
export type AppDispatch = typeof store.dispatch; // 4. tipado de useDispatch (EL QUE PERMITE MANEJAR EL atributo o convencion "reducer")

export default store; // 5. la exportamos. Los tipados se copian y pegan
