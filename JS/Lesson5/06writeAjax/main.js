window.onload = function() {
    var oBtn = document.getElementById('btn1');
    oBtn.onclick = function() {

        ajax('abc.txt', function(str) {
            alert(str);
        }, function() {
            alert("失败了");
        });
    };
};
