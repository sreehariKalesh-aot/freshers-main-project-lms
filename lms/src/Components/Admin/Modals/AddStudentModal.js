import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import shortid from "shortid";

function AddStudentModal({
  showAdd,
  handleCloseAdd,
  studentArr,
  setstudentArr,
  isEditing,
  setisEditing,
  editKey,
  editName,
  seteditName,
  editEmail,
  seteditEmail,
  editPassword,
  seteditPassword,
  editCpassword,
  seteditCPassword,
}) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  // functions to take data onchange from the modal from for adding students
  const handleStudentNameInput = (e) => {
    setname(e.target.value);
  };
  const handleStudentEmailInput = (e) => {
    setemail(e.target.value);
  };
  const handleStudentPasswordInput = (e) => {
    setpassword(e.target.value);
  };
  const handleStudentcPasswordInput = (e) => {
    setcPassword(e.target.value);
  };

  // function to take  edit data onchange from the modal form
  const handleEditNameInput = (e) => {
    seteditName(e.target.value);
  };
  const handleEditEmailInput = (e) => {
    seteditEmail(e.target.value);
  };
  const handleEditPasswordInput = (e) => {
    seteditPassword(e.target.value);
  };
  const handleEditcPasswordInput = (e) => {
    seteditCPassword(e.target.value);
  };
  // function to save edit
  const handleSaveEdit = () => {
    if (
      !editName ||
      !editEmail ||
      !editPassword ||
      !editCpassword ||
      editPassword != editCpassword
    ) {
      seteditStudentError(true);
    } else {
      setisEditing(false);
      handleCloseAdd();
      setstudentArr(
        studentArr.map((student) => {
          if (student.key === editKey) {
            return {
              ...student,
              name: editName,
              email: editEmail,
              password: editPassword,
              cPassword: editCpassword,
            };
          }
          return student;
        })
      );
    }
  };

  // use state for add student form errors
  const [addStudentError, setaddStudentError] = useState(false);
  // usestate for edit student errors
  const [editStudentError, seteditStudentError] = useState(false);

  // function to add student
  const handleAddStudent = () => {
    if (!name || !email || !password || !cPassword || password != cPassword) {
      setaddStudentError(true);
    } else {
      handleCloseAdd();
      setstudentArr([
        ...studentArr,
        {
          key: shortid.generate(),
          name: name,
          email: email,
          password: password,
          cPassword: cPassword,
        },
      ]);
    }
  };

  return (
    <Modal
      show={showAdd}
      onHide={() => {
        handleCloseAdd();
        setisEditing(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{isEditing ? "Edit Student" : "Add Student"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="modal-labels">Name</Form.Label>
            <Form.Control
              name="name"
              value={isEditing ? editName : name}
              type="text"
              placeholder="Eg: John Doe"
              autoFocus
              required
              onChange={
                isEditing ? handleEditNameInput : handleStudentNameInput
              }
              autocomplete="off"
            />
            {addStudentError && !name ? (
              <p className="error">Please enter a name</p>
            ) : (
              ""
            )}
            {editStudentError && !editName ? (
              <p className="error">Please enter a name</p>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="modal-labels">Email</Form.Label>
            <Form.Control
              name="email"
              onChange={
                isEditing ? handleEditEmailInput : handleStudentEmailInput
              }
              value={isEditing ? editEmail : email}
              type="email"
              placeholder="Eg: johndoe@gmail.com"
              autocomplete="off"
            />
            {addStudentError && !email ? (
              <p className="error">Please enter an Email</p>
            ) : (
              ""
            )}
            {editStudentError && !editEmail ? (
              <p className="error">Please enter an Email</p>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label className="modal-labels">Password</Form.Label>
            <Form.Control
              onChange={
                isEditing ? handleEditPasswordInput : handleStudentPasswordInput
              }
              value={isEditing ? editPassword : password}
              name="password"
              // type="password"
              type="text"
              placeholder="*********"
              autocomplete="off"
            />
            {addStudentError && !password ? (
              <p className="error">Please enter a Password</p>
            ) : (
              ""
            )}
            {editStudentError && !editPassword ? (
              <p className="error">Please enter a Password</p>
            ) : (
              ""
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label className="modal-labels">Confirm Password</Form.Label>
            <Form.Control
              onChange={
                isEditing
                  ? handleEditcPasswordInput
                  : handleStudentcPasswordInput
              }
              value={isEditing ? editCpassword : cPassword}
              name="cPassword"
              // type="password"
              type="text"
              placeholder="*******"
              autocomplete="off"
            />
            {addStudentError && password != cPassword ? (
              <p className="error">Please Confirm password</p>
            ) : (
              ""
            )}
            {editStudentError && editCpassword != editPassword ? (
              <p className="error">Please Confirm password</p>
            ) : (
              ""
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-secondary"
          onClick={() => {
            handleCloseAdd();
            setisEditing(false);
          }}
        >
          cancel
        </Button>
        <Button
          style={{ backgroundColor: "#ED7966", color: "white" }}
          variant="light"
          type="submit"
          onClick={() => {
            {
              isEditing ? handleSaveEdit() : handleAddStudent();
            }
          }}
        >
          {isEditing ? "Save Edits" : "Add Student"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddStudentModal;
