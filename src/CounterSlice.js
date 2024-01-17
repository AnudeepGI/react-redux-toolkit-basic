import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name:'count',
    initialState:{
        value : 0
    },
    reducers : {
        inc : (state) => {
            state.value = state.value+1;
        },
        dec : (state) => {
            state.value = state.value-1;
        },
        inc10 : (state, payload) =>{
            console.log(payload.payload)
            state.value = state.value+payload.payload;
        }
    }
});


export const { inc, dec, inc10} = CounterSlice.actions;
export default CounterSlice.reducer;