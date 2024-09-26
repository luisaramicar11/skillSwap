import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IReportGet, IReport } from "../../../models/admin.reports.model"; // Usa IReportGet para los reportes GET

// Estado inicial
interface UsersState {
  reports: IReportGet[];  // Cambiado a IReportGet[]
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  reports: [],
  loading: false,
  error: null,
};

// Acción asíncrona para obtener reportes
export const fetchReports = createAsyncThunk<IReportGet[], void, { rejectValue: string }>(
  "reports/fetchReports",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://skillswapriwi.azurewebsites.net/ReportGet/GetReportsAll");
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData)
        return rejectWithValue(errorData.message);
      }

      const data = await response.json();
      const reports = data.data.response; // Accedes a 'obj' correctamente

      return reports as IReportGet[]; // Devuelves el array de reportes con el tipo adecuado
    } catch (error) {
      return rejectWithValue(error as string);
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
        id: Date.now(),
        titleReport: action.payload.titleReport,
        description: action.payload.description,
        dateReport: new Date(),
        actionTaken: "pendiente",
        idState: 1,
        idUser: action.payload.idUser,
        idReportedUser: action.payload.idReportedUser,
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
      .addCase(fetchReports.fulfilled, (state, action: PayloadAction<IReportGet[]>) => {
        state.loading = false;
        state.reports = action.payload;
      })
      .addCase(fetchReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }  
});

// Exporta las acciones y el reducer
export const { createReport, updateReport, deleteReport } = usersSlice.actions;
export default usersSlice.reducer;
