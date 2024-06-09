document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.getElementsByClassName('close')[0];
    const nextBtn = document.getElementsByClassName('next')[0];
    const prevBtn = document.getElementsByClassName('prev')[0];
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
});
