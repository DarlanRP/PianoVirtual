document.body.addEventListener('keydown', (event) => {
    playSound(event.code.toLocaleLowerCase());
});

document.querySelectorAll('span').forEach(element => {
    element.addEventListener('click', () => {
        const clickedKey = element.getAttribute('data-key');
        playSound(clickedKey);
    });
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }
}