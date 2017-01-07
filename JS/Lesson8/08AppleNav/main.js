window.onload = function() {
    document.onmousemove = function() {
        var aImg = document.getElementsByTagName('img');
        var aTxt = document.getElementsByTagName('input');
        var oDiv = document.getElementById('div1');

        for (i = 0; i < aImg.length; i++) {
            var x = aImg[i].offsetLeft + aImg[i].offsetWidth / 2;
            var y = aImg[i].offsetTop + oDiv.offsetTop + aImg[i].offsetHeight / 2;

            var a = x - event.clientX;
            var b = y - event.clientY;

            var dis = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            // aTxt[i].value = parseInt(dis);

            var scale = 1 - dis / 300;

            if (scale < 0.5) {
                scale = 0.5;
            }
            aImg[i].width = scale * 128;
            aTxt[i].value = scale.toFixed(2);

        }
    };
};
