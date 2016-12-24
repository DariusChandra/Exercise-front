window.onload = initPage;

function initPage() {
    var allSort = document.getElementById('allSort');
    var oFocus = document.getElementById('focus');
    var oI = allSort.getElementsByTagName('i')[0];
    var sortList = document.getElementById('all-sort-list');
    var oDiv = sortList.getElementsByTagName('div');
    var oList = [];
    var oTitle = [];
    var aTimer = [];
    var i = 0;

    allSort.onclick = showHide;

    for ( i = 0; i < oDiv.length; i++) {
        switch(oDiv[i].className) {
            case 'item-list':
                oList.push(oDiv[i]);
                break;
            case 'item-title':
                oTitle.push(oDiv[i]);
                break;
        }
    }

    for ( i = 0; i < oTitle.length; i++) {

        oTitle[i].listIndex = i;
        oTitle[i].onmouseover = function () {
            if (aTimer[this.listIndex]) {
                clearTimeout(aTimer[this.listIndex]);
            }
            oList[this.listIndex].style.display = 'block';
            this.className = 'item-title hover';
        };

        oList[i].listIndex = i;
        oList[i].onmouseover = function () {
            if (aTimer[this.listIndex]) {
                clearTimeout(aTimer[this.listIndex]);
            }
            oList[this.listIndex].style.display = 'block';
            oTitle[this.listIndex].className = 'item-title hover';
        };

        oList[i].listIndex = i;
        oList[i].onmouseout = function () {
            var index = this.listIndex;
            aTimer[this.listIndex] = setTimeout(function () {
                oList[index].style.display = 'none';
                oTitle[index].className = 'item-title';
                aTimer[index] = null;
            },10);
        };

        oTitle[i].listIndex = i;
        oTitle[i].onmouseout = function () {
            var index = this.listIndex;
            aTimer[this.listIndex] = setTimeout(function () {
                oList[index].style.display = 'none';
                oTitle[index].className = 'item-title';
                aTimer[index] = null;
            },10);
        };

        aTimer[i] = null;
    }

    function showHide() {
        if (oFocus.style.display == 'none') {
            oFocus.style.display = 'block';
            oI.className = 'up';
        } else {
            oFocus.style.display = 'none';
            oI.className = 'down';
        }
    }
}



