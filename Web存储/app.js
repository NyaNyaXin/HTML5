/**
 * Created by qq960 on 2017/3/1.
 */
var ta;
var btn;
window.onload = function () {
    ta = document.getElementById("ta");
    if(localStorage.text){
        ta.value = localStorage.text;
    }
    btn = document.getElementById("btn");
    btn.onclick = function () {
        localStorage.text = ta.value;
        //alert(ta.value);
    }
}