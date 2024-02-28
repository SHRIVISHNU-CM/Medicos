import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Search() {
    const [Data, SetData] = useState("")
    const [SearchData, SetSearchData] = useState(null)
    const [idData, setidData] = useState("")
    const URI = `http://localhost:3001/Medico/${Data}`;


    const handleSearch = () => {
        try {

            axios.get(URI).then((res) => {
                setidData(res.data._id)
                SetSearchData(res.data)
                setFormData(res.data)
                console.log(res.data._id)
            })
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };

    useEffect(() => {
        // Only fetch data if Data is not empty
        if (Data) {
            handleSearch();
        }
    }, []);


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
            {
                SearchData !== null && (
                    <>
                        <div className="w-full h-min p-1 flex justify-center">
                            <header className="px-2 py-1 w-[400px] h-min">
                                <div className="border border-b-blue-600 p-1 my-1">
                                    <h1>Patient Name:</h1>
                                    <p>{SearchData.name}</p>
                                </div>

                                <div className="border border-b-blue-600 p-1 my-1">
                                    <h1>Mobile Number:</h1>
                                    <p>{SearchData.phoneno}</p>

                                </div>
                                <div className="border border-b-blue-600 p-1 my-1">
                                    <h1>Location:</h1>
                                    <p>{SearchData.location}</p>

                                </div>
                                <div className="border border-b-blue-600 p-1 w-[384px]  h-min my-1">
                                    <h1>Medicine:</h1>
                                    <p>{SearchData.medicine_given}</p>

                                </div>
                                <div className="border border-b-blue-600 p-1 w-[384px]  h-min my-1">
                                    <h1>History:</h1>
                                    <p>{SearchData.history}</p>

                                </div>
                            </header>


                        </div>
                        <Link to={`/edit/${idData}`} className="border px-4 py-2 bg-green-700 text-white m-1 w-[200px] block mx-auto text-center rounded-md">
                            Edit
                        </Link>

                    </>)
            }
        </>
    )
}

export default Search