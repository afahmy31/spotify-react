import React, { Component } from 'react';
import SinglePlaylist from './singlePlaylist';
import { types, onSnapshot } from "mobx-state-tree";
import store from '../Mobx/store';
import getPlaylists from '../Services/Apis/getPlaylists';

class Playlists extends Component {
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
    const response = await getPlaylists();
    if (response.success) {
      this.setState({
        playlists: response.body.playlists.items
      })
    } else {
      console.log(response)
    }
    // store.playlistId
  }
  render() {
    return (
      <div className="container">
        {this.state.playlists.length && this.state.playlists.map((playlist, key) => {
          return (
            <SinglePlaylist playlist={playlist} key={key}/>
          )
        })}

      </div>
    );
  }
}

export default Playlists;