function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560, 80);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotresults);
}
function draw(){
    background("grey");
}
function modelLoaded(){
    console.log("model loaded!");
}
function gotresults(result){
    if(result.length>0){
        console.log(result);
    }
}