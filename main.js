song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
leftsong = 0;
scoreLeftWrist = 0;

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(425,200);

    video = createCapture(VIDEO);
    video.hide();

    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
image(video,0,0,500,400);
leftsong = song.isPlaying()
fill("#FF0000");
stroke("#FF0000");

if (scoreLeftWrist > 0.2) {
    circle(leftWristX,leftWristY,20);  
    song2.stop()
}
if(leftsong == false){
    song.play() 
  
}
}
function modelLoaded(){

    console.log('PoseNet is Intialized');
}
document.getElementById("Songname").innerHTML = "Song is Harry Potter Theme Song";
function play(){
song.play(); 
song.setVolume(1);
song.rate(1);
}

function gotPoses(results){
    if(results.length > 0) {
    
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    } 
    
    }