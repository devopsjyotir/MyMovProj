import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Movies from './pages/Movies'
import Home from './pages/Home'
// import './styles/App.css'
import { Outlet } from 'react-router'
import { CheckSession } from './services/Auth'
import {  useEffect } from 'react'
import MoviesPage from './pages/MoviesPage'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Navbar
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />

      <Outlet />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId/:userName" element={<UserDetails />} />
          <Route path="/moviespage" element={<MoviesPage />} />
          <Route path="/signin" element=
          {<SignIn 
            setUser={setUser}
  toggleAuthenticated={toggleAuthenticated}
          />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<Movies 
          user={user} authenticated={authenticated}
          
          />} />
        </Routes>
      </main>
    </div>
  )
}

export default App