// import { useState } from 'react'
import './App.css'
// import { Button } from "@/components/ui/button"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </Router>
  )
}
export default App
