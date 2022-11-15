import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import AddBookModal from "../Modals/AddBookModal";
import { BiTrash } from "react-icons/bi";
import { MdEdit } from "react-icons/md";

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

            <button className="orngbtn me-4 mt-2" onClick={handleShowAddBook}>
              Add New Book
            </button>
          </div>
          <div className="pges2 mt-4 pt-4 ps-5 pe-5 pb-4">
          <div className="row border-bottom">
            <p className="col d-flex justify-content-start pg-headings">Book Title</p>
            <p className="col d-flex justify-content-center pg-headings">Author</p>
            <p className="col d-flex justify-content-center pg-headings">Language</p>
            <p className="col d-flex justify-content-center pg-headings">Total Copies</p>
            <p className="col d-flex justify-content-center pg-headings">Remaining</p>
            <p className="col d-flex justify-content-center pg-headings">Actions</p>
          </div>

          <div className="row mt-4 mb-4 border-bottom">
            <p className="col d-flex justify-content-start  pg-items">It Start With Us</p>
            <p className="col d-flex justify-content-center  pg-items">Colleen Hoover</p>
            <p className="col d-flex justify-content-center  pg-items">English</p>
            <p className="col d-flex justify-content-center   pg-items">5</p>
            <p className="col d-flex justify-content-center  pg-items">2</p>
            <p className="col d-flex justify-content-center gap-3">
              <MdEdit size={20} style={{ fill: "#7E7E7F" }} />{" "}
              <BiTrash size={20} style={{ fill: "#D04444" }} />
            </p>
          </div>
          </div>
        </div>
      </div>

      {showAddBook && (
        <AddBookModal
          showAddBook={showAddBook}
          handleCloseAddBook={handleCloseAddBook}
        />
      )}
    </>
  );
}

export default AllBooks;
