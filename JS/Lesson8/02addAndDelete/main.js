window.onload = function() {
    var oTab = document.getElementById('tab1');
    var oBtn = document.getElementById('btn1');
    var oTxt = document.getElementById('txt1');
    var oldColor = '';
    var iNowId = oTab.tBodies[0].rows.length + 1;

    oBtn.onclick = function() {
        var oTr = document.createElement('tr');
        var oTd = null;

        oTd = document.createElement('td');
        oTd.innerHTML = iNowId++;
        oTr.appendChild(oTd);

        oTd = document.createElement('td');
        oTd.innerHTML = oTxt.value;
        oTr.appendChild(oTd);

        oTd = document.createElement('td');
        oTd.innerHTML = '<a href="javascript:;">删除</a>';
        oTr.appendChild(oTd);

        oTd.getElementsByTagName('a')[0].onclick = function() {
            oTab.tBodies[0].removeChild(this.parentNode.parentNode);
        };

        oTab.tBodies[0].appendChild(oTr);
    };
    for (i = 0; i < oTab.tBodies[0].rows.length; i++) {
        oTab.tBodies[0].rows[i].style.background = i % 2 ? "#ccc" : "";

        oTab.tBodies[0].rows[i].onmouseover = function() {
            oldColor = this.style.background;
            this.style.background = "#ff0";
        };

        oTab.tBodies[0].rows[i].onmouseout = function() {
            // this.style.background = this.index % 2 ? "#ccc" : "";
            this.style.background = oldColor;
        };
    }
    // alert(oTab.tBodies[0].rows[2].cells[1].innerHTML);
};
