import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddStudent({showAdd,setShowAdd,handleCloseAdd}) {
  return (
    <Modal show={showAdd} onHide={handleCloseAdd}>
      <Modal.Header closeButton>
        <Modal.Title>Add Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg: John Doe"
              autoFocus
            //   onChange={handleAddTitle}
            //   value={title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Eg: johndoe@gmail.com"
            //   onChange={handleAddTitle}
            //   value={title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*********"
            //   onChange={handleAddTitle}
            //   value={title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*******"
            //   onChange={handleAddTitle}
            //   value={title}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseAdd}>
          cancel
        </Button>
        <Button style={{backgroundColor : "#ED7966"}}
          variant="primary"
          onClick={() => {
            handleCloseAdd();
            // handleAddTask();
          }}
        >
          Add Student
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddStudent;
