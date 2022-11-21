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
import MarkReturned from "../Modals/MarkReturned";

function IssuedBooks() {
  const [allBooksArr, setallBooksArr] = useContext(allbooksContext);
  const [studentArr, setstudentArr] = useContext(studentContext);
  const [issuedBooksArr, setissuedBooksArr] = useContext(issuedBooksContext);

  // usestate and functions for showing modal
  const [showIssuedBooks, setShowIssuedBooks] = useState(false);

  const handleCloseIssuedBooks = () => setShowIssuedBooks(false);
  const handleShowIssuedBooks = () => setShowIssuedBooks(true);

  // usestate and functions for confirming mark as returned
  const [showReturned, setshowReturned] = useState(false);
  const handleCloseReturned = () => setshowReturned(false);
  const handleShowReturned = () => setshowReturned(true);

  // usestate for searching issued books
  const [searchIssuedBook, setsearchIssuedBook] = useState("");

  // usestate for marking issued book as returned
  const [isReturned, setisReturned] = useState(false);

  // issued book key state
  const [issuedKey, setissuedKey] = useState("");
  const [returnedBookId, setreturnedBookId] = useState("");
  // function of returning issued book
  // const handleIssuedKey =(key)=>{
  //   setissuedKey(key)
  //   console.log(issuedKey)
  // }
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
                onChange={(e) => {
                  setsearchIssuedBook(e.target.value);
                }}
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

            {issuedBooksArr
              .filter((book) => {
                if (searchIssuedBook == "") {
                  return book;
                } else if (
                  book.iBookName
                    .toLowerCase()
                    .includes(searchIssuedBook.toLowerCase())
                ) {
                  return book;
                } else if (
                  book.iStudentName 
                    .toLowerCase()
                    .includes(searchIssuedBook.toLowerCase())
                ) {
                  return book;
                }
              })
              .map((issuedBooks) => {
                if (issuedBooks.isReturned == false) {
                  return (
                    <div
                      className="row mt-4 mb-4 border-bottom"
                      key={issuedBooks.key}
                    >
                      {/* {issuedBooks.iBook} */}
                      {allBooksArr.map((books) => {
                        if (books.key  === issuedBooks.iBook) {
                          return (
                            <p className="col d-flex justify-content-start  pg-items">
                              {books.bName}
                            </p>
                          );
                        }
                      })}
                        
                      {studentArr.map((student) => {
                        if (student.key  === issuedBooks.iStudent) {
                          return (
                            <p className="col d-flex justify-content-center  pg-items">
                              {student.name}
                            </p>
                          );
                        }
                      })}
                     
                        {/* {issuedBooks.iStudent} */}
                      
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
                          onClick={() => {
                            handleShowReturned();
                            setissuedKey(issuedBooks.key);
                            setreturnedBookId(issuedBooks.iBook);
                          }}
                        />
                      </p>
                    </div>
                  );
                }
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
      {showReturned && (
        <MarkReturned
          handleCloseReturned={handleCloseReturned}
          showReturned={showReturned}
          setshowReturned={setshowReturned}
          setisReturned={setisReturned}
          isReturned={isReturned}
          issuedBooksArr={issuedBooksArr}
          setissuedBooksArr={setissuedBooksArr}
          issuedKey={issuedKey}
          allBooksArr={allBooksArr}
          setallBooksArr={setallBooksArr}
          returnedBookId={returnedBookId}
        />
      )}
    </>
  );
}

export default IssuedBooks;
