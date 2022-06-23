function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    canvas.mouseReleased(classifycanvas);
    sntyh=window.speechSynthesis;
    background("white");
}
function preload() {
    classifier=ml5.imageClassifier('DoodleNet'); 
}
function draw() {
    strokeWeight(5);
    stroke(0);
    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    
}
function classifycanvas() {
    classifier.classify(canvas,gotresults);
}
function clearcanvas(){
    background("white")
}
function gotresults(error,results){
if(error){
    console.error(error);
}
console.log(results);
document.getElementById("label").innerHTML="label: "+results[0].label;
document.getElementById("confidence").innerHTML="confidence: "+Math.round(results[0].confidence*100)+" %";
utterthis=new SpeechSynthesisUtterance(results[0].label);
sntyh.speak(utterthis);
}