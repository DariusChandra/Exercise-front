window.onload = function() {
    var oTxt = document.getElementById('txt1');

    // 1.直接改
    // oTxt.value = '213';

    // 2.用[]改
    // oTxt['value'] = 'abc';

    // 3. DOM改
    oTxt.setAttribute('value', 'rtertw');

    alert(oTxt.getAttribute('id'));
};
