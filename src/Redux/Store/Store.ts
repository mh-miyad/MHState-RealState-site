

import { configureStore } from '@reduxjs/toolkit'
import hotelSearchSlice from '../Feature/HotelSearch/hotelSearchSlice'


const store = configureStore({
    reducer: {
       hotelSearch : hotelSearchSlice
    }
    
})

export default store