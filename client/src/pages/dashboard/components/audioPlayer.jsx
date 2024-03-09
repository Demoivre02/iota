// AudioPlayer.jsx
import React from "react";

const AudioPlayer = ({ blob }) => {
  const url = URL.createObjectURL(blob);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.src = url;
  }, [url]);

  return (
    <audio ref={audioRef} controls />
  );
};

export default AudioPlayer;
