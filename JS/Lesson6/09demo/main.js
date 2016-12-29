function getByClass(oParent, sClass) {
    var aEle = document.getElementsByTagName('*');
    var aResult = [];

    for (i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }

    return aResult;
}

window.onload = function() {

    var oDiv = document.getElementById('playImg');
    var oBtnPrev = getByClass(oDiv, 'prev')[0];
    var oBtnNext = getByClass(oDiv, 'next')[0];
    var oMarkLeft = getByClass(oDiv, 'markLeft')[0];
    var oMarkRight = getByClass(oDiv, 'markRight')[0];

    var oSmallUl = getByClass(oDiv, 'smallPic')[0].getElementsByTagName('ul')[0];
    var aSmallLi = oSmallUl.getElementsByTagName('li');

    var oBigUl = getByClass(oDiv, 'bigPic')[0];
    var aBigLi = oBigUl.getElementsByTagName('li');
    var iMinZindex = 2;
    var iNow = 0;

    oSmallUl.style.width = aSmallLi.length * aSmallLi[0].offsetWidth + 'px';
    // 上面的左右按钮
    oBtnPrev.onmouseover = oMarkLeft.onmouseover = function() {
        startMove(oBtnPrev, 'opacity', 100);
    };

    oBtnPrev.onmouseout = oMarkLeft.onmouseout = function() {
        startMove(oBtnPrev, 'opacity', 0);
    };

    oBtnNext.onmouseover = oMarkRight.onmouseover = function() {
        startMove(oBtnNext, 'opacity', 100);
    };

    oBtnNext.onmouseout = oMarkRight.onmouseout = function() {
        startMove(oBtnNext, 'opacity', 0);
    };

    // 小图点击，大图显示
    for (i = 0; i < aSmallLi.length; i++) {
        aSmallLi[i].index = i;
        aSmallLi[i].onmouseover = function() {
            startMove(this, 'opacity', 100);
        };
        aSmallLi[i].onmouseout = function() {
            if (this.index != iNow) {
                startMove(this, 'opacity', 60);
            }
        };

        aSmallLi[i].onclick = function() {
            if (this.index == iNow) return;

            iNow = this.index;
            changeTab();
        };

        oBtnPrev.onclick = function() {
            iNow--;
            if (iNow == -1) {
                iNow = aSmallLi.length - 1;
            }
            changeTab();
        };
        oBtnNext.onclick = function() {
            iNow++;
            if (iNow == aSmallLi.length) {
                iNow = 0;
            }
            changeTab();
        };

        function changeTab() {
            for (i = 0; i < aSmallLi.length; i++) {
                startMove(aSmallLi[i], 'opacity', 60);
            }

            startMove(aSmallLi[iNow], 'opacity', 100);

            aBigLi[iNow].style.zIndex = iMinZindex++;
            aBigLi[iNow].style.height = 0;

            startMove(aBigLi[iNow], 'height', oBigUl.offsetHeight);

            if (iNow === 0) {
                startMove(oSmallUl, 'left', 0);
            } else if (iNow === aSmallLi.length - 1) {
                startMove(oSmallUl, 'left', -(iNow - 2) * aSmallLi[0].offsetWidth);
            } else {
                startMove(oSmallUl, 'left', -(iNow - 1) * aSmallLi[0].offsetWidth);
            }
        }

    }
};
