import React from 'react';

const SinglePlaylist = (props) => {
  return (
    <div className="list playlist" onClick={()=> props.handleClick(props.playlist.id)}>
      <img className="playlist-img" alt="playlist-name" src={props.playlist.images[0].url} />
      <div className="playlist-info">
        <h1>{props.playlist.name}</h1>
        <h4><span style={{ fontWeight: 'normal' }}>by: </span>{props.playlist.owner.display_name}</h4>
      </div>
    </div>
  );
}
export default SinglePlaylist;