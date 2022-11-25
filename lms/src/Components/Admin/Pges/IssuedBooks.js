import React from "react";
import Form from "react-bootstrap/Form";
import IssueBookModal from "../Modals/IssueBookModal";
import { useState } from "react";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import Navbar from "../../Navbar";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { studentContext } from "../../../App";
import { allbooksContext } from "../../../App";
import { issuedBooksContext } from "../../../App";
import MarkReturned from "../Modals/MarkReturned";

import shortid from "shortid";
import ReactTooltip from "react-tooltip";

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

  const issuedBooksArrCopy = issuedBooksArr;

  const tempIssuedArr = issuedBooksArrCopy.map((issuedbook) => {
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

    studentArr.map((obj) => {
      if (obj.key == issuedbook.iStudent) {
        issued.iStudent = obj.name;
      }
    });

    return issued;
  });

  // usestate for marking issued book as returned
  const [isReturned, setisReturned] = useState(false);

  // issued book key state
  const [issuedKey, setissuedKey] = useState("");
  const [returnedBookId, setreturnedBookId] = useState("");

  return (
    <>
      <Navbar />

      <div className="pges">
        <div className="pg-container">
          <p className="pt-5  login-p ">Issued Books</p>
          <hr />
          <div className="d-flex justify-content-between">
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

            {tempIssuedArr
              .filter((issuedBooks) => {
                if (searchIssuedBook == "") {
                  return issuedBooks;
                } else if (
                  issuedBooks.iBook
                    .toLowerCase()
                    .includes(searchIssuedBook.toLowerCase())
                ) {
                  return issuedBooks;
                } else if (
                  issuedBooks.iStudent
                    .toLowerCase()
                    .includes(searchIssuedBook.toLowerCase())
                ) {
                  return issuedBooks;
                }
              })
              .map((issuedBooks) => {
                if (issuedBooks.isReturned == false) {
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

                      {/* {issuedBooks.iStudent} */}

                      <p className="col d-flex justify-content-center  pg-items">
                        {issuedBooks.iDate}
                      </p>
                      <p className="col d-flex justify-content-center   pg-items">
                        {issuedBooks.iDueDate}
                      </p>
                      <p className="col d-flex justify-content-center  pg-items">
                        {issuedBooks.fine}
                      </p>
                      <p className="col d-flex justify-content-center gap-3">
                        <MdOutlineAssignmentReturn
                          data-tip="Mark Returned"
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
      <ReactTooltip />

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
          // dueDatecalc={dueDatecalc}
          // setdueDatecalc={setdueDatecalc}
          // calculateFine={calculateFine}
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