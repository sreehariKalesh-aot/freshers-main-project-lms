import "./App.css";
import React from "react";
import Login from "./Components/Login";
import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./Components/Admin/Pges/Students";
import IssuedBooks from "./Components/Admin/Pges/IssuedBooks";
import AllBooks from "./Components/Admin/Pges/AllBooks";
import StudentDetails from "./Components/Admin/Pges/StudentDetails";
import StudentLogin from "./Components/Student/StudentLogin";

const studentContext = createContext();
const allbooksContext = createContext();
const issuedBooksContext = createContext();

function App() {
  const [studentLoginId, setstudentLoginId] = useState("")

  const getStudentLogin = ()=>{
    return localStorage.getItem("studentLogin")
  }
  const [studentBoolean, setstudentBoolean] = useState(getStudentLogin());

  useEffect(() => { 
    localStorage.setItem("studentLogin", studentBoolean)
  },[studentBoolean])
  


  const getStudentArray = () => {
    let students = localStorage.getItem("students");
    if (students) {
      return JSON.parse(localStorage.getItem("students"));
    } else {
      return [];
    }
  };

  const getBooksArray = () => {
    let books = localStorage.getItem("books");
    if (books) {
      return JSON.parse(localStorage.getItem("books"));
    } else {
      return [];
    }
  };

  const getIssuedBooksArray = () => {
    let iBooks = localStorage.getItem("issuedbooks");
    if (iBooks) {
      return JSON.parse(localStorage.getItem("issuedbooks"));
    } else {
      return [];
    }
  };

  const [studentArr, setstudentArr] = useState(getStudentArray());

  const [allBooksArr, setallBooksArr] = useState(getBooksArray());

  const [issuedBooksArr, setissuedBooksArr] = useState(getIssuedBooksArray());

  const [authCheck, setauthCheck] = useState(false);

  const email = "sreehari@gmail.com";
  const password = "123";

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(studentArr));
    localStorage.setItem("books", JSON.stringify(allBooksArr));
    localStorage.setItem("issuedbooks", JSON.stringify(issuedBooksArr));
  }, [studentArr, allBooksArr, issuedBooksArr]);

  // const [studentId, setstudentId] = useState("")
  // const [studentName, setstudentName] = useState("")
  // const [studentEmail, setstudentEmail] = useState("")
  return (
    <div>
      <studentContext.Provider value={[studentArr, setstudentArr]}>
        <allbooksContext.Provider value={[allBooksArr, setallBooksArr]}>
          <issuedBooksContext.Provider
            value={[issuedBooksArr, setissuedBooksArr]}
          >
            {/*           
          <div className="d-flex">
            {authCheck && <Navbar />} */}

            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Login
                      email={email}
                      password={password}
                      authCheck={authCheck}
                      setauthCheck={setauthCheck}
                      studentBoolean={studentBoolean}
                      setstudentBoolean={setstudentBoolean}
                      studentLoginId={studentLoginId}
                      setstudentLoginId={setstudentLoginId}
                    />
                  }
                />
                <Route path="/Mybooks" element={<StudentLogin studentBoolean={studentBoolean} 

                      setstudentBoolean={setstudentBoolean}
                      studentLoginId={studentLoginId}/>} />
                <Route path="/students" element={<Students />} />
                <Route path="/students/:id" element={<StudentDetails />} />
                <Route path="/allbooks" element={<AllBooks  studentBoolean={studentBoolean} 
                      setstudentBoolean={setstudentBoolean}/>} />
                <Route path="/issuedbooks" element={<IssuedBooks />} />
              </Routes>
            </Router>
          </issuedBooksContext.Provider>
        </allbooksContext.Provider>
      </studentContext.Provider>
    </div>
  );
}

export default App;
export { studentContext, allbooksContext, issuedBooksContext };
