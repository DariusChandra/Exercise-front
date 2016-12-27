window.onload = function() {
    var oDiv = document.getElementById('div1');
    var oBtn = document.getElementById('btn1');
    var oTxt = document.getElementById('txt1');
    var timer = null;

    oBtn.onclick = function() {
        startMove(300);
    };

    function startMove(iTarget) {

        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = (iTarget - oDiv.offsetLeft) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            // if (iSpeed > 0) {
            //     iSpeed = Math.ceil(iSpeed);
            // } else if (iSpeed < 0) {
            //     iSpeed = Math.floor(iSpeed);
            // }

            if (oDiv.offsetLeft == iTarget) { // 是否到达终点
                clearInterval(timer); //  已经到达终点
            } else {
                oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px'; // 到达之前
            }
            txt1.value += iSpeed + '\n';
        }, 30);
    }
};
