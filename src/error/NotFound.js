import React, { Component } from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>
                    404
                </h1>
                <div>
                    The Page you're looking for was not found.
                </div>
                <Link to="/"><button type="primary" size="large">Go Back</button></Link>
            </div>
        );
    }
}

export default NotFound;