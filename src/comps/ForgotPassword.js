import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"



export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return ( <div className="forgotPaswd">
        <Card className="SignUpCard">
          <Card.Body className="mt-4">
            <h2 className="text-center">Password Reset</h2>
                {/* {currentUser && console.log(currentUser.email)} */}
            {error && <Alert variant="danger">{error}</Alert>}
             {message && <Alert variant="success">{message}</Alert>}
            <Form 
            onSubmit={handleSubmit}
            >
              <Form.Group id="email">
                <p className="text-center">Enter your <strong class="pika-label">Email address</strong></p>
                <Form.Control className="inputField" type="email" ref={emailRef} required />
              </Form.Group>
            
              <Button 
              disabled={loading}
               className="w-100" type="submit">
                Reset Password
              </Button>
            </Form>
            
        <div className="w-100 text-center mt-3">
    
        <Link to="/login">
            Back to Login
              </Link>
        </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account?
           <Link to="/signup">
              Sign Up
              </Link>
        </div>
       </div> );
}