import React from 'react'

function Video({ video }) {
    return (
      <div className='video'>
        <h3 style={{marginBottom:"10px"}}> {video.name}</h3>
        <iframe
         
          src={`https://www.youtube.com/embed/${video.key}`}
            ></iframe>
            <hr />
      </div>
    );
}

export default Video