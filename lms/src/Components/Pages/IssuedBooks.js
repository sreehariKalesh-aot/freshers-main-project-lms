import React from 'react'
import Form from "react-bootstrap/Form";
import IssueBookModal from '../Modals/IssueBookModal';
import { useState } from 'react';
function IssuedBooks() {
  const [showIssuedBooks, setShowIssuedBooks] = useState(false);

  const handleCloseIssuedBooks = () => setShowIssuedBooks(false);
  const handleShowIssuedBooks = () => setShowIssuedBooks(true);
  return (
    <>
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

            <button className="orngbtn me-4 mt-2" onClick={handleShowIssuedBooks} >Issue Book</button>
          </div>
        </div>
      </div>
    
    {showIssuedBooks && <IssueBookModal showIssuedBooks={showIssuedBooks} handleCloseIssuedBooks={handleCloseIssuedBooks}/>}
    </>
  )
}

export default IssuedBooks