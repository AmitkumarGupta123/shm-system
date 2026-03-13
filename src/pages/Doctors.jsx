import { useState } from "react"
import { useNavigate } from "react-router-dom"
import doctors from "../data/doctors"

function Doctors(){

const [search,setSearch]=useState("")
const navigate = useNavigate()

const filteredDoctors = doctors.filter((doc)=>
doc.department.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="container">

<h1>Hospital Doctors</h1>

<input
className="search"
type="text"
placeholder="Search by Department..."
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="doctor-grid">

{filteredDoctors.map((doc,index)=>(

<div
key={index}
className="doctor-card"
onClick={()=>navigate(`/doctor/${index}`)}
>

{/* <img src="/doctor.png" alt="doctor"/> */}

<h3>{doc.name}</h3>

<p>{doc.department}</p>

<p>{doc.time}</p>

</div>

))}

</div>

</div>

)

}

export default Doctors