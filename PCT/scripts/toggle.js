let currentYear = 1978;

let current_list = list_1979;


function changeYear(next_year) {
    if (next_year) currentYear++;
    else currentYear = currentYear -1;
    if (currentYear < 1978) currentYear = 1978;
    if (currentYear > 2020) currentYear = 2020;
    document.getElementById('year-indication').innerText = currentYear;

    switch (currentYear) {
        case 1978:
            current_list = list_1978;
            break;
        case 1979:
            current_list = list_1979;
            break;
        default:
            current_list = list_1980;
            break;
    }

    google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    
    google.charts.setOnLoadCallback(drawRegionsMap);
    
    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(current_list);

        var options = {
            legend: 'none'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('pct-map'));

        chart.draw(data, options);
    }

}