import { useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import api from '../utils/api'

const Signup = () => {
  const navigate = useNavigate()

  const handleSubmit = async (formData) => {
    try {
      await api.registerUser(formData)
      alert('Registration successful! Please login.')
      navigate('/login')
    } catch (error) {
      console.error('Signup error:', error)
      alert('Registration failed')
    }
  }

  return <AuthForm type="signup" onSubmit={handleSubmit} />
}

export default Signup