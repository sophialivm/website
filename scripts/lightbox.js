function openLightbox(divElement) {
    var imgSrc = divElement.querySelector('img').src;
    document.getElementById('lightboxImage').src = imgSrc;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Attach click event listeners to all divs with class 'lightbox-item'
var lightboxItems = document.querySelectorAll('.collection-image');
lightboxItems.forEach(function (item) {
    item.addEventListener('click', function () {
        openLightbox(item);
    });
});