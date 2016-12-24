window.onload = initPage;

function initPage() {
    var aDiv = document.getElementById('score');
    var aLi = aDiv.getElementsByTagName('li');

    for (i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            for (i = 0; i < aLi.length; i++) {
                if ( i <= this.index) {
                    aLi[i].style.background = 'url(img/star.gif) no-repeat 0 -29px';
                } else {
                    aLi[i].style.background = 'url(img/star.gif) no-repeat 0 0';
                }
            }
        };

        aLi[i].onmousedown = function () {
            alert('请你打分:' + (this.index + 1) + '分');
        };
    }
}


