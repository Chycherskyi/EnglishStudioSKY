function gallery() {
    let slideIndex = 1;
    const slides = document.querySelectorAll('.gallery-slide'),
        prev = document.querySelector('.modal-gallery__prev'),
        next = document.querySelector('.modal-gallery__next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';

        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 37) {
            plusSlides(-1);
        } else if (e.keyCode == 39) {
            plusSlides(1);
        }
    });
}
export default gallery;