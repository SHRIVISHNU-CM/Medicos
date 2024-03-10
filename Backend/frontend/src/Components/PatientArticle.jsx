import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { MdCreateNewFolder } from "react-icons/md";
import { toast } from "react-toastify"
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
   const URI = `${window.location.origin}/newarticle`;

   const handleCreate = () => {
      try {
         axios.post(URI, { name, patient_id, history, medicine_given, phoneno, location, age, gender, address })
      } catch (e) {
         console.log(e.message)
      }

   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      if (!name||!patient_id||!phoneno) {
         toast.warn("Enter name ,ID and Mobile number")
      } else {
         handleCreate()
         toast.success(`Created id ${patient_id}`)
         Navigate('/patientid')
      }



   }

   return (
      <>
         <div className="border w-[450px] h-min  block mx-auto my-1 shadow-2xl">
            <form className="px-2 py-1" onSubmit={handleSubmit}>
               <div><label htmlFor="Name" className=" font-semibold text-slate-600 text-lg">Name</label></div>
               <input
                  className="p-2 border outline-blue-500 rounded-md w-62 w-full"
                  value={name}
                  onChange={(e) => {
                     
                     SetName(e.target.value)
                  }}
                  type="text" />
               <div><label className="w-full font-semibold text-lg">Patient_id:</label></div>
               <input
                  value={patient_id}
                  onChange={(e) => {
                    
                     SetPatient_id(e.target.value)
                  }}
                  className="p-2  border outline-blue-500 rounded-md w-62"
                  type="string" />



               <div><label htmlFor="Phone Number" className=" font-semibold text-lg ">
                  Phone Number:
               </label>
               </div>
               <input
                  value={phoneno}
                  onChange={(e) => {
             
                     SetPhone(e.target.value)
                  }}
                  className="p-2 w-full border outline-blue-500 rounded-md w-62 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="Number" />
               <div><label className=" font-semibold text-lg">Location</label></div>
               <input
                  value={location}
                  onChange={(e) => {

                     SetLocation(e.target.value)
                  }}
                  className="p-2 w-full border outline-blue-500 rounded-md w-62"
                  type="text" />
               <div><label className="font-semibold text-lg">DOB:</label></div>
               <input
                  className="p-2 w-full border outline-blue-500 rounded-md w-62"
                  type="date"
                  value={age}
                  onChange={(e) => {
                     setAge(e.target.value)

                  }}
               />
               <div><label className=" font-semibold text-lg">Gender:</label></div>
               <input
                  className="p-2 w-full border outline-blue-500 rounded-md w-62"
                  type="text"
                  value={gender}
                  onChange={(e) => {
                     setGender(e.target.value)
 
                  }} />
               <div><label className="font-semibold text-lg">Residential Address</label></div>
               <textarea
                  className="border w-full rounded-md p-1 outline-blue-500"
                  value={address}
                  onChange={(e) => {
                     setAddress(e.target.value)
         
                  }}
               />
               <div><label className=" font-semibold text-lg">Patient's case</label></div>
               <textarea className="border w-full rounded-md p-1 outline-blue-500"
                  value={history}
                  onChange={(e) => {
         
                     SetCase(e.target.value)
                  }}
                  readOnly={false} />
               <div><label className="font-semibold text-lg">Medicine Given</label></div>
               <textarea className="border w-full rounded-md p-1 outline-blue-500"
                  value={medicine_given}
                  onChange={(e) => {
      
                     SetMedicine(e.target.value)
                  }}
                  readOnly={false} />

               <button type="submit" className="text-white bg-red-500 px-4 py-2 rounded-md m-2  flex items-center gap-1">
                  Create
                  <MdCreateNewFolder />
               </button>
            </form>
         </div>

      </>
   )
}
export default PatientArticle;