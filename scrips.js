// Play audio

const play = document.getElementById('play');
const playText = document.getElementById('play-text');
const pause = document.getElementById('pause');
const audio = document.getElementById('background-music');
let statusMussic = false;

const audioControl = () => {
    // Load the audio if clicked for the first time
    if (audio.src === '') {
        audio.src = 'http://mass.ath.cx/go/audio16';
    }

    // Toggle play/pause state
    if (statusMussic) {
        audio.pause();
        statusMussic = false;
        play.style.display = 'block';
        pause.style.display = 'none';
    } else {
        audio.play();
        statusMussic = true;
        play.style.display = 'none';
        pause.style.display = 'block';
    }
}


play.addEventListener('click', audioControl);
playText.addEventListener('click', audioControl);
pause.addEventListener('click', audioControl);

// Carrousel imagen open
const carrouselItems = document.querySelectorAll('.carrousel-item');
carrouselItems.forEach(item => {
    item.addEventListener('click', () => {
        // get the image source from data-id attribute
        const imageId = item.getAttribute('data-id');
        const imageSrc = `resources/carrousel/${imageId}.webp`;
        const modalImage = document.getElementById('modal-image');
        modalImage.src = imageSrc;
        const modal = document.getElementById('image-modal');
        modal.style.display = 'block';
    });
});

// Close modal image
const modal = document.getElementById('image-modal');
const close = document.getElementsByClassName('close')[0];
close.addEventListener('click', () => {
    modal.style.display = 'none';
});
// Close modal when clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});