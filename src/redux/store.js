import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/pcbuilder/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    pcbuilder: pcBuilderReducer,
  },
});
