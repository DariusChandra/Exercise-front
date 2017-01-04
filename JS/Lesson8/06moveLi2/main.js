window.onload = function() {
    var oTab = document.getElementById('tab1');
    var oBtn = document.getElementById('btn1');
    var bAsc = false; //是否升序排列;

    oBtn.onclick = function() {
        var arr = [];

        // 1.转成数组
        for (i = 0; i < oTab.tBodies[0].rows.length; i++) {
            arr[i] = oTab.tBodies[0].rows[i];
        }
        // 2.数组排序
        arr.sort(function(tr1, tr2) {
            if (bAsc) {
                return parseInt(tr1.cells[0].innerHTML) - parseInt(tr2.cells[0].innerHTML);
            } else {
                return parseInt(tr2.cells[0].innerHTML) - parseInt(tr1.cells[0].innerHTML);
            }
        });
        // 3.重新插入
        for (i = 0; i < arr.length; i++) {
            oTab.tBodies[0].appendChild(arr[i]);
        }

        bAsc = !bAsc;
        // if (bAsc) {
        //     bAsc = false;
        // } else {
        //     bAsc = true;
        // }
    };

    // alert(oTab.tBodies[0].rows[2].cells[1].innerHTML);
};
