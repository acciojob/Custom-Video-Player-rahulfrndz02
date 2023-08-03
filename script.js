/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// toggle.addEventListener("click",(event)=>{
// 	video.play() ? video.pause() : video.play();
// });

toggle.addEventListener("click", playPauseMedia);
video.addEventListener("click", playPauseMedia);
player.addEventListener("click", playPauseMedia);
progress.addEventListener("click", handleProgress);
function playPauseMedia() {
  if (video.paused) {
    //play.setAttribute("data-icon", "u");
    video.play();
  } else {
    //play.setAttribute("data-icon", "P");
    video.pause();
  }
}

skipButtons.addEventListener("click", skip);
function skip() {
  const skipAmount = parseFloat(this.dataset.skip);
  video.currentTime += skipAmount;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}