import React from 'react'
import { Link } from "react-router-dom"

function Logout() {
    return (
        <>
            <main>
                <p className='text-xl font-semibold text-red-600 text-center my-4'>Successfully Logout</p>
                <div className='flex justify-center'>
                    <Link to='/' className='border px-2 py-1 bg-green-600 text-white rounded-md '>Login</Link>
                </div>
            </main>
        </>
    )
}

export default Logout