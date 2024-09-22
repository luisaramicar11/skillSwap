import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IReport, IReportGet, Report } from "../../../models/admin.reports.model";

// Estado inicial
interface UsersState {
  reports: IReport[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  reports: [],
  loading: false,
  error: null,
};

// Acción asíncrona para obtener reportes
export const fetchReports = createAsyncThunk<IReport[], void, { rejectValue: string }>(
  "reports/fetchReports",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://skillswapriwi.azurewebsites.net/ReportGet/Reports");
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }

      const data = await response.json();
      const reports = data.data.obj; // Aquí accedes al array 'obj'

      return reports; // Devuelves el array de reportes
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice de Redux
const usersSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    createReport: (state, action: PayloadAction<IReport>) => {
      const newReport: IReport = {
        id: Date.now(), // Generar un ID temporal o basado en la lógica que manejes
        titleReport: action.payload.titleReport,
        description: action.payload.description,
        dateReport: new Date(), // Fecha actual
        actionTaken: "pendiente",
        idState: 1, // Estado inicial del reporte
        idUser: action.payload.idUser, 
        idReportedUser: Date.now(), // Convertir idReportedUse de número a string
      };
    
      state.reports.push(newReport);
    },
    
    updateReport: (state, action: PayloadAction<IReport>) => {
      const updatedReport = action.payload;
      const index = state.reports.findIndex((report) => report.id === updatedReport.id);
    
      if (index !== -1) {
        state.reports[index] = updatedReport;
      }
    },
    
    
    deleteReport: (state, action: PayloadAction<number>) => {
      state.reports = state.reports.filter((report) => report.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReports.fulfilled, (state, action: PayloadAction<IReport[]>) => {
        state.loading = false;
        state.reports = action.payload;
      })
      .addCase(fetchReports.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  }  
});

// Exporta las acciones y el reducer
export const { createReport, updateReport, deleteReport } = usersSlice.actions;
export default usersSlice.reducer;