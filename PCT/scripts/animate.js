
function slideshow() {

    if (animating) stopSlides();
    else myVar = setInterval(addYear, 1000);
        
    animating = ! animating; // init false, now true
}

function stopSlides() {
    clearInterval(myVar);
}