var array = ["快过年了，大家可以商量着去哪玩吧~",
            "佛教除了教我们要向善以外，还教我们怎么获得成功，怎么样成佛成道",
            "怎么样来改变自己的命运佛说了几句话，对我们人间的做人生活工作都非常有帮助佛说",
            "凡事需坚持，凡事需忍耐，凡事需付出，凡事需尽力佛不仅是智慧的化身，也是力量的化身，",
            "我们很多人在人间吃苦，我们能够忍耐，最后换来的是成功",
            "我们坚持锻炼身体，我们就拥有一个良好的身体",
            "我们什么事情都是付出，换来的是众生对你的爱所以，佛心有一种巨大的积极的感召力",
            "它指引着我们一直在向前进很多人一生不知道路怎么走，坑坑洼洼",
            "很多人失败又成功，又失败又成功，所以怎么样选择你的路，怎么样选择佛的路，",
            "让自己走好，这就是西游记里边的主题歌敢问路在何方，",
            "路就在你的脚下好好沿着菩萨给我们的佛道佛路走上我们的四圣道，走到我们的西方极乐世界！",
            "千万不要在生气的时候去做任何的决定，否则你一定会后悔的"];
window.onload = function () {
    var aLi = document.getElementsByTagName('li');
    var oText = document.getElementById('tab').getElementsByTagName('div')[0];

    for (i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            for (i = 0; i < aLi.length; i ++) {
                aLi[i].className = '';
            }
            this.className = 'active';
            oText.innerHTML = '<h2>'+(this.index + 1)+'月活动</h2>'+'<p>'+ array[this.index]+'</p>';
        };
    }
};

