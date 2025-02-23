import { getFullPictures } from './full-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

const renderPicture = (picture) => {
  const newElement = pictureTemplate.cloneNode(true);

  newElement.querySelector('.picture__img').src = picture.url;
  newElement.querySelector('.picture__comments').textContent = picture.comments.length;
  newElement.querySelector('.picture__likes').textContent = picture.likes;

  newElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    getFullPictures(picture);
  });
  return newElement;
};

const renderPhotos = (images) => {
  images.forEach((picture) => {
    picturesFragment.appendChild(renderPicture(picture));
  });
  pictures.appendChild(picturesFragment);
};

const clearPhotos = () => {
  const oldPictures = pictures.querySelectorAll('.picture');
  oldPictures.forEach((p) => {
    p.remove();
  });
};

export {renderPhotos, clearPhotos};
