import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import './App.css'

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
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
