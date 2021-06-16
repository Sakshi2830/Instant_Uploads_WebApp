import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return ( <div className="loginForm">
  <Card className="SignUpCard">
    <Card.Body className="mt-4">
      <h2 className="instant-up">Instant Uploads</h2>
          {/* {currentUser && console.log(currentUser.email)} */}
      {error && <Alert class="alert" variant="danger">{error}</Alert>}
      <Form 
      onSubmit={handleSubmit}
      >
        <Form.Group id="email">
          <h4>Email</h4>
          <Form.Control className="inputField"  placeholder="Enter your email address"  type="email" ref={emailRef} required />
        </Form.Group>
        <Form.Group id="password">
          <h4>Password</h4>
          <Form.Control className="inputField" type="password" ref={passwordRef} required />
        </Form.Group>
        <Button 
        disabled={loading}
         className="buttonss" type="submit">
          Login
        </Button>
      </Form>
      
  <div className="w-100 text-center mt-3">

  <Link to="/forgotpassword">
       Forgot password?
        </Link>
  </div>
    </Card.Body>
  </Card>
  <div className="footer">
    Need an account?
     <Link to="/signup">
        Sign Up
        </Link>
  </div>
 </div> );
}