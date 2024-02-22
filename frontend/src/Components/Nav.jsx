function Navbar() {
    return (
        <>
            <navbar className="border flex justify-between items-center p-2 border-blue-800">
                <h1 className="text-2xl text-blue-600">Shrividya's HomeoCare</h1>
                <div className="flex gap-2">
                    <a>Home</a>
                    <a>History</a>
                    <a>New record</a>
                </div>
            </navbar>
        </>
    )
}
export default Navbar;