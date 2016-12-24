window.onload = function() {
    document.onmousemove = function(ev) {
        var oDiv = document.getElementById('div1');
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollLeft = document.documentElement.scrollTop || document.body.scrollLeft;

        oDiv.style.left = event.clientX + scrollLeft + 'px';
        oDiv.style.top = event.clientY + scrollTop + 'px';
    };
};
