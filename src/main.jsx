import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './pages/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import UserDashboard from './pages/UserDashboard.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import SignupForm from './pages/SignupForm.jsx'
import Tutorials from  './pages/Tutorials.jsx'
import NewsLetter from  './pages/NewsLetter.jsx'
import Community from  './pages/Community.jsx'
import DashboardHome from './components/DashboardHome.jsx'
import DashboardSettings from './components/DashboardSettings.jsx'
import DashboardRoadmaps from './components/DashboardRoadmaps.jsx'
import DashboardLessons from './components/DashboardLessons.jsx'

const router = createBrowserRouter([

  {
    path : '/', element: <Layout/>, 
    children : [
                  {  index: true, element: <HomePage/>},
                  { path: '/logIn', element: <Login/>},
                  { path :'/signUp' , element : <SignupForm/>},
                  { path: '/userDashboard', element: <UserDashboard/>,
                      children : [

                        { index: true, element: <DashboardHome/>},
                        { path: 'dashboardSettings', element: <DashboardSettings/>},
                        { path: 'dashboardRoadmaps', element: <DashboardRoadmaps/>},
                        { path: 'dashboardLessons', element: <DashboardLessons/>},
      
                
                      ] 
                  },
                  { path :'/tutorials' , element : <Tutorials/>},
                  { path :'/newsLetter' , element : <NewsLetter/>},
                  { path :'/community' , element : <Community/>},
                
    ],
    
  },
  
  


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
