window.onload = initPage;

function initPage() {
    var oBtn = document.getElementsByTagName('input');
    var oBox = document.getElementsByTagName('div');
    // var oBox = document.getElementById('box');
    // 曾经将className当成ID用了，所以犯了错。
    var i = 0;

    for( i = 0; i < oBtn.length; i++) {
        oBtn[i].index = i;
        oBtn[i].onclick = function() {
            for( i = 0; i < oBtn.length; i++) {
                oBox[i].style.display = 'none';
                oBtn[i].className = '';
            }
            oBox[this.index].style.display = 'block';
            this.className = 'active';
        };
    }
}


