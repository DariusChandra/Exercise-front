window.onload = initPage;

function initPage() {
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var oInput = document.getElementsByTagName('input');

    oBtn1.onclick = function () {
        var i = 0;
        for ( i < 0; i < oInput.length; i++) {
            oInput[i].checked = true;
        }
    };

    oBtn2.onclick = function () {
        var i = 0;
        for ( i < 0; i < oInput.length; i++) {
            oInput[i].checked = false;
        }
    };
}


