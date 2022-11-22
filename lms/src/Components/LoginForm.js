import React from "react";
import Form from "react-bootstrap/Form";

function LoginForm({
  iemail,
  handleEmail,
  loginError,
  ipassword,
  handlePassword,
  handleAuth,
  studentLogin,
  studentArr,
  studentPassword,
  studentEmail,
  handleStudentEmail,
  handleStudentPassword,
  handleStudentAuth,
}) {


  return (
    <Form className="login-form" onSubmit={handleAuth}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={studentLogin ? studentEmail : iemail}
          onChange={studentLogin ? handleStudentEmail : handleEmail}
        />
        {loginError && iemail.length <= 0 ? (
          <p className="error">Please enter Email</p>
        ) : (
          ""
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={studentLogin ? studentPassword : ipassword}
          onChange={studentLogin ? handleStudentPassword : handlePassword}
        />
        {loginError && ipassword.length <= 0 ? (
          <p className="error">please enter password</p>
        ) : (
          ""
        )}
      </Form.Group>
      <button
        type="submit"
        className="login-btn py-2"
        onClick={() => {
          {
            studentLogin ? handleStudentAuth() : handleAuth();
          }
        }}
      >
        Login
      </button>

   
    </Form>
  );
}

export default LoginForm;
