window.addEventListener('load', function() {
    const galleryContent = document.querySelector('.gallery-content');
    const gallery = document.querySelector('.gallery');
    const galleryWidth = galleryContent.offsetWidth;
    const firstImageWidth = galleryContent.querySelector('.gallery-img').offsetWidth;


    
    const images = galleryContent.innerHTML;
    galleryContent.innerHTML += images;

    let start = 0;
    let end = galleryWidth / 2;
    let animationFrame;

    function scrollGallery() {
        start -= 1;
        galleryContent.style.transform = `translateX(${start}px)`;

        if (Math.abs(start) >= end) {
            start = 0;
        }

        animationFrame = requestAnimationFrame(scrollGallery);
    }

    // Start the scrolling animation
    scrollGallery();

    // Stop the scrolling animation on mouse over
    gallery.addEventListener('mouseover', function() {
        cancelAnimationFrame(animationFrame);
    });

    // Resume the scrolling animation on mouse out
    gallery.addEventListener('mouseout', function() {
        scrollGallery();
    });
});
