function formatData(data)
{
    var vote_data = [];
    $.each(data, function(key, value) {
        var candidates = [ key ];
        $.each(value, function(key, value) {
            candidates.push({
                'name': value['name'],
                'votes': value['votes'],
                'profile_url': value['profile_url']
            });
        });
        vote_data.push(candidates);
    });

    return vote_data;
}

function drawStats()
{
    $.ajax({
        url: '/admin/get_votes',
        dataType: 'json'
    }).done(function (results) {
        $('#stat-div').empty();

        console.log(formatData(results));
        var graphData = formatData(results);
        for (var p_index = 0; p_index < graphData.length; p_index++) {
            var candidate_div = '<div class="row"><div class="candidate col-xs-12 col-sm-offset-3 col-sm-6"><h4 class="center-text">' + graphData[p_index][0] + '</h4>';
            for (var c_index = 1; c_index < graphData[p_index].length; c_index++) {
                    candidate_div += '<div class="candidate col-xs-12 col-sm-6"><div class="candidate-image"><img src="' + graphData[p_index][c_index]['profile_url'] + '" width="80"></div><div class="candidate-info"><p>' + graphData[p_index][c_index]['name'] + '</p><span class="voter-count">' + graphData[p_index][c_index]['votes'] + '</span></div></div>';
            }

            candidate_div += '</div>';
            $('div#stat-div').append(candidate_div);
        }

        $('span.voter-count').delay(500)
                             .animate({ backgroundColor: jQuery.Color('rgb(60, 135, 235)') }, 500)
                             .delay(9000)
                             .animate({ backgroundColor: jQuery.Color('rgb(215, 231, 84)') }, 1000);

        setTimeout(function() {
            drawStats();
        }, 10000);
    });
}

$(document).ready(function() {
    drawStats();
});
