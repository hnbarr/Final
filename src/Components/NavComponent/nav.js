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
                <NavbarBrand href="/">ACA Assist</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/AustinCodingAcademy">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://campus.austincodingacademy.com/">Campus Manager</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Resources
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                <NavLink href="/api here for medium"><i className="fas fa-book-open"></i> Articles</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/api here for youtube"><i className="fab fa-youtube"></i> Videos</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/api here for whiteboarding"><i className="fas fa-highlighter"></i> Whiteboarding</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/guide on how to nav through this site!"><i className="fas fa-info-circle"></i> Help</NavLink>
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