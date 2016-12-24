window.onload = function() {
    var oUl = document.getElementById('ul1');
    var aLi = document.getElementsByTagName('li');

    for (i = 0; i < aLi.length; i++) {
        if (aLi[i].className == 'box') {
            aLi[i].style.background = 'red';
        }
    }
};
