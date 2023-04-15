import { preloadedImage } from "./loadImages.js";
import { imageGalery, listImage } from "./DOMComponet.js";
let myInterval;
let isInterval = false;

export const changeImageInGalery = () => {
  const preloaded = preloadedImage(listImage);
  let idx = 0;
  if (isInterval) {
    clearInterval(myInterval);
    isInterval = false;
  } else {
    myInterval = setInterval(() => {
      for (let i = 0; i < imageGalery.length; i++) {
        imageGalery[i].src = preloaded[idx].src;
        idx++;
        if (idx >= preloaded.length) {
          idx = 0;
        }
      }
    }, 5000);
    isInterval = true;
  }
};
