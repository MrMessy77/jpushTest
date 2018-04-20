const loadJs = (url,cb)=>{
    var script = document.createElement('script');
    script.setAttribute('src', url);
    script.setAttribute('type', 'text/javascript');
    var loaded = false;
    var loadFunction = function () {
        if (loaded) return;
        loaded = true;
        cb && cb();
    };
    script.onload = loadFunction;
    script.onreadystatechange = loadFunction;
    document.getElementsByTagName("head")[0].appendChild(script);
};
const loadCordova = ()=>{
    if(/RunningWithCordova/i.test(navigator.userAgent)){
        let cordova_name = "cordova.js";
        if(/android/i.test(navigator.userAgent)){
            cordova_name = 'cordova/android/cordova.js';
        }
        else if(/iPhone/i.test(navigator.userAgent)){
            cordova_name = 'cordova/ios/cordova.js';
        }

        loadJs(cordova_name,function(){});
    };
};

loadCordova();