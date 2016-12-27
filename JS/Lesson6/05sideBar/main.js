window.onload = function() {
    var oDiv = document.getElementById('div1');
    var timer = null;

    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var t = scrollTop + (document.documentElement.clientHeight - oDiv.offsetHeight) / 2;

        startMove(parseInt(t));
        // oDiv.style.top = scrollTop + (document.documentElement.clientHeight - oDiv.offsetHeight) / 2 + 'px';
    };

    function startMove(iTarget) {
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = (iTarget - oDiv.offsetTop) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if (oDiv.offsetTop == iTarget) {
                clearInterval(timer);
            } else {
                oDiv.style.top = oDiv.offsetTop + iSpeed + 'px';
            }
        }, 30);
    }
};
