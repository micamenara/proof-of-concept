import { imageSettings } from '../constants';

export default function validateImage(img) {
  const validateType = (image) => {
    const findAllowed = imageSettings.allowedTypes.find((type) => type === image.type);
    return findAllowed;
  };

  const validateSize = (image) => {
    const size = image.size;
    return !(size > imageSettings.maxSize);
  };
  return validateType(img) && validateSize(img);
}
