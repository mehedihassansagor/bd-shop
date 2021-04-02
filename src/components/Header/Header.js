import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    console.log("this is porps",props)

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand >BD SHOP</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link  as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                <Nav.Link  as={Link} to="/login">Login</Nav.Link>
                <Nav.Link  as={Link} to="/order">Order's</Nav.Link>
                <Nav.Link >{props.loggedInUser.name}</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    );
};

export default Header;