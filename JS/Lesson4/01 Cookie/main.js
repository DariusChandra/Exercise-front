// var oDate = new Date();
// oDate.setDate(oDate.getDate() + 30);

// document.cookie = "user=adbcd;expires=" + oDate;
// document.cookie = "password = 123456";

function setCookie (name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + value + ';expires=' + oDate;
}
setCookie('username', 'abc', 30);
setCookie('password', '1234', 10);
alert(document.cookie);
