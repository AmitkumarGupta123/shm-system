import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Home(){

const navigate = useNavigate()

// 🔹 Login state
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleLogin = (e) => {
  e.preventDefault()
  alert(`Email: ${email} | Password: ${password}`)
}

return(

<div className="home-container">

<div className="overlay">

<h1 className="main-title">Smart Hospital Management System</h1>

<p className="subtitle">
Welcome to the Smart Hospital Information Kiosk. <br/>
Find doctors, departments, hospital facilities and important announcements easily.
<br/><br/>
<b>हिंदी:</b> स्मार्ट हॉस्पिटल सूचना कियोस्क में आपका स्वागत है। 
यहाँ आप डॉक्टरों की जानकारी, विभागों का स्थान, अस्पताल की सुविधाएँ 
और महत्वपूर्ण घोषणाएँ आसानी से देख सकते हैं।
</p>

{/* 🔹 LOGIN BOX START */}
<div className="login-box">
  <h3>Login</h3>

  <form onSubmit={handleLogin}>
    <input
      type="email"
      placeholder="Enter Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Enter Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    />

    <button type="submit">Login</button>
  </form>

  {/* 🔹 Create Account Option */}
  <p style={{marginTop:"10px"}}>
    Don't have an account?{" "}
    <span 
      style={{color:"blue", cursor:"pointer", fontWeight:"bold"}}
      onClick={()=>navigate("/signup")}
    >
      Create Account
    </span>
  </p>

</div>
{/* 🔹 LOGIN BOX END */}

<div className="home-grid">

<div className="home-card" onClick={()=>navigate("/departments")}>
<h3>Departments</h3>
<p>
Explore all hospital departments and their locations.<br/>
<b>सभी अस्पताल विभाग और उनका स्थान देखें।</b>
</p>
</div>

<div className="home-card" onClick={()=>navigate("/doctors")}>
<h3>Doctors</h3>
<p>
View specialist doctors with their timings and qualifications.<br/>
<b>विशेषज्ञ डॉक्टरों की जानकारी, समय और योग्यता देखें।</b>
</p>
</div>

<div className="home-card" onClick={()=>navigate("/facilities")}>
<h3>Facilities</h3>
<p>
Find hospital facilities like Canteen, Pharmacy, Parking etc.<br/>
<b>कैंटीन, मेडिकल स्टोर, पार्किंग जैसी सुविधाएँ खोजें।</b>
</p>
</div>

<div className="home-card" onClick={()=>navigate("/announcements")}>
<h3>Announcements</h3>
<p>
Check latest hospital updates and health camps.<br/>
<b>अस्पताल की नई घोषणाएँ और स्वास्थ्य शिविर देखें।</b>
</p>
</div>

<div className="home-card" onClick={()=>navigate("/emergency")}>
  <h3>Emergency Staff</h3>
  <p>View doctors & staff available for emergencies.<br/>
  <b>आपातकालीन स्टाफ की जानकारी देखें।</b></p>
</div>

</div>
</div>
</div>

)

}

export default Home