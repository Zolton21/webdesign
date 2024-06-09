document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carousel = document.querySelector(".portfolio-carousel");
    const images = document.querySelectorAll(".portfolio-carousel img");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");
    let index = 0;

    function showSlide(n) {
        if (n >= images.length) {
            index = 0;
        } else if (n < 0) {
            index = images.length - 1;
        } else {
            index = n;
        }
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    prevButton.addEventListener("click", function() {
        showSlide(index - 1);
    });

    nextButton.addEventListener("click", function() {
        showSlide(index + 1);
    });

    setInterval(() => {
        showSlide(index + 1);
    }, 5000);

    images.forEach((img, i) => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Scroll animation
    const scrollElements = document.querySelectorAll('.main-text, .main-image, .portfolio-container, .pricing-content, .review, .contact, .faq-item');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.style.opacity = '1';
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    handleScrollAnimation();
});
