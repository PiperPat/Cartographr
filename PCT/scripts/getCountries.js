function getCountries(up_to_year, dispPCT) {
    var geochart_data = [];
    var all_data = [];
    if (dispPCT) {
        geochart_data.push(['Country', 'PCT']);
        countires.forEach(cntry => {
            if (cntry.year <= up_to_year) {
                geochart_data.push([cntry.code, cntry.pct]);
                all_data.push(cntry);
            }
        });
    } else {
        geochart_data.push(['Country', 'Non-PCT']);
        countires.forEach(cntry => {
            if ((cntry.year > up_to_year) || cntry.pct == 0) {
                geochart_data.push([cntry.code, cntry.pct]);
                all_data.push(cntry);
            }
        });
    }

    lcHtml = '';

    if (all_data.includes(Antigua_Barbuda) ||all_data.includes(Sierra_Leone) || all_data.includes(Grenada)) {
        lcHtml = lcHtml + '<br><sup>1</sup> PCT National Phase applications (as well as standard national applications) are held but not yet processed due to the current lack of relevant law and/or regulations.';
    }
    document.getElementById('footnotes').innerHTML = lcHtml;
    return [geochart_data, all_data];
}