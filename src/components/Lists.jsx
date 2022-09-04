import React from "react";
import { connect } from "react-redux";
import { playAudio } from "../util";

import { setCurrentSong } from "../store/actions";

const Lists = ({
  songsList,

  setCurrentSong,
  audioRef,
  isplaying,
}) => {
  const onClickHandler = (song) => {
    setCurrentSong(song);

    playAudio(isplaying, audioRef);
  };
  const renderlist = songsList.map((song) => {
    return (
      <div
        key={song.id}
        onClick={() => onClickHandler(song)}
        className={`song`}
      >
        <img src={song.cover} alt="song cover" />
        <div className="details">
          <h3>{song.name}</h3>
          <p>{song.artist}</p>
        </div>
      </div>
    );
  });

  return <div className="lists">{renderlist}</div>;
};

const mapStateToProps = (state) => {
  return {
    songsList: state.songsList,
    currentSong: state.currentSong,
    isplaying: state.isplaying,
  };
};

export default connect(mapStateToProps, { setCurrentSong })(Lists);
