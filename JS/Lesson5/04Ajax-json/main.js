window.onload = function() {
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function() {
        ajax('data.js', function(str) {
            var arr = eval(str);
            alert(arr[0].b);
        });
    };
};
