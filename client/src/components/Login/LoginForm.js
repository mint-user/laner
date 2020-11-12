import {React} from 'react'
import { Row, Col, Card, TextInput, Button } from 'react-materialize'
import axios from "axios"

export const LoginForm = () => {

    axios.create({
        // baseURL: "http://localhost:5000/",
        baseURL: "/",
        responseType: "json"
      })

      
    const loginHandler = () => {
        console.log("send credentials")

        let userData = axios.post('/sign_in', {
            login: "admin",
            password: "admin"
        }).then(userData => console.log(userData))
    }

    return (
        <div className="container">
            <Row>
                <Col s={12} m={4} offset={'m4'}>
                    <Card>
                        <Row>
                            <TextInput
                                validate={true}
                                id="email"
                                name="email"
                                email={true}
                                s={12}
                                label="Email"
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
                            />
                        </Row>
                        <Button onClick={loginHandler} >
                            Login
                        </Button>
                    </Card>
                </Col>
            </Row>   
        </div>
    )
}
