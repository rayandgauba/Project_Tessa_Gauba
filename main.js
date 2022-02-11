status = "";
objects = [];
input = document.getElementById("object").value;
synth = window.speechSynthesis;
video = "";

function preload() {
}

function setup() {
    canvas = createCanvas(450, 350);
    canvas.position(430, 280);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 450, 350);

    if (status != "") {
        objectDetector.detect(video, gotResult);

        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";

            fill("#ff0000");
            noFill();
            stroke("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 20, objects[i].y);
            rect(objects[i].x + 20, objects[i].y, objects[i].width, objects[i].height);

if (objects == input) {
    video.stop();
    objectDetector.detect(gotResult);

    function SpeechSynthesisUtterance(objects) {
        speak().utterThis;
    }
}

else {
    document.getElementById("yes_or_no").innerHTML = "Object Not Found!!";
}

        }
    }
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }

    else {
        console.log(results);
        objects = results;
    }
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded() {
    console.log("ModelLoaded");
    status = true;
}