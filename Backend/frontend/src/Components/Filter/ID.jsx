import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
function IDfun() {
    const [Data, SetData] = useState([])
    const API = `${window.location.origin}/`
    useEffect(() => {
        axios.get(API)
            .then((res) => {
                console.log(res.data)
                SetData(res.data.reverse())
            })
    }, [])

    return (
        <>
        <h1 className='text-xl text-slate-600'>Latest Id's:</h1>

            {
                Data.map((el, i) => {
                    return (
                        <div className='flex items-center flex-col' key={i}>
                            <Link  to={`/edit/${el._id}`}
                            className='border rounded-md bg-orange-700 py-2  w-[100px] text-center text-white'
                            >{el.patient_id}</Link>
                        </div>

                    )
                })
            }
        </>
    )
}

export default IDfun