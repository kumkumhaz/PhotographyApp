document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector('.scroll-container');
    const forwardBtn = document.querySelector('.forward');
    const backwardBtn = document.querySelector('.backward');

    const images = scrollContainer.querySelectorAll('img');
    let currentIndex = 0;

    forwardBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            scrollToIndex();
        }
    });

    backwardBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            scrollToIndex();
        }
    });

    function scrollToIndex() {
        images[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
});

