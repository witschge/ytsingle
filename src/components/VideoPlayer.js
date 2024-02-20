import React from "react";
import YouTube from "react-youtube";

function VideoPlayer() {
  const videoId = "L9zzYwq-pJE";
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  return <YouTube videoId={videoId} opts={opts} />;
}
export default VideoPlayer;
