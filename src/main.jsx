import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ThankYou from './components/ThankYou'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/thankyou",
    element: <ThankYou />,
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    <ToastContainer />
    </RouterProvider>
  </StrictMode>,
)
