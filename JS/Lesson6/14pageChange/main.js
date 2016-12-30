window.onload = function() {
    var oUl = document.getElementById('ul1');
    var aLi = oUl.getElementsByTagName('li');
    var oDiv = document.getElementById('div1');
    var iMinZ = 2;

    for (i = 0; i < aLi.length; i++) {
        // aLi[i].innerHTML = 'left:' + aLi[i].offsetLeft + ', Top:' + aLi[i].offsetTop;
        aLi[i].style.left = aLi[i].offsetLeft + 'px';
        aLi[i].style.top = aLi[i].offsetTop + 'px';
    }

    for (i = 0; i < aLi.length; i++) {
        aLi[i].style.position = "absolute";
        aLi[i].style.margin = '0';

        aLi[i].onmouseover = function() {
            this.style.zIndex = iMinZ++;
            startMove(this, {
                width: 150,
                height: 150,
                marginLeft: -25,
                marginTop: -25
            });
        };

        aLi[i].onmouseout = function() {
            startMove(this, {
                width: 100,
                height: 100,
                marginLeft: 0,
                marginTop: 0
            });
        };
    }

    oDiv.onmouseover = function() {
        startMove(oDiv, {
            width: 200,
            height: 200,
            marginLeft: -50,
            marginTop: -50
        });
    };

    oDiv.onmouseout = function() {
        startMove(oDiv, {
            width: 100,
            height: 100,
            marginLeft: 0,
            marginTop: 0
        });
    };
};
