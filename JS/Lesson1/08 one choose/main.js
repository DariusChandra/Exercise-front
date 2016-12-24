window.onload = initPage;

function initPage() {
    var oInput = document.getElementsByTagName('input');
    // var i = 0;

    for (i = 0; i < oInput.length; i++) {
        oInput[i].onclick = function() {
            for(i = 0; i < oInput.length; i++) {
                oInput[i].checked = false;

            }
            this.checked = true;

        };
    }
}


