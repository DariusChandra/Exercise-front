function startMove(obj, iTarget) {
    var iSpeed = 0;
    var timer = null;
    var left = 0;

    clearInterval(obj.timer);

    obj.timer = setInterval(function() {
        iSpeed += (iTarget - obj.offsetLeft) / 5;
        iSpeed *= 0.7; // 摩擦力
        left += iSpeed;

        if (Math.abs(iSpeed) < 1 && Math.abs(left - iTarget) < 1) {
            clearInterval(timer);
            obj.style.left = iTarget + 'px';
        } else {
            obj.style.left = left + 'px';
            document.title = obj.offsetLeft + ' | ' + iTarget;
        }

    }, 30);
}
