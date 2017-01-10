window.onload = function() {
    initPage('div1');
    initPage('div2');
    initPage('div3');
};

function initPage(id) {
    var oDiv = document.getElementById(id);

    oDiv.onmousedown = function() {
        var disX = event.clientX - oDiv.offsetLeft;
        var disY = event.clientY - oDiv.offsetTop;

        document.onmousemove = function() {
            oDiv.style.left = event.clientX - disX + 'px';
            oDiv.style.top = event.clientY - disY + 'px';
        };

        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}
