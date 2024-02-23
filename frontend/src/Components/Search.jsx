import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    const [Data, SetData] = useState()
    const [SearchData, SetSearchData] = useState([])
    const URI = `http://localhost:3001/Medico/${Data}`
    const handleSearch = async () => {
        const SearchResult = await axios.get(URI)
        SetSearchData(SearchResult.data)

        console.log(SearchResult.data)

    }
    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <>
            <div className='flex justify-center gap-3 my-2'>
                <input
                    value={Data}
                    onChange={(e) => {
                        console.log(e.target.value)
                        SetData(e.target.value)
                    }}
                    className='outline-none border-blue-600 p-2 w-[300px] border rounded-md'

                    type="text" placeholder="Enter Patient's ID Here.." />
                <button className='bg-yellow-500 px-4 py-2 rounded-md text-white hover:bg-yellow-700  ease-in-out duration-500'
                    onClick={handleSearch}

                >Search</button>
            </div>
            {/* {SearchData.map((el,i)=>{
            return(<div key={i}>
                <p>
                    {el.name}
                </p>
                <h1>{el.history}</h1>
                <p>{el.medicine_given}</p>
            </div>)
           })} */}
            <h1>{SearchData.name}</h1>
            <p>{SearchData.medicine_given}</p>
            <h1>{SearchData.history}</h1>
            <p>{SearchData.patient_id}</p>

        </>
    )
}

export default Search