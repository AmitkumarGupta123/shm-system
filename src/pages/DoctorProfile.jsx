import { useParams } from "react-router-dom"
import doctors from "../data/doctors"
import Rating from "../components/Rating"

function DoctorProfile(){

const {id} = useParams()
const doctor = doctors[id]

return(

<div className="profile-container">

{/* <img src="/doctor.png" alt="doctor"/> */}

<h2>{doctor.name}</h2>

<p><b>Qualification:</b> {doctor.qualification}</p>

<p><b>Department:</b> {doctor.department}</p>

<p><b>Room:</b> {doctor.room}</p>

<p><b>Floor:</b> {doctor.floor}</p>

<p><b>Timing:</b> {doctor.time}</p>

<Rating/>

</div>

)

}

export default DoctorProfile