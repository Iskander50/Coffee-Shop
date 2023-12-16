import { createSlice } from "@reduxjs/toolkit"

const initialState=[]

export const favoritesSlice=createSlice({
name:'favorites',
initialState,
reducers: {
toggleFavorites:(state,{payload:coffee})=>{
   const isExists= state.some(c => c.id === coffee.id)

   if(isExists){
      const index =state.findIndex(item => item.id === coffee.id)
   if(index !== -1){
      state.splice(index,1)
   }
   } else state.push(coffee)
 
},
},
})

export const {actions,reducer }=favoritesSlice