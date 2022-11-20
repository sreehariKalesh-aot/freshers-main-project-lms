import React from "react";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
// import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
  
function Login({email,password,authCheck,setauthCheck}) {
  const navigate = useNavigate();

  const [iemail, setiemail] = useState("")
  const [ipassword, setipassword] = useState("")
  
// use state for checking login error
  const [loginError, setloginError] = useState(false)

  const handleEmail =(e)=>{
    setiemail(e.target.value)
  }

  const handlePassword =(e)=>{
    setipassword(e.target.value)
  }

  const handleAuth=(e)=>{
    if(!iemail||!ipassword){
      e.preventDefault()
      setloginError(true)
    }
    // e.preventDefault()
    else if(iemail===email && ipassword === password){
      e.preventDefault()
      setauthCheck(true)
      setloginError(false)
      console.log(authCheck)
      navigate("/issuedbooks");
    }
    else{
      // alert("incorrect username or password")
      e.preventDefault()
      setloginError(true)

    } 
  }

  return (
    <div>
      <div className="d-flex align-items-center gap-3">
        <img src="./images/logo.png" className="mt-5 ms-5 logo" alt="" />
        <p className="mt-5 pt-3 lms">LMS</p>
      </div>
      <div className="login-div">
        <p className="login-p">Login</p>
        <p className="welcome-p">Welcome back! Please enter your details.</p>

        {/* tab for logging in as admin and student change when needed*/}
        <ul className="nav mb-3">
          <li className="nav-item">
            <a className="nav-link active ps-0" href="#">
              Admin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Student
            </a>
          </li>
        </ul>
        <hr />
        <Form className="login-form" onSubmit ={handleAuth}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  value={iemail} onChange={handleEmail} />
            {loginError&& iemail.length<=0? <p className="error">Please enter Email</p>:""}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={ipassword} onChange={handlePassword}/>
            {loginError&&ipassword.length<=0? <p className="error">please enter password</p>:""}
          </Form.Group>
          <button type="submit" className="login-btn py-2" onClick={()=>{handleAuth()}}>
            Login
          </button>
        </Form>
      </div>
      
      
    </div>
  );
}

export default Login;
