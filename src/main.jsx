import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client.js'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router";
createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <App /> 
  </BrowserRouter>
)
