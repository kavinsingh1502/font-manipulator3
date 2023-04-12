difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,350);
    canvas.position(660,200);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialized');
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("leftWristX="+leftWristX+ "rightWristX"+rightWristX+ "difference="+ difference);
    }
}
function draw(){
    background('#94fc03');
    textSize(32);
    document.getElementById("fonts")+difference+"px";
    fill(0, 102, 153);
    text('KAVIN', leftWristX, rightWristX);
}