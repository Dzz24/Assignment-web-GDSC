let text = document.getElementById('text');
let isVisible = true;
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    let currentScrollPosition = window.scrollY;

    // Define the point where you want the text to stop and disappear
    let stopPoint = 300;

    if (currentScrollPosition < stopPoint) {
        // If the scroll position is below the stop point, adjust the marginTop
        text.style.marginTop = currentScrollPosition * 2.5 + 'px';

        // If the text was hidden, make it visible again
        if (!isVisible) {
            text.style.display = 'block';
            isVisible = true;
        }
    } else {
        // If the scroll position is at or above the stop point
        if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down, hide the text
            text.style.display = 'none';
            isVisible = false;
        } else {
            // Scrolling up, show the text
            text.style.display = 'block';
            isVisible = true;
        }
    }

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
});
