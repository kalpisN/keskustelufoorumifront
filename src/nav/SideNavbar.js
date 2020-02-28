import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import  "./SideNavBar.css"

import {
Link
} from 'react-router-dom'
import Login from "../user/login/Login";


function SideNavbar() {
    return (
        <div className="custom-sidebar col-md-3">
                <Navbar className="custom-navbar" bg="dark" variant="dark">
                    <Nav variant="pills" defaultActiveKey="#home" className="nav flex-column">
                    <Navbar.Brand href="/">Academylauta</Navbar.Brand>
                        <Nav.Link className="home" href="" as="span">
                            <Link className="nav-link" to="" >Home</Link>
                        </Nav.Link>
                        <Login className="login-form"/>
                        <Nav.Link href="/b" as="span" eventKey="b" >
                            <a className="nav-link" href="/b" >Random</a>
                        </Nav.Link>
                        <Nav.Link href="/vg" as="span" eventKey="vg" >
                            <a className="nav-link" href="/vg" >Video Games</a>
                        </Nav.Link>
                        <Nav.Link href="/ani" as="span" eventKey="ani">
                            <a className="nav-link" href="/ani">Animals</a>
                        </Nav.Link>
                        <Nav.Link href="/hax" as="span" eventKey="hax">
                            <a className="nav-link" href="/hax">Coding</a>
                        </Nav.Link>
                        <Nav.Link href="#" as="span" eventKey="fit">
                            <a className="nav-link" href="/fit">Fitness</a>
                        </Nav.Link>
                        <Nav.Link href="#" as="span" eventKey="spo">
                            <a className="nav-link" href="/spo">Sports</a>
                        </Nav.Link>
                        <Nav.Link href="#" as="span" eventKey="nom">
                            <a className="nav-link" href="/nom">Food</a>
                        </Nav.Link>
                        <Nav.Link href="#" as="span" eventKey="pol">
                            <a className="nav-link" href="/pol">Politics</a>
                        </Nav.Link>
                    </Nav>
                </Navbar>
        </div>
    )
}
export default SideNavbar
