import React from "react";
import Form from "react-bootstrap/Form";
import IssueBookModal from "../Modals/IssueBookModal";
import { useState } from "react";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import Navbar from "../../Navbar";

import { createContext, useContext } from "react";
import { studentContext } from "../../../App";
import { allbooksContext } from "../../../App";
import { issuedBooksContext } from "../../../App";

function IssuedBooks() {
  const [allBooksArr, setallBooksArr] = useContext(allbooksContext);
  const [studentArr, setstudentArr] = useContext(studentContext);
  const [issuedBooksArr, setissuedBooksArr] = useContext(issuedBooksContext);

  // usestate and functions for showing modal
  const [showIssuedBooks, setShowIssuedBooks] = useState(false);

  const handleCloseIssuedBooks = () => setShowIssuedBooks(false);
  const handleShowIssuedBooks = () => setShowIssuedBooks(true);
  return (
    <>
      <Navbar />

      <div className="pges">
        <div className="pg-container">
          <p className="pt-5  login-p ">Issued Books</p>
          <hr />
          <div className="d-flex justify-content-between">
            {/* <input type="search" className='col-5 searchinput p-1 mt-3' placeholder='Search by student name or email' name="" id="" /> */}
            <div className="col-5">
              <Form.Control
                type="search"
                className="searchinput mt-3"
                placeholder="Search by book title or student"
              />
            </div>

            <button
              className="orngbtn me-4 mt-2"
              onClick={handleShowIssuedBooks}
            >
              Issue Book
            </button>
          </div>
          <div className="pges2 mt-4 pt-4 ps-5 pe-5 pb-4">
            <div className="row border-bottom">
              <p className="col d-flex justify-content-start pg-headings">
                Book Title
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Student
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Issue Date
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Due Date
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Fine <br></br>(Rs. 10 per day){" "}
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Actions
              </p>
            </div>

            {issuedBooksArr.map((issuedBooks) => {
              return (
                <div
                  className="row mt-4 mb-4 border-bottom"
                  key={issuedBooks.key}
                >
                  <p className="col d-flex justify-content-start  pg-items">
                    {issuedBooks.iBook}
                  </p>
                  <p className="col d-flex justify-content-center  pg-items">
                    {issuedBooks.iStudent}
                  </p>
                  <p className="col d-flex justify-content-center  pg-items">
                    {issuedBooks.iDate}
                  </p>
                  <p className="col d-flex justify-content-center   pg-items">
                    {issuedBooks.iDueDate}
                  </p>
                  <p className="col d-flex justify-content-center  pg-items">
                    10
                  </p>
                  <p className="col d-flex justify-content-center gap-3">
                    <MdOutlineAssignmentReturn
                      size={20}
                      style={{ color: "#7E7E7F" }}
                    />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {showIssuedBooks && (
        <IssueBookModal
          showIssuedBooks={showIssuedBooks}
          handleCloseIssuedBooks={handleCloseIssuedBooks}
          allBooksArr={allBooksArr}
          setallBooksArr={setallBooksArr}
          studentArr={studentArr}
          setstudentArr={setstudentArr}
          issuedBooksArr={issuedBooksArr}
          setissuedBooksArr={setissuedBooksArr}
        />
      )}
    </>
  );
}

export default IssuedBooks;
