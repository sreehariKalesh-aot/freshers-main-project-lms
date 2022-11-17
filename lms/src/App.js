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
  const [studentArr, setstudentArr] = useState([{key: "sfgasfg", name:"joy",email:"joy@gmail.com",password:"joy123",cPassword:"joy123"},
  {key: "sfgaXCsfg", name:"mathew",email:"mathew@gmail.com",password:"mathew123",cPassword:"mathew123"},
  {key: "fsdfsdfsadfqw", name:"walter",email:"white@gmail.com",password:"walter@343",cPassword:"walter@343"}]);
  const [allBooksArr, setallBooksArr] = useState([{key:"fjfghjh",bName:"sapiens",author:"yuval noah harari",language:"English",totalCopies:"5",remainingCopies:"3"},
  {key:"38358",bName:"game of thrones",author:"George R. R. Martin",language:"English",totalCopies:"8",remainingCopies:"1"},
  {key:"asd",bName:"oru deshathinte kadha",author:"S.K. Pottakkad",language:"malayalam",totalCopies:"9",remainingCopies:"4"}])
  const [authCheck, setauthCheck] = useState(false);

  const email = "sreehari@gmail.com";
  const password = "123";

  return (
    <>
      <studentContext.Provider value={[studentArr, setstudentArr]}>
        <allbooksContext.Provider value={[allBooksArr, setallBooksArr]}>
{/*           
          <div className="d-flex">
            {authCheck && <Navbar />} */}
            
        <Router>
          <Routes>
          <Route path="/" element={!authCheck &&
            <Login
              email={email}
              password={password}
              authCheck={authCheck}
              setauthCheck={setauthCheck}
            />
          }/>

          
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
          {/* <Tablet/> */}
          {/* <Nav/> */}
        </Router>
        {/* </div> */}
        </allbooksContext.Provider>
      </studentContext.Provider>
    </>
  );
}

export default App;
export {studentContext ,allbooksContext}