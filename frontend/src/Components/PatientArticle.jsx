import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
function PatientArticle() {
    return (
        <>
            <div className="border w-[400px] h-[100px] my-1">
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
        </>
    )
}
export default PatientArticle;