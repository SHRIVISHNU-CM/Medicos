import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [values, SetValues] = useState({
    _id: id,
    name: "",
    phoneno: "",
    history: "",
    patient_id: "",
    age: "",
    gender: "",
    address: ""
  })
  const FetchById = `http://localhost:3001/Medico/byid/${id}`;
  const UPDATEAPI = `http://localhost:3001/Medico/editarticle/${id}`
  const DROPAPI = `http://localhost:3001/Medico/deletearticle/${id}`
  useEffect(() => {
    axios.get(FetchById)
      .then((res) => {
        SetValues({
          ...values,
          name: res.data.name,
          phoneno: res.data.phoneno,
          history: res.data.history,
          patient_id: res.data.patient_id,
          location: res.data.location,
          medicine_given: res.data.medicine_given,
          age: res.data.age,
          gender: res.data.gender,
          address: res.data.address
        })
        console.log(res)
      })
  }, [])

  const HandleUpdate = (e) => {
    e.preventDefault();
    axios.put(UPDATEAPI, values)
      .then((res) => {
        navigate('/search')
        console.log(res.data)
      })
  }
  const HandleDrop = () => {
    axios.delete(DROPAPI)
      .then((res) => {
        navigate('/')
        console.log("deleted")
      })
  }
  return (
    <>
      <button className='bg-red-500 border px-4 py-2 rounded-md text-white flex items-center gap-1'
        onClick={HandleDrop}>
        Drop
        <MdDeleteForever />
      </button>
      <main className='flex justify-center my-20'>
        <form onSubmit={HandleUpdate} className='border p-1 w-[400px] shadow-lg'>
          <div className='my-1'>
            <label className="font-semibold text-xl" >Name:</label>
          </div>
          <input type='text' name='name'
            value={values.name}
            onChange={e => SetValues({ ...values, name: e.target.value })}
            className='border border-b-red-600 outline-none w-full  px-1 py-3'
          />
          <div className='my-1'>
            <label className="font-semibold text-xl">Mobile Number:</label>
          </div>
          <input type='Number' name='phoneno'
            value={values.phoneno}
            onChange={e => SetValues({ ...values, phoneno: e.target.value })}
            className='border border-b-red-600 w-full outline-none  px-1 py-3'
          />
          <div className='my-1'>
            <label className="font-semibold text-xl">Patient ID:</label>
          </div>
          <input
            className='px-1 py-3 border border-b-red-600 outline-none w-full'
            type='text'
            name="patient_id"
            value={values.patient_id}
            onChange={e => SetValues({ ...values, patient_id: e.target.value })}
          />
          <div className='my-1'>
            <label className="font-semibold text-xl">Location:</label>
          </div>
          <input
            className='border border-b-red-600 outline-none w-full px-1 py-3'
            type='text'
            name='location'
            value={values.location}
            onChange={e => SetValues({ ...values, location: e.target.value })}
          />
          <div className='my-1'>
            <label className="font-semibold text-xl">Age:</label>
          </div>
          <input
            className='border border-b-red-600 outline-none w-full px-1 py-3'
            type="date"
            name="age"
            value={values.age}
            onChange={e => SetValues({ ...values, age: e.target.value })}
          />
          <div className='my-1'>
            <label className="font-semibold text-xl">Gender:</label>
          </div>
          <input
            className='border border-b-red-600 outline-none w-full px-1 py-3'
            type="text"
            name="age"
            value={values.gender}
            onChange={e => SetValues({ ...values, gender: e.target.value })}
          />
          <div className='my-1'>
            <label className="font-semibold text-xl">Address:</label>
          </div>
          <input
            className='border border-b-red-600 outline-none w-full px-1 py-3'
            type="text"
            name="age"
            value={values.address}
            onChange={e => SetValues({ ...values, address: e.target.value })}
          />
          <h1 className="font-semibold text-xl">Medicine Given:</h1>
          <div className='my-1'>
            <textarea
              rows={3}
              className='w-full py-3 px-1 border border-b-red-600 '
              value={values.medicine_given}
              onChange={e => SetValues({ ...values, medicine_given: e.target.value })}
            />
          </div>
          <h1 className="font-semibold text-xl">History:</h1>
          <div>
            <textarea
              className='w-full outline-none border border-b-red-600 px-1 py-3'
              rows={6}
              value={values.history}
              onChange={e => SetValues({ ...values, history: e.target.value })}
            />
          </div>
          <div className='flex justify-center'>
            <button type='submit'
              className='border px-4 py-2 bg-yellow-600 text-white rounded-md  flex items-center gap-1'
            >
              Update
              <FiEdit />
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Edit