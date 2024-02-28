import { NavLink, Link } from "react-router-dom"
function Navbar() {
    return (
        <>
            <navbar className="border flex justify-between items-center p-2 border-blue-800 shadow-2xl">
            <Link className="text-2xl text-blue-600">Shrividya's HomeoCare</Link>
                
                <div className="flex gap-2">
                    <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-500"}`

                    }>
                        Home
                    </NavLink>

                    <NavLink to="/search"
                        className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-500"}`}
                    >Search</NavLink>
                    <NavLink to="/article" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-500"}`}>
                        New Record</NavLink>

                </div>
            </navbar >
        </>
    )
}
export default Navbar;