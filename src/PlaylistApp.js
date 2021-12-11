import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import ListPlaylists from './components/ListPlaylists'
import SourcePlaylist from './components/SourcePlaylist'
import DestinationPlaylist from './components/DestinationPlaylist'
import Player from './components/Player'

function PlaylistApp(props) {

   return (
      <>
        <Navbar />

        <div className="appLayout">
            <ListPlaylists />
            <SourcePlaylist />
            <DestinationPlaylist />
            <Player />
        </div>

      </>
    );
}

export default PlaylistApp