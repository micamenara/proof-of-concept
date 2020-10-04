const { Testing } = require('../constants');
const { default: getResizedImage } = require('./getResizedImage');

describe('getResizedImage component', () => {
  test('renders getResizedImage', () => {
    const img = new Image();
    img.src = Testing.imageUrl;
    getResizedImage(img, 400, 300)
      .then((data) => console.log(data))
      .catch(() => {
        console.error(true);
      });
  });
  test('with error', () => {
    getResizedImage('test', 400, 300)
      .then((data) => console.log(data))
      .catch(() => {
        console.error(true);
      });
  });
});
