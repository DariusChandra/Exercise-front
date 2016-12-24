function setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + value + ';expires=' + oDate;
}

function getCookie(name) {
    //'username=abc; password=123456; aaa=123; bbb=4r4er'
    var arr = document.cookie.split('; ');

    // arr -> ['username=abc', 'password=123456', ...]
    for (i = 0; i < arr.length; i++) {
        // arr2 -> ['username', 'abc']
        var arr2 = arr[i].split('=');

        if (arr2[0]==name) {
            return arr2[1];
        }
    }

    return "";
}

function removeCookie() {
    setCookie(name, '1', -1);
}

window.onload = function() {
    var oDiv = document.getElementById("div1");
    var disX = 0;
    var disY = 0;
    var x = getCookie('x');
    var y = getCookie('y');

    if (x) {
        oDiv.style.left = x + 'px';
        oDiv.style.top = y + 'px';
    }

    oDiv.style.left = x + 'px';
    oDiv.style.top = y + 'px';

    oDiv.onmousedown = function() {
        disX = event.clientX - oDiv.offsetLeft;
        disY = event.clientY - oDiv.offsetTop;

        document.onmousemove = function() {
            var l = event.clientX - disX;
            var t = event.clientY - disY;

            if (l < 0) {
                l = 0;
            } else if (l > document.documentElement.clientWidth - oDiv.offsetWidth) {
                l = document.documentElement.clientWidth - oDiv.offsetWidth;
            }

            if (t < 0) {
                t = 0;
            } else if (t > document.documentElement.clientHeight - oDiv.offsetHeight) {
                t = document.documentElement.clientHeight - oDiv.offsetHeight;
            }

            oDiv.style.left = l + "px";
            oDiv.style.top = t + "px";
        };

        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;

            setCookie('x', oDiv.offsetLeft, 5);
            setCookie('y', oDiv.offsetTop, 5);
        };

        return false;
    };
};
