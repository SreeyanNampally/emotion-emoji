prediction1 = "";
prediction2 = "";

Webcam.set({
    width:350,
    height:290,
    image_format: "jpeg",
    jpeg_quality:90
    }) 
 camera = document.getElementById("camera");
 Webcam.attach(camera);

 function takesnapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
     })
 }

 
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/J0apdjhWN/model.json",modelloaded());


 function modelloaded(){
     console.log("model loaded");
 }

 function speak(){
     speech = window.speechSynthesis;
     speakdataone = "The first prediction is" + prediction1;
     speakdatatwo = "The second prediction is" + prediction2;
     talk = new SpeechSynthesisUtterance(speakdataone+speakdatatwo);
     speech.speak(talk); 
 }

 function identify_image(){
     img= document.getElementById("capture_image")
     classifier.classify(img, gotResult);
 }

 function gotResult(error,results){
if (error) {
    console.log(error)
} else {
    console.log(results)
}
 }