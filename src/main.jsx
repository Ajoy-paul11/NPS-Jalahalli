import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ThankYou from './components/ThankYou'
import { ToastContainer } from 'react-toastify'
import GradeSecondary from './components/Grade11/GradeSecondary'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/thankyou",
    element: <ThankYou />,
  },
  {
    path: "/grade-11",
    element: <GradeSecondary />,
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
