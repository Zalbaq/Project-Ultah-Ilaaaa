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
} from "./components/DOMComponet.js";
let widthGalery = Math.floor(window.innerWidth - (1 / 10) * window.innerWidth);

document.addEventListener("click", () => {
  audio.play();
});

window.addEventListener("load", () => {
  audio.volume = 0.1;
  getBubbles(pageBubble);
  textLoad();
  setInterval(textLoad, 16000);
  getSizeGalery(widthGalery);
  getSettingImage(widthGalery);
});

window.addEventListener("resize", () => {
  widthGalery = Math.floor(window.innerWidth - (1 / 10) * window.innerWidth);
  getBubbles(pageBubble);
  getSizeGalery(widthGalery);
  getSettingImage(widthGalery);
});

toggleMessage.addEventListener("click", () => {
  galery.classList.toggle("active");
  getSettingImage(widthGalery);
  changeImageInGalery();
});
