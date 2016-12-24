window.onload = function () {
    var oBig = document.getElementById('big');
    var oSmall = document.getElementById('small');
    var smImg = oSmall.getElementsByTagName('img');

    for (i = 0; i < smImg.length; i++) {
        smImg[i].index = i;
        smImg[i].onmouseover = function () {
            for (i = 0; i < smImg.length; i++) {
                smImg[i].className = '';
            }
            this.className = 'active';
            oBig.src = "img/big" + (this.index + 1) + ".jpg";
        };
    }
};
