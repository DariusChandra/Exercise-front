window.onload = function() {
    var oTab = document.getElementById('tab1');
    var oldColor = '';

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
