// function aaa() {
//     alert('a');
// }
// function bbb() {
//     alert('b');
// }

// // 给谁添加事件
// // 2.事件是什么
// // 3.函数
// function myAddEvent(obj, sEvent, fn) {
//     if (obj.attachEvent) {
//         obj.attachEvent('on' + sEvent, fn);
//     }   else {
//         obj.addEventListener(sEvent, fn, false);
//     }
// }

// window.onload = function() {
//     var oBtn = document.getElementById('btn1');

//     // oBtn.onclick = aaa; // 覆盖掉了。
//     // oBtn.onclick = bbb;
//     myAddEvent(oBtn, 'click', aaa);
//     myAddEvent(oBtn, 'click', bbb);

//     // if (oBtn.attachEvent) {
//     // // IE独有的
//     //     oBtn.attachEvent('onclick', aaa);
//     //     oBtn.attachEvent('onclick', bbb);
//     // } else {
//     //     oBtn.addEventListener('click', aaa, false);
//     //     oBtn.addEventListener('click', bbb, false);
//     // }

// };


// window.onload = function() {
//     var oBtn = document.getElementById('btn1');

//     // oBtn.onclick = function() {
//     //     alert(this);
//     // };

//     oBtn.addEventListener('click', function() {
//         // alert('aaa');
//         alert(this);
//     }, false);
// };


window.onload = function() {
    var oBtn = document.getElementById('btn1');

    function aaa() {
        alert('a');
    }
    oBtn.addEventListener('click', function() {
        alert('a');
    });
    oBtn.removeEventListener('click', function() {
        alert('a');
    });
};
