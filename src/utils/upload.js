export const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};
export const onPreview = async (file) => {
  const src = file.url || (await getSrcFromFile(file));
  const imgWindow = window.open(src);

  if (imgWindow) {
    const image = new Image();
    image.src = src;
    imgWindow.document.write(image.outerHTML);
  } else {
    window.location.href = src;
  }
};
