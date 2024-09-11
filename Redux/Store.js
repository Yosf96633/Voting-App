import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import AdminThemeReducer from "./AdminTheme"
import barsReducer from "./bars";
import UserBarReducer from "./UserBar";
import LoginReducer from "./isLogin";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    AdminTheme : AdminThemeReducer,
    bars: barsReducer,
    UserBars : UserBarReducer,
    login: LoginReducer,
  },
});
