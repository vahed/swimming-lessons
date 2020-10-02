import React, { useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./navbar.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import logo from "../images/logo.jpg";

const WebNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
            <Navbar className="navcolor" light expand="md">
                <NavbarBrand href="/"><img src={logo} width="50" height="50" className="logo" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Router>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/" >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#bdy">Prices</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#stg">Stages</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#cform">Enquiry</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#loc">Location</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://forms.app/gesschool/gess-registeration-form">Register</NavLink>
                            </NavItem>
                        </Nav>
                    </Router>

                </Collapse>
            </Navbar>
    );
}

export default WebNavbar;
