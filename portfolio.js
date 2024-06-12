document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let currentImgIndex = 0;
    const images = document.querySelectorAll('.photo-grid img');
    const totalImages = images.length;

    const openModal = (index) => {
        currentImgIndex = index;
        modal.style.display = "block";
        modalImg.src = images[index].src;
    };

    const closeModal = () => {
        modal.style.display = "none";
    };

    const showNextImage = () => {
        currentImgIndex = (currentImgIndex + 1) % totalImages;
        modalImg.src = images[currentImgIndex].src;
    };

    const showPrevImage = () => {
        currentImgIndex = (currentImgIndex - 1 + totalImages) % totalImages;
        modalImg.src = images[currentImgIndex].src;
    };

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            openModal(index);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Function to animate content after delay
    const animateContent = () => {
        const contentElements = document.querySelectorAll('header, .full-width-image, .gallery, footer');
        contentElements.forEach((element) => {
            element.style.opacity = 1;
        });
    };

    // Call animateContent after a short delay (adjust timing as needed)
    setTimeout(animateContent, 500); // Example delay of 500ms
});
