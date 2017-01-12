function myAddEvent(obj, sEvent, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + sEvent, fn);
    } else {
        obj.addEventListener(sEvent, fn, false);
    }
}

window.onload = function() {
    var oDiv = document.getElementById('div1');

    function onMouseWheel() {

        var bDown = true;

        bDown = event.wheelDelta ? event.wheelDelta < 0 : event.detail > 0;

        if (bDown) {
            oDiv.style.height = oDiv.offsetHeight + 10 + 'px';
        } else {
            oDiv.style.height = oDiv.offsetHeight - 10 + 'px';
        }

        return false;
    }

    myAddEvent(oDiv, 'mousewheel', onMouseWheel);
    myAddEvent(oDiv, 'DOMMouseScroll', onMouseWheel);

    // oDiv.onmousewheel = function() {
    //     alert(event.wheelDelta);
    // };
};
