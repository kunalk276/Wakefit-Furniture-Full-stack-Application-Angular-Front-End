document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider .list');
    const slides = document.querySelectorAll('.slider .list .item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let index = 0;
    let autoSlideInterval;

    function showSlide(n) {
        if (n >= slides.length) {
            index = 0;
        } else if (n < 0) {
            index = slides.length - 1;
        } else {
            index = n;
        }
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateActiveThumbnail();
    }

    function updateActiveThumbnail() {
        const thumbnails = document.querySelectorAll('.thumbnail .item');
        thumbnails.forEach((thumb, idx) => {
            thumb.classList.toggle('active', idx === index);
        });
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            showSlide(index + 1);
        }, 3000); // Change slide every 3 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
        stopAutoSlide();
        startAutoSlide();
    });

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
        stopAutoSlide();
        startAutoSlide();
    });

    // Initialize
    showSlide(index);
    startAutoSlide();
});
