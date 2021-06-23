google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
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
        ['RO', 1],
        ['NO', 1],
        ['LI', 1],
        ['AU', 1],
        ['HU', 1],
        ['KP', 1],
        ['FI', 1],
        ['BE', 1],
        ['LK', 1],
        ['MR', 1],
        ['SD', 1],
        ['BG', 1],
        ['KR', 1],
        ['ML', 1],
        ['BB', 1],
        ['IT', 1],
        ['BJ', 1],
        ['BF', 1],
        ['ES', 1],
        ['CA', 1],
        ['GR', 1],
        ['PL', 1]
        
    ]);

    var options = {
        legend: 'none'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('pct-1990'));

    chart.draw(data, options);
  }