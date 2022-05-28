import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from '../Product/Product.component'

import "./SectionProducts.styles.scss"

const SectionProducts = ({ category }) => {
  const { products } = useSelector(store => store.products)
  const [categoryProducts, setCategoryProducts] = useState([])
  
  useEffect(() => {
    setCategoryProducts(products.filter(product => product.category === category).slice(0, 5))
  }, [category, products])

  return (
    <div className="category">
      <h3><Link to={`/categories/${category}`}>{category}</Link></h3>
      <section className="section-categories">
      {categoryProducts.map(product => (<Product product={product} />))}
    </section>
    </div>
  )
}

export default SectionProducts