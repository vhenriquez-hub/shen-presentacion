document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const progressBar = document.getElementById('progress-bar');
    const slideIndicator = document.getElementById('slide-indicator');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updatePresentation() {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Add active class to current slide
        slides[currentSlide].classList.add('active');

        // Update progress bar
        const progress = ((currentSlide) / (totalSlides - 1)) * 100;
        progressBar.style.width = `${progress}%`;

        // Update slide indicator
        slideIndicator.textContent = `${currentSlide + 1} / ${totalSlides}`;

        // Disable/enable buttons based on index
        if(currentSlide === 0) {
            prevBtn.style.opacity = '0.3';
            prevBtn.style.cursor = 'not-allowed';
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
        }

        if(currentSlide === totalSlides - 1) {
            nextBtn.style.opacity = '0.3';
            nextBtn.style.cursor = 'not-allowed';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    }

    function goToNextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updatePresentation();
        }
    }

    function goToPrevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updatePresentation();
        }
    }

    // Button Listeners
    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) goToPrevSlide();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'Enter') {
            goToNextSlide();
        } else if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        }
    });

    // Initialize
    updatePresentation();
});
