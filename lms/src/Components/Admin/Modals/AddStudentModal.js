import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import shortid from "shortid";
function AddStudentModal({showAdd,handleCloseAdd,studentArr,setstudentArr}) {
  // usestate to  take data from add student modals input fields
  const [addStudent, setaddStudent] = useState({name:"",email:"",password:"",cPassword:""})

  // function to take data on onchange from the modal form
  const handleStudentInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value
   setaddStudent({...addStudent,[name]:value})
  }
  
  const handleAddStudent=()=>{
    setstudentArr([...studentArr,{key: shortid.generate(), name:addStudent.name,email:addStudent.email,password:addStudent.password}])
  }


  return (
    <Modal show={showAdd} onHide={handleCloseAdd}>
      <Modal.Header closeButton>
        <Modal.Title>Add Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="modal-labels">Name</Form.Label>
            <Form.Control
            
            name="name"
            onChange={handleStudentInput}
            value={addStudent.name}
              type="text"
              placeholder="Eg: John Doe"
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="modal-labels">Email</Form.Label>
            <Form.Control
            
            name="email"
            onChange={handleStudentInput}
            value={addStudent.email}
              type="email"
              placeholder="Eg: johndoe@gmail.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label className="modal-labels">Password</Form.Label>
            <Form.Control
            
            onChange={handleStudentInput}
            value={addStudent.password}
            name="password"
              type="password"
              placeholder="*********"
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label className="modal-labels">Confirm Password</Form.Label>
            <Form.Control
            
            onChange={handleStudentInput}
            value={addStudent.cPassword}
            name="cPassword"
              type="password"
              placeholder="*******"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleCloseAdd}>
          cancel
        </Button>
        <Button style={{backgroundColor : "#ED7966",color:"white"}}
        variant="light"
          onClick={() => {
            handleCloseAdd();
            handleAddStudent();
          }}
        >
          Add Student
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddStudentModal;
