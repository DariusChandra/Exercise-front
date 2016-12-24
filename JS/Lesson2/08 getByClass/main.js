window.onload = function() {
    var oUl = document.getElementById('ul1');
    // var aLi = document.getElementsByTagName('li');
    var aBox = getByClass(oUl, 'box');

    for (i = 0; i < aBox.length; i++) {
        aBox[i].style.background = '#0f0';
    }
};

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
