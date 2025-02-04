
var svgN = "http://www.w3.org/2000/svg";

// sets svg object variables
var canvas = document.getElementById("canvas");
// var gradient = document.getElementById("myGradient")
// var sunGrad = gradient.use();
var sun = document.createElementNS(svgN, "circle");
var grad_overlay = document.createElementNS(svgN, "rect");
var gradient = document.createAttributeNS(svgN, "radialGradient");


// default canvas specifications and sun attribute 
var canvasHeight = canvas.getBoundingClientRect().height;
var canvasWidth = canvas.getBoundingClientRect().width;
var canvasCenterY = canvasHeight / 2;
var canvasCenterX = canvasWidth / 2;

var sunCenterX = canvasCenterX;
var sunCenterY = canvasCenterY;
var sunRadius = canvasWidth / 10;
var sunColor = "#fcfa79";

// sets default position of the sun at the center of the canvas
sun.setAttribute("cx", sunCenterX);
sun.setAttribute("cy", sunCenterY);
sun.setAttribute("r", sunRadius);
sun.setAttribute("fill", sunColor);

gradient.setAttribute("cx", sunCenterX);
gradient.setAttribute("cy", sunCenterY);
gradient.setAttribute("fr", sunRadius);
gradient.setAttribute("r", sunRadius * 2);

grad_overlay.setAttribute("x", 0);
grad_overlay.setAttribute("y", 0)
grad_overlay.setAttribute("height", canvasHeight);
grad_overlay.setAttribute("width", canvasWidth);
grad_overlay.setAttribute("color", "lightgreen");
grad_overlay.setAttribute("fill", gradient);

// // Create gradient
// var grad = context.createRadialGradient(150, 75, 15, 150, 75, 150);
// grad.addColorStop(0, "lightblue");
// grad.addColorStop(0.3, "pink");
// grad.addColorStop(1, "darkblue");

var sunsetDurationMS = 3000;

// var sunset = sun.animate();

function resetSun() {
    sunCenterX = canvasCenterX;
    sunCenterY = canvasCenterY;
    sun.setAttribute("cx", sunCenterX);
    sun.setAttribute("cy", sunCenterY);
    sun.setAttribute("r", sunRadius);
}

function displaySun() {
    console.log(gradient)
    console.log(grad_overlay)
    canvas.appendChild(grad_overlay);
    canvas.appendChild(sun);
}

function removeSun() {
    canvas.removeChild(sun);
    // Fill rectangle with gradient
    // canvas.removeChild(grad_overlay);
    // context.fillRect(10, 10, 280, 130);
}

function setSun() {
    sunCenterY = sunCenterY + 2;
    sun.setAttribute("cy", sunCenterY);

    if (sunCenterY < (canvasHeight + sunRadius)) {
    } else {
        resetSun();
    }
}

{/* <animate attributeType="x" from="10" to="100/" dur="5s" fill="freeze" /> */ }



// function runSunSet() {

//     while (sunCenterY < canvasHeight + sunRadius) {
//         // requestAnimationFrame(runSunSet);
//         sunCenterY += 2;
//         setSunHeight(sunCenterY);
//         // sun.setAttribute('cy', sunCenterY);
//     }
// }





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

// function Move() {
//     createAnimation("cy", sun, "3s", sun.getAttribute("cy"), canvasCenterY + canvasHeight + sunRadius);
// }


function runSunSet() {
    var duration = 5000; // ms
    createSunset(duration, sunCenterY, sunCenterY + canvasHeight + sunRadius);
}