window.onload = function() {
    var oTxt = document.getElementById('txt1');
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function() {
        //document.write('sdfaga');  清空当前页面，并输出东西；

        var  oNewWin = window.open('about:blank');
        oNewWin.document.write(oTxt.value);
    };
};
