import React, { useEffect, useState } from 'react'
import axios from "axios";
function NameSearch() {
  const [Data, SetData] = useState("")
  const[records ,SetRecords] = useState([])
  const API = "http://localhost:3001/Medico/"
  useEffect(() => {
    axios.get(API)
      .then((res) => {
        SetData(res.data)
        SetRecords(res.data)
        console.log(res)
      })
  }, [])


  return (
    <>
      <div>
        <input
          type='text'
          onChange={
                (e)=>{
                  SetRecords(Data.filter(f=>f.name.toLowerCase().includes(e.target.value)))
                }
          }

        />
      </div>
      <div>
        {
          records.map((el,i)=>{
            return(<li key={i}>{el.name}</li>)
          })
        }
      </div>
    </>
  )
}

export default NameSearch