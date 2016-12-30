window.onload = function() {
    var oDiv = document.getElementById("div1"),
        oUl = oDiv.getElementsByTagName("ul")[0],
        aLi = oUl.getElementsByTagName("li"),
        aA = document.getElementsByTagName('a'),
        timer = null,
        iSpeed = 5;

    oUl.innerHTML += oUl.innerHTML;
    oUl.style.width = aLi.length * aLi[0].offsetWidth + "px";

    function scrollMove() {
        if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
            oUl.style.left = 0;
        } else if (oUl.offsetLeft >= 0) {
            oUl.style.left = -oUl.offsetWidth / 2 + 'px';
        }
        oUl.style.left = oUl.offsetLeft + iSpeed + "px";
    }
    timer = setInterval(scrollMove, 30);

    aA[0].onclick = function() {
        iSpeed = -3;
    };
    aA[1].onclick = function() {
        iSpeed = 3;
    };

    oDiv.onmouseover = function() {
        clearInterval(timer);
    };
    oDiv.onmouseout = function() {
        timer = setInterval(scrollMove, 30);
    };
};
