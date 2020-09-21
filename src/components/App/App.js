import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Song from '../Song/Song';
import AboutTheAuthor from '../AboutTheAuthor/AboutTheAuthor';
import {Route, Link, HashRouter as Router} from 'react-router-dom';

class App extends Component {

  state = {
    songs: []
  }

  componentDidMount = () => {
    console.log('App is ready');
    this.getSongs();
  }

  getSongs = () => {
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

  onDelete = (songId) => {
    axios.delete(`/songs/${songId}`).then(response => {
        console.log('Deleted');
        this.getSongs();
    }).catch(err => {
        console.error('Delete song failed', err);
    });
  }

  render() {
    console.log('rendering...');
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Songs!</h1>
            <nav>
              <main>
                <div>
                  <span className="navigationBar"><Link to='/'>Home</Link></span>
                  <span className="navigationBar"><Link to='/about-the-author'>About The Author</Link></span>
                </div>
              </main>
            </nav>
          </header>
          <br/>

          <Route path='/about-the-author' exact>
          <AboutTheAuthor />
          </Route>

          <Route path='/' exact>
            <ul>
              {this.state.songs.map(song =>
                <Song
                  key={song.id}
                  id={song.id}
                  track={song.track}
                  artist={song.artist}
                  onDelete={this.onDelete}
                />
              )}
            </ul>
          </Route>

          {/*<pre>
            {JSON.stringify(this.state.songs, null, 2)}
          </pre>*/}
        </div>
      </Router>
    );
  }
}

export default App;
