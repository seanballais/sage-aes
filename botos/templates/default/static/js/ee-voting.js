$(document).ready(function() {
    var clickCounts = 0;
    var clickCountReq = Math.floor(Math.random() * 5) + 10;

    $('a').click(function() {
        clickCounts++;
        if (clickCounts >= clickCountReq) {
            $('h6#ee-nicolas').fadeIn(1500);
        }
    });

    // Nicolas Pedro Easter Egg
    $('h6#ee-nicolas').click(function() {
        $('h6#ee-nicolas small').text('Ahhh! Not his face. Ahhh! I am regretting this. (Refresh page to stop looking at Nicolas\' face.)');
        $('h6#ee-nicolas').css('cursor', 'default');
        $('h6#ee-nicolas:hover').css('text-decoration', 'none');
        $('a.radio-picture').css('background', 'url(\'/assets/img/ee/nicolas-pedro.png\') no-repeat scroll 0 0 white');
        $('h3.candidate-name').text('Nicolas Pedro');
    })
});
