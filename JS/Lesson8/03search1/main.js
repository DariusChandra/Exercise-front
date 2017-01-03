window.onload = function() {
    var oTab = document.getElementById('tab1');
    var oBtn = document.getElementById('btn1');
    var oTxt = document.getElementById('txt1');
    var oldColor = '';
    var iNowId = oTab.tBodies[0].rows.length + 1;

    oBtn.onclick = function() {
        for (i = 0; i < oTab.tBodies[0].rows.length; i++) {
            var valueInTab = oTab.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
            var valueInTxt = oTxt.value.toLowerCase();
            if (valueInTab == valueInTxt) {
                oTab.tBodies[0].rows[i].style.background = "yellow";
            } else {
                oTab.tBodies[0].rows[i].style.background = "";
            }
        }
    };

    // alert(oTab.tBodies[0].rows[2].cells[1].innerHTML);
};
