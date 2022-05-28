import React from 'react'
import { useSelector } from 'react-redux'
import SectionProducts from '../../components/SectionProducts/SectionProducts'
import "./Home.styles.scss"

const Home = () => {
  const { categories, products } = useSelector(store => store.products)
  console.log(products)

  return (
    <div className="home">
      <h2>Categories</h2>
      {categories.map((category, index) => <SectionProducts key={index} category={category} />)}
    </div>
  )
}

export default Home