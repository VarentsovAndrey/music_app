import { combineReducers } from "redux";
import { TodosReducer } from "../getData";
import { data } from "./data";

const currentsongPlaceHolder = {
  name: "Иван",
  cover:
    "https://img1.akspic.ru/crops/2/5/6/9/6/169652/169652-plyazh-more-okean-priroda-voda-3840x2160.jpg",
  artist: "Иванович",
  audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
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
  test: TodosReducer,
  currentSong: currentSongReducer,
  songInfo: songInfoReducer,
  isplaying: isPlayingReducer,
  isLibrary: isLibraryReducer,
  isDarkMode: isDarkModeReducer,
});
