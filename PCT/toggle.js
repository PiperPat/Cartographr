let currentYear = 1978;

let list_1978 = [
    ['Country', 'PCT'],
    ['CF', 1],
    ['CG', 1],
    ['CH', 1],
    ['CM', 1],
    ['DE', 1],
    ['GA', 1],
    ['GB', 1],
    ['MG', 1],
    ['MW', 1],
    ['SN', 1],
    ['TD', 1],
    ['TG', 1],
    ['US', 1],
    ['FR', 1],
    ['BR', 1],
    ['LU', 1],
    ['SE', 1],
    ['JP', 1],
    ['DK', 1],
    ['RU', 1]
];

let list_1979 = [
    ['Country', 'PCT'],
    ['CF', 1],
    ['CG', 1],
    ['CH', 1],
    ['CM', 1],
    ['DE', 1],
    ['GA', 1],
    ['GB', 1],
    ['MG', 1],
    ['MW', 1],
    ['SN', 1],
    ['TD', 1],
    ['TG', 1],
    ['US', 1],
    ['FR', 1],
    ['BR', 1],
    ['LU', 1],
    ['SE', 1],
    ['JP', 1],
    ['DK', 1],
    ['RU', 1],
    ['AT', 1],
    ['MC', 1],
    ['NL', 1],
    ['RO', 1]
  ]


function changeYear() {
    if (currentYear == 1978) {
        currentYear = 1979;
        document.getElementById('year-indication').innerText = "1979";
        
        google.charts.load('current', {
            'packages':['geochart'],
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
          });
          google.charts.setOnLoadCallback(drawRegionsMap);
        
          function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable(list_1979);
        
            var options = {
                legend: 'none'
            };
        
            var chart = new google.visualization.GeoChart(document.getElementById('pct-map'));
        
            chart.draw(data, options);
          }

    } else {
        currentYear = 1978;
        document.getElementById('year-indication').innerText = "1978";

        google.charts.load('current', {
            'packages':['geochart'],
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        });
        
        google.charts.setOnLoadCallback(drawRegionsMap);
        
        function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(list_1978);
        
        var options = {
            legend: 'none'
        };
        
        var chart = new google.visualization.GeoChart(document.getElementById('pct-map'));
        
        chart.draw(data, options);
        }
    }
}