import React from 'react';

function getArtistsNames(artists) {
    let names = "";
    for (let i = 0; i < artists.length; i++) {
        if(i === artists.length -1) names = names + artists[i].name
        else names = names + artists[i].name + " & "
    }
    return names;
}
const SingleTrack = (props) => {
  return (
    <div className="list">
      <img className="playlist-img" alt="playlist-name" src={props.track.album.images[1].url} />
      <div className="playlist-info">
        <h1>{props.track.name}</h1>
        <h4><span style={{ fontWeight: 'normal' }}>album: </span>{props.track.album.name}</h4>
        <h4><span style={{ fontWeight: 'normal' }}>by: </span>{getArtistsNames(props.track.artists)}</h4>
        <div className="play-me" onClick={()=> {window.open(props.track.preview_url)}}><p>&#9199; Play</p></div>
      </div>
    </div>
  );
}
export default SingleTrack;