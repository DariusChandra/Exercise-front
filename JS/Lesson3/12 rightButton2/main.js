document.oncontextmenu = function() {
    var oUl = document.getElementById("ul1");
    oUl.style.display = 'block';
    oUl.style.left = event.clientX + 'px';
    oUl.style.top = event.clientY + 'px';

    return false;
};

document.onclick = function() {
    var oUl = document.getElementById("ul1");

    oUl.style.display = 'none';
};
