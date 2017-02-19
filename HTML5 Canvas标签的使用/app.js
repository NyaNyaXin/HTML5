/**
 * Created by qq960 on 2017/2/19.
 */
var CANVAS_WIDTH = 500 , CANVAS_HEIGHT = 500;

window.onload = function () {
    createCanvas();
}
    function createCanvas() {
        document.body.innerHTML = "<canvas id=\"mycanvas\" " +
            "width=\""+CANVAS_WIDTH+"\" " +
            "height=\""+CANVAS_HEIGHT+"\"></canvas></canvas>";
    }