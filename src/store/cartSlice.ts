import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
export interface product {
    id:number,
    title:string,
    image : string,
    size: number,
    amount:number,
    color?:string,
    timeStamp:string,
    price:number,
}
export interface cartState {
  prodcuts: product[],
  totalPrices: number,
}

// Define the initial state using that type
const initialState: cartState = {
    prodcuts:[],
    totalPrices:0
}

export const cartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProduct: (state,action:PayloadAction<product>) => {
      state.totalPrices += action.payload.amount * action.payload.price;
      state.prodcuts.push(action.payload)
    },
    removeProduct: (state,action:PayloadAction<{id:number,timeStamp:string}>) => {
      state.prodcuts = state.prodcuts.filter((product)=>{
        if(product.id === action.payload.id && product.timeStamp === action.payload.timeStamp){
          state.totalPrices -= product.amount* product.price;
          return false;
        }else{
          return true;
        }
      })
    },
  }
})

export const { addProduct,removeProduct } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.prodcuts
export const selectPrices = (state: RootState) => state.cart.totalPrices

export default cartSlice.reducer