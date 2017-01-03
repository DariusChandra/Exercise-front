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
            var arr = valueInTxt.split(' ');
            var bFound = false;

            for (var j = 0; j < arr.length; j++) {
                if (valueInTab.search(arr[j]) != -1) {
                    bFound = true;
                    break;
                }
            }

            if (bFound) {
                oTab.tBodies[0].rows[i].style.background = "yellow";
            }
        }
    };

    // alert(oTab.tBodies[0].rows[2].cells[1].innerHTML);
};
