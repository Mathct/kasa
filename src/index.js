import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/index.scss'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Layout from './components/Layout'
import Error from './pages/Error'
import Footer from './components/Footer'
import Fiche from './pages/Fiche'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/fiche/:fichenb" element={<Fiche />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  </React.StrictMode>,
)
