import React from 'react'
import Form from "react-bootstrap/Form";
import { useState } from 'react';
import AddBookModal from '../Modals/AddBookModal';

function AllBooks() {
  const [showAddBook, setShowAddBook] = useState(false);

  const handleCloseAddBook = () => setShowAddBook(false);
  const handleShowAddBook = () => setShowAddBook(true);
  return (
    <>
        <div className="pges">
        <div className="pg-container">
          <p className="pt-5  login-p ">All Books</p>
          <hr />
          <div className="d-flex justify-content-between">
            {/* <input type="search" className='col-5 searchinput p-1 mt-3' placeholder='Search by student name or email' name="" id="" /> */}
            <div className="col-5">
              <Form.Control
                type="search"
                className="searchinput mt-3"
                placeholder="Search by student name or email"
              />
            </div>

            <button className="orngbtn me-4 mt-2" onClick={handleShowAddBook}>Add New Book</button>
          </div>
        </div>
      </div>

      {showAddBook && <AddBookModal showAddBook={showAddBook} handleCloseAddBook={handleCloseAddBook}/>}
    </>
  )
}

export default AllBooks