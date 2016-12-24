window.onload = initPage;

var oData = ["很差","较差","一般","推荐","力荐"];

function initPage() {
    var aDiv = document.getElementById('score');
    var aLi = aDiv.getElementsByTagName('li');
    var oP = aDiv.getElementsByTagName('p')[0];

    for (i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            oP.style.display = 'block';
            oP.innerHTML = oData[this.index];
            for (i = 0; i < aLi.length; i++) {
                if ( i <= this.index) {
                    aLi[i].style.background = 'url(img/star.gif) no-repeat 0 -29px';
                } else {
                    aLi[i].style.background = 'url(img/star.gif) no-repeat 0 0';
                }
            }
        };

        aLi[i].onmouseout = function () {
            oP.style.display = 'none';
            for (i = 0; i < aLi.length; i++) {
                 aLi[i].style.background = 'url(img/star.gif) no-repeat 0 0';
            }
        };

        aLi[i].onmousedown = function () {
            // oP.style.display = 'none';
            alert('评分成功:' + (this.index + 1) + '分');
        };
    }
}


