Webcam.set({
    width:350,
    hieght: 300,
    image_format:'png',
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedImg" src="'+data_uri+'"/>';
    });
};
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/O3N9Z1AYb/model.json',modelLoad);
function modelLoad(){
console.log("model is loaded");
}