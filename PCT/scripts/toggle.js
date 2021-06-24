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
        case 2001:
            current_list = list_2001;
            break;
        case 2002:
            current_list = list_2002;
            break;
        case 2003:
            current_list = list_2003;
            break;
        case 2004:
            current_list = list_2004;
            break;
        case 2005:
            current_list = list_2005;
            break;
        case 2006:
            current_list = list_2006;
            break;
        case 2007:
            current_list = list_2007;
            break;
        case 2008:
            current_list = list_2008;
            break;
        case 2009:
            current_list = list_2009;
            break;
        case 2010:
            current_list = list_2009;
            break;
        case 2011:
            current_list = list_2011;
            break;
        case 2012:
            current_list = list_2012;
            break;
        case 2013:
            current_list = list_2013;
            break;
        case 2014:
            current_list = list_2013;
            break;
        case 2015:
            current_list = list_2013;
            break;
        case 2016:
            current_list = list_2016;
            break;
        case 2017:
            current_list = list_2017;
            break;
        case 2018:
            current_list = list_2017;
            break;
        case 2019:
            current_list = list_2017;
            break;
        case 2020:
            current_list = list_2020;
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

    var dom_id = 'pct-map'

    if (currentYear % 2 == 0) {
        dom_id = 'pct-map';
        document.getElementById('pct-map-2').classList.add('inwisible');
        document.getElementById('pct-map-2').classList.remove('wisible');
    } else {
        dom_id = 'pct-map-2';
        document.getElementById(dom_id).classList.add('wisible');
        document.getElementById(dom_id).classList.remove('inwisible');
    }
    
    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(current_list);

        var options = {
            legend: 'none'
        };

        var chart = new google.visualization.GeoChart(document.getElementById(dom_id));

        chart.draw(data, options);
    }

}