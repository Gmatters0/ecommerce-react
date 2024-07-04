import React from 'react'
import { Link } from "react-router-dom"
import './index.scss'

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <button>
            <Link to={'/pay'}>Products</Link>
      </button>
    </div>
  )
}

export default Products