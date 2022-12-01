import React from "react";
// import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
// import {Link} from "react-router-dom"
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { createContext, useContext } from "react";
import { studentContext } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import secureLocalStorage from "react-secure-storage";

function Login({ email, password, authCheck, setauthCheck,studentBoolean,setstudentBoolean,studentLoginId,setstudentLoginId}) {
  const [studentArr, setstudentArr] = useContext(studentContext);

  const navigate = useNavigate();

  const [iemail, setiemail] = useState("");
  const [ipassword, setipassword] = useState("");

  // use state for checking login error
  const [loginError, setloginError] = useState(false);

  // state and useeffect for retrieving encrypted password from local storage

  // const [email, setemail] = useState()
  // const [password, setpassword] = useState()
  // useEffect(() => {
  //  setemail(secureLocalStorage.getItem("email"))
  //  setpassword(secureLocalStorage.getItem("password"))
  // }, [])

  const handleEmail = (e) => {
    setiemail(e.target.value);
  };

  const handlePassword = (e) => {
    setipassword(e.target.value);
  };

  const handleAuth = (e) => {
    if (!iemail || !ipassword) {
      e.preventDefault();
      setloginError(true);
    }
    // e.preventDefault()
    else if (iemail === email && ipassword === password) {
      // const hashPassword = bcrypt.hash(password);

      secureLocalStorage.setItem("email", email);
      secureLocalStorage.setItem("password", password);

      e.preventDefault();
      setauthCheck(true);
      setloginError(false);
      setstudentBoolean(false);
      localStorage.setItem("studentLogin", studentBoolean);
      navigate("/issuedbooks");
      
    } else {
      e.preventDefault();
      setloginError(true);
      toast.error("Incorrect Email or Password", { position: "top-right" });
    }
  };

  // student login
  // const [studentLogin, setstudentLogin] = useState(false);

  const [studentEmail, setstudentEmail] = useState("");
  const [studentPassword, setstudentPassword] = useState("");
  // const [savedEmail, setsavedEmail] = useState("")
  // const [savedPassword, setsavedPassword] = useState("")

  const handleStudentEmail = (e) => {
    setstudentEmail(e.target.value);
  };
  const handleStudentPassword = (e) => {
    setstudentPassword(e.target.value);
  };

  const handleStudentAuth = () => {

    let x = studentArr.find((student) => {
      if (
        studentEmail === student.email &&
        studentPassword === student.password
      ) {
        console.log(student.email)
        console.log(student.key)
        let tempkey = student.key
        setstudentLoginId(tempkey)
        console.log(studentLoginId)
        navigate("/Mybooks");
        setstudentBoolean(true)

      } 
    });
    if(!x){
      alert("invalid credentials")
    }
  };

  // state for highlighting nav
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
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link active ps-0"
              href="#"
              onClick={() => {
                setstudentBoolean(false);
              }}
              style={{
                borderBottom: !studentBoolean ? "3px solid #ED7966" : "none",
              }}
            >
              Admin
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                setstudentBoolean(true);
              }}
              // style={{ borderBottom: "1px", borderColor: "orange" }}
              style={{
                borderBottom: !studentBoolean ? "none": "3px solid #ED7966" ,
              }}
            >
              Student
            </a>
          </li>
        </ul>
        <hr className="mt-0" />

        <LoginForm
          iemail={iemail}
          handleEmail={handleEmail}
          loginError={loginError}
          ipassword={ipassword}
          handlePassword={handlePassword}
          handleAuth={handleAuth}
          studentBoolean={studentBoolean}
          studentArr={studentArr}
          studentEmail={studentEmail}
          studentPassword={studentPassword}
          handleStudentEmail={handleStudentEmail}
          handleStudentPassword={handleStudentPassword}
          handleStudentAuth={handleStudentAuth}
        />
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
