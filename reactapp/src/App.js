import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import { FindOne, FindAll, FindCity, FindState } from './pages'


import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import { Nav, Navbar, NavDropdown, Form, FormControl  } from 'react-bootstrap'
import './App.css';


const Home = () => <span>Home</span>;

const Findone = () => <span>FindOne</span>;

const Findall = () => <span>FindAll</span>;

const App = () => (
<div>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Powered by React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>

  <MemoryRouter>
    <Container className="outerContainer">
      <Jumbotron>
        <h1 className="header">Zips</h1>
        <h2>
          Current Page is{' '}
          <Switch>
            <Route path="/about">
              <Home />
            </Route>
            <Route path="/findone">
              <Findone />
            </Route>
            <Route path="/findall">
              <Findall />
            </Route>
            <Route path="/findcity">
              <Findone />
            </Route>
            <Route path="/findstate">
              <Findall />
            </Route>
          </Switch>
        </h2>
          <Switch>
            <Route path="/findall" exact component={FindAll} />
            <Route path="/findone" exact component={FindOne} />
            <Route path="/findcity" exact component={FindCity} />
            <Route path="/findstate" exact component={FindState} />
          </Switch>
        <h2>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar" style={{display: 'flex', justifyContent: 'center'}}>
            <LinkContainer to="/">
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
        </h2>
      </Jumbotron>
    </Container>
  </MemoryRouter>
</div>
);

export default App;
