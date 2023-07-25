import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./reducers/jobSlice";
const store = configureStore({
  reducer: {
    jobs: jobSlice,
  },
});

export default store;
