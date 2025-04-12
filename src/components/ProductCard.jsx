import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </Link>
      <div className="card-actions">
        <button 
          onClick={() => addToCart(product)}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard