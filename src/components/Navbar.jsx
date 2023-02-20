import React from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Inicio() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar className="titulo" href="#home">
                    Tienda de Vinos
                </Navbar>
                <Nav className="navbar">
                    <p>Nosotros</p>
                    <p>Productos</p>
                    <p>Contacto</p>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default Inicio;