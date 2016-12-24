window.onload = function() {
    var oTxt = document.getElementById('txt1');

    oTxt.onkeydown = function() {
        // alert(event.keyCode);
        // 0 48
        // enter  8
        if (event.keyCode != 8 && event.keyCode != 13 && (event.keyCode < 48 || event.keyCode > 57)) {
            return false;
        }

    };
};
