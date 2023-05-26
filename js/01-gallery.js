import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = createGalleryMarkup(galleryItems);

function createGalleryMarkup() {
    return galleryItems
        .map((pic) => {
            return `
    <li class="gallery__item">
        <a
            class="gallery__link"
            href="${pic.original}"
        >
            <img
                class="gallery__image"
                src="${pic.preview}"
                data-source="${pic.original}"
                alt="${pic.description}"
            />
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

    const instance = basicLightbox.create(
        `<img src=${event.target.dataset.source}>`,
        {
            onShow: () => {
                document.addEventListener("keydown", onKeyPress);
            },
            onClose: () => {
                document.removeEventListener("keydown", onKeyPress);
            },
        }
    );

    instance.show();

    function onKeyPress(event) {
        if (event.key === "Escape") {
            instance.close();
        }
    }
}

// ALTERNATIVE

// galleryEl.onclick = (event) => {
//     event.preventDefault();

//     if (event.target.nodeName !== "IMG") {
//         return;
//     }

//     const instance = basicLightbox.create(
//         `<img src=${event.target.dataset.source}>`,
//         {
//             onShow: () => {
//                 document.addEventListener("keydown", handleKeyPress);
//             },
//             onClose: () => {
//                 document.removeEventListener("keydown", handleKeyPress);
//             },
//         }
//     );

//     instance.show();

//     function handleKeyPress(event) {
//         if (event.key === "Escape") {
//             instance.close();
//         }
//     }
// };
