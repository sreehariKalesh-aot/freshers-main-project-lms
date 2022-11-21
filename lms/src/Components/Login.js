import React from "react";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
// import {Link} from "react-router-dom"
import {Link, useNavigate} from "react-router-dom"
import LoginForm from "./LoginForm";
import {createContext, useContext } from "react";
import { studentContext } from "../App";

  
function Login({email,password,authCheck,setauthCheck}) {

  const [studentArr, setstudentArr] = useContext(studentContext);

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

  // student login 
  const [studentLogin, setstudentLogin] = useState(false)
  const [studentEmail, setstudentEmail] = useState("")
  const [studentPassword, setstudentPassword] = useState("")
  // const [savedEmail, setsavedEmail] = useState("")
  // const [savedPassword, setsavedPassword] = useState("")

  const handleStudentEmail=(e)=>{
    setstudentEmail(e.target.value)
  }
  const handleStudentPassword=(e)=>{
    setstudentPassword(e.target.value)
  }

  const handleStudentAuth=()=>{
    
    studentArr.map((student)=>{
      console.log(studentEmail)
      console.log(studentPassword)
      if(studentEmail === student.email && studentPassword === student.password){
        navigate("/studenLogin");
        console.log("student login")
      }

    })
    // 
    // if(studentEmail===email && studentPassword === password){

    // }

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
            <a className="nav-link active ps-0" href="#" onClick={()=>{setstudentLogin(false)}}>
              Admin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"  onClick={()=>{setstudentLogin(true)} }>
              Student
            </a>
          </li>
        </ul>
        <hr />
       
        <LoginForm iemail={iemail} handleEmail={handleEmail} loginError={loginError} ipassword={ipassword} handlePassword={handlePassword} handleAuth={handleAuth} studentLogin={studentLogin}
        studentArr={studentArr}
        studentEmail={studentEmail}
        studentPassword={studentPassword}
        handleStudentEmail={handleStudentEmail}
        handleStudentPassword={handleStudentPassword}
        handleStudentAuth={handleStudentAuth}
         />
      </div>
      
      
    </div>
  );
}

export default Login;
