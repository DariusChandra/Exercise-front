window.onload = function() {
    var oDiv = document.getElementById("div1");

    oDiv.onmousedown = function() {
        var disX = event.clientX - oDiv.offsetLeft;
        var disY = event.clientY - oDiv.offsetTop;

        var oNewDiv = document.createElement('div');
        oNewDiv.className = 'box';
        oNewDiv.style.width = oDiv.offsetWidth - 2 + 'px';
        oNewDiv.style.height = oDiv.offsetHeight - 2 + 'px';
        oNewDiv.style.left = oDiv.offsetLeft + 'px';
        oNewDiv.style.top = oDiv.offsetTop + 'px';
        document.body.appendChild(oNewDiv);

        document.onmousemove = fnMove;

        document.onmouseup = fnUp;
        return false;

        function fnMove() {
            var l = event.clientX - disX;
            var t = event.clientY - disY;


            oNewDiv.style.left = l + 'px';
            oNewDiv.style.top = t + 'px';
        }

        function fnUp() {
            this.onmousemove = null;
            this.onmouseup = null;

            oDiv.style.left = oNewDiv.style.left;
            oDiv.style.top = oNewDiv.style.top;
            document.body.removeChild(oNewDiv);
        }
    };
};
