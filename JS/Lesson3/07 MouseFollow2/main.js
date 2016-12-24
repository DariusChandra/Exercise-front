window.onload = function() {
    var aDiv = document.getElementsByTagName('div');
    var i = 0;
    // alert( aDiv.length);
    document.onmousemove = function() {

        for (i = aDiv.length - 1; i > 0; i--) {
            aDiv[i].style.left = aDiv[i - 1].style.left;
            aDiv[i].style.top = aDiv[i - 1].style.top;
        }
        aDiv[0].style.left = event.clientX + 'px';
        aDiv[0].style.top = event.clientY + 'px';
    };
};
