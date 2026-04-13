function Signup(){
  return(
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>

        <input type="text" placeholder="Enter Full Name" />

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <button>Register</button>
      </div>
    </div>
  )
}

export default Signup