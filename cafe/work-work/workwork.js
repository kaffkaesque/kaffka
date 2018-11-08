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
    for (var i =0 ; i<50; i++){
        if (i%2 ==0){
            ctx.fillStyle = 'green';
            ctx.fillRect(i*10, (50)*(Math.sin(i*3+(frame/40)) + 0.5)+30,  5,5);
        }
        else{
            ctx.fillStyle='red';
            ctx.fillRect(i*10, (50)*(Math.sin(i*3+(frame/40)) + 0.5)+30,  5,5);
        }
    }
    //ctx.fillRect(150 * Math.cos(frame/50)  + 150,  150 * Math.sin(frame/50)  + 150, 100, 100);
}

var updt = setInterval(workworkEffect, msperframe);
