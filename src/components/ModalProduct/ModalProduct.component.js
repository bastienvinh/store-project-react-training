import React, { Fragment } from 'react'
import "./ModalProduct.styles.scss"

const ModalProduct = ({ product, onClose }) => {
  return (
    <Fragment>
      <div className="overlay-modal"></div>
      <div className="modal-product">
        <button className="close" onClick={() => onClose()}>&times;</button>
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
    </Fragment>
  )
}

export default ModalProduct