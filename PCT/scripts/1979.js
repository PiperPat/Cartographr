google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['CF', 300],
        ['CG', 300],
        ['CH', 300],
        ['CM', 300],
        ['DE', 300],
        ['GA', 300],
        ['GB', 300],
        ['MG', 300],
        ['MW', 300],
        ['SN', 300],
        ['TD', 300],
        ['TG', 300],
        ['US', 300],
        ['FR', 300],
        ['BR', 300],
        ['LU', 300],
        ['SE', 300],
        ['JP', 300],
        ['DK', 300],
        ['RU', 300],
        ['AT', 300],
['MC', 300],
['NL', 300],
['RO', 300]
    ]);

    var options = {
        legend: 'none'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('pct-1979'));

    chart.draw(data, options);
  }