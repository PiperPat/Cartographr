function getCountries(up_to_year, dispPCT) {
    var output = [];
    if (dispPCT) {
        output.push(['Country', 'PCT']);
        countires.forEach(cntry => {
            if (cntry.year <= up_to_year) {
                output.push([cntry.code, cntry.pct]);
            }
        });
    } else {
        output.push(['Country', 'Non-PCT']);
        countires.forEach(cntry => {
            if ((cntry.year >= up_to_year) || cntry.pct == 0) {
                output.push([cntry.code, cntry.pct]);
            }
        });
    }
    return output;
}