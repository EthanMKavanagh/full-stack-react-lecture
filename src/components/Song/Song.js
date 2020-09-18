import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';

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

    delete = () => {
        axios({
            method: 'DELETE',
            url: `/songs/${this.props.id}`
        }).then(response => {
            console.log('Deleted');
        }).catch(err => {
            console.error('Delete song failed', err);
        });
    }

    render() {
        console.log('Songs props:', this.props)

        return (
            <li key={this.props.id}>
                {   /* TERNARY OPERATOR SHORTCUT IF ONLY NEED ONE THING */
                    this.state.isHidden ||
                        <span>{this.props.track} by {this.props.artist}</span> 
                }
                {/* Can also use:
                {
                    this.state.isHidden &&
                        ''
                } */}
                <button onClick={this.toggleHidden}>
                    {   /* TERNARY OPERATOR */
                        this.state.isHidden ?
                            `Show Song` :
                            `Hide Song`
                    }
                </button>
                <button onClick={this.delete}>Delete</button>
            </li>
        );

        // if (this.state.isHidden) {
        //     console.log('Hide me');
        //     return (
        //         <li key={this.props.id}>
        //             <button onClick={this.toggleHidden}>Show Song</button>
        //         </li>
        //     );
        // }
        // else {
        //     console.log('Show me');
        //     return (
        //         <li key={this.props.id}>
        //             {this.props.track} by {this.props.artist}
        //             <button onClick={this.toggleHidden}>Hide Song</button>
        //         </li>
        //     );
        // }
    }
}

export default Song;