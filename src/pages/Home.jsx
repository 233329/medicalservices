import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../utils/api'
import ProductCard from '../components/ProductCard'
import '../styles/Home.css'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await api.getProducts()
        setFeaturedProducts(products.slice(0, 4))
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ 
          backgroundImage: `url('https://i.postimg.cc/4ys9h6Nd/website-background.jpg')`
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to BeautyGift</h1>
            <p>Discover the perfect beauty gifts for every occasion</p>
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </section>

    
      <section className="featured-products">
        <h2>Featured Products</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      
      <section className="newsletter">
        <h2>Join Our Beauty Community</h2>
        <form>
          <input type="email" placeholder="Your email address" required />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>
    </div>
  )
}

export default Home