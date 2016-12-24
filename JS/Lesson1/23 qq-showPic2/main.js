window.onload = function() {
    var oHead = document.getElementById('head');
    var oRight = document.getElementById('right');
    var Timer = null;

    function showPic() {
        oRight.style.display = 'block';
        clearTimeout(Timer);
    }

    function hidePic() {
        Timer = setTimeout(function() {
            oRight.style.display = "none";
        },300);
    }
    oHead.onmouseover = showPic;

    oHead.onmouseout = hidePic;

    oRight.onmouseover = showPic;

    oRight.onmouseout = hidePic;
};
