import { createSlice } from "@reduxjs/toolkit";


const UserBars = createSlice({
    name:"UserBars",
    initialState:{
        UserBars: false,
    },
    reducers:{
        SetUserBars : (state , action)=>{
           return {UserBars : action.payload}
        }
    }
})


export default UserBars.reducer;
export const {SetUserBars} = UserBars.actions;