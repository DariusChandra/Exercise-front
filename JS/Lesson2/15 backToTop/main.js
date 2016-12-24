// var b = confirm('今天下雨了吗？');
// alert(b);
window.onload = function() {
    var oBtn = document.getElementById('btn1');
    var bSys = true;
    var Timer = null;

    // 如何检测用户拖动了滚动条？
    window.onscroll = function() {
        if (!bSys) {
            clearInterval(Timer);
        }
        bSys = false;
    };

    oBtn.onclick = function() {
         Timer = setInterval(function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var iSpeed = Math.floor(-scrollTop / 8);

            if (scrollTop === 0) {
                clearInterval(Timer);
            }
            bSys = true;
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + iSpeed;
        }, 30);
    };
};
