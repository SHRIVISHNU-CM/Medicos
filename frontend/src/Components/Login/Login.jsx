import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify"
function Login() {
  const API = 'https://medicos-4xbt8l9m6-shrivishnu-cms-projects.vercel.app/signin'
  const navigate = useNavigate()

  const [name, SetName] = useState('')
  const [password, Setpin] = useState('')
  // const [userid,SetUseriD] = useState('')

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(API, { name, password })
      .then((res) => {
        toast.success('Shrividya loggedIn')
        navigate('/home')
      })

  }
  return (
    <>
      <div className='border w-[450px] h-min block m-auto shadow-2xl px-2 py-1'>
        <form onSubmit={handleSubmit} >
          <div className='border border-b-green-600 my-2'>
            <label htmlFor='name' className='font-semibold'>Admin Name</label>
          </div>
          <input
          className='px-2 py-1 outline-blue-600 w-full my-2'
            type='text'
            placeholder='Enter Name here'
            value={name}
            onChange={e => SetName(e.target.value)}
          />
          <div className='border border-b-green-600 my-2'>
            <label htmlFor='password' className='font-semibold'>
              Password
            </label>
          </div>
          <input
           className='px-2 py-1 outline-blue-600 w-full my-2'
            type='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={e => Setpin(e.target.value)}
          />
          <div className='flex justify-center'>
            <button type='submit' className='border px-3 py-1 bg-green-500 text-white rounded-md'>Submit</button>
          </div>


        </form>
      </div>



    </>
  )
}

export default Login