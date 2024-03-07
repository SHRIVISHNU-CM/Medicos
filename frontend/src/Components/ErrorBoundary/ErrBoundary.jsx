import { Link } from "react-router-dom"
function BoundaryError (){
    return(
        <>
            <div>
                <h1 className="text-xl font-bold my-3">Access Expired ..</h1>
                <Link to='/' className="border px-4 py2 bg-yellow-600 text-white rounded-md">Go Back</Link>
            </div>
        </>
    )
} 
export default BoundaryError