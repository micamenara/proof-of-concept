export default function resizeImg(img, maxWidth, maxHeight) {
  const degrees = 0;
  let imgWidth = img.width,
    imgHeight = img.height;

  let ratio = 1,
    ratio1 = 1,
    ratio2 = 1;
  ratio1 = maxWidth / imgWidth;
  ratio2 = maxHeight / imgHeight;

  // Use the smallest ratio that the image best fit into the maxWidth x maxHeight box.
  if (ratio1 < ratio2) {
    ratio = ratio1;
  } else {
    ratio = ratio2;
  }
  let canvas = document.createElement('canvas');
  let canvasContext = canvas.getContext('2d');
  let canvasCopy = document.createElement('canvas');
  let copyContext = canvasCopy.getContext('2d');
  let canvasCopy2 = document.createElement('canvas');
  let copyContext2 = canvasCopy2.getContext('2d');
  canvasCopy.width = imgWidth;
  canvasCopy.height = imgHeight;
  copyContext.drawImage(img, 0, 0);

  // init
  canvasCopy2.width = imgWidth;
  canvasCopy2.height = imgHeight;
  copyContext2.drawImage(
    canvasCopy,
    0,
    0,
    canvasCopy.width,
    canvasCopy.height,
    0,
    0,
    canvasCopy2.width,
    canvasCopy2.height,
  );

  let rounds = 1;
  let roundRatio = ratio * rounds;
  for (let i = 1; i <= rounds; i++) {
    // tmp
    canvasCopy.width = (imgWidth * roundRatio) / i;
    canvasCopy.height = (imgHeight * roundRatio) / i;

    copyContext.drawImage(
      canvasCopy2,
      0,
      0,
      canvasCopy2.width,
      canvasCopy2.height,
      0,
      0,
      canvasCopy.width,
      canvasCopy.height,
    );

    // copy back
    canvasCopy2.width = (imgWidth * roundRatio) / i;
    canvasCopy2.height = (imgHeight * roundRatio) / i;
    copyContext2.drawImage(
      canvasCopy,
      0,
      0,
      canvasCopy.width,
      canvasCopy.height,
      0,
      0,
      canvasCopy2.width,
      canvasCopy2.height,
    );
  } // end for

  canvas.width = (imgWidth * roundRatio) / rounds;
  canvas.height = (imgHeight * roundRatio) / rounds;
  canvasContext.drawImage(
    canvasCopy2,
    0,
    0,
    canvasCopy2.width,
    canvasCopy2.height,
    0,
    0,
    canvas.width,
    canvas.height,
  );

  if (degrees === 90 || degrees === 270) {
    canvas.width = canvasCopy2.height;
    canvas.height = canvasCopy2.width;
  } else {
    canvas.width = canvasCopy2.width;
    canvas.height = canvasCopy2.height;
  }

  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  if (degrees === 90 || degrees === 270) {
    canvasContext.translate(canvasCopy2.height / 2, canvasCopy2.width / 2);
  } else {
    canvasContext.translate(canvasCopy2.width / 2, canvasCopy2.height / 2);
  }
  canvasContext.rotate((degrees * Math.PI) / 180);
  canvasContext.drawImage(canvasCopy2, -canvasCopy2.width / 2, -canvasCopy2.height / 2);

  let dataURL = canvas.toDataURL();
  return dataURL;
}
