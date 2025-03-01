import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ThankYou from './components/ThankYou'
import { ToastContainer } from 'react-toastify'
import GradeSecondary from './components/Grade11/GradeSecondary'
import DirectorMsg from './components/DirectorMsg'
import PrincipalMsg from './components/PrincipalMsg'
import StudentActivity from './components/StudentActivity'
import StudentAchievement from './components/StudentAchievement'
import TeacherAchievement from './components/TeacherAchievement'
import ErrorComponent from './components/ErrorComponent'
import Library from './components/Library'

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
  },
  {
    path: "/director-message",
    element: <DirectorMsg />,
  },
  {
    path: "/principal-message",
    element: <PrincipalMsg />
  },
  {
    path: "/student-activity",
    element: <StudentActivity />
  },
  {
    path: "/student-achievement",
    element: <StudentAchievement />
  },
  {
    path: "/teacher-achievement",
    element: <TeacherAchievement />
  },
  {
    path: "/library",
    element: <Library />
  },
  {
    path: "*",
    element: <ErrorComponent />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <ToastContainer />
    </RouterProvider>
  </StrictMode>,
)
