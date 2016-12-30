// 操作 miaov_bottom right由-165px变为0;
// miaov_box bottom由-315px变为0，display由none变为block;
window.onload = function() {
    var oBtn = document.getElementById('but');
    var oClose = document.getElementById('btn_close');
    var oBottom = document.getElementById('miaov_bottom');
    var oBox = document.getElementById('miaov_box');

    oBtn.onclick = function() {
        startMove(oBottom, 'right', 0, function() {
            oBox.style.display = 'block';
            startMove(oBox, 'bottom', 0);
        });
    };

    oClose.onclick = function() {
        startMove(oBox, 'bottom', -315, function() {
            oBox.style.display = "none";
            startMove(oBottom, 'right', -165);
        });
    };

};
