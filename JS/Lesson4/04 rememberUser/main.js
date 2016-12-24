window.onload = function() {
    var oForm = document.getElementById('form1');
    var oUser = document.getElementsByName('user')[0];
    var oBtnClear = document.getElementsByTagName('a')[0];

    oForm.onsubmit = function() {
        setCookie('user', oUser.value, 30);
    };

    oUser.value = getCookie('user');

    oBtnClear.onclick = function() {
        removeCookie('user');
        oUser.value = "";
    };
};
