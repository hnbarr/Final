import React, { Component } from 'react'
import './Nav.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'

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
                                <Link to="/articles"><i className="fas fa-book-open"></i> Articles</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/videos"><i className="fab fa-youtube"></i> Videos</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/whiteboarding"><i className="fas fa-highlighter"></i> Whiteboarding</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/help"><i className="fas fa-info-circle"></i> Help</Link>
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