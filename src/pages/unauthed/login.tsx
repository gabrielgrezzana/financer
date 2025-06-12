import { Box,VStack, Button, Input, Text, FormControl, FormLabel, FormErrorMessage, Image } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { login } from '../../redux/authSlice'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()      
      
      const newErrors: { email?: string; password?: string } = {}

      if (!email) newErrors.email = 'Email é obrigatório'
      if (!password) newErrors.password = 'Senha é obrigatória'
      
      setErrors(newErrors as { email: string; password: string })
            
      if (Object.keys(newErrors).length === 0) {
        // Login logic aqui
        console.log('Login:', { email, password })
        dispatch(login(email))
        navigate('/')
      }

    }
  
    return (
        <Box 
        zIndex={9}
        style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#333333',
            color: '#fff',
            position: 'relative',
        }}>
          <Image 
            src={"https://img.freepik.com/fotos-gratis/banner-de-folha-monstera-tropical-neon_53876-138943.jpg?ga=GA1.1.1733532819.1747275840&semt=ais_hybrid&w=1920"}
            alt="logo" 
            pos="absolute"
            w="100vw" 
            h="100vh"
            backgroundBlendMode={'multiply'}
            zIndex={-9}
          />
        <form onSubmit={handleSubmit} style={{
            borderWidth: '2px',
            padding: '30px',
            borderRadius: '10px',        
            color: '#A020F0',
            borderColor: '#A020F0',
            width: '22rem',
            height: '28rem',
            boxShadow: '0 0 15px 0 #A020F0',
            backgroundColor: 'rgba(34, 33, 33, 0.9)',
        }}>
            <VStack spacing={4} align="stretch">
            <Text fontSize='2xl' fontWeight='bold' textAlign="center" color={'#A020F0'} letterSpacing={'0.3rem'}>
                LOGIN
            </Text>
            
            <FormControl isInvalid={errors.email ? true : false}>
                <FormLabel color={'#fff'}>Email</FormLabel>
                <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}              
                placeholder='seu@email.com'
                color={'#fff'}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
    
            <FormControl isInvalid={errors.password ? true : false}>
                <FormLabel color={'#fff'}>Senha</FormLabel>
                <Input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Sua senha'
                color={'#fff'}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
    
            <Button type="submit" colorScheme="blue" width="full" marginTop={'5rem'}>
                Entrar
            </Button>
            </VStack>
        </form>
      </Box>
    )
  }

export default Login;