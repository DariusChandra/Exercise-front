window.onload = initPage;

function toDouble(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return "" +num;
    }
}

function initPage() {
    var aImg = document.getElementsByTagName('img');
    var oBtn = document.getElementById('btn1');

    function updateTime() {

        var oDate = new Date();
        var str = '' + toDouble(oDate.getHours()) + toDouble(oDate.getMinutes()) + toDouble(oDate.getSeconds());
        // console.log(str);
        for (i = 0; i < aImg.length; i++) {
            aImg[i].src = 'img/' + str.charAt(i) + '.png';
        }
    }
    setInterval(updateTime, 1000);
    updateTime();
}



