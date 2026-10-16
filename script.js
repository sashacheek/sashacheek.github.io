const max = document.getElementById("max-icon");
const min = document.getElementById("min-icon");
const game = document.getElementById("game-container");

max.addEventListener("click", () => {
  if (game.requestFullscreen) {
    game.requestFullscreen();
  }
});

min.addEventListener("click", () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    max.style.display = "none";
    min.style.display = "inline";
  } else {
    max.style.display = "inline";
    min.style.display = "none";
  }
});
