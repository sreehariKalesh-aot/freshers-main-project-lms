import React from "react";
import Form from "react-bootstrap/Form";
// import { useState } from "react";
import { MdOutlineAssignmentReturn } from "react-icons/md";
// import { studentContext } from "../../../App";
// import { allbooksContext } from "../../../App";
// import { issuedBooksContext } from "../../../App";

import shortid from "shortid";
import ReactTooltip from "react-tooltip";
import Navbar from "../Navbar";
import { allbooksContext } from "../../App";
import { issuedBooksContext } from "../../App";
import { useContext } from "react";

function StudentLogin({studentBoolean,setstudentBoolean,studentLoginId}) {

  const [allBooksArr, setallBooksArr] = useContext(allbooksContext);
  const [issuedBooksArr, setissuedBooksArr] = useContext(issuedBooksContext);

  const tempStudentArr = issuedBooksArr.map((issuedbook) => {
    let issued = {
      key: issuedbook.key,
      iBook: issuedbook.iBook,
      iStudent: issuedbook.iStudent,
      iDate: issuedbook.iDate,
      iDueDate: issuedbook.iDueDate,
      fine: issuedbook.fine,
      isReturned: issuedbook.isReturned,
      returnDate: issuedbook.returnDate,
    };

    allBooksArr.map((book) => {
      if (book.key == issuedbook.iBook) {
        issued.iBook = book.bName;
      }
    });


    return issued;
  });

  return (
    <>
      <Navbar studentBoolean={studentBoolean}
      setstudentBoolean={setstudentBoolean}/>

      <div className="student-pges">
        <div className="pg-container">
          <p className="pt-5  login-p ">My Books</p>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="col-5">
              <Form.Control
                type="search"
                className="searchinput mt-3"
                placeholder="Search by book title or author"
              />
            </div>

            {/* <button className="orngbtn me-4 mt-2">Issue</button> */}
            <div className="d-flex align-items-center gap-2">
              <p className="mb-0">Sort By:</p>
            <Form.Select aria-label="Default select example" className="sort">
              <option value="1" className="sort-options">Issue Date</option>
              <option value="2" className="sort-options">Due Date</option>
            </Form.Select>
          
            </div>
            
          </div>
          <div className="pges2 mt-4 pt-4 ps-5 pe-5 pb-4">
            <div className="row border-bottom">
              <p className="col d-flex justify-content-start pg-headings">
                Book Title
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Author
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Issue Date
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Due Date
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Return Date
              </p>

              <p className="col d-flex justify-content-center pg-headings">
                Fine <br></br>(Rs. 10 per day){" "}
              </p>
            </div>
            
            <div className="row mt-4 mb-4 border-bottom">
              <p className="col d-flex justify-content-start  pg-items">dfsd</p>
              <p className="col d-flex justify-content-center   pg-items">
                dsfs
              </p>
              <p className="col d-flex justify-content-center  pg-items">
                nkkn
              </p>
              {/* {issuedBooks.iStudent} */}
              <p className="col d-flex justify-content-center  pg-items">nmn</p>
              <p className="col d-flex justify-content-center   pg-items">
                nmij
              </p>
              <p className="col d-flex justify-content-center  pg-items">
                kjjk
              </p>
            </div>
          </div>
        </div>
      </div>
      <ReactTooltip />
    </>
  );
}

export default StudentLogin;
