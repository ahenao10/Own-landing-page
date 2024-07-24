let currentIndex = 0;

function slide(direction) {
    const carousel = document.querySelector('.carousel-repos');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const visibleItems = Math.floor(carousel.parentElement.offsetWidth / itemWidth);
    const maxIndex = items.length - visibleItems;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    }
    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}