import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import store from '../Mobx/store';
import getPlaylists from '../Services/Apis/getPlaylists';
import SinglePlaylist from '../Components/singlePlaylist';

class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      waitingForRequest: true,
      offset: 0,
    }
  }
  async componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
    this.getPlaylists(this.state.offset);
  }
  async getPlaylists(offset) {
    const response = await getPlaylists(offset);
    if (response.success) {
      this.setState({
        playlists: [...this.state.playlists, ...response.body.playlists.items],
        waitingForRequest: false
      })
    } else {
      console.log(response)
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll());
  }
  handleClick(playlistId) {
    store.changePlaylist(playlistId);
    this.props.history.push('/tracks')
  }
  handleScroll() {
    if ((window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)) {
      if(this.state.waitingForRequest !==true){
        this.setState({waitingForRequest: true, offset: this.state.offset + 5}, () => {
          this.getPlaylists(this.state.offset)
        })
        
      }
    }
  }
  render() {
    return (
      <div className="container">
        {this.state.playlists.length && this.state.playlists.map((playlist, key) => {
          return (
            <SinglePlaylist playlist={playlist} key={key} handleClick={(playlistId) => this.handleClick(playlistId)} />
          )
        })}
      </div>
    );
  }
}

export default withRouter(Playlists);