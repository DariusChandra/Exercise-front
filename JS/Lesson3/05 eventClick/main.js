window.onload = function() {
    var oBtn = document.getElementById('btn1');
    var oDiv = document.getElementById('div1');

    oBtn.onclick = function() {
        oDiv.style.display = 'block';
        event.cancelBubble = true;
        alert('按钮被点');
    };

    document.onclick = function() {
        oDiv.style.display = 'none';
        alert('页面被点');
    };
};
