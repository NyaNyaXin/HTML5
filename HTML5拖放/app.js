/**
 * Created by qq960 on 2017/2/10.
 */
var box1div,msgdiv,box2dov;
window.onload = function () {
    box1div = document.getElementById("box1");
    box2div = document.getElementById("box2");
    msgdiv = document.getElementById("msg");
    img1 = document.getElementById("img1");
    // box1div.ondragenter = function (e) {
    //     showObj(e);
    // }
    box1div.ondragover = function (e) {
        e.preventDefault();
    }
    box2div.ondragover = function (e) {
        e.preventDefault();
    }
    img1.ondragstart = function (e) {
        e.dataTransfer.setData("imgId","img1");
    }
    box1div.ondrop =dropImghandler;
    box2div.ondrop =dropImghandler;
}

function dropImghandler(e) {
    showObj(e.dataTransfer);
    e.preventDefault();
    var img = document.getElementById(e.dataTransfer.getData("imgId"));
    e.target.appendChild(img);
}

function showObj(obj) {
    var s = "";
    for( var k in obj){
        s+=k+":"+obj[k]+"<br/>"
    }
    msgdiv.innerHTML = s;
}