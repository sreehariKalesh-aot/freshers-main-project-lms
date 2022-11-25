import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteStudentModal({
  showdelete,
  handleCloseDelete,
  studentArr,
  setstudentArr,
  studentKey,
}) {
  const handleDeleteStudent = (studentKey) => {
    setstudentArr(studentArr.filter((student) => student.key !== studentKey));
  };

  return (
    <>
      <Modal show={showdelete} onHide={handleCloseDelete}>
        <Modal.Title
          style={{
            textAlign: "center",
          }}
          className="pt-4"
        >
          Delete Student?
        </Modal.Title>
        <Modal.Body
          style={{
            textAlign: "center",
          }}
        >
          Are you sure you want to delete this Student?
        </Modal.Body>
        <div className="d-flex justify-content-center pb-4 gap-4">
          <Button variant="secondary" onClick={handleCloseDelete}>
            cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleCloseDelete();
              handleDeleteStudent(studentKey);
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteStudentModal;
