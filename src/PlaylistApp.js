import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import ListPlaylists from './components/ListPlaylists'
import PlaylistA from './components/PlaylistA'
import PlaylistB from './components/PlaylistB'
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
    listofPlaylistsFromApi: []
  })

  const [playlistTracks, setPlaylistTracks] = useState({
    listofTracksFromPlaylist: []
  })

  
  // On render, retrieve the current users profile from Spotify api
  // in order to get their user name and user id. 
  //
  // Then, retrieve the users' playlists and store them in state.
  // 
  // *Return returns from each link in the promise chain.* 
  //
  // 2/19/22, questiohn for Robert: how do I api call to get the next 50? 
  // reminder that there is an offset query parameter 


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
     return axios(`https://api.spotify.com/v1/users/${userinfo.currentUserId}/playlists?limit=50`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + currentToken }
      }) 
    })
    .then( playlistsLists => {
      setUserPlaylists({
        listofPlaylistsFromApi: playlistsLists.data.items
      })
    })

  },[currentToken])
  
  // console.log(currentUser);
  // console.log(userPlaylists); 


  // -----Playlist Clicked ------------------------------------------

  const playlistClicked = val => {

    // store the userPlaylists state variable into a new variable
    const playlistList = [...userPlaylists.listofPlaylistsFromApi];

    // filter down to the playlist clicked on
    const playlistInfo = playlistList.filter( p => p.id === val );
    const playlistID = playlistInfo[0].id;
    
    // sanity check 
    console.log("playlist cLicked on:", playlistInfo);
    console.log('id:', playlistID);

    // fetch the tracks of the playlist with axios and store in state
    axios(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + currentToken
      }
    })
    .then( playlistResponse => {
      setPlaylistTracks({
        listofTracksFromPlaylist: playlistResponse.data.items
      })
    })

    console.log(playlistTracks)

  }
 

  return (
    <>
      <Navbar />

      <div className="appLayout">

          <ListPlaylists 
            label="All User Playlists"
            items={ userPlaylists.listofPlaylistsFromApi }  
            clicked={ playlistClicked }
          />

          <PlaylistA />

          <PlaylistB />

          <Player />

      </div>

    </>
  );
}

export default PlaylistApp