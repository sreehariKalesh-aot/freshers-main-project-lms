import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { useState, useContext } from "react";
import shortid from "shortid";
import { useParams } from "react-router-dom";

import { allbooksContext } from "../../../App";
import { studentContext } from "../../../App";
import { issuedBooksContext } from "../../../App";

function StudentDetails() {
  const { id } = useParams();

  const [allBooksArr, setallBooksArr] = useContext(allbooksContext);
  const [studentArr, setstudentArr] = useContext(studentContext);
  const [issuedBooksArr, setissuedBooksArr] = useContext(issuedBooksContext);

  // usestate for search
  const [searchStudent, setsearchStudent] = useState("");

  //ejak;fksdfasdklnfkalsdnfkl;asdnf;klasdg;klasfgasfgnslfk;agnkals;fngkasfngkla;sf

  const studentDetailsArr = issuedBooksArr.filter(
    (student) => student.iStudent === id
  );

  const tempstudentDetailsArr = studentDetailsArr.map((student) => {
    let studentobj = {
      key: student.key,
      book: "",
      author: "",
      issueDate: student.iDate,
      dueDate: student.iDueDate,
      returnDate: student.returnDate,
      fine: student.fine,
    };

    allBooksArr.map((book) => {
      if (book.key == student.iBook) {
        studentobj.book = book.bName;
        studentobj.author = book.author;
      }
    });

    studentArr.map((obj) => {
      if (obj.key == student.iStudent) {
        studentobj.key = obj.key;
      }
    });

    return studentobj;
  });

  //jssgasjaskdfjsadfsdafasdffsadfkjasdfjksadfsadfasdfsadfasdfasdfsfgdsg

  const totalBooks = issuedBooksArr.filter((issued) => issued.iStudent === id);

  const totalReturned = issuedBooksArr.filter(
    (issued) => issued.iStudent === id && issued.isReturned === true
  );

  const totalFine = issuedBooksArr
    .filter((issued) => issued.iStudent === id && issued.fine >= 0)
    .reduce((acc, curr) => {
      return acc + curr.fine;
    }, 0);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="pges">
        <div className="pg-container">
          {/* <p className="pt-4  login-p "></p> */}
          <div className="d-flex align-items-center pt-4">
            <IoIosArrowBack onClick={() => navigate(-1)} />
            <p
              className="m-0 stdnts"
              onClick={() => {
                navigate(-1);
              }}
            >
              Students /
            </p>
            {studentArr.map((student) => {
              if (student.key === id) {
                return <p className="m-0 stdnt-name">{student.name}</p>;
              }
            })}
          </div>
          <hr />

          <div className="pges2 mt-4 pt-4 ps-4 pb-4 row">
            <div className="col-8 stdnt-details-div">
              {studentArr.map((student) => {
                if (student.key === id) {
                  return <h1 className="stdnt-name2">{student.name}</h1>;
                }
              })}

              {studentArr.map((student) => {
                if (student.key === id) {
                  return <p className="stdnt-email">{student.email}</p>;
                }
              })}
            </div>
            <div className="d-flex col-4 gap-5">
              <div>
                <p className="mb-2 lbls">Total Books issued</p>
                <p className="mb-2 lbls">Returned Books</p>
                <p className="mb-2 lbls">Total Fine</p>
              </div>
              <div>
                <p className="mb-2 nmbrs">{totalBooks.length}</p>
                <p className="mb-2 nmbrs">{totalReturned.length}</p>
                <p className="mb-2 nmbrs">Rs.{totalFine}</p>
              </div>
            </div>
          </div>

          {/* content div */}
          <div className="pges2 mt-4 pt-4 ps-5 pe-5 pb-5">
            <p className="issued-books pb-2">
              Issued Books ({totalBooks.length})
            </p>
            <div className="col-5">
              <Form.Control
                type="search"
                className="searchinput mt-3"
                placeholder="Search by student name or email"
                value={searchStudent}
                onChange={(e) => setsearchStudent(e.target.value)}
              />
            </div>
            <div className="row border-bottom pt-4">
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
                Fine<br></br>
                (Rs.10 per day)
              </p>
            </div>

            {tempstudentDetailsArr
              .filter((book) => {
                if (searchStudent == "") {
                  return book;
                } else if (
                  book.book.toLowerCase().includes(searchStudent.toLowerCase())
                ) {
                  return book;
                } else if (
                  book.author
                    .toLowerCase()
                    .includes(searchStudent.toLowerCase())
                ) {
                  return book;
                }
              })
              .map((book) => {
                if (book.key === id) {
                  return (
                    <>
                      <div
                        className="row mt-4 mb-4 border-bottom"
                        key={shortid.generate()}
                      >
                        <p className="col d-flex justify-content-start  pg-items">
                          {book.book}
                        </p>
                        <p className="col d-flex justify-content-center  pg-items">
                          {book.author}
                        </p>
                        <p className="col d-flex justify-content-center  pg-items">
                          {book.issueDate}
                        </p>
                        <p className="col d-flex justify-content-center   pg-items">
                          {book.dueDate}
                        </p>
                        <p className="col d-flex justify-content-center  pg-items">
                          {book.returnDate ? book.returnDate : "-"}
                        </p>
                        <p className="col d-flex justify-content-center gap-3 pg-items">
                          {book.fine}
                        </p>
                      </div>
                    </>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetails;
