// var b = confirm('今天下雨了吗？');
// alert(b);
window.onresize = window.onload = window.onscroll = function () {
    var oDiv = document.getElementById('div1');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var t = (document.documentElement.clientHeight-oDiv.offsetHeight)/2;
    oDiv.style.top = scrollTop + t + 'px';
    // var str = prompt('请输入你的姓名', 'blue');
};

