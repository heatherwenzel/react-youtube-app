import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading... </div>;
  }

  const src = `http://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe src={src} title={video.snippet.title}/>
        </div>
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
