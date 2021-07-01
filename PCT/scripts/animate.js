var animating = true;

function slideshow() {
    animating = ! animating;
    let animation;

    if (! animating) {
        myVar = setInterval(addYear, 1000);
    } else {
        stopSlides();
    }    
}

function stopSlides() {
    clearInterval(myVar);
}