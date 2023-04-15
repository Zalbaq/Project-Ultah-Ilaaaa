import { galery, heightImageGalery } from "./DOMComponet.js";

export const getSizeGalery = (widthGalery) => {
  if (widthGalery <= 767) {
    galery.style.height = `${widthGalery}px`;
    galery.style.width = `${widthGalery}px`;
  } else {
    galery.style.height = `${heightImageGalery.breakpoint4.largeGalery}px`;
    galery.style.width = `${heightImageGalery.breakpoint4.largeGalery}px`;
  }
};
