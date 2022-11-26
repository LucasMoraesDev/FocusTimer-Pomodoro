export function Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
  soundOnButton,
  soundOffButton,
}) {
  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    setButton.classList.add("hide");
    stopButton.classList.remove("hide");
  }

  function pause() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
  }

  function soundOn() {
    soundOnButton.classList.add("hide");
    soundOffButton.classList.remove("hide");
  }

  function soundOff() {
    soundOnButton.classList.remove("hide");
    soundOffButton.classList.add("hide");
  }

  function reset() {
    setButton.classList.remove("hide");
    stopButton.classList.add("hide");
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
  }

  return {
    play,
    pause,
    soundOn,
    soundOff,
    reset,
  };
}
