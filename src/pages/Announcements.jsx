function Announcements(){

const announcements = [

{
title:"Emergency Ward",
date:"Available 24x7",
message:"Emergency ward is open 24 hours for critical patients."
},

{
title:"Free Health Camp",
date:"Sunday",
message:"Free general health checkup camp for all patients."
},

{
title:"Covid Vaccination",
date:"Daily 9 AM - 5 PM",
message:"Covid vaccination available at Ground Floor Block H."
},

{
title:"Blood Donation Camp",
date:"15 April",
message:"Blood donation camp organized by hospital administration."
},

{
title:"New MRI Machine",
date:"Recently Installed",
message:"Advanced MRI scanning facility now available in Radiology Department."
},

{
title:"Cardiology OPD",
date:"Monday - Saturday",
message:"Heart specialist doctors available from 10 AM to 4 PM."
}

]

return(

<div className="container">

<h1 className="title">Hospital Announcements</h1>

<div className="announcement-grid">

{announcements.map((item,index)=>(

<div key={index} className="announcement-card">

<h3>{item.title}</h3>

<p className="date">{item.date}</p>

<p>{item.message}</p>

</div>

))}

</div>

</div>

)

}

export default Announcements