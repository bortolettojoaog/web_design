var hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', function () {
    document.querySelector('.lateral-menu').classList.toggle('show-menu');
    document.querySelector('.hamburguer').classList.toggle('show-menu');
    document.querySelector('.hamburguer > span').classList.toggle('show-menu');
});

document.querySelector('#year').textContent = 2019;

document
    .querySelector('.section-contact form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
    });
