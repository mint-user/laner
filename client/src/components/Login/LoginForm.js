import {React, useState} from 'react'
import { Row, Col, Card, TextInput, Button } from 'react-materialize'
import axios from "axios"

export const LoginForm = () => {

    const [loginValues, setLogin] = useState({login:"", password:""})

    axios.create({ responseType: "json" })

    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            //place your reentry code
            // console.log(error.response)
            return error.response;
        }
            return error;
    });

    const loginHandler = (event) => {
        let userData = axios.post('/sign_in', {
            login: loginValues.login,
            password: loginValues.password
        })
        .then(resp => {
            console.log(`ANSWER:`, resp)
            if(resp.status===401){
                console.error(resp.data)
            } else {
                console.log('norm')
            }
        })
        .catch(error => {
            let errObj = JSON.parse(JSON.stringify(error))
            console.log("error.response", error.response)
            console.error(`ANSWER:`, errObj)
        })
    }

    return (
        <div className="container">
            <p>{JSON.stringify(loginValues)}</p>
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
