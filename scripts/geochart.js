var auckland_val = 300
google.charts.load('current', {
'packages':['geochart'],
// Note: you will need to get a mapsApiKey for your project.
// See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
var data = google.visualization.arrayToDataTable([
    ['Country', 'Covid cases'],
    ['NZ-AUK', auckland_val],
    ['NZ-BOP', 50],
    ['NZ-CAN', 300],
    ['NZ-GIS', 200],
    ['NZ-HKB', 100],
    ['NZ-MBH', 50],
    ['NZ-MWT', 120],
    ['NZ-NSN', 50],
    ['NZ-NTL', 100],
    ['NZ-OTA', 50],
    ['NZ-STL', 25],
    ['NZ-TAS', 50],
    ['NZ-TKI', 0],
    ['NZ-WKO', 50],
    ['NZ-WGN', 50],
    ['NZ-WTC', 275],
    ['NZ-CIT', 50],
]);

var options = {
    region: 'NZ',
    resolution: 'provinces'
};

var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

chart.draw(data, options);
}