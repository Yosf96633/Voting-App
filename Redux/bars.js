import { createSlice } from "@reduxjs/toolkit";


const bars = createSlice({
    name:"Bars",
    initialState:{
        bars: false,
    },
    reducers:{
        setBars : (state , action)=>{
           return {bars : action.payload}
        }
    }
})


export default bars.reducer;
export const {setBars} = bars.actions;