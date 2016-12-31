
window.onload = function() {
    var oUl = document.getElementById('ul1');
    var aLi = oUl.getElementsByTagName('li');
    var oBg = aLi[aLi.length - 1];

    for (i = 0; i < aLi.length - 1; i++) {

        aLi[i].onmouseover = function() {
            startMove(oBg, this.offsetLeft);
        };
    }
};
