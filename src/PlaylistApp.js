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

  
  // On render, retrieve the current users profile from Spotify api
  // in order to get their user name and user id. 
  // Then, retrieve the users' playlists and store them in state. 
  useEffect( () => {

    axios('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + currentToken}
    })
    .then( currentUserResponse => {
      let info = {
        currentUserName: currentUserResponse.data.display_name,
        currentUserId: currentUserResponse.data.id
      }
      setCurrentUser(info)
      return info
    })
    .then( userinfo => {
     return axios(`https://api.spotify.com/v1/users/${userinfo.currentUserId}/playlists`, {
        method: 'GET',
        nheaders: { 'Authorization' : 'Bearer ' + currentToken}
      }) 
    })
    .then( playlistsLists => {
      setUserPlaylists({
        listofPlaylistsFromApi: playlistsLists.data.items
      })
    })

  },[currentToken])
  
  console.log(currentUser);
  console.log(userPlaylists); 

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