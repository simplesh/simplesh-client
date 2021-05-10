import React, { FC } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>Simple.sh</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
