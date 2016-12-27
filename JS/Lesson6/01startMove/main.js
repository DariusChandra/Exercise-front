// window.onload = function() {
function startMove() {
    // var oDiv = document.getElememtById("div1");
    var oDiv = document.getElementById('div1');

     // clearInterval(timer);
    timer = setInterval(function() {
        var iSpeed = 10;

        if (oDiv.offsetLeft >= 300) { // 是否到达终点
            clearInterval(timer); //  已经到达终点
        } else {
            oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px'; // 到达之前
        }
    }, 30);
}
// };
