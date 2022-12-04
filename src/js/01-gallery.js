// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


console.log(galleryItems);

const divEl = document.querySelector('div.gallery');

const renderList = (images) => 
    images.reduce((acc, {preview, original, description}) => 
    acc + `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`, '');

const insertListItems = (string => {
    divEl.insertAdjacentHTML('afterbegin', string);
});

insertListItems(renderList(galleryItems));

divEl.addEventListener('click', clickOpenModalHendler);

function clickOpenModalHendler (evt){
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG"){
        return;
    }

    const instance = basicLightbox.create(`<div class="modal">
        <img class="modal-img" src="${evt.target.dataset.source}" alt="Big img" height = "750px"/>
    </div>`,{
	    closable: false,
        onShow: (instance) => { 
            document.addEventListener('keydown', clickCloseModalHendler ); 
        },
        onClose: (instance) => {
            document.removeEventListener('keydown', clickCloseModalHendler); 
        },
    });
    instance.show();

    const imageEl = document.querySelector('.modal-img');
    imageEl.addEventListener ('click', clickCloseModalHendler); 
    
    function clickCloseModalHendler (evt){
        if (evt.code === 'Escape' || evt.target.nodeName === "IMG"){
           instance.close(); 
        }     
    }
}