import React, { Component } from 'react'
import './Nav.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class NavComponent extends Component {
    constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
      };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
          loggedIn: true
        });
      }

    render() {
        return (
            <div id='navbar'>
            <Navbar light expand="md">
                <NavbarBrand href="/">JS Advanced Assist</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/AustinCodingAcademy">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://austincodingacademy.com/">ACA</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Resources
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                <NavLink href="/api here for medium">Articles</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/api here for youtube">Videos</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/api here for whiteboarding">Whiteboarding</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/guide on how to nav through this site!">Help</NavLink>
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        )
    }
}