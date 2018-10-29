(function (doc, win) {
	    var ua = navigator.userAgent.toLocaleLowerCase();
	    // 判断是否为IE(第一个是正常的IE，第二个是Edge，第三个是IE11)
	    var isIE = (ua.indexOf("compatible") > -1 && ua.indexOf("msie") > -1) || (ua.indexOf("edge") > -1) || (ua.indexOf(
	        'trident') > -1 && ua.indexOf("rv:11.0") > -1);
	    // 判断是否为IE5678，!+[1,] 在IE5678返回true，在IE9、IE10、IE11返回false
	    var isLteIE8 = isIE && !+[1, ];
	    // 用于防止因通过IE8+的文档兼容性模式设置文档模式，导致版本判断失效
	    var dm = document.documentMode,
	             isIE5,
	             isIE6,
	             isIE7,
	             isIE8,
	             isIE9,
	             isIE10,
	             isIE11;
	    if (dm) {
	        isIE5 = dm === 5;
	        isIE6 = dm === 6;
	        isIE7 = dm === 7;
	        isIE8 = dm === 8;
	        isIE9 = dm === 9;
	        isIE10 = dm === 10;
	        isIE11 = dm === 11;
	    } else {
	        // 判断是否为IE5，IE5的文本模式为怪异模式(quirks),真实的IE5.5浏览器中没有document.compatMode属性  
	        isIE5 = (isLteIE8 && (!document.compatMode || document.compatMode === 'BackCompat'));
	
	        // 判断是否为IE6，IE7开始有XMLHttpRequest对象  
	        isIE6 = isLteIE8 && !isIE5 && !XMLHttpRequest;
	
	        // 判断是否为IE7，IE8开始有document.documentMode属性  
	        isIE7 = isLteIE8 && !isIE6 && !document.documentMode;
	
	        // 判断是否IE8  
	        isIE8 = isLteIE8 && document.documentMode;
	
	        // 判断IE9，IE9严格模式中函数内部this不为undefined  
	        isIE9 = !isLteIE8 && (function () {
	            "use strict";
	            return !!this;
	        }());
	
	        // 判断IE10，IE10开始支持严格模式，严格模式中函数内部this为undefined   
	        isIE10 = isIE && !!document.attachEvent && (function () {
	            "use strict";
	            return !this;
	        }());
	
	        // 判断IE11，IE11开始移除了attachEvent属性  
	        isIE11 = isIE && !document.attachEvent;
	    };
	    // 因为字符串存在覆盖重复原因，判断顺序不可随意修改
	    isIE5 ? document.write('IE5') :
	    isIE6 ? document.write('IE6') :
	    isIE7 ? document.write('IE7') :
	    isIE8 ? document.write('IE8') :
	    isIE9 ? document.write('IE9') :
	    isIE10 ? document.write('IE10') : 
	    (ua.indexOf('green') > -1) ? document.write('绿色浏览器') : 
	    isIE11 ? document.write('IE11') :
	    (ua.indexOf('qq') > -1) ? document.write('QQ浏览器') : 
	    (ua.indexOf('bidu') > -1) ? document.write('百度浏览器') : 
	    (ua.indexOf('lb') > -1) ? document.write('猎豹浏览器') : 
	    (ua.indexOf('world') > -1) ? document.write('世界之窗浏览器') : 
	    (ua.indexOf('2345') > -1) ? document.write('2345浏览器') : 
	    (ua.indexOf('maxthon') > -1) ? document.write('傲游浏览器') : 
	    (ua.indexOf('tao') > -1) ? document.write('淘宝浏览器') :  
	    (ua.indexOf('ubrowser') > -1) ? document.write('UC浏览器') :  
	    (ua.indexOf('coolnovo') > -1) ? document.write('枫叶浏览器') :  
	    (ua.indexOf('opr') > -1) ? document.write('opera浏览器') :  
	    (ua.indexOf('se') > -1) ? document.write('搜狗浏览器') : 
	    (ua.indexOf('firefox') > -1) ? document.write('firefox浏览器') :  
		(ua.indexOf('vivaldi') > -1) ? document.write('vivaldi浏览器') : 
	    (ua.indexOf('safari') > -1 && ua.indexOf("version") > -1) ? document.write('safari浏览器') :  
	    (window.navigator.mimeTypes[40] || !window.navigator.mimeTypes.length) ? document.write('360浏览器') : 
	    (ua.indexOf("chrome") > -1 && window.chrome) ? document.write('chrome浏览器') : document.write('其他'); 
	
	
	
	/* var ua = navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
		win["ie"]=true;
		win["ie"+ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1]]=true;
    } else if (ua.match(/firefox/) != null) {
        win["firefox"]=true;
    }else if (ua.match(/ubrowser/) != null) {
        win["uc"]=true;
    }else if (ua.match(/opera/) != null) {
        win["opera"]=true;
    } else if (ua.match(/bidubrowser/) != null) {
        win["baidu"]=true;
    }else if (ua.match(/metasr/) != null) {
        win["sougou"]=true;
    }else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
        win["qq"]=true;
    }else if (ua.match(/maxthon/) != null) {
		win["maxthon"]=true;
    }else if (ua.match(/chrome/) != null) {
		var mimeTypes = navigator.mimeTypes;
		for (var mt in mimeTypes) {
			if (mimeTypes[mt]["type"] == "application/vnd.chromium.remoting-viewer") {
				win["360"]=true;
			}
		}
    }else if (ua.match(/safari/) != null) {
		win["safari"]=true;
    } */
	
	
	/* win.isMobile = ! ! /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|MicroMessenger/i.test(navigator.userAgent);
    win.isIOS = ! ! /iPhone|iPad|iPod/i.test(navigator.userAgent);
    win.isIOS7 = ! ! /(iPhone|iPad|iPod) OS 7/i.test(navigator.userAgent);
    win.isAndroid = ! ! /Android/i.test(navigator.userAgent);
    win.isWechat = ! ! /MicroMessenger/i.test(navigator.userAgent);
    win.isIE = ! ! /Trident|Edge/i.test(navigator.userAgent);
	
	
    var docEle = doc.documentElement,
        isIos = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr = Math.min(win.devicePixelRatio, 3);
    scale = 1 / dpr,
    resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEle.dataset.dpr = dpr;
    var metaEle = doc.createElement('meta');
    metaEle.name = 'viewport';
    metaEle.content = 'user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale;
    docEle.firstElementChild.appendChild(metaEle);
    var recalCulate = function () {
        var width = docEle.clientWidth;
        if (width / dpr > 640) {
            width = 640 * dpr;
        }
        docEle.style.fontSize = 20 * width / 750 + 'px';
    };
    recalCulate();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false); */
})(document, window);
function mylog () {
	var ua = navigator.userAgent;
	document.write("<br/>");
	document.write("<br/>");
	document.write(ua+"<br/>");
	document.write("<br/>");
	var mimeTypes = navigator.mimeTypes;
	for (var mt in mimeTypes) {
		document.write(mimeTypes[mt]["type"]+"<br/>");
	}
}
//mylog();