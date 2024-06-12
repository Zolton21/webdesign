document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".photo-grid img");
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal-content");
    const closeModal = document.querySelector(".close");

    images.forEach((img) => {
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
    const scrollElements = document.querySelectorAll('.main-text, .main-image, .photo-grid, .pricing-content, .review, .contact, .faq-item');

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
