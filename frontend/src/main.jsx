import React, { lazy, Suspense } from 'react'
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
import Login from './Components/Login/Login.jsx';
import Logout from './Components/Logout/Logout.jsx';
import { ErrorBoundary } from "react-error-boundary"
import BoundaryError from './Components/ErrorBoundary/ErrBoundary.jsx';
// import IDfun from ;
const NameFilter = lazy(() => import('./Components/Filter/NameSearch.jsx'))
const IDfun = lazy(() => import('./Components/Filter/ID.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Login />} />
      <Route path='logout' element={<Logout />} />
      <Route path="home" element={<ErrorBoundary fallback={<BoundaryError />}><Home /></ErrorBoundary>} />
      <Route path='search' element={<ErrorBoundary fallback={<BoundaryError />}><Search /></ErrorBoundary>} />
      <Route path='edit/:id' element={<Edit />} />
      <Route path='article' element={<ErrorBoundary fallback={<BoundaryError />}><PatientArticle /></ErrorBoundary>} />
      <Route path='patientid' element={
        <React.Suspense fallback={<Loading/>}>
          <ErrorBoundary>
            <IDfun />
          </ErrorBoundary>
        </React.Suspense>
      } />
      <Route path="filter" element={
        <React.Suspense fallback={<Loading />}>
          <ErrorBoundary fallback={<BoundaryError />}>
            <NameFilter />
          </ErrorBoundary>

        </React.Suspense>} />
      <Route path='*' element={<Error />} />
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
