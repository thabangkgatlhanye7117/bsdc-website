import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import FootballNostalgia from './pages/FootballNostalgia'


const router = createBrowserRouter([
  { path :'/', element: <Layout/>,
    children: [
      {index: true, element: <HomePage/>},
      {path:'footballNostalgia', element: <FootballNostalgia/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>

)


























































































