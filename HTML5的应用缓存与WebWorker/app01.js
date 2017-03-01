/**
 * Created by qq960 on 2017/3/1.
 */
var numDiv;
var work = null;
window.onload = function () {
    numDiv = document.getElementById("numDiv");
    document.getElementById("start").onclick = startWorker;
    document.getElementById("stop").onclick = function () {
        if(work){
            work.terminate();
            work = null;
        }
    }
}

function startWorker() {
    if (work){
        return ;
    }
    work = new Worker("count.js");
    work.onmessage = function (e) {
        numDiv.innerHTML = e.data;
    }
}