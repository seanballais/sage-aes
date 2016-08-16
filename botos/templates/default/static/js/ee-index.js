var audio = false;

// Ma'am Agri Easter Egg
keyboardJS.bind('shift + alt > a > g > r > i', function(e) {
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

$(document).ready(function() {
    $('span#design-2015').click(function() {
        $('div#bg-curtain').fadeIn(1000);

        setTimeout(function() {
            $('html, body').css({ 'background-image': 'url("/assets/img/ee/bg-2015.jpg")' });
            $('div#banner-2015').show();
            $('img#banner-2016').hide();
            $('div#base-banner').css({ 'margin-bottom': '2%', 'margin-top': '1%', 'text-align': 'center', 'color': '#ffffff' });
            $('div#base-banner').removeClass();
            $('div#base-banner h1').addClass('design-2015');
            $('span#banner-title-2015').show();
            $('form#login-form-2015').show();
            $('div#footer-2015').delay(2000).show();
            $('div#fork-me-ribbon').show();
            $('form#login-form').hide();
            $('div#footer-2016').hide();
            $('span#design-2015').hide();
        }, 1000);

        $('div#bg-curtain').fadeOut(1500);
    });
});
