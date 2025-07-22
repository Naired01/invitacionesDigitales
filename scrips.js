// Play audio

const play = document.getElementById('play');
const pause = document.getElementById('pause');
const audio = document.getElementById('background-music');
let statusMussic = false;

const audioControl = () => {
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
pause.addEventListener('click', audioControl);

