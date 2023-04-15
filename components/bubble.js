import { bubbleTotal } from "./DOMComponet.js";

export const getBubbles = (pagesOfBubble) => {
  pagesOfBubble.forEach((element) => {
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
export const setTotalBubbles = (pageOfBubble, totalBubbles) => {
  pageOfBubble.innerHTML = "";
  for (let i = 0; i < totalBubbles; i++) {
    const span = document.createElement("span");
    span.style.setProperty(
      "--duration",
      `${Math.floor(Math.random() * 50) + 1}`
    );
    pageOfBubble.appendChild(span);
  }
};
