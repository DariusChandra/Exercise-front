window.onload = function() {
    var oHead = document.getElementById('head');
    var oRight = document.getElementById('right');
    var Timer = null;

    oHead.onmouseover = function() {
        oRight.style.display = 'block';
        clearTimeout(Timer);
    };

    oHead.onmouseout = function() {
        Timer = setTimeout(function() {
            oRight.style.display = 'none';
        },300);
    };

    oRight.onmouseover = function() {
        clearTimeout(Timer);
    };

    oRight.onmouseout = function() {
        Timer = setTimeout(function() {
            oRight.style.display = "none";
        },300);
    }
};
