import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    const [Data, SetData] = useState()
    const [SearchData, SetSearchData] = useState({})
    // const URI = `http://localhost:3001/Medico/${Data}`
    const handleSearch = async () => {
        try {
            const URI = `http://localhost:3001/Medico/${Data}`;
            const SearchResult = await axios.get(URI);
            SetSearchData(SearchResult.data);
            console.log(SearchResult.data.name);
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };

    useEffect(() => {
        // Only fetch data if Data is not empty
        if (Data) {
            handleSearch();
        }
    }, [Data]);

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
            {/* <h1>{SearchData.name}</h1>
            <p>{SearchData.medicine_given}</p>
            <h1>{SearchData.history}</h1>
            <p>{SearchData.patient_id}</p> */}
            <h1>{SearchData.name}</h1>
            <h2>{SearchData.patient_id}</h2>
            <h1>{SearchData.history}</h1>
            <p>{SearchData.medicine_given}</p>

        </>
    )
}

export default Search