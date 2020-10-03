import resizeImg from '../Utils/resizeImage';

export default function getResizedImage(img, width, height) {
  return new Promise((resolve, reject) => {
    img.addEventListener('load', () => {
      const newData = resizeImg(img, width, height);
      resolve(newData);
    });
    img.addEventListener('error', (err) => reject(err));
  });
}
