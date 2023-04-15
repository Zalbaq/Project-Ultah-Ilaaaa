import {
  galery,
  heightImageGalery,
  imageGalery,
  liGalery,
} from "./DOMComponet.js";

export const getSettingImage = (widthGalery) => {
  if (widthGalery <= 480) {
    mobileImage(widthGalery, heightImageGalery.breakpoint1.heightImg);
  } else if (widthGalery <= 576) {
    mobileImage(widthGalery, heightImageGalery.breakpoint2.heightImg);
  } else if (widthGalery <= 767) {
    mobileImage(widthGalery, heightImageGalery.breakpoint3.heightImg);
  } else {
    desktopImage(
      heightImageGalery.breakpoint4.largeGalery,
      heightImageGalery.breakpoint4.heightImg
    );
  }
};

export const desktopImage = (widthGalery, heightImg) => {
  if (galery.classList.contains("active")) {
    liGalery.forEach((items) => {
      items.style.cssText += `
            position: absolute;
            transform-origin: ${widthGalery / 2}px;
            height: ${heightImg}px;
            transform: rotate(calc(360deg / 8 * var(--position)));
            `;
    });
    imageGalery.forEach((items) => {
      items.style.cssText += `
            animation: imageAnimation linear 5s infinite;
            transform: rotate(calc(360deg / -8 * var(--position)));
          `;
    });
  } else {
    liGalery.forEach((items) => {
      items.style.cssText += `
            height: 50px;
            border-radius: 50%;
            background-color: #e3e3e330;
            list-style: none;
            position: absolute;
            left: 0;
            transform-origin: ${widthGalery / 2}px;
            transition: 0.5s;
            transition-delay: calc(0.1s * var(--position));
            transform: rotate(0deg) translateX(250px);
            border-radius: 50%;
            `;
    });
    imageGalery.forEach((items) => {
      items.style.animation = `none`;
    });
  }
};

export const mobileImage = (widthGalery, heightImg) => {
  if (galery.classList.contains("active")) {
    liGalery.forEach((items) => {
      items.style.cssText += `
            position: absolute;
            transform-origin: ${widthGalery / 2}px;
            height: ${heightImg}px;
            transform: rotate(calc(360deg / 8 * var(--position)));
            `;
    });
    imageGalery.forEach((items) => {
      items.style.cssText += `
            animation: imageAnimation linear 5s infinite;
            transform: rotate(calc(360deg / -8 * var(--position)));
          `;
    });
  } else {
    liGalery.forEach((items) => {
      items.style.cssText += `
            height: 50px;
            border-radius: 50%;
            background-color: #e3e3e330;
            list-style: none;
            position: absolute;
            left: 0;
            transform-origin: ${widthGalery / 2}px;
            transition: 0.5s;
            transition-delay: calc(0.1s * var(--position));
            transform: rotate(0deg) translateX(${
              widthGalery / 2 - heightImg / 3
            }px);
            border-radius: 50%;
            `;
    });
    imageGalery.forEach((items) => {
      items.style.animation = `none`;
    });
  }
};
