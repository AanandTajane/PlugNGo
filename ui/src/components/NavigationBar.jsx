
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style-navbar.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially, the user is not logged in
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true when the user logs in
  };

  const handleLogout = () => {
    sessionStorage.clear;
    setIsLoggedIn(false); // Set isLoggedIn to false when the user logs out
    navigate("/login")
  };


  return (
    <div style={{ width: "100%" }}>
      <Navbar className="navbar" bg="primary" data-bs-theme="dark" padding="0">
        <Container>
          <Navbar.Brand href="#home" >
            <img src="/src/assets/PlugNGo-logos_white.png" alt="Not Found" margin={0} height={100} width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutUs">About Us</Nav.Link>
              <Nav.Link href="/contactUs">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;