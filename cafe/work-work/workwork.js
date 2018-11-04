c = document.getElementById("workworkCanvas");
ctx = c.getContext("2d");

var time = 0; 
var frame = 0;
const framerate = 60;
// Calculate ms per frame for glorious 60 fps
msperframe = 1000/framerate;

function timeAndFrameUpdater(){
    frame ++;
    time += msperframe;
}
var frameTimeInterval = setInterval(timeAndFrameUpdater, msperframe);

function workworkEffect (){
    ctx.save();
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(150 * Math.cos(frame/50)  + 150,  150 * Math.sin(frame/50)  + 150, 100, 100);
}

var updt = setInterval(workworkEffect, msperframe);
