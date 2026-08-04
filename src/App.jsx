import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import './App.css'
import Registration from './components/user/register.jsx'
import Login from './components/user/login.jsx'
import Dashboard from './components/user/dashboard.jsx'
import PublicNavbar from './components/navbar/publicNav.jsx'
import PrivateNavbar from './components/navbar/privateNav.jsx'
import Home from './components/home/home.jsx'
import HomeFeatures from './components/home/homeFeatures.jsx'
import FreeTrial from './components/home/freeTrial.jsx'
import { useAuth } from './authContext/AuthContext.jsx'
import AuthRoute from './components/authRoute/AuthRoute.jsx';
import ContentGen from './components/content/genContent.jsx';
import ContentHistory from './components/content/history.jsx';


function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateNavbar /> : <PublicNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<HomeFeatures />} />
          <Route path="/free-plan" element={<FreeTrial />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <AuthRoute>
              <Dashboard />
            </AuthRoute>
          } />
          <Route path="/content" element={
            <AuthRoute>
              <ContentGen />
            </AuthRoute>
          } />
          <Route path="/content-history" element={
            <AuthRoute>
              <ContentHistory />
            </AuthRoute>
          } />
        </Routes>
    </BrowserRouter>
  )
}

export default App
