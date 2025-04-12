import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Auth.css'

const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: type === 'signup' ? '' : undefined
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="auth-container">
      <h1>{type === 'login' ? 'Login' : 'Sign Up'}</h1>
      
      <form onSubmit={handleSubmit} className="auth-form">
        {type === 'signup' && (
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
        )}
        
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
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          {type === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
      
      <div className="auth-footer">
        {type === 'login' ? (
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        ) : (
          <p>Already have an account? <Link to="/login">Login</Link></p>
        )}
      </div>
    </div>
  )
}

export default AuthForm