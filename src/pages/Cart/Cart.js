import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Cart.styles.scss"

import { addToCart, removeToCart } from "../../features/carts/cartSlice"

import { ReactComponent as AngleUp } from "./images/angle-up.svg"
import { ReactComponent as AngleDown } from "./images/angle-down.svg"

const Cart = () => {
  const dispatch = useDispatch()
  const { items, total } = useSelector(store => store.cart)

  return (
    <div className="cart">
      <h2>Cart</h2>

      <div className="cart-all-items">
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-infos-block">
                <div className="cart-info">
                  <h5>{item.title}</h5>
                  <p>Price: <span className="price">{item.price} $</span></p>
                </div>
                <div className="quantity-block">
                  <div className="add-more">
                    <AngleUp onClick={() => dispatch(addToCart(item))} />
                  </div>
                  {item.quantity}
                  <div className="remove-less">
                    <AngleDown onClick={() => dispatch(removeToCart(item))} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="total-block">
            Total: <span className="total">{total} $</span>
        </div>
      </div>
    </div>
  )
}

export default Cart