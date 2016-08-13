$(document).ready(function() {
    $('button#revote').click(function() {
        $('div#rick-ee').delay(500).fadeIn(500);
        $('div#rick-ee video#rick').get(0).play();
        $('div#rick-ee video#rick').get(0).addEventListener('ended', function() {
            $('div#rick-ee').fadeOut(500);
        });
    })

    var clickTimes = 0;
    var message = [
        'Noooooo! Let me out!',
        'You rick rolling bastard!',
        'AHHH! The horror!',
        'Let me go!',
        'Please!',
        'Rick roll someone else!'
    ];
    $('div#rick-ee button').click(function() {
        if (clickTimes < message.length) {
            $('div#rick-ee button').text(message[clickTimes]);
            clickTimes++;
        } else {
            clickTimes = 0;
            $('div#rick-ee').fadeOut(500);
            $('div#rick-ee video#rick').get(0).pause();
            $('div#rick-ee button').text('Save me from this horror, please! Ahhh!');
        }
    });
});
