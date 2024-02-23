
function PatientArticle() {
    return (
        <>
            <div className="border w-[450px] h-[500px] bg-slate-600 block mx-auto my-1">
                <form className="flex items-center flex-col">
                    <div><label>Name</label></div>
                    <input className="p-2 outline-none border border-blue-500 rounded-md w-62" type="text" />
                    <div><label>Patient_id:</label></div>
                    <input className="p-2 outline-none border border-blue-500 rounded-md w-62" type="Number" />
                    <div><label>Patient's case</label></div>
                    <input className="p-2 outline-none border border-blue-500 rounded-md w-62" type="text" />
                    <div><label>Phone Number:</label></div>
                    <input className="p-2 outline-none border border-blue-500 rounded-md w-62" type="Number" />
                    <div><label>Location</label></div>
                    <input className="p-2 outline-none border border-blue-500 rounded-md w-62" type="text" />
                    <div><label>Medicine Given</label></div>
                    <input className="p-2 outline-none border border-blue-500 rounded-md w-62" type="text" />
                    <button type="submit" className=" bg-red-500 px-4 py-2 rounded-md m-2">Create</button>
                </form>
            </div>
        </>
    )
}
export default PatientArticle;