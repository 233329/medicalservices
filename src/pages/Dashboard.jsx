import { useEffect, useState } from 'react'
import '../styles/Dashboard.css'

const Dashboard = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  if (!user) {
    return <div className="dashboard">Please login to view your dashboard</div>
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}</h1>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Your Orders</h2>
          <p>View your order history</p>
        </div>
        <div className="dashboard-card">
          <h2>Account Details</h2>
          <p>Update your information</p>
        </div>
        <div className="dashboard-card">
          <h2>Wishlist</h2>
          <p>View your saved items</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard