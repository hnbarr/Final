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
                <NavbarBrand href="/">  </NavbarBrand> 
                {/* {<i className="fas fa-chevron-up"></i> &nbsp; stand up} */}
                
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                
                    <Nav className="ml-auto" navbar>
                
                        {/* <NavItem>
                            <NavLink href="https://github.com/AustinCodingAcademy"> <i className="fab fa-github"></i> GitHub</NavLink>
                        </NavItem>
                        took out campus manager here
                        <NavItem>
                            <NavLink href="/link-to-resume"> <i className="far fa-file"></i> Resume </NavLink>
                        </NavItem> */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                               Destinations
                            </DropdownToggle>
                            <DropdownMenu right>
                            {/* took out articles and videos here */}
                            <DropdownItem>
                            <NavLink href="/articles"><i className="fas fa-beer"></i> Bars </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/videos"><i className="fas fa-utensils"></i> Restaurants </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/whiteboarding"><i className="fas fa-hiking"></i> Trails </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="https://austincodingacademy.com/forum/"> <i className="fas fa-tree"></i> Parks</NavLink>
                            </DropdownItem>
                            {/* <DropdownItem>
                                <NavLink href="https://campus.austincodingacademy.com/"> <i className="fas fa-book-open"></i> Campus Manager</NavLink>
                            </DropdownItem> */}
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink href="/account"> <i className="far fa-user-circle"></i> Help</NavLink>
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



{/* <DropdownItem>
    <NavLink href="/articles"><i className="fas fa-book-open"></i> Articles</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink href="/videos"><i className="fab fa-youtube"></i> Videos</NavLink>
</DropdownItem> */}

{/* <NavItem>
    <NavLink href="https://campus.austincodingacademy.com/">Campus Manager</NavLink>
</NavItem> */}