import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  categories: [],
  isLoading: true
}

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (name, thunkApi) => {
    return fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .catch(e => thunkApi.rejectWithValue("something went wrong with products"))
  }
)

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async (name, thunkApi) => {
    return fetch("https://fakestoreapi.com/products/categories")
      .then(response => response.json())
      .catch(e => thunkApi.rejectWithValue("something with wrong with categories"))
  }
)

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    [getProducts.rejected]: (state, action) => {
      console.log(action)
      state.isLoading = false
    },
    [getCategories.pending]: (state) => {
      state.isLoading = true
    },
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload
      state.isLoading = false
    },
    [getCategories.rejected]: (state) => {
      state.isLoading = false
    }
  }
})

export default productsSlice.reducer