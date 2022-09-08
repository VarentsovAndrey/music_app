import React from "react";
import { useSelector } from "react-redux";
import { playAudio } from "../util";

import { setCurrentSong } from "../store/actions";
import { useDispatch } from "react-redux";

const Lists = ({ audioRef }) => {
  const dispatch = useDispatch();
  const { loading, songsList, isplaying } = useSelector((state) => state);

  const onClickHandler = (song) => {
    dispatch(setCurrentSong(song));

    playAudio(isplaying, audioRef);
  };

  if (loading.loading) {
    return "Loading...";
  }

  if (loading.error) {
    return "Ошибка";
  }

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

export default Lists;
