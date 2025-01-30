const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.remove('hidden');
        lightboxImage.src = img.src;
    });
});

closeButton.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});

lightbox.addEventListener('click', (event)=>{
    if (event.target === lightbox) {
        lightbox.classList.add('hidden');
    }
})