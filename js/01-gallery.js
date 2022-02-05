import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refGallery = document.querySelector('.gallery');
let instance;

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
   </a>
    </div>`
})
    .join('');

refGallery.insertAdjacentHTML('beforeend', markup);




function openModal(event) {
    event.preventDefault();
    if (event.target.tagName !== "IMG") {
        return;
    }
    const url = event.target.dataset.source;
    instance = basicLightbox.create(`
    <div class="modal">
        <img src="${url}" width= "1000"/>
    </div>
` ,);
    instance.show();
    const refModal = document.querySelector(".modal");
    refModal.addEventListener('click', closeModal);
    document.addEventListener('keydown', onEscPress);
}

function closeModal() {
  document.removeEventListener('keydown', onEscPress);
  instance.close();
}

// 2. Добавляем слушателя события на родителя галереи по клику

refGallery.addEventListener('click', openModal);


function onEscPress(event) {
    if (event.code !== 'Escape') {
        return;
    }
    closeModal();
}


