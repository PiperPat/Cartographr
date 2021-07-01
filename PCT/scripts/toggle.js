let currentYear = 1978;

let current_list = [];

function addYear() {
    currentYear++;
    changeYear(currentYear);
}
function remYear() {
    currentYear = currentYear -1;
    changeYear(currentYear);
}


var show_pct = true;




function changeYear(currentYear) {

    if (currentYear < 1978) currentYear = 1978;
    if (currentYear > 2020) currentYear = 2020;
    
    document.getElementById('year-indication').innerText = currentYear;

    var genLists = getCountries(currentYear, show_pct)

    current_list = genLists[0];
    var comp_list = genLists[1];
    

    google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    
    google.charts.setOnLoadCallback(drawRegionsMap);

    var dom_id = 'pct-map'

    if (currentYear % 2 == 0) {
        dom_id = 'pct-map';
    } else {
        dom_id = 'pct-map-2';
    }
    
    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(current_list);

        var options = {
            legend: 'none'
        };

        var chart = new google.visualization.GeoChart(document.getElementById(dom_id));

        chart.draw(data, options);
    }

    function makeInwisible() {
        document.getElementById('pct-map-2').classList.add('inwisible');
        document.getElementById('pct-map-2').classList.remove('wisible');
    }

    if (currentYear % 2 == 0) {
        setTimeout(makeInwisible, 100)
    } else {
        document.getElementById(dom_id).classList.add('wisible');
        document.getElementById(dom_id).classList.remove('inwisible');
    }



    // document.getElementById('here-be-data')


    const table = document.getElementById("here-be-data");

    table.innerHTML = '';

    comp_list.forEach(result => {
        // actual code data
        let row = table.insertRow();
        let code = row.insertCell(0);
        code.innerHTML = result.code;

        let name = row.insertCell(1);
        name.innerHTML = result.name;

        let date = row.insertCell(2);
        date.innerHTML = result.joined;
    });

}


function pct_toggle() {
    show_pct = !(show_pct);
    if (show_pct) document.getElementById('pct-toggle-lbl').innerHTML = '';
    else document.getElementById('pct-toggle-lbl').innerHTML = 'not';
    changeYear(currentYear);
}