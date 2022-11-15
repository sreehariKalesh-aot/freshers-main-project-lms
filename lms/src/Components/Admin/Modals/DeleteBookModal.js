import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteBookModal({handleCloseDeleteBook,allBooksArr,setallBooksArr,showdeleteBook,bookKey}) {
    const handleDeleteBook=(bookKey)=>{
        console.log(bookKey);
        setallBooksArr(allBooksArr.filter((book) => book.key !== bookKey));
        console.log(allBooksArr);
    }

  return (
    <Modal show={showdeleteBook} onHide={handleCloseDeleteBook}>
    <Modal.Header  closeButton >
      <Modal.Title style={{
        textAlign:"center"
      }}>Delete book?</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{
        textAlign:"center"
      }}>Are you sure you want to delete this Book?</Modal.Body>
    <Modal.Footer className='d-flex justify-content-center'>
      <Button variant="secondary" onClick={handleCloseDeleteBook}>
        cancel
      </Button>
      <Button variant="danger" onClick={()=>{handleCloseDeleteBook();handleDeleteBook(bookKey)}}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>

  )
}

export default DeleteBookModal