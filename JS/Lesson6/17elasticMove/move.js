function startMove(obj) {
    var iSpeed = 0;
    setInterval(function() {
        iSpeed += (300 - obj.offsetLeft) / 5;
        iSpeed *= 0.7; // 摩擦力
        obj.style.left = obj.offsetLeft + iSpeed + 'px';
    }, 30);
}
