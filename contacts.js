document.addEventListener('DOMContentLoaded', function() {
    // Вибираємо елементи, які мають з'явитися плавно
    const container = document.querySelector('.container');
    const photoGallery = document.querySelector('.photo-gallery');
    const footer = document.querySelector('footer');

    // Додаємо клас show через короткий інтервал після завантаження сторінки
    setTimeout(function() {
        container.classList.add('show');
    }, 200); // Затримка в 200 мілісекунд для ефекту послідовного з'явлення

    setTimeout(function() {
        photoGallery.classList.add('show');
    }, 400);

    setTimeout(function() {
        footer.classList.add('show');
    }, 600);
});
