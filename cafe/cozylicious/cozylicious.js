c = document.getElementById("canvas");
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

function workworkEffect () {
    ctx.save();
    ctx.clearRect(0, 0, c.width, c.height);
    for (var i = 0 ; i < 4; i++){
	ctx.fillRect(150 + 20*Math.cos(frame/50)*i, 70 + 20*Math.sin(frame/50)*i, 10, 10);
    }
}

var updt = setInterval(workworkEffect, msperframe);
