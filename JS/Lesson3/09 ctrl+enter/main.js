window.onload = function() {
    var oBtn = document.getElementById('btn1');
    var oTxt1 = document.getElementById('txt1');
    var oTxt2 = document.getElementById('txt2');

    oBtn.onclick = function() {
        oTxt1.value += oTxt2.value + '\n';
        oTxt2.value = '';
    };

    oTxt2.onkeydown = function(ev) {
        var oEvent = ev || event;

        if (oEvent.keyCode == 13 && oEvent.ctrlKey) {
            oTxt1.value += oTxt2.value + '\n';
            oTxt2.value = '';
        }
    };
};
