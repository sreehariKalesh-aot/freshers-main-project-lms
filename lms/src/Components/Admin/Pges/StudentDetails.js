import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { useState, useContext } from "react";

import { allbooksContext } from "../../../App";
import { studentContext } from "../../../App";
import { issuedBooksContext } from "../../../App";

function StudentDetails({ studentName, studentEmail, studentId }) {
  const [allBooksArr, setallBooksArr] = useContext(allbooksContext);
  const [studentArr, setstudentArr] = useContext(studentContext);
  const [issuedBooksArr, setissuedBooksArr] = useContext(issuedBooksContext);

  const navigate = useNavigate();
  console.log(studentId);

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
            <p className="m-0 stdnt-name">{studentName}</p>
          </div>
          <hr />

          <div className="pges2 mt-4 pt-4 ps-4 pb-4 row">
            <div className="col-8 stdnt-details-div">
              <h1 className="stdnt-name2">{studentName}</h1>
              <p className="stdnt-email">{studentEmail}</p>
            </div>
            <div className="d-flex col-4 gap-5">
              <div>
                <p className="mb-2 lbls">Total Books issued</p>
                <p className="mb-2 lbls">Returned Books</p>
                <p className="mb-2 lbls">Total Fine</p>
              </div>
              <div>
                <p className="mb-2 nmbrs">1</p>
                <p className="mb-2 nmbrs">4</p>
                <p className="mb-2 nmbrs">Rs.70</p>
              </div>
            </div>
          </div>

          {/* content div */}
          <div className="pges2 mt-4 pt-4 ps-5 pe-5 pb-5">
            <p className="issued-books pb-2">Issued Books (5)</p>
            <div className="col-5">
              <Form.Control
                type="search"
                className="searchinput mt-3"
                placeholder="Search by student name or email"
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

            {issuedBooksArr.map((issuedbooks) => {
              if (issuedbooks.iStudent === studentId) {
                console.log("entered loop");
                return (
                  <>
                    {allBooksArr.map((books) => {
                      if (books.key === issuedbooks.iBook) {
                        console.log("entered book loop");
                        return (
                          <div className="row mt-4 mb-4 border-bottom">
                            <p className="col d-flex justify-content-start  pg-items">
                              {books.bName}
                            </p>

                            <p className="col d-flex justify-content-center  pg-items">
                              {books.author}
                            </p>
                            {issuedBooksArr.map((issuedbooks) => {
                              if (
                                issuedbooks.iStudent === studentId &&
                                books.key === issuedbooks.iBook
                              )
                                return (
                                  <>
                                    <p className="col d-flex justify-content-center  pg-items">
                                      {issuedbooks.iDate}
                                    </p>
                                    <p className="col d-flex justify-content-center   pg-items">
                                      {issuedbooks.iDueDate}
                                    </p>
                                    <p className="col d-flex justify-content-center  pg-items">
                                      {issuedbooks.returnDate
                                        ? issuedbooks.returnDate
                                        : "-"}
                                    </p>
                                    <p className="col d-flex justify-content-center gap-3">
                                      {issuedbooks.fine}
                                    </p>
                                  </>
                                );
                            })}
                          </div>
                        );
                      }
                    })}
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
