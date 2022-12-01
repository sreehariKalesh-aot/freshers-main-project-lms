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
import { studentContext } from "../../App";
import { useContext } from "react";
import { useState } from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import Nav from 'react-bootstrap/Nav';

function StudentLogin({ studentBoolean, setstudentBoolean, studentLoginId }) {
  const [allBooksArr, setallBooksArr] = useContext(allbooksContext);
  const [issuedBooksArr, setissuedBooksArr] = useContext(issuedBooksContext);
  const [studentArr, setstudentArr] = useContext(studentContext);

  const [searchMyBooks, setsearchMyBooks] = useState("");

  console.log(studentLoginId);

  const temp = issuedBooksArr.filter(
    (book) => book.iStudent === studentLoginId
  );
  const tempStudentArr = temp.map((issuedbook) => {
    if (issuedbook.iStudent === studentLoginId) {
      let issued = {
        key: issuedbook.key,
        bookTitle: issuedbook.iBook,
        author: " ",
        issueDate: issuedbook.iDate,
        dueDate: issuedbook.iDueDate,
        returnDate: issuedbook.returnDate,
        fine: issuedbook.fine,
        isReturned: issuedbook.isReturned,
      };

      allBooksArr.map((book) => {
        if (book.key == issuedbook.iBook) {
          issued.bookTitle = book.bName;
          issued.author = book.author;
        }
      });

      return issued;
    }
  });

  console.log(tempStudentArr);

  return (
    <>
      <Navbar
        studentBoolean={studentBoolean}
        studentLoginId={studentLoginId}
        studentArr={studentArr}
      />

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
                onChange={(e) => setsearchMyBooks(e.target.value)}
              />
            </div>

            {/* <button className="orngbtn me-4 mt-2">Issue</button> */}
            <div className="d-flex align-items-center gap-2">
              <p className="mb-0">Sort By:</p>
              <Form.Select aria-label="Default select example" className="sort">
                <option value="1" className="sort-options">
                  Issue Date
                </option>
                <option value="2" className="sort-options">
                  Due Date
                </option>
              </Form.Select>
            </div>
          </div>
          {/* <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3 mt-4"
          >
            <Tab eventKey="home" title="Issued Books" className="tabs"></Tab>
            <Tab eventKey="profile" title="Pending to return" className="tabs"></Tab>
            <Tab eventKey="longer-tab" title="Returned books" className="tabs"></Tab>
          </Tabs> */}
            <ul className="d-flex gap-5 p-0 mt-5">
              <li>
                Issued Books
              </li>
              <li>Pending To Return</li>
              <li>Returned Books</li>
            </ul>
           <hr />
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

            {tempStudentArr
              .filter((book) => {
                if (searchMyBooks == "") {
                  return book;
                } else if (
                  book.bookTitle
                    .toLowerCase()
                    .includes(searchMyBooks.toLowerCase())
                ) {
                  return book;
                } else if (
                  book.author
                    .toLowerCase()
                    .includes(searchMyBooks.toLowerCase())
                ) {
                  return book;
                }
              })
              .map((obj) => {
                return (
                  <div className="row mt-4 mb-4 border-bottom">
                    <p className="col d-flex justify-content-start  pg-items">
                      {obj.bookTitle}
                    </p>
                    <p className="col d-flex justify-content-center   pg-items">
                      {obj.author}
                    </p>
                    <p className="col d-flex justify-content-center  pg-items">
                      {obj.issueDate}
                    </p>
                    {/* {issuedBooks.iStudent} */}
                    <p className="col d-flex justify-content-center  pg-items">
                      {obj.dueDate}
                    </p>
                    <p className="col d-flex justify-content-center   pg-items">
                      {obj.returnDate}
                    </p>
                    <p className="col d-flex justify-content-center  pg-items">
                      {obj.fine}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <ReactTooltip />
    </>
  );
}

export default StudentLogin;
