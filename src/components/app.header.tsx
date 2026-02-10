"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

function AppHeader() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link href="/" className="navbar-brand">
                        Harkins
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/facebook" className="nav-link">
                            Facebook
                        </Link>
                        <Link href="/youtube" className="nav-link">
                            YouTube
                        </Link>
                        <Link href="/blogs" className="nav-link">
                            Blogs
                        </Link>
                        {/* chac la Link + nav-link = Nav.Link */}
                        {/* <Nav.Link href="/twitter">Twitter</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;
