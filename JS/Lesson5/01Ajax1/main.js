window.onload = function() {
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function() {
        // Ajax能且仅能从服务器读文件;
        ajax('abc.txt', function (str) {
            alert(str);
        });
    };
};
