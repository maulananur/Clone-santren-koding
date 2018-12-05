import React, {Component} from 'react';
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
    DropdownItem } from 'reactstrap';

class NavBar extends Component{
    render(){
        return(
            <div>
               <Navbar>
                   <NavbarBrand>Santren Koding</NavbarBrand>
                   <Nav>
                       <NavItem>
                           <NavLink>Kajiian Koding</NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink>Mondok Koding</NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink>Kitab Koding</NavLink>
                       </NavItem>
                   </Nav>
               </Navbar>
            </div>
        )
    }
}

export default NavBar;