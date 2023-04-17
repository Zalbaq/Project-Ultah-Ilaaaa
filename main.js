import { textLoad } from "./components/greetingText.js";
import { getSizeGalery } from "./components/GalerySize.js";
import { getSettingImage } from "./components/setImagesInGalery.js";
import { changeImageInGalery } from "./components/changeImageInGalery.js";
import { getBubbles } from "./components/bubble.js";
import {
  toggleMessage,
  audio,
  galery,
  pageBubble,
  buttonNo,
  buttonYes,
} from "./components/DOMComponet.js";
let widthGalery = Math.floor(window.innerWidth - (1 / 10) * window.innerWidth);

audio.volume = 0.1;
getBubbles(pageBubble);
textLoad();
setInterval(textLoad, 16000);
getSizeGalery(widthGalery);
getSettingImage(widthGalery);

// buttonNo.addEventListener("mouseover", (element) => {
//   element.target.style.position = "absolute";
//   element.target.style.zIndex = 9999;
//   element.target.style.bottom = `${Math.floor(Math.random() * 50) + 10}%`;
//   element.target.style.left = `${Math.floor(Math.random() * 80)}%`;
// });

// buttonNo.addEventListener("click", () => {
//   alert("Yahhhhhhhhh😰😰");
// });

buttonYes.addEventListener("click", () => {
  alert("Makasihhh Ilaaaaa🤗🥳");
});

window.addEventListener("resize", () => {
  widthGalery = Math.floor(window.innerWidth - (1 / 10) * window.innerWidth);
  getBubbles(pageBubble);
  getSizeGalery(widthGalery);
  getSettingImage(widthGalery);
});

toggleMessage.addEventListener("click", () => {
  audio.play();
  galery.classList.toggle("active");
  getSettingImage(widthGalery);
  changeImageInGalery();
});
