const elements = document.querySelectorAll('.services__item');
for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function() {
        elements[i].classList.toggle('services__active-item');
        elements[i].querySelector('.services__icon').classList.toggle('services__active-icon');
    }
}
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}


/* Основная функция сладера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("services__list");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}