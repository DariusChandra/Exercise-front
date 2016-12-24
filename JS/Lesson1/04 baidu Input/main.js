window.onload = initPage;

function initPage() {
    var oBtn = document.getElementById('btn');
    var oUl1 = document.getElementById('ul1');

    oBtn.onclick = showHide;
}

function showHide() {
    var oBtn = document.getElementById('btn');
    var oUl1 = document.getElementById('ul1');

    if (oUl1.style.display == 'block') {
        oUl1.style.display = 'none';
    } else {
        oUl1.style.display = 'block';
    }
}
