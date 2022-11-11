import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <div>
      <div className="d-flex align-items-center gap-3">
        <img src="./images/logo.png" className="mt-5 ms-5 logo" alt="" />
        <p className="mt-5 pt-3 lms">LMS</p>
      </div>
      <div className="login-div">
        <p className="login-p">Login</p>
        <p className="welcome-p">Welcome back! Please enter your details.</p>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button type="submit" className="login-btn">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
