import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.png'
import './header.css'
export default function Header() {
    return (
        <header>
            <div>
                <div>
                    <img src={logo} alt='logo' />
                    <h3>Covid19 Statistics</h3>
                    <p>A website to provide you with all the updates on Covid-19 statistics around the world</p>
                </div>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="AllCountries">All Countries</Nav.Link>
                            <Nav.Link href="MyRecords">My Records</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </header>
    )
}
