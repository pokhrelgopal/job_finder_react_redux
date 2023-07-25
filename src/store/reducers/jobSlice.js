import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "../../services/api";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await getJobs();
  return response;
});

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.loading = "idle";
      state.jobs = action.payload;
    });
    builder.addCase(fetchJobs.rejected, (state) => {
      state.loading = "idle";
    });
  },
});

export default jobSlice.reducer;
