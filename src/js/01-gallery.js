// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const divGalleryRef = document.querySelector('.gallery');
const galleryImage = createGalleryImage(galleryItems);
divGalleryRef.insertAdjacentHTML('beforeend', galleryImage);
function createGalleryImage(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`;
    }).join(''); 
};

let gallery = new SimpleLightbox('.gallery a', { captions: true, captionDelay: 250, captionsData: 'alt' });
gallery.on('show.simplelightbox', function () {
	 
});