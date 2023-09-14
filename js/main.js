let startTime; // to keep track of the start time
let stopwatchInterval; // to keep track of the interval
let elapsedPausedTime = 0; // to keep track of the elapsed time while stopped

function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
    stopwatchInterval = setInterval(updateStopwatch, 1000); // update every second
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key.toLocaleLowerCase() === "s") {
    startStopwatch();
  }
});

document.addEventListener("keydown", (e) => {
  console.log(e);
});

function stopStopwatch() {
  clearInterval(stopwatchInterval); // stop the interval
  elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
  stopwatchInterval = null; // reset the interval variable
}

document.addEventListener("keydown", (e) => {
  if (e.key.toLocaleLowerCase() === "t") {
    stopStopwatch();
  }
});

function resetStopwatch() {
  stopStopwatch(); // stop the interval
  elapsedPausedTime = 0; // reset the elapsed paused time variable
  document.getElementById("stopwatch").innerHTML = "00:00:00"; // reset the display
}

document.addEventListener("keydown", (e) => {
  if (e.key.toLocaleLowerCase() === "r") {
    resetStopwatch();
  }
});

function updateStopwatch() {
  let currentTime = new Date().getTime(); // get current time in milliseconds
  let elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
  let seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
  let minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
  let hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
  let displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time
  document.getElementById("stopwatch").innerHTML = displayTime; // update the display
}

function pad(number) {
  // add a leading zero if the number is less than 10
  return (number < 10 ? "0" : "") + number;
}

// Taggle fullscreen Mode
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    // if Not in fullScreen mode, enter fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen(); // Firefox
    }
  } else {
    // if in fullscreen mode, exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// FullScreen to handle key press events
document.addEventListener("keydown", (e) => {
  if (e.key.toLocaleLowerCase() === "f") {
    toggleFullScreen();
  }
});
