import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import '../styles/Navbar.css' 

const Navbar = () => {
  const { cartItems } = useCart()
  
  return (
    <nav className="navbar">
      <div className="nav-container">
      <div className="logo">PharmaBeauty</div>
        
        <div className="nav-links">
          <div className="nav-link-group">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </div>
        </div>
        
        <div className="nav-icons">
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="icon" />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar