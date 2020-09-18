import React, { Component } from 'react';

class Song extends Component {
    render() {
        console.log('songs props:', this.props)
        return (
            <li key={this.props.id}>
                {this.props.track} by {this.props.artist}
                <button onClick={this.onHideSong}>Hide Song</button>
            </li>
        );
    }
}

export default Song;