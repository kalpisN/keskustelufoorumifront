import React from 'react';
import './App.css';
import SideNavbar from "../nav/SideNavbar";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Topic from "../chat/Topic";
import SinglePost from "../chat/SinglePost";
import Signup from "../user/signup/Signup";
import {Nav} from "react-bootstrap";
import Login from "../user/login/Login";


function App() {
    return (
        <div className="App container-fluid">
            <Router>
                <div className="row">
                    <SideNavbar/>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/b" >
                                <Topic id="1"/>
                            </Route>
                            <Route path="/vg">
                                <Topic id="2"/>
                            </Route>
                            <Route path="/ani">
                                <Topic id="3"/>
                            </Route>
                            <Route path="/hax">
                                <Topic id="4"/>
                            </Route>
                            <Route path="/fit">
                                <Topic id="5"/>
                            </Route>
                            <Route path="/spo">
                                <Topic id="6"/>
                            </Route>
                            <Route path="/nom">
                                <Topic id="7"/>
                            </Route>
                            <Route path="/pol">
                                <Topic id="8"/>
                            </Route>
                            <Route path="/:topic_id/:post_id" component={SinglePost}>
                            </Route>
                            <Route  path="/signup">
                                <Signup/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

const Home = () => (
    <div>
        <header className="page-name">Welcome to Academy-chan!</header>
    <div className="home-page">
        <h1 className="table-header">Topics:</h1>
        <table className="topic-table">
            <tr><td>
            <Nav.Link href="/b" as="span" eventKey="b" >
                <a className="nav-link" href="/b" >Random</a>
            </Nav.Link></td><td>
            <Nav.Link href="/vg" as="span" eventKey="vg" >
                <a className="nav-link" href="/vg" >Video Games</a>
            </Nav.Link></td></tr>
            <tr><td><Nav.Link href="/ani" as="span" eventKey="ani">
                <a className="nav-link" href="/ani">Animals</a>
            </Nav.Link></td><td>
            <Nav.Link href="/hax" as="span" eventKey="hax">
                <a className="nav-link" href="/hax">Coding</a>
            </Nav.Link></td></tr>
            <tr><td><Nav.Link href="#" as="span" eventKey="fit">
                <a className="nav-link" href="/fit">Fitness</a>
            </Nav.Link></td><td>
            <Nav.Link href="#" as="span" eventKey="spo">
                <a className="nav-link" href="/spo">Sports</a>
            </Nav.Link></td></tr>
            <tr><td><Nav.Link href="#" as="span" eventKey="nom">
                <a className="nav-link" href="/nom">Food</a>
            </Nav.Link></td><td>
            <Nav.Link href="#" as="span" eventKey="pol">
                <a className="nav-link" href="/pol">Politics</a>
            </Nav.Link></td></tr>
        </table>
    </div>
    </div>
)

export default App;
