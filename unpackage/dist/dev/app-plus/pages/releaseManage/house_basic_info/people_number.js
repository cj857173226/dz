
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{ height: 100%; }\n",],undefined,{path:"./pages/releaseManage/house_basic_info/people_number.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/releaseManage/house_basic_info/people_number.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      