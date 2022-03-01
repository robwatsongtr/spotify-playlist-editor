// import React from 'react';

const PlaylistA = (props) => {

  // when a playlist is clicked on, it sends data back to the parent component
  // via props. Lifting state up. 
  const clicked = e => {
    e.preventDefault();
    props.clicked(e.target.id);
  }

  const tracks = props.items.map( (item, idx ) => {
    return (
      <button 
        className="btn-dark"
        key={idx}
        onClick={ clicked }
        id={item.track.id}
      > 
        {item.track.artists[0].name}
        <br></br>
        {item.track.name} 
      </button>
    )
  })

  return (
    <>
      <div className="box-2">
         { tracks }
      </div>
    </>
  )

}

export default PlaylistA;