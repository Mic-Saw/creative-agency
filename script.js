//MOBILE MENU

const menu = document.querySelector('.top-navigation__container');
const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const nav = document.querySelector('.top-navigation__menu');

menu.addEventListener('click', () => {
    hamburger.classList.toggle('invisible');
    cross.classList.toggle('invisible');
    nav.classList.toggle('show');
})

//SLIDESHOW

//Navigation
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

//Elements

const header = document.querySelector('.lightbox-nav__header');

const pictureHeader = document.querySelector('.lightbox__picture--container > h3');
const pictureParagraph = document.querySelector('.lightbox__picture--container > p');

//Values

const headerVal = ['Brand naming & guidelines', 'Brand identity & merchandise', 'Brand identity & web design'];

const picture = document.querySelector('.lightbox__picture');
const pictureHeaderVal = ['Lean Product Roadmap', 'New Majestic Hotel', 'Crypto Dashboard'];
const pictureParagraphVal = ['2019 Project', '2018 Project', '2016 Project'];


let i = 0;


next.addEventListener('click', () => {
    i++;
    i = i % 3;
    header.textContent = headerVal[i];
    pictureHeader.textContent = pictureHeaderVal[i];
    pictureParagraph.textContent = pictureParagraphVal[i];
    if (window.screen.width <= 420) {
        picture.style.backgroundImage = "url(./assets/mobile/image-slide-" + `${i+1}` + ".jpg)";
    } else if (window.screen.width <= 1000) {
        picture.style.backgroundImage = "url(./assets/tablet/image-slide-" + `${i+1}` + ".jpg)";
    } else {
        picture.style.backgroundImage = "url(./assets/desktop/image-slide-" + `${i+1}` + ".jpg)";
    }
})

previous.addEventListener('click', () => {
    i--;
    i = (i + 3) % 3;
    header.textContent = headerVal[i];
    pictureHeader.textContent = pictureHeaderVal[i];
    pictureParagraph.textContent = pictureParagraphVal[i];
    if (window.screen.width <= 420) {
        picture.style.backgroundImage = "url(./assets/mobile/image-slide-" + `${i+1}` + ".jpg)";
    } else if (window.screen.width <= 1000) {
        picture.style.backgroundImage = "url(./assets/tablet/image-slide-" + `${i+1}` + ".jpg)";
    } else {
        picture.style.backgroundImage = "url(./assets/desktop/image-slide-" + `${i+1}` + ".jpg)";
    }
})