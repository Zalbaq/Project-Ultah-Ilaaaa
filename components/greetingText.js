import { name, nameGreeting } from "./DOMComponet.js";

export const textLoad = () => {
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
