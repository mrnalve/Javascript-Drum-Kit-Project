window.addEventListener('keydown', (e) => {
    let key = document.querySelector(`
        .key[data-key = "${e.keyCode}"]
    `);
    let audio = document.querySelector(`
        audio[data-key = "${e.keyCode}"]
    `);
    if (!audio) {
        return
    } else {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    };
});

let keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', function (e) {
        if (e.propertyName != 'transform') {
            return;
        }
        key.classList.remove('playing')
    });
});
