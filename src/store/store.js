import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../features/carts/cartSlice"
import productsReducer from "../features/products/productsSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  }
})

export default store