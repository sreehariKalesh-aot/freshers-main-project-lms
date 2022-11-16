import "./App.css";
import React from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { useState, createContext } from "react";
// import Students from "./Components/Admin/Pages/Students";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./Components/Admin/Pges/Students";
import IssuedBooks from "./Components/Admin/Pges/IssuedBooks";
import AllBooks from "./Components/Admin/Pges/AllBooks";
import StudentDetails from "./Components/Admin/Pges/StudentDetails";
// import AllBooks from "./Components/Admin/Pages/AllBooks";
// import IssuedBooks from "./Components/Admin/Pages/IssuedBooks";
// context for updating the array of add student
const studentContext = createContext();
const allbooksContext = createContext();
function App() {
  const [studentArr, setstudentArr] = useState([{key: "sfgasfg", name:"sreehar",email:"fewdas",password:"234"},{key: "sfgaXCsfg", name:"fsdf",email:"eqr",password:"34534"}]);
  const [allBooksArr, setallBooksArr] = useState([])
  const [authCheck, setauthCheck] = useState(false);

  const email = "sreehari@gmail.com";
  const password = "123";

  return (
    <>
      <studentContext.Provider value={[studentArr, setstudentArr]}>
        <allbooksContext.Provider value={[allBooksArr, setallBooksArr]}>
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
        </allbooksContext.Provider>
      </studentContext.Provider>
    </>
  );
}

export default App;
export {studentContext ,allbooksContext}