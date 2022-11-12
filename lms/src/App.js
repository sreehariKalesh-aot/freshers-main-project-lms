import "./App.css";
import React from "react";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Students from "./Components/Pages/Students";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const email = "sreehari@gmail.com";
  const password = "123";

  const [authCheck, setauthCheck] = useState(false);
  return (
    <>
      
        {!authCheck && (
          <Login
            email={email}
            password={password}
            authCheck={authCheck}
            setauthCheck={setauthCheck}
          />
        )}
        <Router>
        <div className="d-flex">
        {authCheck && <Navbar />}
      <Routes>
      <Route path="/students" element={authCheck && <Students />}/>
      </Routes>
          
          
        
        </div>

        {/* <Tablet/> */}
        {/* <Nav/> */}
      </Router>
    </>
  );
}

export default App;
