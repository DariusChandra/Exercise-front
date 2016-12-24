window.onload = function () {
    var oTimeBox = document.getElementById('timeBox');
    var oDateBox = document.getElementById('dateBox');
    var oHours = document.getElementById('hours');
    var oMinutes = document.getElementById('minues');
    var oSec = document.getElementById('sec');
    var oWeek = document.getElementById('week');
    var oDay = document.getElementById('date');

    function updateTime() {
        var oDate = new Date();

        oHours.innerHTML = toDouble(oDate.getHours());
        oMinutes.innerHTML = toDouble(oDate.getMinutes());
        oSec.innerHTML = toDouble(oDate.getSeconds());
        oWeek.innerHTML = toChinese(oDate.getDay());
        oDay.innerHTML = oDate.getFullYear() + "年" + (oDate.getMonth() + 1 ) + "月" + oDate.getDate() + "日";

    }

    setInterval(updateTime,1000);
    updateTime();
};

function toDouble(num) {
    if (num < 10) {
        return "0"+ num;
    } else {
        return "" + num;
    }
}

function toChinese(day) {
    switch (day) {
        case 0 :
            return '星期日';
        case 1 :
            return '星期一';
        case 2 :
            return '星期二';
        case 3 :
            return '星期三';
        case 4 :
            return '星期四';
        case 5 :
            return '星期五';
        case 6 :
            return '星期日';
    }
}

