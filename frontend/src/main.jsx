import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContextProvider from "../src/Context/UserContextProvider.jsx";
import { BrowserRouter } from "react-router";
createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <UserContextProvider>
      <App />
    </UserContextProvider> 
  </BrowserRouter>
)
