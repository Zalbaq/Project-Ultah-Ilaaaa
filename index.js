const toggleMessage = document.querySelector(".messageIcon");
const galery = document.querySelector(".galery");
const imageGalery = galery.querySelectorAll("img");
const liGalery = galery.querySelectorAll("li");
const nameGreeting = document
  .querySelector(".greeting")
  .querySelector(".second-text");
const pageBubble = document.querySelectorAll(".bubbles");
let myInterval;
let isInterval = false;
let wasReload = false;
let widthGalery = Math.floor(window.innerWidth - (1 / 10) * window.innerWidth);
const audio = document.querySelector("audio");
const bubbleTotal = {
  breakpoint1: {
    width: 480,
    bubbles: 15,
  },
  breakpoint2: {
    width: 576,
    bubbles: 20,
  },
  breakpoint3: {
    width: 767,
    bubbles: 30,
  },
  breakpoint4: {
    width: 1200,
    bubbles: 55,
  },
};
const heightImageGalery = {
  breakpoint1: {
    width: 480,
    heightImg: 110,
  },
  breakpoint2: {
    width: 576,
    heightImg: 130,
  },
  breakpoint3: {
    width: 767,
    heightImg: 150,
  },
  breakpoint4: {
    width: 1200,
    largeGalery: 600,
    heightImg: 130,
  },
};
const name = [
  "Hibatin Wafiroh..",
  "Hibbbb-hiiibbb....",
  "Ilaaaaaaa....",
  "Batiiiiiiinnnn....",
];

const listImage = [
  "asset/img1.jpg",
  "asset/img2.jpg",
  "asset/img3.jpg",
  "asset/img4.jpg",
  "asset/img5.jpg",
  "asset/img6.jpg",
  "asset/img7.jpg",
  "asset/img8.jpg",
  "asset/img9.jpg",
  "asset/img10.jpg",
  "asset/img11.jpg",
  "asset/img12.jpg",
  "asset/img13.jpg",
  "asset/img14.jpg",
  "asset/img15.jpg",
  "asset/img16.jpg",
  "asset/img17.jpg",
  "asset/img18.jpg",
  "asset/img19.jpg",
  "asset/img20.jpg",
  "asset/img21.jpg",
  "asset/img22.jpg",
  "asset/img23.jpg",
  "asset/img24.jpg",
  "asset/img25.jpg",
];

const preloadedImage = (images) => {
  const preloaded = [];
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
    preloaded.push(img);
  }
  return preloaded;
};

const getImageGalery = () => {
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

const textLoad = () => {
  setTimeout(() => {
    nameGreeting.textContent = name[0];
  }, 0);
  setTimeout(() => {
    nameGreeting.textContent = name[1];
  }, 4000);
  setTimeout(() => {
    nameGreeting.textContent = name[2];
  }, 8000);
  setTimeout(() => {
    nameGreeting.textContent = name[3];
  }, 12000);
};

const getSettingImage = (widthGalery) => {
  if (widthGalery <= 480) {
    setImageMobileGalery(widthGalery, heightImageGalery.breakpoint1.heightImg);
  } else if (widthGalery <= 576) {
    setImageMobileGalery(widthGalery, heightImageGalery.breakpoint2.heightImg);
  } else if (widthGalery <= 767) {
    setImageMobileGalery(widthGalery, heightImageGalery.breakpoint3.heightImg);
  } else {
    setImageDesktopGalery(
      heightImageGalery.breakpoint4.largeGalery,
      heightImageGalery.breakpoint4.heightImg
    );
  }
};

const getSizeGalery = (widthGalery) => {
  if (widthGalery <= 767) {
    galery.style.height = `${widthGalery}px`;
    galery.style.width = `${widthGalery}px`;
  } else {
    galery.style.height = `${heightImageGalery.breakpoint4.largeGalery}px`;
    galery.style.width = `${heightImageGalery.breakpoint4.largeGalery}px`;
  }
};

const setImageDesktopGalery = (widthGalery, heightImg) => {
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
const setImageMobileGalery = (widthGalery, heightImg) => {
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

const setTotalBubbles = (target, totalBubbles) => {
  target.innerHTML = "";
  for (let i = 0; i < totalBubbles; i++) {
    const span = document.createElement("span");
    span.style.setProperty(
      "--duration",
      `${Math.floor(Math.random() * 50) + 1}`
    );
    target.appendChild(span);
  }
};

const getBubbles = () => {
  pageBubble.forEach((element) => {
    if (window.innerWidth <= 480) {
      setTotalBubbles(element, bubbleTotal.breakpoint1.bubbles);
    } else if (window.innerWidth <= 576) {
      setTotalBubbles(element, bubbleTotal.breakpoint2.bubbles);
    } else if (window.innerWidth <= 767) {
      setTotalBubbles(element, bubbleTotal.breakpoint3.bubbles);
    } else {
      setTotalBubbles(element, bubbleTotal.breakpoint4.bubbles);
    }
  });
};

window.addEventListener("load", () => {
  audio.volume = 0.1;
  getBubbles();
  textLoad();
  setInterval(textLoad, 16000);
  getSizeGalery(widthGalery);
  getSettingImage(widthGalery);
});
window.addEventListener("scroll", () => {
  audio.play();
});

window.addEventListener("resize", () => {
  widthGalery = Math.floor(window.innerWidth - (1 / 10) * window.innerWidth);
  getBubbles();
  getSizeGalery(widthGalery);
  getSettingImage(widthGalery);
});

toggleMessage.addEventListener("click", () => {
  galery.classList.toggle("active");
  getSettingImage(widthGalery);
  getImageGalery();
});
