import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import{Link} from "react-router-dom"
function Home() {
    const [Data, SetData] = useState([]);
    const [currentPage, SetCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const URI = "https://medicos-4xbt8l9m6-shrivishnu-cms-projects.vercel.app/"
    const HandleAPI = () => {
        axios.get(URI) 
            .then((res) => {
                SetData(res.data)
                setTotalPages(Math.ceil((res.data.length)))

            })

    }
    useEffect(() => {
        HandleAPI()
    }, [])
    
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            SetCurrentPage(currentPage + 1)
        }

    }
    const handlePrevPage = () => {
        if (currentPage > 1) {
            SetCurrentPage(currentPage - 1)
        }

    }
    const itemsPerPage = 1
    const StartIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = StartIndex + itemsPerPage
    const itmesToDisplay = Data.slice(StartIndex, endIndex)
    return (
        <>
            <h1 className="text-center font-extrabold text-2xl">Existing Patient's History</h1>
            <div className="flex gap-2 justify-center m-3">
                <button onClick={handlePrevPage}
                 className="border px-3 py-2 bg-red-700 text-white rounded-md"
                 disabled={currentPage === 1}
                 >Prev</button>
                <button
                 onClick={handleNextPage} 
                 className="border px-3 py-2 bg-yellow-700 text-white rounded-md"
                 disabled={currentPage === totalPages}
                 >Next</button>

            </div>
            <div className="flex items-center flex-col w-full h-min">
                {
                    itmesToDisplay && itmesToDisplay.length > 0 ? itmesToDisplay.map((el, i) => {
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
                    }) : <></>
                }

            </div>




        </>
    )
}
export default Home 