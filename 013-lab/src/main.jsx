import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import HeroSection from './Navbar.jsx';
import Card1 from './Card1.jsx';
import Card2 from './Card1.jsx';
import Card3 from './Card1.jsx';
import Card4 from './Card1.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroSection />
    <Card1 />
    <Card2 />
    <Card3 />
    <Card4 />
  </React.StrictMode>,
)
