window.onload = function() {
    var oBtn = document.getElementById('btn1');
    var oDiv = document.getElementById('div1');

    // oBtn.onclick = function() {
    //     startMove(oDiv, 'width', 300, function() {
    //         startMove(oDiv, 'height', 300);
    //     });
    // };

    oDiv.onmouseover = function() {
        startMove(oDiv, 'width', 300, function() {
            startMove(oDiv, 'height', 300, function() {
                startMove(oDiv, 'opacity', 100);
            });
        });
    };

    oDiv.onmouseout = function() {
        startMove(oDiv, 'opacity', 30, function() {
            startMove(oDiv, 'height', 100, function() {
                startMove(oDiv, 'width', 100);
            });
        });
    };
};

