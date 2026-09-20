import React from 'react'
import { useState } from 'react'

const User = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/1')
        const result = await response.json()
        setUser(result)
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }

    fetchUser()
  }, [])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  )
}

export default User

    
