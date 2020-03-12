import React from 'react';
import Playlists from './Containers/playlists';
import Tracks from './Containers/tracks'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Playlists} />
        <Route exact path="/tracks" component={Tracks} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
