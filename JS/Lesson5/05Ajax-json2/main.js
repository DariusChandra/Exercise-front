window.onload = function() {
    var oUl = document.getElementById('ul1');
    var aBtn = document.getElementsByTagName('a');

    for (i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function() {
            ajax('page' + (this.index + 1) + '.txt', function(str) {
                var aData = eval(str);

                oUl.innerHTML = '';
                for (i = 0; i < aData.length; i++) {
                    var oLi = document.createElement('li');

                    oLi.innerHTML = '<strong>' + aData[i].user + '</strong><i>' + aData[i].pass + '</i>';
                    oUl.appendChild(oLi);
                }
            });
        };
    }
};
