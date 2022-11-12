import "./App.css";
import React from "react";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Students from "./Components/Pages/Students";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllBooks from "./Components/Pages/AllBooks";
import IssuedBooks from "./Components/Pages/IssuedBooks";

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
        <Route path="/allbooks" element={authCheck &&<AllBooks/>}/>
        <Route path="/issuedbooks"element={authCheck &&<IssuedBooks/>}/>
      </Routes>
          
          
        
        </div>

        {/* <Tablet/> */}
        {/* <Nav/> */}
      </Router>
    </>
  );
}

export default App;
