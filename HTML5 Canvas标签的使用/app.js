/**
 * Created by qq960 on 2017/2/19.
 */
var CANVAS_WIDTH = 500 , CANVAS_HEIGHT = 500;
var mycanvas , context;
window.onload = function () {
    createCanvas();
    drawRect();
}
    function createCanvas() {
        document.body.innerHTML = "<canvas id=\"mycanvas\" " +
            "width=\""+CANVAS_WIDTH+"\" " +
            "height=\""+CANVAS_HEIGHT+"\"></canvas></canvas>"
        mycanvas = document.getElementById("mycanvas");
        context = mycanvas.getContext("2d");
    }
    
    function drawRect() {
        context.fillStyle = "#FF0000";//设置颜色
        // context.rotate(45); //设置绘制图形的旋转角度
        //context.translate(200,200); //设置图形的移动位置
        context.scale(2,0.5); //缩放
        context.fillRect(0,0,200,200);//设置绘制图形的位置大小等
    }