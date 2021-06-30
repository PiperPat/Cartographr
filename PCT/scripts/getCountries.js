function getCountries(up_to_year) {
    var output = [];
    var for_python = [];
    countires.forEach(cntry => {
        if (cntry.year <= up_to_year) {
            output.push([cntry.code, cntry.pct]);
            for_python.push(cntry.code);
        }
    });
    // console.log(output);
    console.log(for_python);
}