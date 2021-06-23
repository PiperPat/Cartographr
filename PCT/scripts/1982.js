google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
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
['RO', 300],
['NO', 300],
['LI', 300],
['AU', 300],
['HU', 300],
['KP', 300],
['FI', 300],
['BE', 300],
['LK', 300]
    ]);

    var options = {
        legend: 'none'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('pct-1982'));

    chart.draw(data, options);
  }