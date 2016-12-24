window.onload = function() {
    var oDiv = document.getElementById('div1');
    var Timer = null;

    document.onkeydown = function() {
        Timer = setTimeout(keyClick, 30);
    };

    function keyClick() {
        if (event.keyCode == 37) {
            oDiv.style.left = oDiv.offsetLeft - 10 + 'px';
        } else if (event.keyCode == 39) {
            oDiv.style.left = oDiv.offsetLeft + 10 + 'px';
        } else if (event.keyCode == 38) {
            oDiv.style.top = oDiv.offsetTop - 10 + 'px';
        } else if (event.keyCode == 40) {
            oDiv.style.top = oDiv.offsetTop + 10 + 'px';
        }
    }
};
