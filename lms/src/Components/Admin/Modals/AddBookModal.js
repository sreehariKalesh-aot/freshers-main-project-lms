import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import shortid from "shortid";
function AddBookModal({
  handleCloseAddBook,
  showAddBook,
  allBooksArr,
  setallBooksArr,
  isBookEdit,
  setisBookEdit,
  editBname,
  seteditBname,
  editAuthor,
  seteditAuthor,
  editLanguage,
  seteditLanguage,
  editTotalCopies,
  seteditTotalCopies,
  editRemainingCopies,
  seteditRemainingCopies,
  bookKey = { bookKey },
}) {
  const [bName, setbName] = useState("");
  const [author, setauthor] = useState("");
  const [language, setlanguage] = useState("");
  const [totalCopies, settotalCopies] = useState("");
  const [remainingCopies, setremainingCopies] = useState("");

  const handleBookNameInput = (e) => {
    setbName(e.target.value);
  };
  const handleAuthorNameInput = (e) => {
    setauthor(e.target.value);
  };

  const handleLanguageInput = (e) => {
    setlanguage(e.target.value);
  };

  const handleTotalCopiesInput = (e) => {
    settotalCopies(e.target.value);
  };

  const handleRemainingCopiesInput = (e) => {
    setremainingCopies(e.target.value);
  };

  //functions for taking edit data onchange from the modal form
  const handleEditBookNameInput = (e) => {
    seteditBname(e.target.value);
  };
  const handleEditAuthorNameInput = (e) => {
    seteditAuthor(e.target.value);
  };
  const handleEditLanguageInput = (e) => {
    seteditLanguage(e.target.value);
  };
  const handleEditTotalCopiesInput = (e) => {
    seteditTotalCopies(e.target.value);
  };
  const handleEditRemainingCopiesInput = (e) => {
    seteditRemainingCopies(e.target.value);
  };
  const handleSaveBookEdit = () => {
    if (
      !editBname ||
      !editAuthor ||
      !editLanguage ||
      !editTotalCopies ||
      !editRemainingCopies
    ) {
      seteditBookError(true);
    } else {
      setisBookEdit(false);
      handleCloseAddBook();
      setallBooksArr(
        allBooksArr.map((book) => {
          if (book.key === bookKey) {
            return {
              ...book,
              bName: editBname,
              author: editAuthor,
              language: editLanguage,
              totalCopies: editTotalCopies,
              remainingCopies: editRemainingCopies,
            };
          }
          return book;
        })
      );
    }
  };

  // state for errors in add book modal
  const [addBookError, setaddBookError] = useState(false);
  // state for errors in edit book
  const [editBookError, seteditBookError] = useState(false);

  const handleAddBook = () => {
    if (!bName || !author || !language || !totalCopies || !remainingCopies) {
      setaddBookError(true);
    } else {
      handleCloseAddBook();
      setaddBookError(false);
      setallBooksArr([
        ...allBooksArr,
        {
          key: shortid.generate(),
          bName: bName,
          author: author,
          language: language,
          totalCopies: totalCopies,
          remainingCopies: remainingCopies,
        },
      ]);
      setbName("");
      setauthor("");
      setlanguage("");
      settotalCopies("");
      setremainingCopies("");
    }
  };

  return (
    <Modal
      show={showAddBook}
      onHide={() => {
        handleCloseAddBook();
        setisBookEdit(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{isBookEdit ? "Edit Book" : "Add Book"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1Add">
            <Form.Label className="modal-labels">Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Eg: Pride and Prejudice"
              autoFocus
              name="bName"
              value={isBookEdit ? editBname : bName}
              onChange={
                isBookEdit ? handleEditBookNameInput : handleBookNameInput
              }
              autocomplete="off"
            />
            {addBookError && bName.length <= 0 ? (
              <p className="error">Please input a Name</p>
            ) : (
              ""
            )}
            {editBookError && editBname.length <= 0 ? (
              <p className="error">Please input a Name</p>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1Add"
          >
            <Form.Label className="modal-labels">Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              placeholder="Eg: Jane Austen"
              onChange={
                isBookEdit ? handleEditAuthorNameInput : handleAuthorNameInput
              }
              value={isBookEdit ? editAuthor : author}
              autocomplete="off"
            />
            {addBookError && author.length <= 0 ? (
              <p className="error">Please input author name</p>
            ) : (
              ""
            )
            }
            {editBookError && editAuthor.length <= 0 ? (
              <p className="error">Please input author name</p>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Label className="modal-labels">Language</Form.Label>
          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            name="language"
            value={isBookEdit ? editLanguage : language}
            onChange={
              isBookEdit ? handleEditLanguageInput : handleLanguageInput
            }
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Hindi">Hindi</option>
          </Form.Select>
          {addBookError && language.length <= 0 ? (
            <p className="error">Please Select a language</p>
          ) : (
            ""
          )}
          {editBookError && editLanguage.length <= 0 ? (
            <p className="error">Please Select a language</p>
          ) : (
            ""
          )}
          <div className="d-flex justify-content-between">
            <Form.Group
              className="mb-3 col-5.5"
              controlId="exampleForm.ControlInput4Add"
            >
              <Form.Label className="modal-labels">Total Copies</Form.Label>
              <Form.Control
                type="number"
                placeholder="5"
                name="totalCopies"
                value={isBookEdit ? editTotalCopies : totalCopies}
                // onChange={handleTotalCopiesInput}
                onChange={
                  isBookEdit
                    ? handleEditTotalCopiesInput
                    : handleTotalCopiesInput
                }
              />
              {addBookError && totalCopies.length <= 0 ? (
                <p className="error">Please enter total copies</p>
              ) : (
                ""
              )}
              {editBookError && editTotalCopies.length <= 0 ? (
                <p className="error">Please enter total copies</p>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group
              className="mb-3 col-5.5"
              controlId="exampleForm.ControlInput5Add"
            >
              <Form.Label className="modal-labels">Remaining</Form.Label>
              <Form.Control
                type="number"
                placeholder="2"
                name="remainingCopies"
                value={isBookEdit ? editRemainingCopies : remainingCopies}
                // onChange={handleRemainingCopiesInput}
                onChange={
                  isBookEdit
                    ? handleEditRemainingCopiesInput
                    : handleRemainingCopiesInput
                }
              />
              {addBookError && remainingCopies.length <= 0 ? (
                <p className="error">Please enter remaining copies</p>
              ) : (
                ""
              )}
              {editBookError && editRemainingCopies.length <= 0 ? (
                <p className="error">Please enter remaining copies</p>
              ) : (
                ""
              )}
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-secondary"
          onClick={() => {
            handleCloseAddBook();
            setisBookEdit(false);
          }}
        >
          cancel
        </Button>
        <Button
          style={{ backgroundColor: "#ED7966", color: "white" }}
          variant="light"
          onClick={() => {
            {
              isBookEdit ? handleSaveBookEdit() : handleAddBook();
            }
          }}
        >
          {isBookEdit ? "Save Edits" : "Add Book"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddBookModal;
