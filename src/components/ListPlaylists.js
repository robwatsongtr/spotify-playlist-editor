// import React from 'react';

const ListPlaylists = props => {

  console.log(props)

  const playlists = props.items.map(playlistItem => {
    return (
      <span>
        {playlistItem.name}
      </span>
    )
  })
  
  return (
    <> 
        <div className="box-1"> 
          
          <div className="list-group">
          All Playlists<br></br>
              { playlists }
          </div>
        </div>
    </>
  )

}

export default ListPlaylists;