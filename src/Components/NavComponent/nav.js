import React, { Component } from 'react'
import './Nav.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import {Link} from 'react-router-dom'

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
                <NavbarBrand href="/"> <i className="fas fa-chevron-up"></i> &nbsp; stand up </NavbarBrand> 

                
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                
                    <Nav className="ml-auto" navbar>
                    
                        <NavItem>
                            <NavLink href="https://github.com/AustinCodingAcademy"> <i className="fab fa-github"></i> GitHub</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                               Resources
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                            <NavLink href="https://youtube.com"><i className="fab fa-youtube"></i> Youtube </NavLink>
                            </DropdownItem>

                            <DropdownItem>
                                <NavLink href="https://stackoverflow.com"><i className="fas fa-question-circle"></i> StackOverflow </NavLink>
                            </DropdownItem>
                            
                            <DropdownItem>
                                <NavLink href="/notes"><i className="fas fa-book-open"></i> Notes </NavLink>
                            </DropdownItem>
                            
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink href="/account"> <i className="far fa-user-circle"></i> Logout</NavLink>
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


{/* <NavItem>
    <NavLink href="https://campus.austincodingacademy.com/">Campus Manager</NavLink>
</NavItem> */}