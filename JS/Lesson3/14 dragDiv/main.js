window.onload = function() {
    var oDiv = document.getElementById("div1");
    var disX = 0;
    var disY = 0;

    oDiv.onmousedown = function() {
        disX = event.clientX - oDiv.offsetLeft;
        disY = event.clientY - oDiv.offsetTop;

        document.onmousemove = function() {
            var l = event.clientX - disX;
            var t = event.clientY - disY;

            if (l < 0) {
                l = 0;
            } else if (l > document.documentElement.clientWidth - oDiv.offsetWidth) {
                l = document.documentElement.clientWidth - oDiv.offsetWidth;
            }

            if (t < 0) {
                t = 0;
            } else if (t > document.documentElement.clientHeight - oDiv.offsetHeight) {
                t = document.documentElement.clientHeight - oDiv.offsetHeight;
            }

            oDiv.style.left = l + "px";
            oDiv.style.top = t + "px";
        };

        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        };

        return false;
    };
};
