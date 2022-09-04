export const playAudio = (isplaying, audioRef) => {
  if (isplaying) {
    const audioPromise = audioRef.current.play();

    if (audioPromise !== undefined)
      audioPromise.then(() => audioRef.current.play());
  }
};
