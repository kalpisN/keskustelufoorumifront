import React, { Component } from 'react';
import './ServerError.css';
import { Link } from 'react-router-dom';


class ServerError extends Component {
    render() {
        return (
            <div>
                <h1>
                    500
                </h1>
                <div>
                    Oops! Something went wrong at our Server. Why don't you go back?
                </div>
                <Link to="/"><button type="primary" size="large">Go Back</button></Link>
            </div>
        );
    }
}

export default ServerError;