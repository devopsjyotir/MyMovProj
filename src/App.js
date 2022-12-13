import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Movies from './pages/Movies'
import Home from './pages/Home'
// import './styles/App.css'
import { Outlet } from 'react-router'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

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
          <Route path="/signin" element=
          {<SignIn 
            setUser={setUser}
  toggleAuthenticated={toggleAuthenticated}
          />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
    </div>
  )
}

export default App