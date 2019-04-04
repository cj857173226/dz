
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{ height: 100%; }\n@charset \x22UTF-8\x22;\n",],undefined,{path:"./pages/statistics/bill_note.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/statistics/bill_note.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      