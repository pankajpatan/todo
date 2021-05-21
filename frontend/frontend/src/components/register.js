  
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'

import axios from 'axios'
import FormContainer from './FormContainer'


function RegisterScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
  

  

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('http://localhost:3000/todo');
          } 
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
    
            const { data } = await axios.post(
                '/api/register/',
                { 'name': name, 'email': email, 'password': password },
                config
            )
            if (data.token){
                localStorage.clear();
              localStorage.setItem('token', data.key);
              window.location.replace('http://localhost:3000/todo');
            }
            else {
                setName('')
                setConfirmPassword('')
                setEmail('')
                setPassword('')
                localStorage.clear()
            }
        }

    }

    return (
        <FormContainer>
           
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Register
                </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account? <Link
                        to={'/login'}>
                        Sign In
                        </Link>
                </Col>
            </Row>
        </FormContainer >
    )
}

export default  RegisterScreen