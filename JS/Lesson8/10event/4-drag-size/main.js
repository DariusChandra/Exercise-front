window.onload = function() {
    var oDiv = document.getElementById("div1");
    var oDiv2 = document.getElementById("div2");

    oDiv.onmousedown = function() {
        var disX = event.clientX - oDiv.offsetLeft;
        var disY = event.clientY - oDiv.offsetTop;

        var oNewDiv = document.createElement('div');

        document.onmousemove = fnMove;

        document.onmouseup = fnUp;
        return false;

        function fnMove() {
            var l = event.clientX - disX + oDiv.offsetWidth;
            var t = event.clientY - disY + oDiv.offsetHeight;


            oDiv2.style.width = l + 'px';
            oDiv2.style.height = t + 'px';
        }

        function fnUp() {
            this.onmousemove = null;
            this.onmouseup = null;
        }
    };
};
