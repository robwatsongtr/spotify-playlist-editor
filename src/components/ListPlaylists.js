// import React from 'react';

const ListPlaylists = props => {

  const clicked = e => {
    e.preventDefault();
    props.clicked(e.target.id);
  }

  // where does 'items' come from? 
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