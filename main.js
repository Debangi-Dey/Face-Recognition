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


function check() {
    img = document.getElementById("capturedImg")
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("objName").innerHTML = results[0].label;
        document.getElementById("ObjAcc").innerHTML = results[0].confidence.toFixed(3);
    }
}

function upload(input) {
    console.log(input);
    console.log(input.files);
    console.log(input.files[0]);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var data_uri = "";
        reader.onload = function (e) {
            $('#capturedImg').attr('src', e.target.result);
            data_uri = e.target.result;
            console.log("DATA : " + data_uri);
        };
        document.getElementById("result").innerHTML = '<img width="350px" height="350px" id="capturedImg" src="' + data_uri + '"/>';
        reader.readAsDataURL(input.files[0]);
    }
}