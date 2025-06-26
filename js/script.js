// Menu burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Carrousel automatique
let index = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}

setInterval(showNextImage, 4000); // toutes les 4 secondes
