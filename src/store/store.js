import { configureStore } from "@reduxjs/toolkit";
import pharmacyReducer from "./features/pharmacy/pharmacySlice";
import labReducer from "./features/pharmacy/labSlice";

export const store = configureStore({
  reducer: {
    pharmacy: pharmacyReducer,
    laboratory: labReducer,
  },
});
