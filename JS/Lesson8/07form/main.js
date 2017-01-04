window.onload = function() {
    var oForm = document.getElementById('form1');
    var oUser = document.getElementsByName('user')[0];
    var oPass = document.getElementsByName('pass')[0];

    oForm.onsubmit = function() {
        if (oUser.value === "" || oPass.value === "") {
            alert("您填错了");
            return false;
        }
    };

    oForm.onreset = function() {
        // if (confirm('是否要清空？')) {
        //     return true;
        // } else {
        //     return false;
        // }
        return confirm('是否要清空？');
    };
};
