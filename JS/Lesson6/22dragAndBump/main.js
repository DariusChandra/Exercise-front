window.onload = function() {
    var oDiv = document.getElementById('div1');
    var lastX = 0;
    var lastY = 0;
    // var oBtn = document.getElementById('btn1');

    oDiv.onmousedown = function() {
        var disX = event.clientX - oDiv.offsetLeft;
        var disY = event.clientY - oDiv.offsetTop;

        document.onmousemove = function() {
            var l = event.clientX - disX;
            var t = event.clientY - disY;

            oDiv.style.left = l + 'px';
            oDiv.style.top = t + 'px';

            iSpeedX = l - lastX;
            iSpeedY = t - lastY;

            lastX = l;
            lastY = t;

            document.title = 'x:' + iSpeedX + ', y:' + iSpeedY;

            var oBox = document.createElement('div');
            oBox.style.left = l + 'px';
            oBox.style.top = t + 'px';

            document.body.appendChild(oBox);
        };

        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;

            startMove(oDiv);
        };
        clearInterval(timer);
    };
};
var timer = null;

function startMove(obj) {

    clearInterval(timer);
    timer = setInterval(function() {

        iSpeedY += 1;
        var l = obj.offsetLeft + iSpeedX;
        var t = obj.offsetTop + iSpeedY;
        var oHeight = document.documentElement.clientHeight;
        var oLeft = document.documentElement.clientWidth;

        if (t >= oHeight - obj.offsetHeight) {
            iSpeedY *= -0.8;
            iSpeedX *= 0.8;
            t = oHeight - obj.offsetHeight;
        } else if (t <= 0) {
            iSpeedY *= -1;
            iSpeedX *= 0.8;
            t = 0;
        }

        if (l >= oLeft - obj.offsetWidth) {
            iSpeedX *= -0.8;
            l = oLeft - obj.offsetWidth;
        } else if (l <= 0) {
            iSpeedX *= -0.8;
            l = 0;
        }

        if (Math.abs(iSpeedX) < 1) {
            iSpeedX = 0;
        }
        if (Math.abs(iSpeedY) < 1) {
            iSpeedY = 0;
        }

        if (iSpeedX === 0 && iSpeedY === 0 && t == document.documentElement.clientHeight - obj.offsetHeight) {
            clearInterval(timer);
        } else {
            obj.style.left = l + 'px';
            obj.style.top = t + 'px';
        }
    }, 30);
}
