
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"picker.",[1],"data-v-12a91e19 { position: fixed; z-index: 100; background: rgba(255, 255, 255, 0); left: 0; top: 0; width: 100%; height: 100%; font-size: ",[0,28],"; }\n.",[1],"picker-btn.",[1],"data-v-12a91e19 { padding: ",[0,10]," ",[0,20],"; border-radius: ",[0,12],"; color: #666; }\n.",[1],"picker-btn-active.",[1],"data-v-12a91e19 { background: rgba(0, 0, 0, 0.1); }\n.",[1],"picker-display.",[1],"data-v-12a91e19 { color: #666; }\n.",[1],"picker-display-text.",[1],"data-v-12a91e19 { color: #000; margin: 0 ",[0,10],"; }\n.",[1],"picker-display-link.",[1],"data-v-12a91e19 { display: inline-block; }\n.",[1],"picker-display-link-active.",[1],"data-v-12a91e19 { background: rgba(0, 0, 0, 0.1); }\n.",[1],"picker-time.",[1],"data-v-12a91e19 { width: ",[0,550]," !important; left: ",[0,100]," !important; }\n.",[1],"picker-modal.",[1],"data-v-12a91e19 { background: #fff; position: absolute; top: 50%; left: ",[0,60],"; width: ",[0,630],"; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1); box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1); border-radius: ",[0,12],"; }\n.",[1],"picker-modal-header.",[1],"data-v-12a91e19 { text-align: center; line-height: ",[0,80],"; font-size: ",[0,32],"; }\n.",[1],"picker-modal-header-title.",[1],"data-v-12a91e19 { display: inline-block; width: 40%; }\n.",[1],"picker-modal-header .",[1],"picker-icon.",[1],"data-v-12a91e19 { display: inline-block; line-height: ",[0,50],"; width: ",[0,50],"; height: ",[0,50],"; border-radius: ",[0,50],"; text-align: center; margin: ",[0,10],"; background: #fff; font-size: ",[0,36],"; }\n.",[1],"picker-modal-header .",[1],"picker-icon-active.",[1],"data-v-12a91e19 { background: rgba(0, 0, 0, 0.1); }\n.",[1],"picker-modal-body.",[1],"data-v-12a91e19 { width: ",[0,630]," !important; height: ",[0,630]," !important; position: relative; }\n.",[1],"picker-modal-time.",[1],"data-v-12a91e19 { width: 100%; height: ",[0,180],"; text-align: center; line-height: ",[0,60],"; }\n.",[1],"picker-modal-footer.",[1],"data-v-12a91e19 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,20],"; }\n.",[1],"picker-modal-footer-info.",[1],"data-v-12a91e19 { -webkit-box-flex: 1; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1; }\n.",[1],"picker-modal-footer-btn.",[1],"data-v-12a91e19 { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"picker-calendar.",[1],"data-v-12a91e19 { position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"picker-calendar-view.",[1],"data-v-12a91e19 { position: relative; width: ",[0,90],"; height: ",[0,90],"; text-align: center; }\n.",[1],"picker-calendar-view-bgbegin.",[1],"data-v-12a91e19, .",[1],"picker-calendar-view-bg.",[1],"data-v-12a91e19, .",[1],"picker-calendar-view-bgend.",[1],"data-v-12a91e19, .",[1],"picker-calendar-view-item.",[1],"data-v-12a91e19, .",[1],"picker-calendar-view-dot.",[1],"data-v-12a91e19, .",[1],"picker-calendar-view-tips.",[1],"data-v-12a91e19 { position: absolute; -webkit-transition: .2s; -o-transition: .2s; transition: .2s; }\n.",[1],"picker-calendar-view-bgbegin.",[1],"data-v-12a91e19, .",[1],"picker-calendar-view-bg.",[1],"data-v-12a91e19, .",[1],"picker-calendar-view-bgend.",[1],"data-v-12a91e19 { opacity: .15; height: 80%; }\n.",[1],"picker-calendar-view-bg.",[1],"data-v-12a91e19 { left: 0; top: 10%; width: 100%; }\n.",[1],"picker-calendar-view-bgbegin.",[1],"data-v-12a91e19 { border-radius: ",[0,90]," 0 0 ",[0,90],"; top: 10%; left: 10%; width: 90%; }\n.",[1],"picker-calendar-view-bgend.",[1],"data-v-12a91e19 { border-radius: 0 ",[0,90]," ",[0,90]," 0; top: 10%; left: 0%; width: 90%; }\n.",[1],"picker-calendar-view-item.",[1],"data-v-12a91e19 { left: 5%; top: 5%; width: 90%; height: 90%; border-radius: ",[0,90],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"picker-calendar-view-dot.",[1],"data-v-12a91e19 { right: 10%; top: 10%; width: ",[0,12],"; height: ",[0,12],"; border-radius: ",[0,12],"; }\n.",[1],"picker-calendar-view-tips.",[1],"data-v-12a91e19 { bottom: 100%; left: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); background: #4E4B46; color: #fff; border-radius: ",[0,12],"; padding: ",[0,10]," ",[0,20],"; font-size: ",[0,24],"; width: -webkit-max-content; width: -moz-max-content; width: max-content; margin-bottom: 5px; pointer-events: none; }\n.",[1],"picker-calendar-view-tips.",[1],"data-v-12a91e19:after { content: \x22\x22; position: absolute; top: 100%; left: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); width: 0; height: 0; border-style: solid; border-width: 5px 5px 0 5px; border-color: #4E4B46 transparent transparent transparent; }\n@font-face { font-family: \x22mxdatepickericon\x22; src: url(\x22data:application/x-font-woff2;charset\x3dutf-8;base64,d09GMgABAAAAAAMYAAsAAAAACBgAAALMAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDIgqDRIJiATYCJAMUCwwABCAFhG0HSRvfBsg+QCa3noNAyAQ9w6GDvbwpNp2vloCyn8bD/x+y+/5qDhtj+T4eRVEcbsCoKMFASzCgLdDkmqYDwgxkWQ6YH5L/YnppOlLEjlnter43YRjU7M6vJ3iGADVAgJn5kqjv/wEii23T86UsAQT+04fV+o97VTMx4PPZt4DlorLXwIQiGMA5uhaVrBWqGHfQXcTEiE+PE+g2SUlxWlLVBHwUYFMgrgwSB3wstTKSGzqF1nOyiGeeOtNjV4An/vvxR58PSc3AzrMViyDvPo/7dVEUzn5GROfIWAcU4rLXfMFdhte56y4We9gGNEVIezkBOOaQXUrbTf/hJVkhGpDdCw7dSOEzByMEn3kIic98hMxnAfeFPKWCbjRcA148/HxhCEkaA94eGWFaGolsblpaWz8/Po2WVuNHh1fmBpZHIpqal9fOjizhTteY+RZ9rv02I/pq0W6QVH3pSncBz3m55r9ZIPycHfmenvxe4uyutIgfT5u4bgkDusl9gcF0rnfnz+b2NpSaQWBFeu8GIL1xQj5AH/6FAsEr/50F28e/gA9ny6KjLrxIp0TE+UucmQOl5AFNLXkzZufWamWHYEI39PEP2If97CMdm51N6DSmIekwAVmneXTBr0PVYx+aTgfQbU3p+R4jKHdRurBq0oEw6AKSfm+QDbpGF/w3VOP+oBnMHbqdx409FjP4RRHHkAj5IWgQiBUjHfMTuQ1Icpg5avI4sQVRu8EHdWptM1aKrIjuscfeL+kZwxBTYoElztOQ2UygjRIjEphaZsyWodHgvm9SC8QC/JygEA6DiCDeEMhAQFhhOpvxa/18A0TiYMahIy0L2hYIZWeYH9JR085Al4qts1re5St2/SR6DINBGEVYQCWOETHDMAHZ+pcZIQJGTV4RtMmg8UbhuWL1+VLLA2RFHYC71kiRo0SNpjwQh8pj2EFU3oTNmS1WqgIA\x22) format(\x22woff2\x22); }\n.",[1],"picker-icon.",[1],"data-v-12a91e19 { font-family: \x22mxdatepickericon\x22 !important; }\n.",[1],"picker-icon-you.",[1],"data-v-12a91e19:before { content: \x22\\E63E\x22; }\n.",[1],"picker-icon-zuo.",[1],"data-v-12a91e19:before { content: \x22\\E640\x22; }\n.",[1],"picker-icon-zuozuo.",[1],"data-v-12a91e19:before { content: \x22\\E641\x22; }\n.",[1],"picker-icon-youyou.",[1],"data-v-12a91e19:before { content: \x22\\E642\x22; }\n@charset \x22UTF-8\x22;\n.",[1],"containers-box.",[1],"data-v-6736a992 { width: 100%; height: ",[0,490],"; background-color: #fff; margin-top: ",[0,10],"; }\n.",[1],"containers-box .",[1],"map-box.",[1],"data-v-6736a992 { width: 100%; height: ",[0,424],"; padding: ",[0,15],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"csssprite.",[1],"data-v-6736a992 { display: none !important; }\n@charset \x22UTF-8\x22;\n.",[1],"containers.",[1],"data-v-187f80d8 { width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; background-color: #fff; }\n.",[1],"containers .",[1],"title.",[1],"data-v-187f80d8 { font-weight: bold; text-align: center; }\n.",[1],"containers .",[1],"supporting-box.",[1],"data-v-187f80d8 { width: 100%; padding: ",[0,40],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"containers .",[1],"supporting-box .",[1],"box.",[1],"data-v-187f80d8 { width: 100%; color: #000; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"containers .",[1],"supporting-box .",[1],"box .",[1],"icon-box.",[1],"data-v-187f80d8 { width: ",[0,152],"; height: ",[0,72],"; text-align: center; margin-bottom: ",[0,30],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"containers .",[1],"supporting-box .",[1],"box .",[1],"icon-box .",[1],"color-icon.",[1],"data-v-187f80d8 { font-size: 20px; }\n.",[1],"containers .",[1],"else-supporting-box.",[1],"data-v-187f80d8 { width: 100%; padding: ",[0,40],"; -webkit-box-sizing: border-box; box-sizing: border-box; text-align: center; font-size: 12px; color: #CFCFCF; }\n@charset \x22UTF-8\x22;\n.",[1],"contanier.",[1],"data-v-0ac49416 { width: 100%; height: ",[0,600],"; padding: 0 ",[0,40]," 0 ",[0,40],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"contanier .",[1],"title.",[1],"data-v-0ac49416 { font-weight: bold; text-align: center; }\n.",[1],"contanier .",[1],"unsubscribe.",[1],"data-v-0ac49416 { width: 100%; }\n.",[1],"contanier .",[1],"rule.",[1],"data-v-0ac49416 { text-align: right; }\n@charset \x22UTF-8\x22;\n.",[1],"cantainer-description-box.",[1],"data-v-91117182 { width: 100%; margin-top: ",[0,10],"; background-color: #fff; }\n.",[1],"cantainer-description-box .",[1],"title.",[1],"data-v-91117182 { font-weight: bold; padding-top: ",[0,36],"; text-align: center; }\n.",[1],"cantainer-description-box .",[1],"introduce.",[1],"data-v-91117182 { width: ",[0,610],"; height: ",[0,136],"; text-align: center; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; padding: ",[0,44]," ",[0,46],"; }\n.",[1],"cantainer-description-box .",[1],"btn-box.",[1],"data-v-91117182 { text-align: center; margin-top: ",[0,18],"; }\n.",[1],"cantainer-description-box .",[1],"btn-box .",[1],"mini-btn.",[1],"data-v-91117182 { height: ",[0,80],"; line-height: ",[0,80],"; background-color: #fff; font-size: 12px; border: 1px solid #ef5b72; color: #ef5b72; margin: ",[0,43]," 0 ",[0,28]," 0; }\n.",[1],"cantainer-description-box .",[1],"btn-box .",[1],"mini-btn .",[1],"contact-the-landlord-icon.",[1],"data-v-91117182 { font-size: 14px; color: #ef5b72; margin-right: ",[0,10],"; }\n.",[1],"cantainer-description-box .",[1],"meinv-img.",[1],"data-v-91117182 { width: 100%; height: ",[0,364],"; }\n.",[1],"cantainer-description-box .",[1],"details-of-the-room-box.",[1],"data-v-91117182 { width: 100%; margin-top: ",[0,48],"; }\n.",[1],"cantainer-description-box .",[1],"details-of-the-room-box .",[1],"details-of-the-room-title.",[1],"data-v-91117182 { font-weight: bold; text-align: center; }\n.",[1],"cantainer-description-box .",[1],"details-of-the-room-box .",[1],"operation-list-box.",[1],"data-v-91117182 { width: 100%; padding: ",[0,40],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"cantainer-description-box .",[1],"details-of-the-room-box .",[1],"operation-list-box .",[1],"list-box.",[1],"data-v-91117182 { width: 100%; height: ",[0,65],"; font-size: 14px; border-bottom: 1px #ccc solid; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"cantainer-description-box .",[1],"details-of-the-room-box .",[1],"operation-list-box .",[1],"list-box .",[1],"left.",[1],"data-v-91117182 { color: #b9b9b9; }\n.",[1],"cantainer-description-box .",[1],"details-of-the-room-box .",[1],"operation-list-box .",[1],"list-box .",[1],"right.",[1],"data-v-91117182 { color: #ef5b72; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box.",[1],"data-v-91117182 { width: 100%; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"tenant-review.",[1],"data-v-91117182 { text-align: center; font-weight: bold; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box.",[1],"data-v-91117182 { width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,40],"; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"grades-contenr.",[1],"data-v-91117182 { width: 100%; height: ",[0,82],"; border-radius: ",[0,10],"; background-color: #fdf6e5; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box.",[1],"data-v-91117182 { margin-top: ",[0,30],"; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"criticism.",[1],"data-v-91117182 { width: 100%; height: ",[0,184],"; border-bottom: 1px solid #ccc; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"criticism .",[1],"username-img-box.",[1],"data-v-91117182 { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin-bottom: ",[0,30],"; margin-top: ",[0,20],"; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"criticism .",[1],"username-img-box .",[1],"username-photo.",[1],"data-v-91117182 { width: ",[0,76],"; height: ",[0,76],"; border-radius: 50%; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"criticism .",[1],"username-img-box .",[1],"username-check.",[1],"data-v-91117182 { font-size: 14px; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"criticism .",[1],"username-img-box .",[1],"username-check .",[1],"check.",[1],"data-v-91117182 { font-size: 12px; color: #d6d6d6; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"btn-box.",[1],"data-v-91117182 { text-align: center; margin-top: ",[0,18],"; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"btn-box .",[1],"show-img.",[1],"data-v-91117182 { width: 100%; height: ",[0,364],"; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"btn-box .",[1],"mini-btn.",[1],"data-v-91117182 { height: ",[0,80],"; line-height: ",[0,80],"; background-color: #fff; font-size: 12px; border: 1px solid #ef5b72; color: #ef5b72; }\n.",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"btn-box .",[1],"mini-btn .",[1],"contact-the-landlord-icon.",[1],"data-v-91117182 { font-size: 14px; color: #ef5b72; margin-right: ",[0,10],"; }\n@charset \x22UTF-8\x22;\n.",[1],"container.",[1],"data-v-3ad1568d { width: 100%; height: 100%; background-color: #ededed; }\n.",[1],"container .",[1],"container-box.",[1],"data-v-3ad1568d { width: 100%; height: ",[0,500],"; }\n.",[1],"container .",[1],"container-box .",[1],"uni-padding-wrap.",[1],"data-v-3ad1568d { position: relative; }\n.",[1],"container .",[1],"container-box .",[1],"uni-padding-wrap .",[1],"swiper.",[1],"data-v-3ad1568d { width: 100%; height: ",[0,500],"; }\n.",[1],"container .",[1],"container-box .",[1],"uni-padding-wrap .",[1],"swiper .",[1],"banner.",[1],"data-v-3ad1568d { width: 100%; height: ",[0,500],"; }\n.",[1],"container .",[1],"container-box .",[1],"uni-padding-wrap .",[1],"price.",[1],"data-v-3ad1568d { width: ",[0,200],"; height: ",[0,60],"; line-height: ",[0,60],"; text-align: center; color: #fff; font-size: 14px; background-color: rgba(0, 0, 0, 0.7); position: absolute; bottom: 0; left: 0; }\n.",[1],"container .",[1],"container-box .",[1],"uni-padding-wrap .",[1],"price .",[1],"specific-price.",[1],"data-v-3ad1568d { font-size: 18px; }\n.",[1],"container .",[1],"container-box .",[1],"uni-padding-wrap .",[1],"indexes-box.",[1],"data-v-3ad1568d { width: ",[0,60],"; height: ",[0,60],"; background-color: rgba(0, 0, 0, 0.7); border-radius: 50%; text-align: center; line-height: ",[0,60],"; font-size: 12px; color: #fff; position: absolute; bottom: ",[0,10],"; right: ",[0,30],"; }\n.",[1],"container .",[1],"container-box .",[1],"uni-padding-wrap .",[1],"icon-box.",[1],"data-v-3ad1568d { width: ",[0,60],"; height: ",[0,60],"; color: #fff; background-color: rgba(0, 0, 0, 0.7); border-radius: 50%; line-height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,30],"; position: absolute; top: ",[0,30],"; right: ",[0,30],"; }\n.",[1],"container .",[1],"container-box .",[1],"uni-padding-wrap .",[1],"icon-box .",[1],"love-icon.",[1],"data-v-3ad1568d { font-size: ",[0,30],"; }\n.",[1],"container .",[1],"container-box .",[1],"uni-padding-wrap .",[1],"icon-box .",[1],"love-icon-red.",[1],"data-v-3ad1568d { font-size: ",[0,30],"; color: #F8070E; }\n.",[1],"container .",[1],"container-contact-box.",[1],"data-v-3ad1568d { width: 100%; padding: ",[0,30],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box.",[1],"data-v-3ad1568d { height: ",[0,600],"; padding: 0 ",[0,20],"; -webkit-box-sizing: border-box; box-sizing: border-box; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"title.",[1],"data-v-3ad1568d { margin-top: ",[0,42],"; text-align: center; font-weight: bold; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"comment.",[1],"data-v-3ad1568d { margin-top: ",[0,34],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"comment .",[1],"lightning-box.",[1],"data-v-3ad1568d { margin-right: ",[0,20],"; color: #a4a4a4; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"comment .",[1],"lightning-box .",[1],"lightning-icon.",[1],"data-v-3ad1568d { color: #d5efec; font-size: 18px; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"comment .",[1],"comment-on-box.",[1],"data-v-3ad1568d { color: #a4a4a4; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"comment .",[1],"comment-on-box .",[1],"comment-on-icon.",[1],"data-v-3ad1568d { color: #cccccc; font-size: 18px; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"img-box.",[1],"data-v-3ad1568d { width: ",[0,120],"; height: ",[0,120],"; border-radius: 50%; margin-top: ",[0,30],"; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"img-box .",[1],"img.",[1],"data-v-3ad1568d { width: ",[0,120],"; height: ",[0,120],"; border-radius: 50%; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"autonym.",[1],"data-v-3ad1568d { text-align: center; margin-top: ",[0,20],"; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"autonym .",[1],"name.",[1],"data-v-3ad1568d { font-size: 14px; text-align: center; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"autonym .",[1],"attestation.",[1],"data-v-3ad1568d { font-size: 12px; color: #a9a9a9; text-align: center; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"autonym .",[1],"mini-btn.",[1],"data-v-3ad1568d { background-color: #fff; font-size: 18px; border: 1px solid #ef5b72; color: #ef5b72; }\n.",[1],"container .",[1],"container-contact-box .",[1],"contact-box .",[1],"autonym .",[1],"mini-btn .",[1],"contact-the-landlord-icon.",[1],"data-v-3ad1568d { font-size: 18px; color: #ef5b72; margin-right: ",[0,10],"; }\n.",[1],"container .",[1],"container-contact-box .",[1],"housing-information-box.",[1],"data-v-3ad1568d { width: 100%; height: ",[0,220],"; background-color: #fff; margin-top: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"container .",[1],"container-contact-box .",[1],"housing-information-box .",[1],"house-classifieds.",[1],"data-v-3ad1568d { width: ",[0,230],"; font-size: 14px; text-align: center; margin-top: ",[0,30],"; }\n.",[1],"container .",[1],"container-contact-box .",[1],"housing-information-box .",[1],"house-classifieds .",[1],"house-icon.",[1],"data-v-3ad1568d { font-size: 24px; color: #b8b8b8; }\n.",[1],"container .",[1],"container-contact-box .",[1],"housing-information-box .",[1],"house-classifieds .",[1],"font-color.",[1],"data-v-3ad1568d { color: #c8c8c8; font-size: 12px; }\n.",[1],"container .",[1],"container-contact-box .",[1],"mini-btn.",[1],"data-v-3ad1568d { height: ",[0,80],"; line-height: ",[0,80],"; background-color: #ef5b72; font-size: 16px; border: 1px solid #ef5b72; color: #fff; margin-top: ",[0,30],"; }\n.",[1],"container .",[1],"cantainer-description-box.",[1],"data-v-3ad1568d { width: 100%; margin-top: ",[0,10],"; background-color: #fff; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"title.",[1],"data-v-3ad1568d { font-weight: bold; padding-top: ",[0,36],"; text-align: center; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"introduce.",[1],"data-v-3ad1568d { width: ",[0,610],"; height: ",[0,136],"; text-align: center; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; font-size: 14px; padding: ",[0,44]," ",[0,46],"; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"introduces.",[1],"data-v-3ad1568d { width: ",[0,610],"; height: 100%; font-size: 14px; padding: ",[0,44]," ",[0,46],"; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"btn-box.",[1],"data-v-3ad1568d { text-align: center; margin-top: ",[0,18],"; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"btn-box .",[1],"mini-btn.",[1],"data-v-3ad1568d { height: ",[0,80],"; line-height: ",[0,80],"; background-color: #fff; font-size: 12px; border: 1px solid #ef5b72; color: #ef5b72; margin: ",[0,0]," 0 ",[0,28]," 0; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"btn-box .",[1],"mini-btn .",[1],"contact-the-landlord-icon.",[1],"data-v-3ad1568d { font-size: 14px; color: #ef5b72; margin-right: ",[0,10],"; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"meinv-img.",[1],"data-v-3ad1568d { width: 100%; height: ",[0,364],"; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"details-of-the-room-box.",[1],"data-v-3ad1568d { width: 100%; margin-top: ",[0,48],"; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"details-of-the-room-box .",[1],"details-of-the-room-title.",[1],"data-v-3ad1568d { font-weight: bold; text-align: center; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"details-of-the-room-box .",[1],"operation-list-box.",[1],"data-v-3ad1568d { width: 100%; padding: ",[0,40],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"details-of-the-room-box .",[1],"operation-list-box .",[1],"list-box.",[1],"data-v-3ad1568d { width: 100%; height: ",[0,65],"; font-size: 14px; border-bottom: 1px #ccc solid; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"details-of-the-room-box .",[1],"operation-list-box .",[1],"list-box .",[1],"left.",[1],"data-v-3ad1568d { color: #b9b9b9; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"details-of-the-room-box .",[1],"operation-list-box .",[1],"list-box .",[1],"right.",[1],"data-v-3ad1568d { color: #ef5b72; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box.",[1],"data-v-3ad1568d { width: 100%; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"tenant-review.",[1],"data-v-3ad1568d { text-align: center; font-weight: bold; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box.",[1],"data-v-3ad1568d { width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,40],"; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"grades-contenr.",[1],"data-v-3ad1568d { width: 100%; height: ",[0,82],"; border-radius: ",[0,10],"; background-color: #fdf6e5; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box.",[1],"data-v-3ad1568d { margin-top: ",[0,30],"; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"criticism.",[1],"data-v-3ad1568d { width: 100%; height: ",[0,184],"; border-bottom: 1px solid #ccc; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"criticism .",[1],"username-img-box.",[1],"data-v-3ad1568d { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin-bottom: ",[0,30],"; margin-top: ",[0,20],"; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"criticism .",[1],"username-img-box .",[1],"username-photo.",[1],"data-v-3ad1568d { width: ",[0,76],"; height: ",[0,76],"; border-radius: 50%; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"criticism .",[1],"username-img-box .",[1],"username-check.",[1],"data-v-3ad1568d { font-size: 14px; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"criticism .",[1],"username-img-box .",[1],"username-check .",[1],"check.",[1],"data-v-3ad1568d { font-size: 12px; color: #d6d6d6; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"btn-box.",[1],"data-v-3ad1568d { text-align: center; margin-top: ",[0,18],"; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"btn-box .",[1],"show-img.",[1],"data-v-3ad1568d { width: 100%; height: ",[0,364],"; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"btn-box .",[1],"mini-btn.",[1],"data-v-3ad1568d { height: ",[0,80],"; line-height: ",[0,80],"; background-color: #fff; font-size: 12px; border: 1px solid #ef5b72; color: #ef5b72; }\n.",[1],"container .",[1],"cantainer-description-box .",[1],"tenant-review-box .",[1],"grades-box .",[1],"discuss-box .",[1],"btn-box .",[1],"mini-btn .",[1],"contact-the-landlord-icon.",[1],"data-v-3ad1568d { font-size: 14px; color: #ef5b72; margin-right: ",[0,10],"; }\n.",[1],"container .",[1],"transaction-rules-box.",[1],"data-v-3ad1568d { width: 100%; padding: ",[0,40],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"container .",[1],"transaction-rules-box .",[1],"transaction-rules-title.",[1],"data-v-3ad1568d { width: 100%; text-align: center; color: #000; font-size: 14; font-weight: bold; }\n.",[1],"container .",[1],"transaction-rules-box .",[1],"bottom-transaction-rules.",[1],"data-v-3ad1568d { color: #626262; margin-top: ",[0,20],"; }\n.",[1],"container .",[1],"transaction-rules-box .",[1],"bottom-transaction-rules .",[1],"booking-way-box.",[1],"data-v-3ad1568d { margin-top: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"container .",[1],"transaction-rules-box .",[1],"bottom-transaction-rules .",[1],"booking-way-box .",[1],"iconyuding.",[1],"data-v-3ad1568d { font-size: 16px; }\n.",[1],"container .",[1],"transaction-rules-box .",[1],"bottom-transaction-rules .",[1],"booking-way-box .",[1],"right-booking-way-box.",[1],"data-v-3ad1568d { font-size: 12px; margin-left: ",[0,30],"; }\n.",[1],"container .",[1],"transaction-rules-box .",[1],"bottom-transaction-rules .",[1],"booking-way-box .",[1],"right-booking-way-box .",[1],"top-title.",[1],"data-v-3ad1568d { color: #000; }\n.",[1],"container .",[1],"transaction-rules-box .",[1],"bottom-transaction-rules .",[1],"booking-way-box .",[1],"right-booking-way-box .",[1],"conten.",[1],"data-v-3ad1568d { color: #d6d6d6; }\n.",[1],"container .",[1],"transaction-rules-box .",[1],"bottom-transaction-rules .",[1],"booking-way-box .",[1],"right-booking-way-box1.",[1],"data-v-3ad1568d { margin-left: ",[0,62],"; font-size: 12px; }\n.",[1],"container .",[1],"transaction-rules-box .",[1],"bottom-transaction-rules .",[1],"booking-way-box .",[1],"right-booking-way-box1 .",[1],"top-title.",[1],"data-v-3ad1568d { color: #000; }\n.",[1],"container .",[1],"transaction-rules-box .",[1],"bottom-transaction-rules .",[1],"booking-way-box .",[1],"right-booking-way-box1 .",[1],"conten.",[1],"data-v-3ad1568d { color: #d6d6d6; }\n.",[1],"container .",[1],"reserve-box.",[1],"data-v-3ad1568d { width: 100%; height: ",[0,90],"; background: #f05b72; border-radius: ",[0,10],"; color: #fff; line-height: ",[0,90],"; text-align: center; position: fixed; bottom: 0; left: 0; z-index: 999; }\n.",[1],"container .",[1],"reserve-box.",[1],"data-v-3ad1568d:active { opacity: .5; }\n",],undefined,{path:"./pages/particulars/particulars.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/particulars/particulars.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      