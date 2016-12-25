function ajax(url, fnSuccess, fnFaild) {

    // 1.创建Ajax对象
    var oAjax = null;

    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 2.连接服务器
    // open(方法， url, 是否异步)
    oAjax.open("GET", url, true);

    // 3.发送请求
    oAjax.send();

    // 4.接受返回信息;
    // OnReadyStateChange
    oAjax.onreadystatechange = function() {
        if (oAjax.readyState == 4) { // 完成
            if (oAjax.status == 200) { // 成功
                fnSuccess(oAjax.responseText);
            } else {
                if (fnFaild) {
                    fnFaild(oAjax.status);
                }
            }
        }
    };
}
