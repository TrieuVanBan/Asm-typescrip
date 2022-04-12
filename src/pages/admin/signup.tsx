import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {signup} from '../../fontend/api/auth'

type FormInputs = {
    name: string,
    email: string,
    password: string | number
}

const Signup = () => {
    const { register, handleSubmit, formState } = useForm<FormInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = data => {
        signup(data);
        alert("Đăng Ký Thành Công");
        navigate('/index');
        console.log(data);
        
    }
    return (
        <div className="signup">
            <div className="signup1">
                <img width="80px" src="https://cms.must.edu.pk:8083/Images/OpenLIbrarys.png" alt="" />
                <h2>Đăng Kí</h2>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register('email', { required: true })} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username"{...register('name', { required: true })} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password', { required: true })}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Signup