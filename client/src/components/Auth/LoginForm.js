import React, { useState, useCallback } from 'react'
import { Row, Col, Card, TextInput, Button } from 'react-materialize'
import axios from "axios"
import { AuthHook } from './auth.hook'
import { Toast } from '../Toast'

export const LoginForm = () => {

    const { login } = AuthHook()

    const [loginValues, setLogin] = useState({login:"", password:""})

    axios.create({ responseType: "json" })

// WHEN CLICK LOGIN LOGIC
    const loginHandler = async (event) => {
        try {
            let resp = await axios.post(
                '/sign_in',
                { login: loginValues.login, password: loginValues.password },
                { headers: { 'Content-Type': 'application/json' } }
            )
            // Toast(`Welcome, ${loginValues.login}:::${resp.data.jwtToken}`);
            // const TOKEN = resp.data.jwtToken
            // setToken(TOKEN)
            // localStorage.setItem('jwtToken', TOKEN)
            login(resp.data.jwtToken)
        } catch (error) {
            Toast(error.response.data.errors, 'error')
        }
    }

// TEMPLATE
    return (
        <div className="container">
            <Row>
                <Col s={12} m={4} offset={'m4'}>
                    <Card>
                        <Row>
                            <TextInput
                                validate={true}
                                id="login"
                                name="login"
                                s={12}
                                label="Login"
                                onChange={(e) => {
                                    setLogin({...loginValues, login: e.target.value})
                                }}
                                value={loginValues.login}
                                />
                        </Row>
                        <Row>
                            <TextInput
                                validate={true}
                                id="password"
                                name="email"
                                password={true}
                                s={12}
                                label="Password"
                                onChange={(e) => {
                                    setLogin({...loginValues, password: e.target.value})
                                }}
                                value={loginValues.password}
                            />
                        </Row>
                        <Button
                            onClick={loginHandler}
                            // disabled={ loginValues.login && loginValues.password ? false : true}
                        >
                            Login
                        </Button>
                    </Card>
                </Col>
            </Row>   
        </div>
    )
}
