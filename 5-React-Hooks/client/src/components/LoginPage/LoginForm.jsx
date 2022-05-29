import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from "react-bootstrap";
import './social.css';
import {ReactComponent as GithubLogo} from '../../img/github.svg';
import {ReactComponent as GoogleLogo} from '../../img/google.svg';

export const LoginForm = () => {
  return (
    <div>
      <div className="bg-info">
        <h1>Log in</h1>
      </div>
      <Container style={{paddingRight: 300, paddingLeft: 300, paddingTop: 20}}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me"/>
          </Form.Group>
          <Row>
            <Col>
              <Button variant="primary" type="submit" style={{margin: 10}}>
                Sign in
              </Button>
            </Col>
            <Col>
              <Button variant="primary" type="submit" style={{margin: 10}}>
                Log in
              </Button>
            </Col>
          </Row>
          <Row>
            <a href={"https://backshop.azurewebsites.net/authenticate/google"} className="social google">
              <GoogleLogo/>
              <span>Log in with Google</span>
            </a>
          </Row>
          <Row>
            <a href={"https://backshop.azurewebsites.net/authenticate/github"} className="social github">
              <GithubLogo/>
              <span>Log in with GitHub</span>
            </a>
          </Row>
        </Form>
      </Container>
    </div>
  );
}