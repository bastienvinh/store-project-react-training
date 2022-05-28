import React from 'react'
import { useParams } from 'react-router-dom'

const Categories = () => {
  const { category } = useParams()

  return (
    <div className="categories">
      <h2>{category}</h2>
    </div>
  )
}

export default Categories