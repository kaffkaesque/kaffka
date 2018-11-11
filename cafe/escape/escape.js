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

function workworkEffect (){
    ctx.save();
    ctx.clearRect(0, 0, c.width, c.height);
    
    ctx.translate(0,0);
    ctx.rotate(0);
    for (var y = 0 ; y < 10; y++){
	for (var x = 0; x < 10; x++) {
	    ctx.fillRect(100 + 20*x + 200*Math.sin(frame/100) , 0 + 20*y + (-20*Math.sin(x*frame/90)), 10, 10);
	}
    }     
}

var updt = setInterval(workworkEffect, msperframe);
