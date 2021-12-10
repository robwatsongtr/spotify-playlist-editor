import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'

function PlaylistApp(props) {

   return (
      <>
        <Navbar />

        <div className="appLayout">
            <div className="box-1">Box 1</div>
            <div className="box-2">Box 2</div>
            <div className="box-3">Box 3</div>
        </div>
      </>
    );
}

export default PlaylistApp