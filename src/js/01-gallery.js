import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


console.log(galleryItems);

const renderList = (images) => 
    images.reduce((acc, {preview, original, description}) => 
    acc + `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`, '');

const divEl = document.querySelector('div.gallery');

const insertListItems = (string => {
    divEl.insertAdjacentHTML('afterbegin', string);
});

insertListItems(renderList(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    widthRatio: 0.95,
    heightRatio: 0.95,
});