import { Timer } from "./timer.js";
import { Controls } from "./controls.js";
import Sound from "./sounds.js";
import {
  playButton,
  pauseButton,
  setButton,
  stopButton,
  soundOnButton,
  soundOffButton,
  minutesDisplay,
  secondsDisplay,
  minutesDefaultValue,
  secondsDefaultValue,
} from "./elements.js";
import Events from "./events.js";

const sound = Sound();

const controls = Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
  soundOnButton,
  soundOffButton,
});

const timer = Timer({
  minutesDefaultValue,
  secondsDefaultValue,
  minutesDisplay,
  secondsDisplay,
  controlsReset: controls.reset,
  soundTimeEnd: sound.timeEnd,
});

Events({
  controls,
  timer,
  sound,
});
