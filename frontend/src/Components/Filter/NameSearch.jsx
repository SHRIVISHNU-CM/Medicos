import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom"
function NameSearch() {
  const [Data, SetData] = useState("")
  const [records, SetRecords] = useState([])
  const API = "http://localhost:3001/Medico/"
  useEffect(() => {
    axios.get(API)
      .then((res) => {
        SetData(res.data)
        SetRecords(res.data)
      })
  }, [])

  return (
    <>
      <div className='text-center'>
        <input
          className='outline-blue-500 border w-[300px] my-6 rounded-md px-4 py-2 mx-1'
          placeholder='Search Name Here..'
          type='text'
          onChange={
            (e) => {
              SetRecords(Data.filter(f => f.name.toLowerCase().includes(e.target.value)))
            }
          }
        />
        <span>OR</span> <Link to='/patientid' className='border bg-green-600 text-white rounded-md px-4 py-2'>GO to ID's</Link>
      </div>
      <div className='flex flex-col items-center'>
        {
          records.map((el, i) => {
            return (
              <div className="border w-[400px] h-[100px] my-1" key={i}>
                <p className="text-center">{el.name}  </p>
                <div className="flex justify-around">
                  <div className="flex items-center">
                    <FaLocationDot />
                    <span>{el.location}</span>
                  </div>
                  <div className="flex items-center">
                    <IoIosCall />
                    <span>{el.phoneno}</span>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    to={`/edit/${el._id}`}
                    className="border px-3 py-2 rounded-lg bg-green-600 text-white">View</Link><FaArrowRight />

                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default NameSearch