window.onload = function() {
    var oBtn = document.getElementById('btn1');
    var oDiv = document.getElementById('div1');

    // setStyle(oDiv, {
    //     width: "200px",
    //     height: "200px",
    //     background: "#fcc"
    // });

    // oBtn.onclick = function() {
    //     startMove(oDiv, 'width', 200);
    //     startMove(oDiv, 'height', 200);
    // };

    oBtn.onclick = function() {
        startMove(oDiv, {width: 102, height: 250, background: "#fcc" });
    };
};

function setStyle(obj, json) {
    var attr = '';
    for (attr in json) {
        obj.style[attr] = json[attr];
    }
}
