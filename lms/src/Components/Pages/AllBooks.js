import React from 'react'
import Form from "react-bootstrap/Form";

function AllBooks() {
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

            <button className="orngbtn me-4 mt-2">Add New Book</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllBooks