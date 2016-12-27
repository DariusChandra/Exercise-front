window.onload = function() {
    var aDiv = document.getElementsByTagName('div');
    var timer = null;

    for (i = 0; i < aDiv.length; i++) {
        aDiv[i].alpha = 30;
        // aDiv[i].timer = null;
        aDiv[i].onmouseover = function() {
            startShade(this, 100);
            // startMove(this, 300);
        };
        aDiv[i].onmouseout = function() {
            startShade(this, 30);
            // startMove(this, 100);
        };
    }
};

function startShade(obj, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var iSpeed = (iTarget - obj.alpha) / 8;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

        if (obj.alpha == iTarget) {
            clearInterval(obj.timer);
        } else {
            obj.alpha += iSpeed;

            obj.style.filter = 'alpha(opacity:' + obj.alpha + ')';
            obj.style.opacity = obj.alpha / 100;
        }
    });
}
