window.onload = function() {
    var oText = document.getElementById('text');
    var oBtn = document.getElementById('btn');
    var oDiv = document.getElementById('div1');

    oBtn.onclick = function() {
        oDiv.innerHTML = oText.value;
    };
};
