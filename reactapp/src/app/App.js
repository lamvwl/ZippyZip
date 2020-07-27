import React from 'react';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router-dom';

import { FindOne, FindAll, FindCity, FindState } from '../pages'


import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import { Nav, Navbar, NavDropdown, Form, FormControl, Modal, Row, Col } from 'react-bootstrap'
import './App.css';

const Home = () => <span></span>;

const Findone = () => <span>FindOne</span>;

const Findall = () => <span>FindAll</span>;
const FindByCity = () => <span>FindByCity</span>;
const FindByState = () => <span>FindByState</span>;




function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title >
          <h2>Zips</h2>

        </Modal.Title>
      </Modal.Header>
          <MemoryRouter>
        <h2>
                  {' '}
                  <Switch>
            
                    <Route path="/home">
                      <Home />
                    </Route>
                    <Route path="/findone">
                      <Findone />
                    </Route>
                    <Route path="/findall">
                      <Findall />
                    </Route>
                    <Route path="/findcity">
                      <FindByCity />
                    </Route>
                    <Route path="/findstate">
                      <FindByState />
                    </Route>
                  </Switch>
            </h2>
      <Modal.Body>
        <p>
            <Container className="outerContainer">
              <Jumbotron>
                  <Switch>
                    <Route path="/findall" exact component={FindAll} />
                    <Route path="/findone" exact component={FindOne} />
                    <Route path="/findcity" exact component={FindCity} />
                    <Route path="/findstate" exact component={FindState} />
                  </Switch>
                <h4>
                 {' '}
                  <ButtonToolbar className="custom-btn-toolbar" style={{display: 'flex', justifyContent: 'center'}}>
                    <LinkContainer to="/home">
                      <Button>Home</Button>
                    </LinkContainer>
                    <LinkContainer to="/findone">
                      <Button>Sample One Zip Code</Button>
                    </LinkContainer>
                    <LinkContainer to="/findall">
                      <Button>All Zip Codes</Button>
                    </LinkContainer>
                    <LinkContainer to="/findcity">
                      <Button>Find Zip Codes by City</Button>
                    </LinkContainer>
                    <LinkContainer to="/findstate">
                      <Button>Find Zip Codes by State</Button>
                    </LinkContainer>
                  </ButtonToolbar>
                </h4>
              </Jumbotron>
            </Container>
        </p>
      </Modal.Body>
          </MemoryRouter>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide} id="successbtn">
          All Done!!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
   const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>


      <Navbar bg="light" expand="lg" id="navbar">
        <Navbar.Brand href="https://react-bootstrap.github.io">Powered by React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Abracadabra</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="searchbox"/>
            <Button variant="outline-success" id="btn-success-input">Go For It!</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <>
        <Container fluid>
          <Row>
            <Col>
            </Col>
            <Col id="colcenter">
              <Button variant="primary" onClick={() => setModalShow(true)} id="primary-button">
              <b><span>   Get Started </span></b>
              </Button>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </div>
)};

export default App;
