import React,{Component} from 'react';
import {Navbar,Nav,NavbarBrand,NavbarToggler,NavItem,Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        
        this.state={
            navToggler:false
        }
        this.navToggle=this.navToggle.bind(this)
    }
navToggle(){
    this.setState({
        navToggler:!this.state.navToggler
    })
}
    render(){

        return(
            <div className="container">
                <Navbar light expand="md">
                <NavbarToggler onClick={this.navToggle} />
                <NavbarBrand href="/">Blogger</NavbarBrand>
                <Collapse isOpen={this.state.navToggler} navbar >
                <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/allPosts">MyArticles</NavLink>
                </NavItem>
                </Nav>
                </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header