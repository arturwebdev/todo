import { createSlice } from "@reduxjs/toolkit";

const txtSlice = createSlice({
    name: 'txt',
    initialState: '',
    reducers: {
        toggleTxt(_, {payload}){
            return payload
        }, 
        resetTxt(){
            return ''
        }
    }
})


export const selectTxt = state => state.txt
export const {resetTxt,toggleTxt} = txtSlice.actions
export const txtReducer = txtSlice.reducer