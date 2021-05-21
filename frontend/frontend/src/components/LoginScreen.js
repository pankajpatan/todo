import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'

import FormContainer from './FormContainer'

function LoginScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            props.history.push('/');
        }
      }, []);

    const submitHandler = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/login/',
            { 'username': email, 'password': password },
            config
        )
        // console.log('data',data)
        if (data.token){
            localStorage.clear();
          localStorage.setItem('token', data.token);
            props.history.push('/')
        }
        else {
            setEmail('')
            setPassword('')
            localStorage.clear()
        }
        
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
         
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
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
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer? <Link
                        to='/signup'>
                        Register
                        </Link>
                </Col>
            </Row>

        </FormContainer>
    )
}

export default LoginScreen