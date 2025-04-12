import { useState } from 'react'
import { useCart } from '../context/CartContext'
import '../styles/Checkout.css'

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'credit'
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    alert('Order placed successfully!')
    clearCart()
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Shipping Information</h2>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          
          <h2>Payment Method</h2>
          <div className="form-group">
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-primary">
            Place Order (${totalPrice.toFixed(2)})
          </button>
        </form>
        
        <div className="order-summary">
          <h2>Your Order</h2>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} × {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <div className="order-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
