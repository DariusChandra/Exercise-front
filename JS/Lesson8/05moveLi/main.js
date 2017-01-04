window.onload = function() {
    var oBtn = document.getElementById('btn1');
    var oUl = document.getElementById('ul1');

    oBtn.onclick = function() {
        var aLi = oUl.getElementsByTagName('li');
        var arr = [];

        // appendChild
        // 1.先移出父级
        // 2.添加到新的父级
        // oUl2.appendChild(aLi[0]);

        // 1.转成数组
        for (i = 0; i < aLi.length; i++) {
            arr[i] = aLi[i];
        }
        // 2.数组排序
        arr.sort(function(li1, li2) {
            return parseInt(li1.innerHTML) - parseInt(li2.innerHTML);
        });

        // 3.重新插入
        for (i = 0; i < arr.length; i++) {
            oUl.appendChild(arr[i]);
        }
    };
};
