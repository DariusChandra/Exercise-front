window.onload = function() {
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function() {
        startMove();
    };
};

var iSpeedX = 6;
var iSpeedY = 8;
function startMove() {
    setInterval(function() {
        var oDiv = document.getElementById('div1');

        iSpeedY += 3;
        var l = oDiv.offsetLeft + iSpeedX;
        var t = oDiv.offsetTop + iSpeedY;
        var oHeight = document.documentElement.clientHeight;
        var oLeft = document.documentElement.clientWidth;

        if (t >= oHeight - oDiv.offsetHeight) {
            iSpeedY *= -0.8;
            iSpeedX *= 0.8;
            t = oHeight - oDiv.offsetHeight;
        } else if (t <= 0) {
            iSpeedY *= -1;
            iSpeedX *= 0.8;
            t = 0;
        }

        if (l >= oLeft - oDiv.offsetWidth) {
            iSpeedX *= -0.8;
            l = oLeft - oDiv.offsetWidth;
        } else if (l <= 0) {
            iSpeedX *= -0.8;
            l = 0;
        }
        oDiv.style.left = l + 'px';
        oDiv.style.top = t + 'px';
    }, 30);
}
