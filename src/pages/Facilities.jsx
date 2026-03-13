import { useState } from "react"
import facilities from "../data/facilities"

function Facilities(){

const [search,setSearch] = useState("")

const filteredFacilities = facilities.filter((fac)=>
fac.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="container">

<h1 className="title">Hospital Facilities</h1>

<input
type="text"
placeholder="Search Facility..."
className="search-box"
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="facility-grid">

{filteredFacilities.map((fac,index)=>(

<div key={index} className="facility-card">

<h3>{fac.name}</h3>

<p>Location: {fac.location}</p>

</div>

))}

</div>

</div>

)

}

export default Facilities