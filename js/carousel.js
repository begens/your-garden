const images = [
    'img/men-leaft.jpg',
    'img/friends.jpg',
    'img/water.jpg',
    'img/flowers.jpg',
    'img/gress-del.jpg'
]

let currIdx = 0;

function showCurrentImage() {
    const imgContainer = document.querySelector('.current');
    imgContainer.src = images[currIdx];
}
showCurrentImage();

function nextImage() {
    currIdx++;
    if (currIdx >= images.length) currIdx = 0;
    showCurrentImage();
}

function prevImage() {
    currIdx--;
    if (currIdx < 0) currIdx = images.length - 1;
    showCurrentImage();
}

document.querySelector('.prev').addEventListener('click', prevImage);
document.querySelector('.next').addEventListener('click', nextImage);

setInterval(nextImage, 3000);