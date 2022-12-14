import React, { useRef, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import SongDetails from "./components/SongDetails";
import Player from "./components/Player";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
import "./styles/app.scss";
import DarkModeStyle from "./components/DarkMode";

import {
  setCurrentSong,
  setCurrentTime,
  setDuration,
  setPercentage,
  setDarkMode,
} from "./store/actions";
import { playAudio } from "./util";
import { fetchTodos } from "./store/getData";

function App({
  songsList,
  setCurrentSong,
  currentSong,
  songInfo,
  setCurrentTime,
  setDuration,
  setPercentage,
  isplaying,
  isLibrary,
  isDarkMode,
  setDarkMode,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const onTimeUpdateHandler = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);

    const percentage = Math.floor(
      (songInfo.currentTime / songInfo.duration) * 100
    );
    setPercentage(percentage);

    const index = songsList.findIndex((ob) => ob.name === currentSong.name);
    if (songInfo.currentTime && songInfo.currentTime === songInfo.duration)
      setCurrentSong(songsList[(index + 1) % songsList.length]);
    playAudio(isplaying, audioRef);
  };

  const audioRef = useRef();

  const mode = () => {
    if (isDarkMode) return <DarkModeStyle />;
    return null;
  };

  return (
    <div className={`App ${isLibrary ? "library-active" : ""} `}>
      {mode()}
      <Navbar />
      <SongDetails />
      <Player audioRef={audioRef} />
      <div className="btn-div">
        <button
          onClick={() => setDarkMode(!isDarkMode)}
          className={`mode-btn ${isDarkMode ? "dark-btn" : "light-btn"}`}
        >
          {`${isDarkMode ? "Светлая тема" : "Темная тема"}`}
        </button>
      </div>
      <Library audioRef={audioRef} />
      <audio
        ref={audioRef}
        onLoadedMetadata={onTimeUpdateHandler}
        onTimeUpdate={onTimeUpdateHandler}
        src={currentSong ? currentSong.audio : null}
      ></audio>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    songsList: state.songsList,
    currentSong: state.currentSong,
    songInfo: state.songInfo,
    isplaying: state.isplaying,
    isLibrary: state.isLibrary,
    isDarkMode: state.isDarkMode,
  };
};

export default connect(mapStateToProp, {
  setCurrentSong,
  setCurrentTime,
  setDuration,
  setPercentage,
  setDarkMode,
})(App);
