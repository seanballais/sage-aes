function formatData(data)
{
    var vote_data = [];
    $.each(data, function(key, value) {
        var candidates = [ key ];
        $.each(value, function(key, value) {
            candidates.push([value['name'], value['votes'], value['profile_url']])
        });
        vote_data.push(candidates);
    });

    return vote_data;
}

function drawStats()
{
    $.ajax({
        url: '/get_votes',
        dataType: 'json'
    }).done(function (results) {
        $('#stat-div').empty();

        for (position in formatData(results)) {
            for (candidate in position) {
                if (typeof candidate === 'string') {
                    $('#stat-div').append('<h2>' + candidate + '</h2>');
                }
            }
        }

        setTimeout(function() {
            drawStats();
        }, 10000);
    });
}

$(document).ready(function() {
    drawStats();
});
