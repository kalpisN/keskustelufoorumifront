import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import  "./SideNavBar.css"

import {
    BrowserRouter as Router,
    Route, Link, Switch
} from 'react-router-dom'
import Topic from "../chat/Topic";

function SideNavbar() {
    return (
        <div style={{width: "12%"}}>
            <Router>
                <Navbar className="custom-navbar" bg="dark" variant="dark" >
                    <Nav variant="pills" defaultActiveKey="#home" className="nav flex-column">
                    <Navbar.Brand href="#home">Fooooooorumi</Navbar.Brand>

                        <Nav.Link href="#" as="span">
                            <Link className="nav-link" to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#" as="span" eventKey="b">
                            <Link className="nav-link" to="/b">Random</Link>
                        </Nav.Link>
                        <Nav.Link href="#" as="span" eventKey="c">
                            <Link className="nav-link" to="/c">Aihe</Link>
                        </Nav.Link>
                    </Nav>

                </Navbar>
                <Switch>
                    <Route path="/b">
                        <Topic id="1"/>
                    </Route>
                    <Route path="/">

                    </Route>
                    <Route path="/c">

                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default SideNavbar
