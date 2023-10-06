
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const hotelSearchSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
      hotelData: (state) => { 
          alert('Please select');
      }
  
  },
})

// Action creators are generated for each case reducer function
export const { hotelData } = hotelSearchSlice.actions

export default hotelSearchSlice.reducer