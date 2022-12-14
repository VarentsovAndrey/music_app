import React from "react";
import { connect } from "react-redux";
import { playAudio } from "../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { setCurrentTime, setIsPlaying, setCurrentSong } from "../store/actions";

const Player = ({
  songsList,
  currentSong,
  setCurrentSong,
  audioRef,
  songInfo,
  setCurrentTime,
  isplaying,
  setIsPlaying,
}) => {
  const onClickHandler = () => {
    if (isplaying) audioRef.current.pause();
    else audioRef.current.play();

    setIsPlaying(!isplaying);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    setCurrentTime(e.target.value);

    audioRef.current.currentTime = e.target.value;
  };

  const skipHandler = (direction) => {
    const index = songsList.findIndex((ob) => ob.name === currentSong.name);

    if (direction === "forward")
      setCurrentSong(songsList[(index + 1) % songsList.length]);
    else {
      if (index === 0) setCurrentSong(songsList[songsList.length - 1]);
      else setCurrentSong(songsList[index - 1]);
    }

    playAudio(isplaying, audioRef);
  };

  return (
    <div className="player-container">
      <div className="display">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`,
          }}
        >
          <input
            min={0}
            max={isNaN(songInfo.duration) ? 0 : songInfo.duration}
            value={isNaN(songInfo.currentTime) ? 0 : songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div
            className="animate-track"
            style={{
              transform: `translate(${songInfo.percentage}%)`,
            }}
          ></div>
        </div>

        <p>{getTime(songInfo.duration)}</p>
      </div>

      <div className="controls">
        <FontAwesomeIcon
          onClick={() => skipHandler("backward")}
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={onClickHandler}
          icon={isplaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => skipHandler("forward")}
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    songsList: state.songsList,
    currentSong: state.currentSong,
    songInfo: state.songInfo,
    isplaying: state.isplaying,
  };
};

export default connect(mapStateToProp, {
  setCurrentTime,
  setIsPlaying,
  setCurrentSong,
})(Player);
