window.onload = function() {
    // var oTxt = document.getElementById('txt1');
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function() {

        window.close();
        // 关闭时没法绕过关闭检测，火狐不理，IE弹窗口；
    };
};
