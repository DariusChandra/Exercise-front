window.onload = function() {
    // var oUl = document.getElementById('ul1');
    // // alert(oUl.childNodes.length);
    // for (i = 0; i < oUl.childNodes.length; i++) {
    //     if (oUl.childNodes[i].nodeType == 1) {
    //         oUl.childNodes[i].style.background = 'red';
    //     }
    // }
 
    var oUl = document.getElementById('ul1');
    // alert(oUl.children.length);
    var aA = document.getElementsByTagName('a');

    for (i = 0; i < aA.length; i++) {
        aA[i].onclick = function() {
            this.parentNode.style.display = 'none';
        };
    }

};
