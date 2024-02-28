import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function Edit() {
  const {id} = useParams();
  const navigate = useNavigate()
  const [values,SetValues] = useState({
    _id:id,
    name:"",
    phoneno:"",
    history:""
  })
  const FetchById = `http://localhost:3001/Medico/byid/${id}`;
  const UPDATEAPI = `http://localhost:3001/Medico/editarticle/${id}`
  const DROPAPI = `http://localhost:3001/Medico/deletearticle/${id}`
  useEffect(()=>{
    axios.get(FetchById)
    .then((res)=>{
      SetValues({
        ...values,
        name:res.data.name,
        phoneno:res.data.phoneno,
        history:res.data.history
      })
      console.log(res)
    })
  },[])

  const HandleUpdate = (e)=>{
    e.preventDefault();
    axios.put(UPDATEAPI,values)
    .then((res)=>{
      navigate('/search')
      console.log(res.data)
    })
  }
  const HandleDrop = ()=>{
    axios.delete(DROPAPI)
    .then((res)=>{
      console.log("deleted")
    })
  }
  return (
    <>
      <form onSubmit={HandleUpdate}>
        <div>
          <label>Name</label>
        </div>
        <input type='text' name='name'
         
        value={values.name}
        onChange={e=>SetValues({...values,name:e.target.value})}

        />
        <div>
          <label>Mobile Number</label>
        </div>
        <input type='Number' name='phoneno'
        value={values.phoneno}
        onChange={e => SetValues({...values,phoneno:e.target.value})} />
        <textarea 
          value={values.history}
          onChange={e=>SetValues({...values,history:e.target.value})}
        />
        <button type='submit'>Update</button>
      </form>
      <button className='bg-red-500' onClick={HandleDrop}>Drop</button>

    </>
  )
}

export default Edit