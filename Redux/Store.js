import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import AdminThemeReducer from "./AdminTheme"
import barsReducer from "./bars";
import UserBarReducer from "./UserBar";
import LoginReducer from "./isLogin";
import LoginIDReducer from "./loginID";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    AdminTheme : AdminThemeReducer,
    bars: barsReducer,
    UserBars : UserBarReducer,
    login: LoginReducer,
    LoginID : LoginIDReducer,
  },
});
