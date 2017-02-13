/**
 * Created by qq960 on 2017/2/13.
 */
var imageContainer,msgdiv;
window.onload = function () {

    imageContainer = document.getElementById("imageContainer");
    msgdiv = document.getElementById("msg");

    imageContainer.ondragover= function (e) {
        e.preventDefault();
    }
    imageContainer.ondrop = function (e) {
        e.preventDefault();
        var f = e.dataTransfer.files[0];
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            imageContainer.innerHTML = "<img src=\""+fileReader.result+"\">"
        }
        fileReader.readAsDataURL(f);
    }
}

function showObj(obj) {
    var s = "";
    for( var k in obj){
        s+=k+":"+obj[k]+"<br/>"
    }
    msgdiv.innerHTML = s;
}