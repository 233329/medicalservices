import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import '../styles/Cart.css'

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    totalPrice,
    clearCart 
  } = useCart()

  const handleQuantityChange = (id, e) => {
    updateQuantity(id, parseInt(e.target.value))
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="quantity-control">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                  />
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-outline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <div className="cart-actions">
              <button onClick={clearCart} className="btn btn-outline">
                Clear Cart
              </button>
              <Link to="/checkout" className="btn btn-primary">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart