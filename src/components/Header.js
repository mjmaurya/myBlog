import React,{Component} from 'react';
import {Navbar,Nav,NavbarBrand,NavbarToggler,NavItem,Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../shared/writer.png'
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
           <div className="container-fluid header">
                <div className="container">
                <Navbar className="header" dark expand="md">
                <NavbarToggler onClick={this.navToggle} />
                <NavbarBrand href="/"><img width="50" src='https://i.postimg.cc/zXJzW48V/writer.png' alt="YourArticles"/>  <b>YourArticle</b></NavbarBrand>
                <Collapse isOpen={this.state.navToggler} navbar >
                <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/allPosts">Articles</NavLink>
                </NavItem>
                </Nav>
                </Collapse>
                </Navbar>
            </div>
           </div>
        )
    }
}

export default Header