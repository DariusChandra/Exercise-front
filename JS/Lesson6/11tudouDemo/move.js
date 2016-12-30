function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj, attr, iTarget, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var iCurrent = 0;
        if (attr == 'opacity') {
            iCurrent = parseFloat(getStyle(obj, attr)) * 100;
        } else {
            iCurrent = parseInt(getStyle(obj, attr));
        }
        var iSpeed = (iTarget - iCurrent) / 8;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

        if (iCurrent == iTarget) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        } else {
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (iCurrent + iSpeed) + ')';
                obj.style.opacity = (iCurrent + iSpeed) / 100;

                // document.getElementById('txt1').value = obj.style.opacity;
            } else {
                obj.style[attr] = iCurrent + iSpeed + 'px';
                // console.log('1');
            }
        }
    }, 30);
}
