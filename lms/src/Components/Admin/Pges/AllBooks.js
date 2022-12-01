import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import AddBookModal from "../Modals/AddBookModal";
import { BiTrash } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { createContext, useContext } from "react";
import { allbooksContext } from "../../../App";
import { studentContext } from "../../../App";
import DeleteBookModal from "../Modals/DeleteBookModal";
import Navbar from "../../Navbar";
import ReactTooltip from "react-tooltip";
import { HiOutlineEye } from "react-icons/hi";

function AllBooks({ studentBoolean, setstudentBoolean,studentLoginId}) {

  const [allBooksArr, setallBooksArr] = useContext(allbooksContext);
  const [studentArr, setstudentArr] = useContext(studentContext); 

  // use state and functions for adding books
  const [showAddBook, setShowAddBook] = useState(false);
  const handleCloseAddBook = () => setShowAddBook(false);
  const handleShowAddBook = () => setShowAddBook(true);

  // use state and functions for deleting book
  const [showdeleteBook, setShowdeleteBook] = useState(false);
  const handleCloseDeleteBook = () => setShowdeleteBook(false);
  const handleShowDeleteBook = () => setShowdeleteBook(true);

  // function for passing key for deletion of book
  const [bookKey, setbookKey] = useState("");
  const handleBookKey = (bookKey) => {
    setbookKey(bookKey);
  };
  // state for checking the edit key is true or not
  const [isBookEdit, setisBookEdit] = useState(false);
  // use state for passing edit values
  const [editBname, seteditBname] = useState("");
  const [editAuthor, seteditAuthor] = useState("");
  const [editLanguage, seteditLanguage] = useState("");
  const [editTotalCopies, seteditTotalCopies] = useState("");
  const [editRemainingCopies, seteditRemainingCopies] = useState("");

  // usestate for searching
  const [searchBook, setsearchBook] = useState("");

  return (
    <>
      <Navbar studentBoolean={studentBoolean} studentArr={studentArr} studentLoginId={studentLoginId} />
      <div
        className="pges col-10"
        style={{
          backgroundColor: studentBoolean ? "#fbfbff" : "#fffbfa",
        }}
      >
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
                onChange={(e) => {
                  setsearchBook(e.target.value);
                }}
              />
            </div>
            {studentBoolean ? (
              <div className="d-flex align-items-center gap-2">
                <p className="mb-0">Sort By:</p>
                <Form.Select
                  aria-label="Default select example"
                  className="sort"
                >
                  <option value="1" className="sort-options">
                    Ascending
                  </option>
                  <option value="2" className="sort-options">
                    Descending
                  </option>
                </Form.Select>
              </div>
            ) : (
              <button className="orngbtn me-4 mt-2" onClick={handleShowAddBook}>
                Add New Book
              </button>
            )}
          </div>
          <div className="pges2 mt-4 pt-4 ps-5 pe-5 pb-4">
            <div className="row border-bottom">
              <p className="col d-flex justify-content-start pg-headings">
                Book Title
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Author
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Language
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Total Copies
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Remaining
              </p>
              <p className="col d-flex justify-content-center pg-headings">
                Actions
              </p>
            </div>
            {allBooksArr
              .filter((book) => {
                if (searchBook == "") {
                  return book;
                } else if (
                  book.bName.toLowerCase().includes(searchBook.toLowerCase())
                ) {
                  return book;
                } else if (
                  book.author.toLowerCase().includes(searchBook.toLowerCase())
                ) {
                  return book;
                }
              })
              .map((book) => {
                return (
                  <div className="row mt-4 mb-4 border-bottom" key={book.key}>
                    <p className="col d-flex justify-content-start  pg-items">
                      {book.bName}
                    </p>
                    <p className="col d-flex justify-content-center  pg-items">
                      {book.author}
                    </p>
                    <p className="col d-flex justify-content-center  pg-items">
                      {book.language}
                    </p>
                    <p className="col d-flex justify-content-center   pg-items">
                      {book.totalCopies}
                    </p>
                    <p className="col d-flex justify-content-center  pg-items">
                      {book.remainingCopies}
                    </p>
                    {studentBoolean ? (
                      <p className="col d-flex justify-content-center gap-3">
                        {" "}
                        <HiOutlineEye
                          size={20}
                          style={{ color: "#7E7E7F" }}
                        />{" "}
                      </p>
                    ) : (
                      <p className="col d-flex justify-content-center gap-3">
                        <MdEdit
                          data-tip="Edit"
                          size={20}
                          style={{ fill: "#7E7E7F" }}
                          onClick={() => {
                            handleShowAddBook();
                            setisBookEdit(true);
                            seteditBname(book.bName);
                            seteditAuthor(book.author);
                            seteditLanguage(book.language);
                            seteditTotalCopies(book.totalCopies);
                            seteditRemainingCopies(book.remainingCopies);
                            handleBookKey(book.key);
                          }}
                        />{" "}
                        <BiTrash
                          data-tip="Delete"
                          size={20}
                          style={{ fill: "#D04444" }}
                          onClick={() => {
                            handleShowDeleteBook();
                            handleBookKey(book.key);
                          }}
                        />
                      </p>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <ReactTooltip />
      {showAddBook && (
        <AddBookModal
          showAddBook={showAddBook}
          handleCloseAddBook={handleCloseAddBook}
          allBooksArr={allBooksArr}
          setallBooksArr={setallBooksArr}
          isBookEdit={isBookEdit}
          setisBookEdit={setisBookEdit}
          editBname={editBname}
          seteditBname={seteditBname}
          editAuthor={editAuthor}
          seteditAuthor={seteditAuthor}
          editLanguage={editLanguage}
          seteditLanguage={seteditLanguage}
          editTotalCopies={editTotalCopies}
          seteditTotalCopies={seteditTotalCopies}
          editRemainingCopies={editRemainingCopies}
          seteditRemainingCopies={seteditRemainingCopies}
          bookKey={bookKey}
        />
      )}
      {showdeleteBook && (
        <DeleteBookModal
          showdeleteBook={showdeleteBook}
          handleCloseDeleteBook={handleCloseDeleteBook}
          allBooksArr={allBooksArr}
          setallBooksArr={setallBooksArr}
          bookKey={bookKey}
        />
      )}
    </>
  );
}

export default AllBooks;
