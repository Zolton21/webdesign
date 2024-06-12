function submitReview(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const social = form.social.value;
    const review = form.review.value;
    const photoInput = form.photo;
    const reader = new FileReader();

    reader.onload = function(e) {
        const reviewsContainer = document.querySelector('.reviews');
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = name;

        const reviewContent = document.createElement('div');
        const reviewName = document.createElement('h3');
        reviewName.textContent = name;
        const reviewText = document.createElement('p');
        reviewText.textContent = review;

        reviewContent.appendChild(reviewName);
        reviewContent.appendChild(reviewText);

        reviewItem.appendChild(img);
        reviewItem.appendChild(reviewContent);

        reviewsContainer.insertBefore(reviewItem, reviewsContainer.firstChild);
        
        form.reset();
        document.getElementById('photo-preview-img').style.display = 'none';
        window.location.hash = ''; // Закрываем форму
    }

    if (photoInput.files && photoInput.files[0]) {
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        const reviewsContainer = document.querySelector('.reviews');
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const img = document.createElement('img');
        img.src = 'default-avatar.png'; // Используйте изображение по умолчанию
        img.alt = name;

        const reviewContent = document.createElement('div');
        const reviewName = document.createElement('h3');
        reviewName.textContent = name;
        const reviewText = document.createElement('p');
        reviewText.textContent = review;

        reviewContent.appendChild(reviewName);
        reviewContent.appendChild(reviewText);

        reviewItem.appendChild(img);
        reviewItem.appendChild(reviewContent);

        reviewsContainer.insertBefore(reviewItem, reviewsContainer.firstChild);
        
        form.reset();
        document.getElementById('photo-preview-img').style.display = 'none';
        window.location.hash = ''; // Закрываем форму
    }
}

function previewPhoto(event) {
    const photoPreview = document.getElementById('photo-preview');
    const photoPreviewImg = document.getElementById('photo-preview-img');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        photoPreviewImg.src = e.target.result;
        photoPreviewImg.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}