import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refGallery = document.querySelector('.gallery');
let instance;

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
}).join('');


refGallery.insertAdjacentHTML('beforeend', markup);

const lightBoxOptions = {
 captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
};

let lightbox = new SimpleLightbox('.gallery__item', lightBoxOptions);