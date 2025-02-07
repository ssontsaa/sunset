
var svgN = "http://www.w3.org/2000/svg";

// sets svg object variables
var canvas = document.getElementById("canvas");
var sun = document.createElementNS(svgN, "circle");

// default canvas specifications and sun attribute 
var canvasHeight = canvas.getBoundingClientRect().height;
var canvasWidth = canvas.getBoundingClientRect().width;
var canvasCenterY = canvasHeight / 2;
var canvasCenterX = canvasWidth / 2;

var sunCenterX = canvasCenterX;
var sunCenterY = canvasCenterY;
var sunRadius = canvasHeight / 10;
var sunColor = "#fcfa79";

// sets default position of the sun at the center of the canvas
sun.setAttribute("cx", sunCenterX);
sun.setAttribute("cy", sunCenterY);
sun.setAttribute("r", sunRadius);
sun.setAttribute("fill", sunColor);


function resetSun() {
    sunCenterX = canvasCenterX;
    sunCenterY = canvasCenterY;
    sun.setAttribute("cx", sunCenterX);
    sun.setAttribute("cy", sunCenterY);
    sun.setAttribute("r", sunRadius);
}

function displaySun() {
    canvas.appendChild(sun);
}

function removeSun() {
    canvas.removeChild(sun);
}

function setSun() {
    sunCenterY = sunCenterY + 2;
    sun.setAttribute("cy", sunCenterY);

    if (sunCenterY < (canvasHeight + sunRadius)) {
    } else {
        resetSun();
    }
}


function createSunset(duration, from, to) {
    sunset = sun.animate([
        { cy: from },  // Starting state
        { cy: to }  // Ending state
    ], {
        duration: duration,  // Animation duration in milliseconds
        easing: 'ease-out'  // Easing function
    });
    sunWiden = sun.animate([
        { r: sunRadius },
        { r: sunRadius * 1.3 }
    ], {
        duration: duration,
        easing: 'ease-in-out'
    });
    sunset.play();
    sunWiden.play();
    resetSun()
}

function runSunSet() {
    var duration = 5000; // ms
    createSunset(duration, sunCenterY, sunCenterY + canvasHeight + sunRadius);
}
