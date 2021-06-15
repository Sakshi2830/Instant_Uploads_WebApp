import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/login")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return ( <div className="signUpform">
  <Card className="SignUpCard">
    <Card.Body className="mt-4">
      <h2 className="text-center">Sign Up</h2>
          {/* {currentUser && console.log(currentUser.email)} */}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form 
      onSubmit={handleSubmit}
      >
        <Form.Group id="email">
          <h4>Email</h4>
          <Form.Control className="inputField" type="email" ref={emailRef} required />
        </Form.Group>
        <Form.Group id="password">
          <h4>Password</h4>
          <Form.Control className="inputField" type="password" ref={passwordRef} required />
        </Form.Group>
        <Form.Group id="password-confirm">
          <h4>Confirm Password</h4>
          <Form.Control className="inputField" type="password" ref={passwordConfirmRef} required />
        </Form.Group>
        <Button 
        disabled={loading}
         className="w-100" type="submit">
          Sign Up
        </Button>
      </Form>
    </Card.Body>
  </Card>
  <div className="w-100 text-center mt-2">
    Already have an account?
     <Link to="/login">
        Log In
        </Link>
  </div>
 </div> );
}