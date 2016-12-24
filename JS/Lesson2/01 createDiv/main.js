
window.onload = function() {
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var oUl = document.getElementById('ul1');
    oBtn1.onclick = function() {
        var iStart = new Date().getTime();
        for (i = 0; i < 100000; i++) {
            var oLi = document.createElement('li');
            oUl.appendChild(oLi);
        }
        console.log(new Date().getTime() - iStart);
    };

    oBtn2.onclick = function() {
        var iStart = new Date().getTime();
        var oFrag = document.createDocumentFragment();

        for (i = 0; i < 100000; i++) {
            var oLi = document.createElement('li');
            oFrag.appendChild(oLi);
        }
        oUl.appendChild(oFrag);
        console.log(new Date().getTime() - iStart);

    };
};
