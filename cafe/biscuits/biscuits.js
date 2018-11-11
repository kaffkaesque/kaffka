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
    for (var i =0 ; i<50; i++){
        if (i%2 ==0){
            ctx.fillStyle = '#8DBD71';
            ctx.fillRect(i*10, (50)*(Math.tan(i*3+(frame/40)) + 0.5)+30,  5,5);
        }
        else{
            ctx.fillStyle='#FF9D9C';
            ctx.fillRect(i*10, -(50)*(Math.tan(i*3+(frame/40)) + 0.5)+30,  5,5);
        }
    }
}

var updt = setInterval(workworkEffect, msperframe);
