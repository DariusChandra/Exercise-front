// window.onload = leo(n);

// function initPage() {
//     var aNav = document.getElementById('nav');
//     var aLink = aNav.getElementsByTagName('a');
//     var aTitle = [];

//     for (i = 0; i < aLink.length; i++) {
//         if (aLink[i].className == 'navLink') {
//             aTitle.push(aLink[i]);
//         }
//     }

//     for (i = 0; i < aTitle.length; i++) {
//         aTitle[i].onclick = function() {
//             var navDl = document.getElementById('m'+ i);
//             if (navDl.style.display = 'none') {
//                 for (i = 0; i <= 5; i++) {
//                     document.getElementById('m' + i).style.display = 'none';
//                 }
//                 navDl.style.display = 'block';
//             } else {
//                 navDl.style.display = 'none';
//             }
//         };
//     }
// }
function leo(n){
    var navUi = document.getElementById("m"+n);
    if(navUi.style.display != "block"){
        for(var i=0;i<=5;i++){
            document.getElementById("m"+i).style.display = "none";
        }
        navUi.style.display = "block";
    }else{
        navUi.style.display = "none";
    }
}
