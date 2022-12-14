export const setCurrentSong = (song) => {
  return {
    type: "setCurrentSong",
    payload: song,
  };
};

export const setCurrentTime = (time) => {
  return {
    type: "setCurrentTime",
    payload: time,
  };
};

export const setDuration = (duration) => {
  return {
    type: "setDuration",
    payload: duration,
  };
};

export const setPercentage = (percentage) => {
  return {
    type: "setPercentage",
    payload: percentage,
  };
};

export const setIsPlaying = (term) => {
  return {
    type: "setIsPlaying",
    payload: term,
  };
};

export const setIsLibrary = (term) => {
  return {
    type: "setIsLibrary",
    payload: term,
  };
};

export const setDarkMode = (term) => {
  return {
    type: "setDarkMode",
    payload: term,
  };
};
