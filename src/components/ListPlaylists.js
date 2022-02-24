// import React from 'react';

const ListPlaylists = props => {

  // when a playlist is clicked on, it sends data back to the parent component
  // via props. Lifting state up. 
  const clicked = e => {
    e.preventDefault();
    props.clicked(e.target.id);
  }

  
  const playlists = props.items.map( (playlistItem, idx) => {
    return (    
      <button 
        className="btn-dark"
        key={idx}
        onClick={ clicked }
        id={playlistItem.id}
      >
        {playlistItem.name} 
      </button>
    )
  })
  
  return (
    <> 
      <div className="box-1">             
        {playlists}         
      </div>
    </>
  )

}

export default ListPlaylists;