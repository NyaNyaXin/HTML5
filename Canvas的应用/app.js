/**
 * Created by qq960 on 2017/2/27.
 */
var canvas;
var stage;
var text;
var count = 0;
window.onload = function () {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    text = new createjs.Text("HelloWord->0","20px Arial","#ff7700");
    stage.addChild(text);
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",tick);
}
function tick(e) {
    count++;
    text.text = "HelloWord->0"+count+"!";
    stage.update()
}