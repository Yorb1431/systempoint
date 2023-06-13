const videoPlayer = document.getElementById("video-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const volumeSlider = document.getElementById("volume-slider");

playPauseBtn.addEventListener("click", togglePlayPause);
volumeSlider.addEventListener("input", setVolume);

function togglePlayPause() {
  if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play();
    playPauseBtn.innerHTML = '<i class="bx bx-pause"></i>';
  } else {
    videoPlayer.pause();
    playPauseBtn.innerHTML = '<i class="bx bx-play"></i>';
  }
}

function setVolume() {
  videoPlayer.volume = volumeSlider.value;
}
