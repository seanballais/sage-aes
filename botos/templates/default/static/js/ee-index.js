var audio = false;

// Ma'am Agri Easter Egg
keyboardJS.bind('shift + alt > a > g > r > i', function(e) {
    //$('body, html').css('background-image', 'url("/assets/img/ee/agriculture-heart.png")');
    if (!audio) {
        audio = new Audio('/assets/audio/ee/angelic-voices.wav');
    }

    if (audio.paused) {
        $('div#agri-ee').fadeIn(1250, function() {
            $('div#agri-ee').delay(750).fadeOut(350);
        });
        audio.play();
    }

    console.log('Because Ma\'am Agri is ❤.');
});
