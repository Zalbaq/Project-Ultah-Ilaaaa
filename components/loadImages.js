export const preloadedImage = (images) => {
  const preloaded = [];
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
    preloaded.push(img);
  }
  return preloaded;
};
