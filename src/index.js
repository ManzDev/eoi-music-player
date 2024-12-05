import { likeIcon } from "./modules/icons/like.js";
import { musicIcon } from "./modules/icons/music.js";
import { songs } from "./modules/songs.js";

const songList = document.querySelector(".song-list");
const cover = document.querySelector(".cover");
const audio = document.querySelector(".song-info audio");

const createSongItem = ({ title, subtitle, filename }) => {
  const a = "";
  return /* html */`
    <div class="song-item">
      <div class="icon-container music">
        <button data-filename="${filename}">${musicIcon}</button>
      </div>
      <hgroup>
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </hgroup>
      <div class="icon-container like">
        <button>${likeIcon}</button>
      </div>
    </div>
  `;
};

songList.innerHTML = songs.map(song => createSongItem(song)).join("");

const playSong = (filename) => {
  const audioPath = `songs/${filename}.mp3`;
  const coverPath = `songs/${filename}.webp`;
  cover.style.setProperty("--cover-image", `url(${coverPath})`);
  audio.src = audioPath;
  audio.currentTime = 0;
  audio.play();
};

const playButtons = document.querySelectorAll(".music button");

playButtons.forEach(musicPlay => {
  musicPlay.addEventListener("click", () => {
    const filename = musicPlay.dataset.filename;
    playSong(filename);
  });
});
