window.onload = function () {
    var oBtn = document.getElementById('btn');
    var oUl1 = document.getElementById('ul1');
    var oA = oUl1.getElementsByTagName('a');

    oBtn.onclick = showHide;


    for (i = 0; i < oA.length; i++) {
        oA[i].index = i;
        oA[i].onclick = function() {
            oBtn.innerHTML = toChinese(this.index);
            // debugger;
            return false;
        };
    }


};

function showHide() {
    var oUl1 = document.getElementById('ul1');

    if (oUl1.style.display == 'block') {
        oUl1.style.display = 'none';
    } else {
        oUl1.style.display = 'block';
    }
}

function toChinese(num) {
    switch (num) {
        case 0:
            return '手写';
        case 1:
            return '拼音';
        case 2:
            return '输入法';
    }
}
