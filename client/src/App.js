import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import PostDetails from './components/PostDetails/PostDetails'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
import { GoogleOAuthProvider } from '@react-oauth/google'
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  return (
    <GoogleOAuthProvider clientId="295280443540-ulrlcp1ivmg9tlv5jj09b7bu7gj3kprt.apps.googleusercontent.com">
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/posts/search" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route
              path="/auth"
              element={user ? <Navigate replace to="/posts" /> : <Auth />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
