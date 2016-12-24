// window.onload= initPage;

// function initPage() {
//     var oMessage = document.getElementById('message');
//     // 找到文件中id为message的元素。
//     var aDiv = oMessage.getElementsByTagName('div');
//     // 找到message中的div。
//     var aUserInfo = [];
//     // 建立一个名为aUserInfo的空数组，目的是存放class为userInfo的div
//     var aImg = [];
//     // 建立一个名为aImg的空数组，目的是存放class为userPic的div下的img
//     var aTimer = [];
//     // 建立一个名为aTimer的空数组
//     var i = 0;
//     // 新建变量i，使其初始值为0；

//     for (i = 0; i < aDiv.length; i++) {
//     // for循环，i跟aDiv的长度对比
//         switch(aDiv[i].className){
//         // switch语句含义： 如果表达式等于某值，则执行后面的语句。
//             case 'userInfo':
//                 aUserInfo.push(aDiv[i]);
//                 break;
//             case 'photoContent':
//                 aImg.push(aDiv[i].getElementsByTagName('img')[0]);
//                 // 将名为photoContent的div下的第一个img加入到aImg数组。
//                 break;
//         }
//     }

//     for (i = 0; i < aImg.length; i++ ) {
//         aImg[i].miaovIndex = i;
//         aImg[i].onmouseover = function() {
//             if (aTimer[this.miaovIndex]) {
//                 clearTimeout(aTimer[this.miaovIndex]);
//             }
//             aUserInfo[this.miaovIndex].style.display = 'block';
//         };

//         aUserInfo[i].miaovIndex = i;
//         aUserInfo[i].onmouseover = function () {
//             if (aTimer[this.miaovIndex]) {
//                 clearTimeout(aTimer[this.miaovIndex]);
//             }
//             aUserInfo[this.miaovIndex].style.display = 'block';
//         };

//         aUserInfo[i].onmouseout = function() {
//             var index = this.miaovIndex;
//             aTimer[this.miaovIndex] = setTimeout(function() {
//                 aUserInfo[index].style.display = 'none';
//                 aTimer[index] = null;
//             },10);
//         };
//         aTimer[i] = null;
//     }
// }


window.onload = initPage;

function initPage() {
    var oMessage = document.getElementById("message");
    var aDiv = oMessage.getElementsByTagName("div");
    var aImg = [];
    var aUserInfo = [];
    var aTimer = [];
    var i = 0;

    for( i = 0; i < aDiv.length; i++ ) {
        switch (aDiv[i].className) {
            case 'userInfo':
                aUserInfo.push(aDiv[i]);
                break;
            case 'photoContent':
                aImg.push(aDiv[i].getElementsByTagName('img')[0]);
                break;
        }
    }

    for( i = 0; i < aImg.length; i++ ) {
        aImg[i].miaovIndex = i;
        aImg[i].onmouseover = function() {
            if ( aTimer[this.miaovIndex] ) {
                clearTimeout(aTimer[this.miaovIndex]);
            }
            aUserInfo[this.miaovIndex].style.display = 'block';
        };

        aUserInfo[i].miaovIndex = i;
        aUserInfo[i].onmouseover = function() {
            if ( aTimer[this.miaovIndex]) {
                clearTimeout(aTimer[this.miaovIndex]);
            }
            aUserInfo[this.miaovIndex].style.display = 'block';
        };

        aUserInfo[i].onmouseout = function() {
            var index = this.miaovIndex;
            aTimer[this.miaovIndex] = setTimeout(function() {
                aUserInfo[index].style.display = 'none';
                aTimer[index] = null;
            },10);
        };
        aTimer[i] = null;
    }
}
