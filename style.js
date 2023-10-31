const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.children);
const slideImg = document.querySelectorAll('.can-img');
const slideFruitImg = document.querySelectorAll('.fruit-img');
const headings = document.querySelectorAll('.heading');
const wrapper = document.querySelector('.wrapper');
const cylinder = document.querySelector('.cylinder');
let i = 1;
prev.addEventListener('click', () => {
    i -= 1;
    show(i);
})

next.addEventListener('click', () => {
    i += 1;
    show(i);
})
show(i);

function show(num) {

    if (num == slides.length) {
        i = 0;
        num = 0;
    }
    if (num < 0) {
        num = slides.length - 1;
        i = slides.length - 1;
    }
    for (let y of slides) {        
        y.classList.remove('show');
    }
    for (let z of slideImg) {
        z.classList.remove('sizeShow');
    }
    for (let x of slideFruitImg) {
        x.classList.remove('fruitTwist');
    }
    for (let w of headings) {
        w.classList.remove('flip');
    }
    slides[num].classList.add('show');
    let currentClass = slides[num].getAttribute("class");
    console.log(currentClass + num);
    if (currentClass == "pineapple show") {
        wrapper.style.setProperty('--wrapper', '#A2CCAE')
        cylinder.style.setProperty('--cylinder', '#E9DD8F');
        
    } else if (currentClass == "kiwi show") {
        wrapper.style.setProperty('--wrapper', '#BBC347');
        cylinder.style.setProperty('--cylinder', '#9AA326');
    } else {
        wrapper.style.setProperty('--wrapper', '#F46F5D');
        cylinder.style.setProperty('--cylinder', '#F55357');
    }
    slideImg[num].classList.add('sizeShow');
    slideFruitImg[num].classList.add('fruitTwist');
    headings[num].classList.add('flip');
}




