import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { MdCreateNewFolder } from "react-icons/md";
function PatientArticle() {
   const Navigate = useNavigate()
   const [name, SetName] = useState("")
   const [patient_id, SetPatient_id] = useState("")
   const [history, SetCase] = useState("")
   const [phoneno, SetPhone] = useState("")
   const [location, SetLocation] = useState("")
   const [medicine_given, SetMedicine] = useState("");
   const [age, setAge] = useState("")
   const [gender, setGender] = useState("")
   const [address, setAddress] = useState("")
   const URI = "http://localhost:3001/Medico/newarticle";
   const handleCreate = async () => {
      try {
         const result = await axios.post(URI, { name, patient_id, history, medicine_given, phoneno, location,age,gender,address })
         console.log(result)

      } catch (e) {
         console.log(e.message)
      }

   }
   const handleSubmit = async (e) => {
      e.preventDefault()
      handleCreate()
      Navigate('/search')
   }

   return (
      <>
         <div className="border w-[450px] h-min bg-slate-600 block mx-auto my-1">
            <form className="flex items-center flex-col" onSubmit={handleSubmit}>
               <div><label htmlFor="Name" className="text-white font-semibold text-lg">Name</label></div>
               <input
                  className="p-2 outline-none border border-blue-500 rounded-md w-62"
                  value={name}
                  onChange={(e) => {
                     console.log(e.target.value)
                     SetName(e.target.value)
                  }}
                  type="text" />
               <div><label className="text-white font-semibold text-lg">Patient_id:</label></div>
               <input
                  value={patient_id}
                  onChange={(e) => {
                     console.log(e.target.value)
                     SetPatient_id(e.target.value)
                  }}
                  className="p-2 outline-none border border-blue-500 rounded-md w-62"
                  type="string" />



               <div><label htmlFor="Phone Number" className="text-white font-semibold text-lg">Phone Number:</label></div>
               <input
                  value={phoneno}
                  onChange={(e) => {
                     console.log(e.target.value)
                     SetPhone(e.target.value)
                  }}
                  className="p-2 outline-none border border-blue-500 rounded-md w-62"
                  type="Number" />
               <div><label className="text-white font-semibold text-lg">Location</label></div>
               <input
                  value={location}
                  onChange={(e) => {
                     console.log(e.target.value)
                     SetLocation(e.target.value)
                  }}
                  className="p-2 outline-none border border-blue-500 rounded-md w-62"
                  type="text" />
               <div><label className="text-white font-semibold text-lg">DOB:</label></div>
               <input
                  type="date"
                  value={age}
                  onChange={(e) => {
                     setAge(e.target.value)
                     console.log(e.target.value)
                  }}
               />
               <div><label className="text-white font-semibold text-lg">Gender:</label></div>
               <input
                  type="text"
                  value={gender}
                  onChange={(e) => {
                     setGender(e.target.value)
                     console.log(e.target.value)
                  }} />
               <div><label className="text-white font-semibold text-lg">Residential Address</label></div>
               <textarea
               className="border w-[350px] rounded-md p-1 outline-none"
                  value={address}
                  onChange={(e) => {
                     setAddress(e.target.value)
                     console.log(e.target.value)
                  }}
               />
               <div><label className="text-white font-semibold text-lg">Patient's case</label></div>
               <textarea className="border w-[350px] rounded-md p-1 outline-none"
                  value={history}
                  onChange={(e) => {
                     console.log(e.target.value)
                     SetCase(e.target.value)
                  }}
                  readOnly={false} />
               <div><label className="text-white font-semibold text-lg">Medicine Given</label></div>
               <textarea className="border w-[350px] rounded-md p-1 outline-none"
                  value={medicine_given}
                  onChange={(e) => {
                     console.log(e.target.value)
                     SetMedicine(e.target.value)
                  }}
                  readOnly={false} />

               <button type="submit" className=" bg-red-500 px-4 py-2 rounded-md m-2 text-white flex items-center gap-1">
                  Create
                  <MdCreateNewFolder />
               </button>
            </form>
         </div>

      </>
   )
}
export default PatientArticle;