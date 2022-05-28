import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout.component'
import { getCategories, getProducts } from './features/products/productsSlice'
import { calculateItem, calculateTotal } from "./features/carts/cartSlice"
import Categories from './pages/Categories/Categories'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'

function App() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((store) => store.products)
  const { items } = useSelector(store => store.cart)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(calculateItem())
    dispatch(calculateTotal())
  }, [items, dispatch])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="categories/:category" element={<Categories />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
