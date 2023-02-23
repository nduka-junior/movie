import React from "react";
import Video from "./Video";

function Videos({ videos }) {
  return (
      <>
          <h1 style={{ textAlign: "left", marginLeft: "30px" }}>Videos({videos.length})</h1>
          <br />
          <hr />
      <div className="videos">
        {videos.map((video) => {
          return <Video video={video} key={video.id} />;
        })}
      </div>
    </>
  );
}

export default Videos;
