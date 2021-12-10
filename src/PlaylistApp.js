import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import ListPlaylists from './ListPlaylists'
import SourcePlaylist from './SourcePlaylist'
import DestinationPlaylist from './DestinationPlaylist'
import Player from './Player'

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