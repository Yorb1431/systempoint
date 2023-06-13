// Get references to the video, the play/pause button, the seek slider, and the volume slider
const video = document.getElementById("video-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const seekSlider = document.getElementById("seek-slider");
const volumeSlider = document.getElementById("volume-slider");

// Add a click event listener to the play/pause button
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    // If the video is paused, play it
    video.play();
  } else {
    // If the video is playing, pause it
    video.pause();
  }
});

// Add an event listener to the video to handle the end event
video.addEventListener("ended", () => {
  // Reset the play/pause button icon to "play" when the video ends
  playPauseBtn.innerHTML = '<i class="bx bx-play"></i>';
});

// Add an event listener to the video to handle the timeupdate event
video.addEventListener("timeupdate", () => {
  // Update the value of the seek slider based on the current video time
  seekSlider.value = video.currentTime;
});

// Add an event listener to the seek slider to handle the input event
seekSlider.addEventListener("input", () => {
  // Update the current video time based on the value of the seek slider
  video.currentTime = seekSlider.value;
});

// Add an event listener to the volume slider to handle the input event
volumeSlider.addEventListener("input", () => {
  // Update the volume of the video based on the value of the volume slider
  video.volume = volumeSlider.value;
});

// Add a timeupdate event listener to the video to update the value of the seek slider
video.addEventListener("timeupdate", () => {
  seekSlider.value = video.currentTime;
});

// Add a loadedmetadata event listener to the video to update the max value of the seek slider
video.addEventListener("loadedmetadata", () => {
  seekSlider.max = video.duration;
});

// Add a play event listener to the video to update the play/pause button icon
video.addEventListener("play", () => {
  playPauseBtn.innerHTML = '<i class="bx bx-pause"></i>';
});

// Add a pause event listener to the video to update the play/pause button icon
video.addEventListener("pause", () => {
  playPauseBtn.innerHTML = '<i class="bx bx-play"></i>';
});
