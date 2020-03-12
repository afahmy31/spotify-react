import React, { Component } from 'react';
import {observer} from 'mobx-react';
import store from '../Mobx/store';
import getTracks from '../Services/Apis/getTracks';
import SingleTrack from '../Components/singleTrack';

const Tracks = observer(class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    }
  }

  async componentDidMount() {
    const response = await getTracks(store.playlistId);
    if (response.success) {
      this.setState({
        tracks: response.body.items
      })
    } else {
      console.log(response)
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.tracks.length && this.state.tracks.map((track, key) => {
          return (
            <SingleTrack track={track.track} key={key}/>
          )
        })}

      </div>
    );
  }
})

export default Tracks;