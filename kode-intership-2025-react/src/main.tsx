import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Profile } from './pages/Profile/Profile.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path='/:id' element={<Profile/>}/>
    </Routes>
  </StrictMode>
  </BrowserRouter>
)
