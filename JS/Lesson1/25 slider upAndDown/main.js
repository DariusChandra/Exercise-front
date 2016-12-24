window.onload = function() {
    var oDiv = document.getElementById('Slide');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oDiv.getElementsByTagName('li');
    var oUp = oDiv.getElementsByTagName('div')[0];
    var oDown = oDiv.getElementsByTagName('div')[2];
    var Timer = null;
    var iSpeed = 0;
    oUl.innerHTML += oUl.innerHTML;

    oUp.onmousedown = function() {
        Timer = setInterval(doMove, 30);
        iSpeed = -5;
    };
    oUp.onmouseup = function() {
        clearInterval(Timer);
    };
    oDown.onmousedown = function() {
        Timer = setInterval(doMove, 30);
        iSpeed = 5;
    };
    oDown.onmouseup = function() {
        clearInterval(Timer);
    };

    function doMove() {
        oUl.style.top = oUl.offsetTop + iSpeed + 'px';
        if (oUl.offsetTop < -oUl.offsetHeight / 2) {
            oUl.style.top = '0px';
        } else if (oUl.offsetTop > 0) {
            oUl.style.top = -oUl.offsetHeight / 2 + 'px';
        }
    }
};
