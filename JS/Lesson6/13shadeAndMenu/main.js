window.onload = function() {
    var oUl = document.getElementById('ul1');
    var aLi = oUl.getElementsByTagName('li');
    var i = 0;

    for (i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function() {
            var oDiv = this.getElementsByTagName('div')[0];

            oDiv.style.height = 'auto';
            var iHeight = oDiv.offsetHeight;
            oDiv.style.height = 0;

            startMove(oDiv, {
                opacity: 100,
                height: iHeight
            });
        };

        aLi[i].onmouseout = function() {
            var oDiv = this.getElementsByTagName('div')[0];

            startMove(oDiv, {
                opacity: 0,
                height: 0
            });
        };
    }
};

function setStyle(obj, json) {
    var attr = '';
    for (attr in json) {
        obj.style[attr] = json[attr];
    }
}
