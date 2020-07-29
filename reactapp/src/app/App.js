import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import { FindOne, FindAll, FindCity, FindState } from '../pages'

import Toggle from '../Toggle.js'


import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

import { Nav, Navbar, NavDropdown, Form, FormControl, Modal, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import './App.css';

const Home = () => <span></span>;

const Findone = () => <span>Find One Zipcode</span>;
const Findall = () => <span>Find All</span>;
const FindByCity = () => <span>Find By City</span>;
const FindByState = () => <span>Find By State</span>;

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
          <Jumbotron id="jumbotron">
            <Container fluid>
              <Row>
                <Col id="col-dropdown-access-button">
                  <DropdownButton  title="Access Zip Codes" id="btn-dropdown-toggle-access">
                    <LinkContainer to="#">
                      <Dropdown.Item to="#" onClick={props.onHide}>Home</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/findone">
                      <Dropdown.Item to="/findone">Sample One Zip Code</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/findall">
                      <Dropdown.Item href="/findall">All Zip Codes</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/findcity">
                      <Dropdown.Item href="/findCity">Find Zip Codes by City</Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/findstate">
                      <Dropdown.Item href="/findSTate">Find Zip Codes by State</Dropdown.Item>
                    </LinkContainer>
                  </DropdownButton>
                </Col>
                <Col xs={8} id="col-results">
                  <label htmlFor="material-switch">
                    <span>Query </span>
                    <Toggle />
                    <span>Limit </span>
                    <Toggle />
                  </label>
                <Switch>
                  <Route path="/findall" exact component={FindAll} />
                  <Route path="/findone" exact component={FindOne} />
                  <Route path="/findcity" exact component={FindCity} />
                  <Route path="/findstate" exact component={FindState} />
                </Switch>
                </Col>
              </Row>
            </Container>
          <h4>
          {' '}
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
            <NavDropdown title="Databases" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Zipcodes</NavDropdown.Item>
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
