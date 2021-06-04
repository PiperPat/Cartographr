var slider = document.getElementById("myRange");

var slider = document.getElementById("myRange");
var output = document.getElementById("slider-results");
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    auckland_val = this.value;
    drawRegionsMap()

}
