import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import PatientArticle from './Components/PatientArticle.jsx'
import About from './Components/About.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"history",
        element:<search/>
      },
      {
        path:"article",
        element:<PatientArticle/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
