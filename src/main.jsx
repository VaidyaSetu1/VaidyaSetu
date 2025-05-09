import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router'
import './index.css'

// import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Search from './components/Search.jsx'
import Profile from './components/Profile.jsx'
import DarkLoginPage from './components/LoginPage.jsx'
// import User from './components/User.jsx'
// import Github from './components/Github.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<DarkLoginPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
