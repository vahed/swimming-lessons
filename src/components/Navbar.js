import React, { useState } from 'react';
import "./navbar.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const WebNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navcolor" light expand="md">
                <NavbarBrand href="/">GESS programme</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Instructors</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Classes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Location</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default WebNavbar;