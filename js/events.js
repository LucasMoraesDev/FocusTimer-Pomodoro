import {
  playButton,
  pauseButton,
  setButton,
  stopButton,
  soundOnButton,
  soundOffButton,
} from "./elements.js";

export default function ({ controls, timer, sound }) {
  playButton.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });
  pauseButton.addEventListener("click", () => {
    controls.pause();
    timer.stop();
    sound.pressButton();
  });
  setButton.addEventListener("click", () => {
    timer.getMinutes();
  });
  stopButton.addEventListener("click", () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });
  soundOnButton.addEventListener("click", () => {
    controls.soundOn();
    sound.bgAudio.pause();
  });
  soundOffButton.addEventListener("click", () => {
    controls.soundOff();
    sound.bgAudio.play();
  });
}
