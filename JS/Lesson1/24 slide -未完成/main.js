window.onload = function() {
    var oDiv = document.getElementById('roll');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var oLi = oUl.getElementsByTagName('li');
    var aBtn = oDiv.getElementsByTagName('a');
    var iSpeed = -5;
    var timer = null;

    var str = oUl.innerHTML + oUl.innerHTML;
    oUl.innerHTML = str;
    oUl.style.width = oLi[0].offsetWidth* oLi.length + 'px';

    timer = setInterval( function() {
        oUl.style.left = oUl.offsetLeft + iSpeed + 'px';
        if (oUl.offsetLeft < - oUl.offsetWidth/2 ) {
            oUl.offsetLeft = '0px';
        } else if (oUl.offsetLeft > 0) {
            oUl.offsetLeft =  -oUl.offsetWidth/2;
        }
    }, 30);

    aBtn[0].onmouseover = function () {
        iSpeed = -5;
    };

    aBtn[1].onmouseover = function () {
        iSpeed = 5;
    };
    oUl.onmouseover = function() {
        clearInterval(timer);
    };

    oUl.onmouseout = function() {
        clearInterval(timer);
    };
};
