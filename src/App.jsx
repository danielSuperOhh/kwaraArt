import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import AboutPage from './pages/aboutPage/AboutPage'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
