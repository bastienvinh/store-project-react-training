import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../../components/Product/Product.component'

import "./Product.styles.scss"

const Products = () => {
  const { products } = useSelector(store => store.products)
  
  return (
    <div className="products">
      <h2>Products</h2>

      <section className="all-products">
        {products.map(product => <Product product={product} />)}
      </section>
    </div>
  )
}

export default Products