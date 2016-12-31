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
        var l = oDiv.offsetLeft + iSpeedX;
        var t = oDiv.offsetTop + iSpeedY;
        var oHeight = document.documentElement.clientHeight;
        var oLeft = document.documentElement.clientWidth;

        if (t >= oHeight - oDiv.offsetHeight) {
            iSpeedY *= -1;
            t = oHeight - oDiv.offsetHeight;
        } else if (t <= 0) {
            iSpeedY *= -1;
            t = 0;
        }

        if (l >= oLeft - oDiv.offsetWidth) {
            iSpeedX *= -1;
            l = oLeft - oDiv.offsetWidth;
        } else if (l <= 0) {
            iSpeedX *= -1;
            l = 0;
        }
        oDiv.style.left = l + 'px';
        oDiv.style.top = t + 'px';
    }, 30);
}
