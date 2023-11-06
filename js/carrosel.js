var slideIndex = 0;
var slides = document.getElementsByClassName('carousel-image');
var dots = document.getElementsByClassName('carousel-dot');

function showSlide(index) {
    // Esconde todos os slides e remove a classe 'active' dos pontos
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active');
    }

    // Exibe o slide selecionado e adiciona a classe 'active' ao ponto correspondente
    slides[index].style.display = 'block';
    dots[index].classList.add('active');
}

function goToSlide(index) {
    // Atualiza o slide atual e exibe o slide correspondente
    slideIndex = index;
    showSlide(slideIndex);
}

function nextSlide() {
    // Avança para o próximo slide
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

setInterval(nextSlide, 5000); // Avança automaticamente a cada 5 segundos