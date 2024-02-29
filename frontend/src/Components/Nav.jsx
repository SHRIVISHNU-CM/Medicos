import { NavLink, Link } from "react-router-dom"
function Navbar() {
    return (
        <>
            <navbar className="w-full flex justify-center">
                <Link className="font-bold text-green-800 text-lg"
                 to="/">Shrividya's HomeoCare</Link>
            </navbar >

            <div className="flex gap-2 justify-around shadow-lg w-full">
                <NavLink to="/"
                    className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-500"}`
                    }>
                    Home
                </NavLink>

                <NavLink to="/search"
                    className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-500"}`}
                >Search</NavLink>
                <NavLink to="/filter"
                    className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-500"}`}
                >Filter</NavLink>
                <NavLink to="/article" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-500"}`}>
                    New</NavLink>

            </div>


        </>
    )
}
export default Navbar;