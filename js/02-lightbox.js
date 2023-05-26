import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = createGalleryMarkup(galleryItems);

function createGalleryMarkup() {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>
`;
        })
        .join("");
}

galleryEl.addEventListener("click", onImgClick);

function onImgClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });
    lightbox.on("show.simplelightbox");
}
