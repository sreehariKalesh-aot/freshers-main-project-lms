import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteStudentModal({showdelete,handleCloseDelete,studentArr,setstudentArr,studentKey}) {

   const handleDeleteStudent=(studentKey)=>{
        console.log(studentKey);
        setstudentArr(studentArr.filter((student) => student.key !== studentKey));
        console.log(studentArr);
      
   }


  return (

    <>
    {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={showdelete} onHide={handleCloseDelete}>
        <Modal.Header  closeButton >
          <Modal.Title style={{
            textAlign:"center"
          }}>Delete Student?</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
            textAlign:"center"
          }}>Are you sure you want to delete this Student?</Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant="secondary" onClick={handleCloseDelete}>
            cancel
          </Button>
          <Button variant="danger" onClick={()=>{handleCloseDelete();handleDeleteStudent(studentKey)}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
    
  )
}

export default DeleteStudentModal