;(function (window, undefined) {
    function Hotspot () {
        this,init();
    }
    Hotspot.prototype = {
        init: function () {
            this.onHotspotHover();
        },
        onHotspotHover: function () {
            var hotSports = this.$$('hotSpot'),
                len = hotSports.length,
                i,
                that = this,
                currDetialImg;
            for (i = 0; i < len; i++) {
                currDetialImg = that.$$('detailImg', hotSports[i])[0];
                currDetialImg.timer = null;
                currDetialImg.alpha = 0;
                hotSports[i].onmouseover = function (e) {
                    that.doTransform(that.$$('detailImg', this)[0], 100);
                    that.$$('hotSpotSpan', this)[0].style.display = 'none';
                }
                hotSports[i].onmouseout = function (e) {
                    that.doTransform(that.$$('detailImg', this)[0], 100);
                    that.$$('hotSpotSpan', this)[0].style.display = 'none';
                }
            }
        },

        doTransform: function (me, alpha) {
            var time = 0;
            if (alpha == 100) {
                times = 5;
            } else {
                times = -5;
            }
            me.style.display = 'block';
            clearInterval(me.timer);
            me.timer = setInterval(function () {
                if (me.alpha == alpha) {
                    clearInterval(me.timer);
                    if (alpha == 0) {
                        me.style.display = 'none';
                    }
                } else {
                    me.alpha += times;
                    me.style.opacity = me.alpha/100;
                    me.style.filter = 'alpha(opacity:' + me.alpha + ')';
                }
            }, 30);
        },

        $$: function (clsName, ele) {
            if (document.getElementByClassName) {
                return (ele || document).getElementByClassName(clsName);
            } else {
                var nodes = (ele || document).getElementsByTagName('*'),
                    len = nodes.length,
                    i,
                    j,
                    currNode,
                    clsNames,
                    clsLen;
                for ( i = 0; i < len; i++) {
                    currNode = nodes[i];
                    clsNames = currNode.className.split('');
                    clsLen = clsNames.length;
                    for (j = 0; j < clsLen; j ++) {
                        if (clsNames[j] == clsName) {
                            eles.push(currNode);
                            break;
                        }
                    }
                }
                return eles;
            }
        }
    }
    new Hotspot();
}) (window);
