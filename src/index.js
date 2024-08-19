import React from 'react'
import ReactDOM from 'react-dom/client'

//import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/index.css'
import Home from './pages/Home'
import Test from './pages/Test'
import Header from './components/Header'
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
