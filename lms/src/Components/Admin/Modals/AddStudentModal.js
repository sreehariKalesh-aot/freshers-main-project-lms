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
  // usestate for destructuring the edit student
  // const [editName, seteditName] = useState("")
  // seteditName(editName.name)
 

  // usestate to  take data from add student modals input fields

  // const [addStudent, setaddStudent] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   cPassword: "",
  // });
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [cPassword, setcPassword] = useState("")

  console.log(isEditing);

  // functions to take data onchange from the modal from for adding students
  const handleStudentNameInput = (e) => {
    setname(e.target.value)
    console.log(name)

  };
  const handleStudentEmailInput = (e) => {
    console.log("add", e)
      setemail(e.target.value)
  };
  const handleStudentPasswordInput = (e) => {
      setpassword(e.target.value)
  };
  const handleStudentcPasswordInput = (e) => {
        setcPassword(e.target.value)
  };

  // function to take data on onchange from the modal form
  // const handleStudentInput = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   setaddStudent({ ...addStudent, [name]: value });
  // };

  // function to take  edit data onchange from the modal form
  const handleEditNameInput=(e)=>{
        seteditName(e.target.value)

  }
  const handleEditEmailInput=(e)=>{
    console.log("edit", e);
    seteditEmail(e.target.value)

}
const handleEditPasswordInput=(e)=>{
  seteditPassword(e.target.value)

}
const handleEditcPasswordInput=(e)=>{
  seteditCPassword(e.target.value)

}
// function to save edit
const handleSaveEdit=()=>{
  if(!editName||!editEmail||!editPassword||!editCpassword||editPassword != editCpassword){
    seteditStudentError(true)
    
  }
  else{

  setisEditing(false)
  handleCloseAdd();
  console.log("save done");
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
    );}
}
 
// use state for add student form errors
const [addStudentError, setaddStudentError] = useState(false)
// usestate for edit student errors
const [editStudentError, seteditStudentError] = useState(false)

// function to add student
  const handleAddStudent = () => {
    if(!name||!email||!password||!cPassword||password != cPassword){
      setaddStudentError(true)
      
    }
    else{

    handleCloseAdd();
    console.log(cPassword)
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
    console.log(studentArr)
    }

  };

  console.log(editCpassword)
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
              // {isEditing? value={addStudent.name}:value={editStudent.name}}
              //  value={editName}
              value={isEditing ? editName : name}
              type="text"
              placeholder="Eg: John Doe"
              autoFocus
              required
           
                onChange={isEditing  ? handleEditNameInput :  handleStudentNameInput}
            />
            {addStudentError&& !name? <p className="error">Please enter a name</p>:""}
            {editStudentError&& !editName? <p className="error">Please enter a name</p>:""}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="modal-labels">Email</Form.Label>
            <Form.Control
              name="email"
              // onChange={()=>{{isEditing? handleStudentEmailInput() : handleEditEmailInput() }}}
              onChange={isEditing  ? handleEditEmailInput :  handleStudentEmailInput}

              // value={addStudent.email}
              value={isEditing ? editEmail : email}
              type="email"
              placeholder="Eg: johndoe@gmail.com"
            />
            {addStudentError&& !email? <p className="error">Please enter an Email</p>:""}
            {editStudentError&& !editEmail? <p className="error">Please enter an Email</p>:""}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label className="modal-labels">Password</Form.Label>
            <Form.Control
            // onChange={()=>{{isEditing? handleDtudentPasswordInput() : handleEditPasswordInput() }}}
            onChange={isEditing  ? handleEditPasswordInput :  handleStudentPasswordInput}

            // value={addStudent.password}
              value={isEditing ? editPassword : password}
              name="password"
              // type="password"
              type="text"
              placeholder="*********"
            />
            {addStudentError&& !password? <p className="error">Please enter a Password</p>:""}
            {editStudentError&& !editPassword? <p className="error">Please enter a Password</p>:""}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label className="modal-labels">Confirm Password</Form.Label>
            <Form.Control
            // onChange={()=>{{isEditing? handleStudentcPasswordInput() : handleEditcPasswordInput() }}}
            onChange={isEditing  ? handleEditcPasswordInput :  handleStudentcPasswordInput}

              // value={addStudent.cPassword}
              value={isEditing ? editCpassword : cPassword}
              name="cPassword"
              // type="password"
              type="text"
              placeholder="*******"
            />
            {addStudentError&& password != cPassword? <p className="error">Please Confirm password</p>:""}
            {editStudentError&& editCpassword != editPassword? <p className="error">Please Confirm password</p>:""}
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
          onClick={() => {{isEditing ? handleSaveEdit(): handleAddStudent();}}}
        >
          {isEditing ? "Save Edits" : "Add Student"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddStudentModal;
