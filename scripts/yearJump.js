
function yearJump() {
    var jump_to = document.getElementById('year-input').value;
    let year = parseInt(jump_to, 10); // must be converted from str to int (in base 10)
    if (! isNaN(year)) {
        if (year < 1978) year = 1978;
        if (year > 2020) year = 2020;
        currentYear = year;
        changeYear(year);
    }
}



function search(ele) {
    if(event.key === 'Enter') {
        yearJump();       
    }
}