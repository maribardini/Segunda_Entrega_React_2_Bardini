import React from "react";
import CartWidget from "../CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar className="titulo" href="#home">
                    Tienda de Vinos
                </Navbar>
                <Nav className="navbar">
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="productos">
                        <p>Productos</p>
                    </Link>
                    <p>Contacto</p>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default Inicio;