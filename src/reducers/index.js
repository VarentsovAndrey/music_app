import { combineReducers } from "redux";
import { data } from "./data";

const currentsongPlaceHolder = {
  name: "Король и шут",
  cover:
    "https://sun9-59.userapi.com/impf/c98/v98399/f3/VLkI0CTsKo0.jpg?size=350x342&quality=96&sign=29fca08f66575d59a9e89f135dd1b01d&type=album",
  artist: "Герои и злодеи",
  audio: "https://music.yandex.ru/album/4808573/track/37848214",
  color: ["#205950", "#2ab3bf"],
  id: 1,
  active: true,
};

const currentSongReducer = (state = currentsongPlaceHolder, action) => {
  if (action.type === "setCurrentSong") {
    return action.payload;
  }

  return state;
};

const songObject = {
  currentTime: 0.0,
  duration: parseInt("0"),
  percentage: parseInt("0"),
};

const songInfoReducer = (state = songObject, action) => {
  if (action.type === "setCurrentTime")
    return { ...state, currentTime: action.payload };
  else if (action.type === "setDuration")
    return { ...state, duration: action.payload };
  else if (action.type === "setPercentage")
    return { ...state, percentage: action.payload };

  return state;
};

const isPlayingReducer = (state = false, action) => {
  if (action.type === "setIsPlaying") return action.payload;

  return state;
};

const isLibraryReducer = (state = false, action) => {
  if (action.type === "setIsLibrary") return action.payload;

  return state;
};

const isDarkModeReducer = (state = false, action) => {
  if (action.type === "setDarkMode") return action.payload;

  return state;
};

export default combineReducers({
  songsList: data,
  currentSong: currentSongReducer,
  songInfo: songInfoReducer,
  isplaying: isPlayingReducer,
  isLibrary: isLibraryReducer,
  isDarkMode: isDarkModeReducer,
});
