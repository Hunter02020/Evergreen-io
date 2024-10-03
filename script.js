document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3; // Set volume to 30%

    // Play music when user interacts with the page
    document.body.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
        }
    }, { once: true });
});