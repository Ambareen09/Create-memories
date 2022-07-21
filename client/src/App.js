import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
import { GoogleOAuthProvider } from '@react-oauth/google'
const App = () => (
  <GoogleOAuthProvider clientId="295280443540-ulrlcp1ivmg9tlv5jj09b7bu7gj3kprt.apps.googleusercontent.com">
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </GoogleOAuthProvider>
)

export default App
