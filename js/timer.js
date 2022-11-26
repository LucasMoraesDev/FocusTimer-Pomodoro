export function Timer({
  minutesDefaultValue,
  secondsDefaultValue,
  minutesDisplay,
  secondsDisplay,
  controlsReset,
  soundTimeEnd,
}) {
  update(minutesDefaultValue, secondsDefaultValue);
  let timerTimeOut;

  function update(minutesNewValue, secondsNewValue) {
    minutesDisplay.innerHTML = String(minutesNewValue).padStart(2, "0");
    secondsDisplay.innerHTML = String(secondsNewValue).padStart(2, "0");
  }

  function reset() {
    stop();
    update(minutesDefaultValue, secondsDefaultValue);
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let isFinished =
        minutesDisplay.innerHTML == 0 && secondsDisplay.innerHTML == 0;
      if (isFinished) {
        controlsReset();
        reset();
        soundTimeEnd();
        return;
      } else if (secondsDisplay.innerHTML == 0) {
        update(--minutesDisplay.innerHTML, 59);
      } else {
        update(minutesDisplay.innerHTML, --secondsDisplay.innerHTML);
      }
      countdown();
    }, 1000);
  }

  function stop() {
    clearInterval(timerTimeOut);
  }

  function getMinutes() {
    let minutesNewValue = Math.round(Number(prompt("Quantos minutos?")));
    minutesNewValue > 0
      ? update(minutesNewValue, secondsDefaultValue)
      : reset();
  }

  return { countdown, reset, update, stop, getMinutes };
}
