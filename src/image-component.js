import image from './webpack-logo.png';

const img = document.createElement('img');

img.src = image;
img.style.width = '100px';

document.body.appendChild(img);