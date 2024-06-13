document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-load');
    
    elements.forEach(function(element) {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
    });

    function fadeInElements() {
        elements.forEach(function(element) {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        });
    }

    // Викликаємо функцію fadeInElements() після короткої затримки (наприклад, 300 мс)
    setTimeout(fadeInElements, 300);
});
