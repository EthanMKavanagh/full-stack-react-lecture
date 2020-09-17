import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    songs: []
  }

  componentDidMount() {
    console.log('App is ready');
    axios({
      method: 'GET',
      url: '/songs'
    }).then(response => {
      console.log('response:', response);
      console.log('response.data:', response.data)
      this.setState({
        songs: response.data
      });
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Songs!</h1>
        </header>
        <br/>
        <p>Songs go here</p>

        <ul>
          {this.state.songs.map(song =>
            <li key={song.id}>{song.track} by {song.artist}</li>
          )}
        </ul>

        {/*<pre>
          {JSON.stringify(this.state.songs, null, 2)}
        </pre>*/}
      </div>
    );
  }
}

export default App;
