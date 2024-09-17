
import { createSlice } from "@reduxjs/toolkit";


const loginID = createSlice({
    name:"LoginID",
    initialState:{
       loginID:""
    },
    reducers:{
        setLoginID : (state , action)=>{
           return {loginID : action.payload}
        }
    }
})


export default loginID.reducer;
export const {setLoginID} = loginID.actions;