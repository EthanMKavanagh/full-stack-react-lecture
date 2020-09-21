import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class AboutTheAuthor extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Ethan Kavanagh</h1>
                </header>
                <body>
                    <div>
                        <div>Love to ski in the winter!</div>
                        <div>Been enjoyed the past 12 weeks at Prime Digital Academy!</div>
                        <div>Practicing routers in react with this application.</div>
                    </div>
                </body>
            </div>
        );
    }
}

export default withRouter(AboutTheAuthor);