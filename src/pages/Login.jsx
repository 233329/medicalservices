import { useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import api from '../utils/api'

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = async (formData) => {
    try {
      const user = await api.loginUser(formData)
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/dashboard')
      } else {
        alert('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
      alert('Login failed')
    }
  }

  return <AuthForm type="login" onSubmit={handleSubmit} />
}

export default Login