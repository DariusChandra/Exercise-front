window.onload = function() {
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function() {
        ajax('arry.txt', function(str) {
            // str-> '[1, 3, 4, 6]'
            // eval 计算字符串里的值；
            var arr=eval(str);
            alert(arr[2]);
        });
    };
};
