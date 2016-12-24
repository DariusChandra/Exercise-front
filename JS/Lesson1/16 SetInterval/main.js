window.onload = initPage;

function initPage() {
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var timer = null;

    oBtn1.onclick = function () {
        timer = setInterval(show, 3000);
    };

    oBtn2.onclick = function () {
        clearInterval(timer);
    };
}

function show() {
    alert('蛤蛤蛤');
}


