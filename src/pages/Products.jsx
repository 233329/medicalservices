import { useState, useEffect } from 'react'
import api from '../utils/api'
import ProductCard from '../components/ProductCard'
import '../styles/Products.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-container">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products