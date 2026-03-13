function DoctorCard({doctor}){

return(

<div className="card">

<h3>{doctor.name}</h3>

<p><b>Qualification:</b> {doctor.qualification}</p>

<p><b>Department:</b> {doctor.department}</p>

<p><b>Timing:</b> {doctor.time}</p>

</div>

)

}

export default DoctorCard