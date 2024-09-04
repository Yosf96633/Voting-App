import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import AdminThemeReducer from "./AdminTheme"
import barsReducer from "./bars";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    AdminTheme : AdminThemeReducer,
    bars: barsReducer,
  },
});
