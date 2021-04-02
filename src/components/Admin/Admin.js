import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AddEvent from '../AddEvent/AddEvent';

const Admin = () => {
    return (
        <div>
            <div>
            <Navbar bg="light" variant="light">
    <Nav className="mr-auto mt-5">
      <Nav.Link to="/addEvent">Add Product</Nav.Link>
    </Nav>
    
  </Navbar>
            </div>
            <AddEvent></AddEvent>
        </div>
    );
};

export default Admin;