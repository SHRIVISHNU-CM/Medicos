import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import PatientArticle from './Components/PatientArticle.jsx'
import Search from './Components/Search.jsx'
import Edit from './Components/Edit.jsx'
import Loading from './Components/Loading.jsx';
import Error from './Components/Error.jsx';
import Login from './Components/Login/Login.jsx';
import Logout from './Components/Logout/Logout.jsx';
const NameFilter = lazy(() => import('./Components/Filter/NameSearch.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Login />} />
      <Route path='logout' element={<Logout />}/>
      <Route path="home" element={<Home/>}/>
      <Route path='search' element={<Search />} />
      <Route path='edit/:id' element={<Edit />} />
      <Route path='article' element={<PatientArticle />} />
        <Route path="filter" element={<React.Suspense fallback={<Loading/>}><NameFilter /></React.Suspense> } />
      <Route path='*' element={<Error/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      
    />
  </React.StrictMode>,
)
