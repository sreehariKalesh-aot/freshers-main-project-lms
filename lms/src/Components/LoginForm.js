import React from "react";
import Form from "react-bootstrap/Form";

function LoginForm({
  iemail,
  handleEmail,
  loginError,
  ipassword,
  handlePassword,
  handleAuth,
  studentBoolean,
  studentArr,
  studentPassword,
  studentEmail,
  handleStudentEmail,
  handleStudentPassword,
  handleStudentAuth,
  studentLoginError
}) {
  return (
    <Form className="login-form" onSubmit={handleAuth}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={studentBoolean === "student" ? studentEmail : iemail}
          onChange={
            studentBoolean === "student" ? handleStudentEmail : handleEmail
          }
        />
        {loginError && iemail.length <= 0 ? (
          <p className="error">Please enter Email</p>
        ) : (
          ""
        )}
        {studentLoginError && studentEmail.length <= 0 ? (
          <p className="error">Please enter aa Email</p>
        ) : (
          ""
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={studentBoolean === "student" ? studentPassword : ipassword}
          onChange={
            studentBoolean === "student"
              ? handleStudentPassword
              : handlePassword
          }
        />
        {loginError && ipassword.length <= 0 ? (
          <p className="error">please enter  password</p>
        ) : (
          ""
        )}
        {studentLoginError && studentPassword.length <= 0 ? (
          <p className="error">please enter aa password</p>
        ) : (
          ""
        )}
      </Form.Group>
      <button
        type="submit"
        className="login-btn py-2"
        onClick={() => {
          {
            studentBoolean !== "student" ? handleAuth() :handleStudentAuth() ;
          }
        }}
      >
        Login
      </button>
      {studentBoolean === "student" ? (
        <p className="pt-3 d-flex justify-content-center register">
          Don’t have an account? &nbsp;
          <span className="orng-register">Register</span>
        </p>
      ) : (
        <p className="pt-3 d-flex justify-content-center register">.</p>
      )}
    </Form>
  );
}

export default LoginForm;
