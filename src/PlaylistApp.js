import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import ListPlaylists from './components/ListPlaylists'
import SourcePlaylist from './components/SourcePlaylist'
import DestinationPlaylist from './components/DestinationPlaylist'
import Player from './components/Player'
import axios from 'axios'
import SpotifyPlayer from 'react-spotify-web-playback'

const PlaylistApp = (props) => {

  const currentToken = props.token; 

  // State Variables 
  const [currentUser, setCurrentUser] = useState({ 
    currentUserName: '',
    currentUserId: ''
  })

  const [userPlaylists, setUserPlaylists] = useState({
    selectedPlaylist: '',
    listofPlaylistsFromApi: []
  })
  

  // On render retrieve the current users profile from Spotify api
  // in order to get their name and user id. 
  // (then retrieve their playlists and display them....)
  useEffect( () => {

    axios('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + currentToken}
    })
    .then( currentUserResponse => {
      setCurrentUser({
        currentUserName: currentUserResponse.display_name,
        currentUserId: currentUserResponse.id
      })
    })

  },[])
  

  return (
    <>
      <Navbar />

      <div className="appLayout">

          <ListPlaylists 

          />

          <SourcePlaylist 
          
          />

          <DestinationPlaylist 
          
          />

          <Player 
          
          />

      </div>

    </>
  );
}

export default PlaylistApp