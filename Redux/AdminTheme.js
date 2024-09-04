import { createSlice } from "@reduxjs/toolkit";


const admin_theme = createSlice({
    name:"Admin Theme",
    initialState:{
        Admin_dark_mode: false,
    },
    reducers:{
        toggleAdminDarkMode:(state , action)=>{
            state.Admin_dark_mode = !state.Admin_dark_mode;
        }
    }
})


export default admin_theme.reducer;
export const {toggleAdminDarkMode} = admin_theme.actions