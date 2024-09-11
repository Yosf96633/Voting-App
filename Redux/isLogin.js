import { createSlice } from "@reduxjs/toolkit";


const login = createSlice({
    name:"Login",
    initialState:{
       login:false
    },
    reducers:{
        setLogin : (state , action)=>{
           return {login : action.payload}
        }
    }
})


export default login.reducer;
export const {setLogin} = login.actions;