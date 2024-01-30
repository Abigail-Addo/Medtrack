import { configureStore } from "@reduxjs/toolkit";
import pharmacyReducer from "./features/pharmacy/pharmacySlice";

export const store = configureStore({
  reducer: {
    pharmacy: pharmacyReducer,
  },
});
