import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

type Props = {}

const signup = (props: Props) => {
    return (
        <div className="signup">
            <div className="signup1">
                <img width="80px" src="https://vietucbeef.com/img/login-icon.jpg" alt="" />
                <h2>Đăng Nhập</h2>
            </div>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    <NavLink to="" className="pass">
                        Forgot password?
                    </NavLink>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default signup