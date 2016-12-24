document.onclick = function() {
    // IE 下的写法
    alert(event.clientX + ', ' + event.clientY);

    // FF
    // alert(ev.clientX);


    // var oEvent = ev || event;

    // alert(oEvent.clientX + ', ' + oEvent.clientY);
};
