import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import View from "./ViewButton/View";
import axios from "axios";
function Home() {
    const [Data, SetData] = useState([]);

    const URI = "http://localhost:3001/Medico/"
    const HandleAPI = async () => {
        const details = await axios.get(URI)
        // console.log(details.data[0].history)
        SetData(details.data)
    }
    useEffect(() => {
        HandleAPI()
    }, [])
    return (
        <>
            <h1 className="text-center font-extrabold text-2xl">Existing Patient's History</h1>
            <div className="flex items-center flex-col w-full h-min">
                {Data.map((el, i) => {
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
                                <button className="border px-3 py-2 rounded-lg bg-green-600 text-white">View </button><FaArrowRight />
                            </div>





                        </div>
                    )
                })}

                <div className="border w-[400px] h-[100px]">
                    <p className="text-center">Shrivishnu CM  </p>
                    <div className="flex justify-around">
                        <div className="flex items-center">
                            <FaLocationDot />
                            <span>Mysore</span>
                        </div>
                        <div className="flex items-center">
                            <IoIosCall />
                            <span>1234567890</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="border px-3 py-2 rounded-lg bg-green-600 text-white">View </button><FaArrowRight />
                    </div>





                </div>


            </div>

        </>
    )
}
export default Home 