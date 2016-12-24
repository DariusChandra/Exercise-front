window.onload = function() {
    var aBtn = document.getElementsByTagName('input');
    var oDiv = document.getElementById('div1');

    for (i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function() {
            ajax(this.index + 1 + '.txt?t' + new Date() .getTime(), function(str) {
                oDiv.innerHTML = str;
            });
        };
    }
};
