import axios from 'axios'

const API_BASE = 'https://topaz-vine-pumpkin.glitch.me'

const api = {
  getProducts: async () => {
    const response = await axios.get(`${API_BASE}/products`)
    return response.data
  },
  
  getProduct: async (id) => {
    const response = await axios.get(`${API_BASE}/products/${id}`)
    return response.data
  },
  
  registerUser: async (userData) => {
    const response = await axios.post(`${API_BASE}/users`, userData)
    return response.data
  },
  
  loginUser: async (credentials) => {
    const response = await axios.get(`${API_BASE}/users`)
    const user = response.data.find(
      u => u.email === credentials.email && u.password === credentials.password
    )
    return user || null
  }
}

export default api