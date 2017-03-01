/**
 * Created by qq960 on 2017/3/1.
 */
var num = 0;
var txt;
var btn;
window.onload = function () {
    txt = document.getElementById("txt");
    btn = document.getElementById("addbtn");
    if(sessionStorage.num){
        num = sessionStorage.num;
    }else {
        num = 0;
    }
    btn.onclick = function () {
        num++;
        sessionStorage.num = num;
        show();
    }

}

function show() {
    txt.innerHTML = num;
}