window.onload = function() {
    var aDiv = document.getElementsByTagName('div');

    aDiv[0].onclick = function() {
        startMove(this, 'width', 300);
    };

    aDiv[1].onclick = function() {
        startMove(this, 'height', 200);
    };

    aDiv[2].onclick = function() {
        startMove(this, 'fontSize', 50);
    };

    aDiv[3].onclick = function() {
        startMove(this, 'borderWidth', 5);
    };
};

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
    // console.log(attr);
}

function startMove(obj, attr, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var iCurrent = parseInt(getStyle(obj, attr));
        var iSpeed = (iTarget - iCurrent) / 8;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    
        if (iCurrent == iTarget) {
            clearInterval(obj.timer);
        } else {
            obj.style[attr] = iCurrent + iSpeed + 'px';
        }
    }, 30);
}
