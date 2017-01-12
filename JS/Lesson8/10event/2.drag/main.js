window.onload = function() {
    var oDiv = document.getElementById("div1");
    var oDiv2 = document.getElementById("div2");

    oDiv.onmousedown = function() {
        var disX = event.clientX - oDiv.offsetLeft;
        var disY = event.clientY - oDiv.offsetTop;


        document.onmousemove = fnMove;

        document.onmouseup = fnUp;
        return false;

        function fnMove() {
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
            oDiv.style.left = l + 'px';
            oDiv.style.top = t + 'px';

            impac(oDiv, oDiv2);
        }

        function fnUp() {
            this.onmousemove = null;
            this.onmouseup = null;
        }

        function impac(obj, dobj) {

            var o = {
                x: getDefaultStyle(obj, 'left'),
                y: getDefaultStyle(obj, 'top'),
                w: getDefaultStyle(obj, 'width'),
                h: getDefaultStyle(obj, 'height')
            };

            var d = {
                x: getDefaultStyle(dobj, 'left'),
                y: getDefaultStyle(dobj, 'top'),
                w: getDefaultStyle(dobj, 'width'),
                h: getDefaultStyle(dobj, 'height')
            };

            if (o.x + o.w < d.x || o.x > d.x + d.w || o.y + o.h < d.y || o.y > d.y + d.h) {
                dobj.style.background = "#ff0";
            } else {
                dobj.style.background = "#0f0";
            }
        }

        function getDefaultStyle(obj, attribute) {
            return parseInt(obj.currentStyle ? obj.currentStyle[attribute] : document.defaultView.getComputedStyle(obj, false)[attribute]);
        }
    };
};
