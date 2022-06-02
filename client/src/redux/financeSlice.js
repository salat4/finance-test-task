import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: {},
}
export const financeSlice = createSlice({
name:'finance',
initialState,
reducer:{
  finance:(state,action)=>{
    state.value = action.payload
  },
},
})
export const {finance} = financeSlice.actions
export default financeSlice.reducer