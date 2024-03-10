import { NavLink, Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
function Navbar() {
    const HandleLogout = () => {
        axios.get(`${window.location.origin}/logout`)
            .then(() => {
                toast.success('Shrividya logged Out')
            })
    }
    return (
        <>
            <navbar className="w-full flex justify-between py-2">
                <Link className="font-bold text-green-800 text-lg"
                    to="/home">Shrividya's HomeoCare</Link>
                <div>
                    <Link to='/' className="border px-2 py-1 bg-red-600 text-white text-md rounded-md">Login</Link>
                    <Link to='/logout' className="border px-2 py-1 bg-yellow-600 text-white text-md rounded-md" onClick={HandleLogout}>Logout</Link>
                </div>

            </navbar >

            <div className="flex gap-2 justify-around shadow-lg w-full">
                <NavLink to="/home"
                    className={({ isActive }) => `${isActive ? "text-orange-500 font-semibold" : "text-gray-500"}`
                    }>
                    Home
                </NavLink>
                <NavLink to="/search"
                    className={({ isActive }) => `${isActive ? "text-orange-500 font-semibold" : "text-gray-500"}`}
                >Search</NavLink>
                <NavLink to="/filter"
                    className={({ isActive }) => `${isActive ? "text-orange-500 font-semibold" : "text-gray-500"}`}
                >Filter</NavLink>
                <NavLink to="/article" className={({ isActive }) => `${isActive ? "text-orange-500 font-semibold" : "text-gray-500"}`}>
                    New</NavLink>

            </div>


        </>
    )
}
export default Navbar;