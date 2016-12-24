window.onload = function () {

    function toChinese(day) {

        switch (day) {
            case 0:
                return '星期日';
            case 1:
                return '星期一';
            case 2:
                return '星期二';
            case 3:
                return '星期三';
            case 4:
                return '星期四';
            case 5:
                return '星期五';
            case 6:
                return '星期六';
        }
    }
    // console.log("1");
    var oDate = new Date();
    var mohamoha = oDate.getFullYear() +"年"+ (oDate.getMonth() + 1) + "月" + oDate.getDate() + "日 " + toChinese(oDate.getDay());
            // console.log("2");

    alert('现在是：' + mohamoha);
};


