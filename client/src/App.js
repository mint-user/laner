import { Row, Col, Card, Icon, TextInput, CardPanel, CardTitle, Button, Navbar, NavItem } from 'react-materialize';
import M from "materialize-css";

function App() {
  return (
    <div>
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="#">Logo</a>}
      >
        <NavItem>Github</NavItem>
      </Navbar>
      <div className="container">
        <Row>
          <Col s={12} m={4} offset={'m4'}>
            <Card>
              <form action="http://localhost:3000/sign_in">
                <Row>
                  <TextInput
                    validate={true}
                    id="email"
                    email={true}
                    s={12}
                    label="Email"
                  />
                </Row>
                <Row>
                  <TextInput
                    validate={true}
                    id="password"
                    password={true}
                    s={12}
                    label="Password"
                  />
                </Row>
                <Button type="submit">Login</Button>
              </form>
            </Card>
          </Col>
        </Row>    
      </div>
    </div>
  );
}

export default App;
