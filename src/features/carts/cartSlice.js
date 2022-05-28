import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  total: 0,
  quantity: 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calculateTotal: (state) => {
      state.total = state.items.reduce((total, item) => total + item.quantity * item.price, 0)
    },
    calculateItem: (state) => {
      state.quantity = state.items.reduce((total, item) => total + item.quantity, 0)
    },
    addToCart: (state, { payload }) => {
      const item = state.items.find(item => item.id === payload.id)
      if (!item) {
        state.items.push({ ...payload, quantity: 1 })
      }
      else (
        item.quantity += 1
      )
    },
    removeToCart: (state, { payload }) => {
      const item = state.items.find(item => item.id === payload.id)
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(item => item.id !== payload.id)
        }
        else {
          item.quantity -= 1
        }
      }
    }
  }
})

export const { calculateItem, calculateTotal, addToCart, removeToCart } = cartSlice.actions
export default cartSlice.reducer