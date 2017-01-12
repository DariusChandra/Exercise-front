window.onload = function() {
    var oDiv = document.getElementById("div1");
    var oDiv2 = document.getElementById("div2");
    var oDiv3 = document.getElementById("div3");
    var oParent = document.getElementById("parent");

    oDiv.onmousedown = function() {
        var disX = event.clientX - oDiv.offsetLeft;

        document.onmousemove = fnMove;

        document.onmouseup = fnUp;
        return false;

        function fnMove() {
            var l = event.clientX - disX;

            if (l < 0) {
                l = 0;
            } else if (l > oParent.offsetWidth - oDiv.offsetWidth) {
                l = oParent.offsetWidth - oDiv.offsetWidth;
            }

            oDiv.style.left = l + 'px';

            oTxt = document.getElementById('txt1');
            var scale = l / (oParent.offsetWidth - oDiv.offsetWidth);

            oDiv3.style.top = - (oDiv3.offsetHeight - oDiv2.offsetHeight) * scale + 'px';
            // oDiv2.style.opacity = scale;

            oTxt.innerHTML = scale;
        }

        function fnUp() {
            this.onmousemove = null;
            this.onmouseup = null;
        }
    };
};
