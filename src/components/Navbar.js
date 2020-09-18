import React, { useState,useEffect } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import "./navbar.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
    /*UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText*/
} from 'reactstrap';
import Body from "./body";
import Stage from "./stage";
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
                                <NavLink href="" replace activeClassName="is-active">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#bdy">Prices</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#stg">Classes</NavLink>
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