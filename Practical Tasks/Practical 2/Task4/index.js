/* 
    References used:
    https://www.w3schools.com/graphics/canvas_drawing.asp
    https://www.w3schools.com/Tags/canvas_quadraticcurveto.asp
    http://www.java2s.com/Tutorials/Javascript/Canvas_How_to/Shape/Get_random_points_on_circle.htm
*/

/* 
    mouseX and mouseY must be globals, because they are referred to by many instances of 
    greenRingOnMouseMove, since a new one is called whenever the mouse moves. 
*/
let mouseX, mouseY;

function greenRingOnMouseMove(event) {
    // use offsetX/layerX instead of screenX to account for offset in canvas positioning: https://stackoverflow.com/questions/1114465/getting-mouse-location-in-canvas
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mouseX = event.offsetX || event.layerX;
    mouseY = event.offsetY || event.layerY;
    const timer = setTimeout(function () {
        if (mouseX == event.offsetX || mouseY == event.offsetY) {
            drawGreenRing(mouseX + 3, mouseY + 7);
        }
    }, 3000);

}

//complete revolution of circle is 2*PI, This will give a number between 0 and 2*PI.
function getAngle() {
    return Math.random() * Math.PI * 2;
}

function randomPointOnCircle(centerX, centerY, radius) {
    const angle = getAngle();
    const x = centerX + radius * Math.sin(angle);
    const y = centerY + radius * Math.cos(angle);
    return { x: x, y: y }
}

// Control point acts as an invisible point for the quadratic curve to be drawn towards.
// They are 1.5 * r
function getControlPoint(x, y, cx, cy) {
    const dx = (x - cx) * 1.5;
    const dy = (y - cy) * 1.5;
    return { controlX: x + dx, controlY: y + dy };
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
function getRandomHexString(min, max) {
    return (Math.round(Math.random() * (max - min) + min)).toString(16);
}


// Cancel all timers in an array.
function clearAllTimeouts(timers) {
    for (let i = timers.length; i > 0; i--) {
        window.clearTimeout(timers[i]);
    }
}


function drawGreenRing(cx, cy) {
    const canvas = document.querySelector('#canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const timers = [];
    let cancelInProgress = false;
    for (let i = 0; i < 40; i++) {
        if (cancelInProgress) {
            break;
        }

        const r = 5;
        const { x, y } = randomPointOnCircle(cx, cy, r);
        const { controlX, controlY } = getControlPoint(x, y, cx, cy);
        const { x: endX, y: endY } = randomPointOnCircle(controlX, controlY, r);

        //https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/
        timers.push(setTimeout(function () {
            if (!cancelInProgress && (mouseX + 3 != cx || mouseY + 7 != cy)) {
                clearAllTimeouts(timers)
                // https://www.w3docs.com/snippets/javascript/how-to-clear-the-canvas-for-redrawing.html
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                return;
            }
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.quadraticCurveTo(controlX, controlY, endX, endY);
            ctx.lineWidth = 3;
            // Assign a random green value
            ctx.strokeStyle = "#3d" + getRandomHexString(5, 15) + getRandomHexString(5, 15) + "56";
            ctx.stroke()
        }, 200 * i));
    }
}
