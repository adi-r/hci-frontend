import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import Form1 from './Form';
import Final from './Final';
import Design from './Design';

import About from './About';
import logo from "./forager1.png";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#"> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '80px' , fontSize : '20px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home"> <img style = {{ marginLeft : "10px important!" ,  width : "300px" , height : "70px"}}src = {logo} /> </Nav.Link>
                                <Nav.Link style={{ marginLeft : '50px'}} as={Link} to="/concept">Conceptualization</Nav.Link>
                                <Nav.Link style={{ marginLeft : '50px'}} as={Link} to="/requirement">Requirement Specs</Nav.Link>
                                <Nav.Link style={{ marginLeft : '50px'}} as={Link} to="/design">Design & Sketches</Nav.Link>
                                <Nav.Link style={{ marginLeft : '50px'}} as={Link} to="/form">Formative Eval.</Nav.Link>
                                <Nav.Link style={{ marginLeft : '50px'}} as={Link} to="/final">Final Implementation</Nav.Link>

                            </Nav>
                          
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                 

                        <Route style = {{}} path="/concept">
                            <About />
                        </Route>

                        <Route path="/requirement">
                            <Contact />
                        </Route>

                        <Route path="/design">
                            <Design />
                        </Route>

                        <Route path="/form">
                            <Form1 />
                        </Route>

                        <Route path="/final">
                            <Final />
                        </Route>

                        <Route path="/home">
                            <Home />
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>
                       
                    </Switch>
                </div>
            </Router>
        )
    }
}
