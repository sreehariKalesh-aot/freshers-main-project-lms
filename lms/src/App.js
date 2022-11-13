import "./App.css";
import React from "react";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Students from "./Components/Pages/Students";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllBooks from "./Components/Pages/AllBooks";
import IssuedBooks from "./Components/Pages/IssuedBooks";

function App() {
  const email = "sreehari@gmail.com";
  const password = "123";

  const [authCheck, setauthCheck] = useState(false);
  return (
    <>
      <Router>
        {!authCheck && (
          <Login
            email={email}
            password={password}
            authCheck={authCheck}
            setauthCheck={setauthCheck}
          />
        )}
        
        <div className="d-flex">
        {authCheck && <Navbar />}
      <Routes>
        <Route path="/students" element={authCheck && <Students />}/>
        <Route path="/allbooks" element={<AllBooks/>}/>
        <Route path="/issuedbooks"element={<IssuedBooks/>}/>
      </Routes>
          
          
        
        </div>

        {/* <Tablet/> */}
        {/* <Nav/> */}
      </Router>
    </>
  );
}

export default App;
