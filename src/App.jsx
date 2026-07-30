import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import './App.css'
import Registration from './components/user/register.jsx'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registration />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
