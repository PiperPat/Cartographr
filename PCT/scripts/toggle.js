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
        case 1980:
            current_list = list_1980;
            break;
        case 1981:
            current_list = list_1981;
            break;
        case 1982:
            current_list = list_1982;
            break;
        case 1983:
            current_list = list_1983;
            break;
        case 1984:
            current_list = list_1984;
            break;
        case 1985:
            current_list = list_1985;
            break;
        case 1986:
            current_list = list_1985;
            break;
        case 1987:
            current_list = list_1987;
            break;
        case 1988:
            current_list = list_1987;
            break;
        case 1989:
            current_list = list_1989;
            break;
        case 1990:
            current_list = list_1990;
            break;
        case 1991:
            current_list = list_1991;
            break;
        case 1992:
            current_list = list_1992;
            break;
        case 1993:
            current_list = list_1993;
            break;
        case 1994:
            current_list = list_1994;
            break;
        case 1995:
            current_list = list_1995;
            break;
        case 1996:
            current_list = list_1996;
            break;
        case 1997:
            current_list = list_1997;
            break;
        case 1998:
            current_list = list_1998;
            break;
        case 1999:
            current_list = list_1999;
            break;
        case 2000:
            current_list = list_2000;
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