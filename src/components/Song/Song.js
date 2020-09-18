import React, { Component } from 'react';

class Song extends Component {

    state = {
        isHidden: false
    }

    toggleHidden = () => {
        console.log('Hiding song', this.props.track);
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        console.log('Songs props:', this.props)

        if (this.state.isHidden) {
            console.log('Hide me');
            return (
                <li key={this.props.id}>
                    <button onClick={this.toggleHidden}>Show Song</button>
                </li>
            );
        }
        else {
            console.log('Show me');
            return (
                <li key={this.props.id}>
                    {this.props.track} by {this.props.artist}
                    <button onClick={this.toggleHidden}>Hide Song</button>
                </li>
            );
        }
    }
}

export default Song;