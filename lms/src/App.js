import "./App.css";
import React from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { useState, createContext } from "react";
// import Students from "./Components/Admin/Pages/Students";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./Components/Admin/Pages/Students";
import IssuedBooks from "./Components/Admin/Pages/IssuedBooks";
import AllBooks from "./Components/Admin/Pages/AllBooks";
import StudentDetails from "./Components/Admin/Pages/StudentDetails";
// import AllBooks from "./Components/Admin/Pages/AllBooks";
// import IssuedBooks from "./Components/Admin/Pages/IssuedBooks";

// context for updating the array of add student
const studentContext = createContext();
function App() {
  const [studentArr, setstudentArr] = useState([]);
  const [authCheck, setauthCheck] = useState(false);

  const email = "sreehari@gmail.com";
  const password = "123";

  return (
    <>
      <studentContext.Provider value={[studentArr, setstudentArr]}>
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
              <Route path="/students" element={authCheck && <Students />} />
              <Route
                path="/studentDetails"
                element={authCheck && <StudentDetails />}
              />
              <Route path="/allbooks" element={authCheck && <AllBooks />} />
              <Route
                path="/issuedbooks"
                element={authCheck && <IssuedBooks />}
              />
            </Routes>
          </div>

          {/* <Tablet/> */}
          {/* <Nav/> */}
        </Router>
      </studentContext.Provider>
    </>
  );
}

export default App;
export {studentContext}