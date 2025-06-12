import { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Login from './pages/unauthed/login'
import { Box } from '@chakra-ui/react'
import Home from './pages/authed/home'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'

function App() {
  const auth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if(auth){
      navigate('/Home')
    } else {
      navigate('/login')
    }
  },[auth, navigate])

  return (
   <Box>
    <Routes>
        {/* Rotas protegidas */}
        <Route 
          path="/" 
          element={auth ? <Home /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/home" 
          element={auth ? <Home /> : <Navigate to="/login" replace />} 
        />
        
        {/* Rotas públicas */}
        <Route 
          path="/login" 
          element={!auth ? <Login /> : <Navigate to="/home" replace />} 
        />
      </Routes>
   </Box>
  )
}

export default App
