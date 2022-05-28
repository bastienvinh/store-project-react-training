import React, { Fragment, useState } from 'react'
import "./Product.styles.scss"
import { addToCart } from "../../features/carts/cartSlice"
import { useDispatch } from 'react-redux'
import ModalProduct from '../ModalProduct/ModalProduct.component'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const title = product.title.length > 50 ? `${product.title.slice(0, 50)} ...`: product.title

  const [showDetail, setShowDetail] = useState(false)

  return (
    <Fragment>
      {showDetail && <ModalProduct product={product} onClose={() => setShowDetail(false)} />}
      <article>
        <div className="product">
          <div className="price">{product.price} $</div>
          <img src={product.image} alt={title} />
          <h4>{title}</h4>
          <div className="actions">
            <button type="button" onClick={() => dispatch(addToCart(product))}>Add</button>
            <button type="button" onClick={() => setShowDetail(true)}>Details</button>
          </div>
        </div>
      </article>
    </Fragment>
  )
}

export default Product