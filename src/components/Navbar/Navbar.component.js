import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import "./Navbar.styles.scss"

const Navbar = () => {

  const { quantity } = useSelector(store => store.cart)

  return (
    <nav className="nav-bar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">All Products</NavLink></li>
        <li><NavLink to="/cart">Cart ({quantity})</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar