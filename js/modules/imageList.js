function imageList(){
function addImgGallery() {
    const parent = document.querySelector('.gallery-slider__wrapper');
    for (let i = 1; i <= 18; i++) {
        const element = document.createElement('div');
        element.classList.add('gallery-slide');
        element.innerHTML = `<img src="img/gallery/gallery-${i}.jpg" alt="image">`;
        parent.append(element);
    }
}

function addImgReview() {
    const parent = document.querySelector('.autoplay');
    for (let i = 1; i <= 16; i++) {
        const element = document.createElement('img');
        element.src = `img/reviews/review-${i}.jpg`
        parent.append(element);
    }
}

addImgGallery();
addImgReview();
}

export default imageList;