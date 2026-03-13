import { useState } from "react"

function Rating(){

const [rating,setRating]=useState(0)

return(

<div>

<h3>Rate Doctor</h3>

<div className="stars">

{[1,2,3,4,5].map((star)=>(

<span
key={star}
onClick={()=>setRating(star)}
className={star<=rating?"active":""}
>
⭐
</span>

))}

</div>

<p>Your Rating: {rating}</p>

</div>

)

}

export default Rating