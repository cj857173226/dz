
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{ height: 100%; }\n",],undefined,{path:"./pages/releaseManage/house_basic_info/house_area.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/releaseManage/house_basic_info/house_area.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      