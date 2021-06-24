
function yearJump() {
    var jump_to = document.getElementById('year-input').value;
    let year = parseInt(jump_to, 10); // must be converted from str to int
    currentYear = year;
    changeYear(year);
}



function search(ele) {
    if(event.key === 'Enter') {
        yearJump();       
    }
}