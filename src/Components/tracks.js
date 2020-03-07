import React, { Component } from 'react';
import { types, onSnapshot } from "mobx-state-tree";
import getTracks from '../Services/Apis/getTracks';

class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    }
  }

  async componentDidMount() {
    onSnapshot(store, snapshot => {
      console.dir(snapshot)
    })
    const response = await getTracks(playlistId);
    if (response.success) {
      this.setState({
        playlists: response.body.playlists.items
      })
    } else {
      console.log(response)
    }
  }

  onSnapshot(store, snapshot) {
    console.dir(snapshot)
  }

  render() {
    return (
      <div className="container">
        {this.state.playlists.map((playlist, key) => {
          return (
            <div className="playlist-container" key={key}>
              <img className="playlist-img" alt="playlist-name" src={playlist.images[0].url} />
              <div className="playlist-info">
                <h1>{playlist.name}</h1>
                <h4><span style={{ fontWeight: 'normal' }}>by </span>{playlist.owner.display_name}</h4>
              </div>
            </div>
          )
        })}

      </div>
    );
  }
}

export default Tracks;