/**
 * Created by qq960 on 2017/3/1.
 */
var countnum = 0;
function count() {
    postMessage(countnum);
    countnum++;
    setTimeout(count,1000);
}

count();