import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import PatientArticle from './Components/PatientArticle.jsx'
import Search from './Components/Search.jsx'
import Edit from './Components/Edit.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path='search' element={<Search/>}/>
      <Route path='edit/:id' element={<Edit/>}/>
      <Route path='article' element={<PatientArticle/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
