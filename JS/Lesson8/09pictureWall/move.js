function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bStop = true;
        for (var attr in json) {
            // 1.取当前值；
            var iCurrent = 0;
            if (attr == 'opacity') {
                iCurrent = parseFloat(getStyle(obj, attr)) * 100;
            } else {
                iCurrent = parseInt(getStyle(obj, attr));
            }

            // 2.算速度；
            var iSpeed = (json[attr] - iCurrent) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            // 3.检测停止
            if (iCurrent != json[attr]) {
                bStop = false;
            }
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (iCurrent + iSpeed) + ')';
                obj.style.opacity = (iCurrent + iSpeed) / 100;

            } else {
                obj.style[attr] = iCurrent + iSpeed + 'px';
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 30);
}
