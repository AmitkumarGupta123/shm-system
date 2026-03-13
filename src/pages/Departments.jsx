import { useState } from "react"
import departments from "../data/departments"

function Departments(){

const [search,setSearch] = useState("")

const filteredDepartments = departments.filter((dep)=>
dep.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="container">

<h1 className="title">Hospital Departments</h1>

<input
type="text"
placeholder="Search Department..."
className="search-box"
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="department-grid">

{filteredDepartments.map((dep,index)=>(

<div key={index} className="department-card">

<h3>{dep.name}</h3>

<p>Location: {dep.location}</p>

</div>

))}

</div>

</div>

)

}

export default Departments