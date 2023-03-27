const express = require('express');

const router = express.Router();

router.use('/pilotos', (request, response, next) => {
    
    let html = `
        
 <!DOCTYPE html><html lang="es"><head><script>/\/radio(\/parrilla)?.html/gmi.test(location.href||"")&&/MSIE|Trident/gm.test(navigator.userAgent||"")&&!!window.MSInputMethodContext&&!!document.documentMode&&function(){var a=document.createElement("script");a.src="//e00-elmundo.uecdn.es/js/ue-polyfills.min.js",a.type="text/javascript";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();</script>
 <script type="text/javascript" language="javascript" src="https://e00-ue.uecdn.es/cookies/js/policy_v4.js"></script>
 <script>window.googlefc=window.googlefc||{},window.googlefc.ccpa=window.googlefc.ccpa||{},window.googlefc.callbackQueue=window.googlefc.callbackQueue||[],googlefc.callbackQueue.push({AD_BLOCK_DATA_READY:()=>{var o;switch(googlefc.getAdBlockerStatus()){case googlefc.AdBlockerStatusEnum.EXTENSION_LEVEL_AD_BLOCKER:case googlefc.AdBlockerStatusEnum.NETWORK_LEVEL_AD_BLOCKER:o="bloqueada";break;case googlefc.AdBlockerStatusEnum.NO_AD_BLOCKER:o="no bloqueada";break;case googlefc.AdBlockerStatusEnum.UNKNOWN:default:o="sin datos"}console.log("GFC status: "+o);try{localStorage.setItem("be_adblocking",o)}catch(o){}}}),googlefc.controlledMessagingFunction=function(o){var e,c,a,l,n=!1;try{n=new RegExp("https?://(www.marca.com(/claro-mx|/en)?|(us|co|ar).marca.com/claro)/$").test(window.location.origin+window.location.pathname)?(console.log("GFC in homepage"),!1):(a=(c=function(o){o=document.cookie.match("(^|;) ?"+o+"=([^;]*)(;|$)");return o?o[2]:null})("REGMARCA"),l=c("REGMARCAMEXICO"),e=new RegExp("[0-9a-zA-Z]+-(?:[a-zA-Z0-9+/]{4})*(?:|(?:[a-zA-Z0-9+/]{3}=)|(?:[a-zA-Z0-9+/]{2}==)|(?:[a-zA-Z0-9+/]{1}===))$"),c=window.location.pathname,l=(a=null!=a&&e.test(unescape(a)))||null!=l&&e.test(unescape(l)),!(a||c.includes("claro-mx")&&l)||(console.log("GFC logged user"),!1)),console.log("GFC show message: "+n)}catch(o){console.log("GFC test exception")}o.proceed(n)};</script>
 <script async src="https://fundingchoicesmessages.google.com/i/pub-2081531155174950?ers=1" nonce="3dEcZ3xu8OBd+gA5QsCosA"></script><script nonce="3dEcZ3xu8OBd+gA5QsCosA">(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script>
 <script type="text/javascript">window.gdprAppliesGlobally=true;(function(){function a(e){if(!window.frames[e]){if(document.body&&document.body.firstChild){var t=document.body;var n=document.createElement("iframe");n.style.display="none";n.name=e;n.title=e;t.insertBefore(n,t.firstChild)}else{setTimeout(function(){a(e)},5)}}}function e(n,r,o,c,s){function e(e,t,n,a){if(typeof n!=="function"){return}if(!window[r]){window[r]=[]}var i=false;if(s){i=s(e,t,n)}if(!i){window[r].push({command:e,parameter:t,callback:n,version:a})}}e.stub=true;function t(a){if(!window[n]||window[n].stub!==true){return}if(!a.data){return}var i=typeof a.data==="string";var e;try{e=i?JSON.parse(a.data):a.data}catch(t){return}if(e[o]){var r=e[o];window[n](r.command,r.parameter,function(e,t){var n={};n[c]={returnValue:e,success:t,callId:r.callId};a.source.postMessage(i?JSON.stringify(n):n,"*")},r.version)}}if(typeof window[n]!=="function"){window[n]=e;if(window.addEventListener){window.addEventListener("message",t,false)}else{window.attachEvent("onmessage",t)}}}e("__tcfapi","__tcfapiBuffer","__tcfapiCall","__tcfapiReturn");a("__tcfapiLocator");(function(e,tgt){var t=document.createElement("script");t.id="spcloader";t.type="text/javascript";t.async=true;t.src="https://sdk.privacy-center.org/"+e+"/loader.js?target_type=notice&target="+tgt;t.charset="utf-8";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)})("178119d0-5586-4a4c-953e-04aaf9ac0994","bH6MpnRd")})();</script>
 <script type='text/javascript'>var gptadslots=[],googletag=googletag||{};googletag.cmd=googletag.cmd||[];function initAdServer(){(function(){var a=document.createElement("script");a.async=!0,a.type="text/javascript";var b="https:"==document.location.protocol;a.src=(b?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)})()}</script>
 <script type='text/javascript' async>var pbjs=pbjs||{};pbjs.que=pbjs.que||[];(function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//e00-elmundo.uecdn.es/js/pbma.js";var t=document.getElementsByTagName("head")[0];t.insertBefore(e,t.firstChild)})()</script>
 <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-15"/><meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1"/><title data-ue-c="innerHTML" data-ue-u="title">Clasificación F1 por ALAN CASTILLO</title><meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0"><meta name="keywords" content=""/><meta name="news_keywords" content=""/><!-- ##IBEXCLU --><link Href="https://www.marca.com/motor/formula1/clasificacion.html" data-ue-c="href" data-ue-u="canonical" rel="canonical"/><!-- ##FBEXCLU --><meta name="robots" content="index,follow,max-image-preview:large"/><meta name="theme-color" content="#CC0000"><meta name="organization" content="Unidad Editorial Información Deportiva S.L."/><meta name="DC.date.issued" content="2023-02-27T11:22:36Z"><meta property="article:modified_time" content="2023-02-27T11:22:36Z"/><meta property="article:section" content="Motor/formula1"/><meta name="twitter:site" content="@marca"/><meta name="twitter:creator" content="@marca"/><meta data-ue-u="twitter:title" name="twitter:title" content="Clasificación F1 2023 de pilotos Formula 1 - Resultados y puntos"/><meta data-ue-u="twitter:description" name="twitter:description" content="Consulta la clasificación actualizada de pilotos de F1 2023. El puesto en el último Gran Premio, el número de poles y de victorias de cada piloto del campeonato mundial de Fórmula 1 de 2023 en Marca.com"/><meta data-ue-u="description" name="description" content="Consulta la clasificación actualizada de pilotos de F1 2023. El puesto en el último Gran Premio, el número de poles y de victorias de cada piloto del campeonato mundial de Fórmula 1 de 2023 en Marca.com"/><meta data-ue-u="og:title" property="og:title" content="Clasificación F1 2023 de pilotos Formula 1 - Resultados y puntos - Marca.com"/><meta data-ue-u="og:description" property="og:description" content="Consulta la clasificación actualizada de pilotos de F1 2023. El puesto en el último Gran Premio, el número de poles y de victorias de cada piloto del campeonato mundial de Fórmula 1 de 2023 en Marca.com"/><meta property="og:url" content="https://www.marca.com/motor/formula1/clasificacion.html"/><meta data-ue-u="og:image" property="og:image" content="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/27/16484087025574.jpg"/><meta name="twitter:card" content="summary_large_image"/><meta data-ue-u="twitter:image" name="twitter:image" content="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/27/16484087025574.jpg"/><meta property="og:type" content="article"/><meta property="og:site_name" content="Marca.com"/><meta property="fb:app_id" content="160427764002568"/><link href="https://e00-marca.uecdn.es/rss/portada.xml" rel="alternate" type="application/rss+xml" title="RSS Portada - Marca.com"/><link href="https://e00-marca.uecdn.es/rss/motor/formula1.xml" rel="alternate" type="application/rss+xml" title="RSS de motor - Marca.com"/><!-- ##IBEXCLU --><link href="https://www.marca.com/rss/googlenews/motor/formula1.xml" rel="alternate" type="application/rss+xml" title="RSS de motor - Marca.com"/><!-- ##FBEXCLU --><meta name="referrer" content="unsafe-url"><link rel="shortcut icon" type="image/ico" Href="https://www.marca.com/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" Href="https://www.marca.com/favicon_32x32.png"><link rel="icon" type="image/png" sizes="96x96" Href="https://www.marca.com/favicon_96x96.png"><link rel="apple-touch-icon-precomposed" sizes="180x180" Href="https://www.marca.com/apple-touch-icon-precomposed.png"><link rel="stylesheet" type="text/css" href="https://e00-marca.uecdn.es/assets/v31/css/core-marca-desktop.css"><link rel="stylesheet" type="text/css" href="https://e00-marca.uecdn.es/assets/v31/css/estaticas/motor.css"><script async=true src='https://e00-marca.uecdn.es/assets/uelogin/v2/ueLogin.55e8db490027ab9d1c66.js' charset='utf-8'></script>
 <script type="text/javascript" src="https://e00-marca.uecdn.es/assets/v31/js/jquery.2.2.1.js"></script><script type="text/javascript" src="https://e00-marca.uecdn.es/assets/v31/js/ue-utils.js"></script><script type="text/javascript">!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js")</script>
 <script src="//e00-elmundo.uecdn.es/js/uecomscore_cmp_event.js"></script>
 <script>window.uePermutiveIds={PROJECT_ID:'10453011-272d-49cd-9043-1964fdb36fd8',PUBLIC_API_KEY:'184e2a21-c646-4fd9-a6ad-7281617e89a7',NAMESPACE:'unidad'};</script>
 <script src='//e00-ue.uecdn.es/permutive/ue-permutive.min.js'></script>
 <script defer src='https://cdn.permutive.com/10453011-272d-49cd-9043-1964fdb36fd8-web.js'></script>
 </head><body class="  "><div id="pixelcontabilizacionmarca" class="pixelcontabilizacion" style="position:absolute;top:0px;left:0px;width:1px;height:1px;z-Index:1"><img src="https://pixelcounter.marca.com/pixelcontabilizacion/pixelcontabilizacion.gifctl?r=http%3A%2F%2Fwww%2Emarca%2Ecom%2Fmotor%2Fformula1%2Fclasificacion%2Ehtml&amp;s=marca&amp;d=ZCIIOAoAAsIAAABVm@k" width="1" height="1" alt="" /><script type="text/javascript">function DM_prepClient(csid,client){var cat=document.location.href.split('/');url_section=cat[6];client.DM_addEncToLoc("as_section",url_section);}</script></div>
 <script src="https://tags.tiqcdn.com/utag/unidadeditorial/marca/prod/utag.sync.js"></script>
 <script type="text/javascript">
 var cdn_cookies=function(){var e=location.hostname,o="; "+document.cookie,t={"www.marca.com":{cookieName:["MARCA_idusr","UE_pref", "MARCA_edition"]},"videos.marca.com":{cookieName:["MARCA_idusr","UE_pref"],destinationHost:"www.marca.com"}};if(t[e])for(i=0;i<t[e].cookieName.length;i++)if(o.split("; "+t[e].cookieName[i]+"=").length<2){var n=document.createElement("img"),s=location.hostname;t[e].destinationHost&&(s=t[e].destinationHost),n.alt=" ",n.style="display:none;position:absolute;top:0px;left:0px;width:1px;height:1px;z-Index:1",n.src="//"+s+"/ue-cdn/services/cdn_cookie_service.html";var c=document.body.firstChild;c.parentNode.insertBefore(n,c);break}};cdn_cookies();
 </script><div class="lightbox_shadow no-visible" id="js-popup"></div><script>var nav_continua_active=true;</script>
 <script type="text/javascript">
     !function(t){var e;"undefined"!=typeof window?e=window:"undefined"!=typeof self&&(e=self),e.lazyload=t()}(function(){return function t(e,n,r){function o(u,c){if(!n[u]){if(!e[u]){var f="function"==typeof require&&require;if(!c&&f)return f(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var l=n[u]={exports:{}};e[u][0].call(l.exports,function(t){var n=e[u][1][t];return o(n?n:t)},l,l.exports,t,e,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(t,e,n){(function(n){function r(t){-1===c.call(a,t)&&a.push(t)}function o(t){function e(t){var e=n(t);e&&(t.src=e),t.setAttribute("data-lzled",!0),i[c.call(i,t)]=null}function n(e){return"function"==typeof t.src?t.src(e):e.getAttribute(t.src)}function o(n){d&&n.classList.add(t.deprecated),n.onload=null,n.removeAttribute("onload"),n.onerror=null,n.removeAttribute("onerror"),-1===c.call(i,n)&&f(n,t,e)}t=u({offset:1048,src:"data-src",container:!1,deprecated:"force-size"},t||{}),"string"==typeof t.src&&r(t.src);var i=[];return o}function i(t){var e="HTML"+t+"Element";if(e in n!=!1){var r=n[e].prototype.getAttribute;n[e].prototype.getAttribute=function(t){if("src"===t){for(var e,n=0,o=a.length;o>n&&!(e=r.call(this,a[n]));n++);return e||r.call(this,t)}return r.call(this,t)}}}function u(t,e){for(var n in t)void 0===e[n]&&(e[n]=t[n]);return e}function c(t){for(var e=this.length;e--&&this[e]!==t;);return e}e.exports=o;var f=t("in-viewport"),a=["data-src"],l=function(){var t=navigator.userAgent,e=/like android/i.test(t),n=function(e){var n=t.match(e);return n&&n.length>1&&n[1]||""},r={};return r.device=/tablet/i.test(t)||/[^-]mobi/i.test(t),r.chrome=/CrOS|chrome|crios|crmo/i.test(t),r.android=!e&&/android/i.test(t),r.osVersion=r.android&&n(/android[ \/-](\d+(\.\d+)*)/i),r.version=n(/version\/(\d+(\.\d+)?)/i),r.device&&!r.chrome&&r.android&&parseFloat(r.osVersion)<4.4&&parseInt(r.version)<=4},d=l();n.lzld=o(),i("Image"),i("IFrame")}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"in-viewport":2}],2:[function(t,e,n){(function(t){function n(e,n,r){var o={container:t.document.body,offset:0};(void 0===n||"function"==typeof n)&&(r=n,n={});for(var u=o.container=n.container||o.container,c=o.offset=n.offset||o.offset,a=0;a<f.length;a++)if(f[a].container===u)return f[a].isInViewport(e,c,r);return f[f.push(i(u))-1].isInViewport(e,c,r)}function r(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function o(t,e,n){var r;return function(){function o(){r=null,n||t.apply(i,u)}var i=this,u=arguments,c=n&&!r;clearTimeout(r),r=setTimeout(o,e),c&&t.apply(i,u)}}function i(e){function n(t,e,n){if(!n)return d(t,e);var r=i(t,e,n);return r.watch(),r}function i(t,e,n){function r(){s.add(t,e,n)}function o(){s.remove(t)}return{watch:r,dispose:o}}function f(t,e,n){d(t,e)&&(s.remove(t),n(t))}function d(n,r){if(!l(t.document.documentElement,n)||!l(t.document.documentElement,e))return!1;if(!n.offsetWidth||!n.offsetHeight)return!1;var o=n.getBoundingClientRect(),i={};if(e===t.document.body)i={top:-r,left:-r,right:t.document.documentElement.clientWidth+r,bottom:t.document.documentElement.clientHeight+r};else{var u=e.getBoundingClientRect();i={top:u.top-r,left:u.left-r,right:u.right+r,bottom:u.bottom+r}}var c=o.right>=i.left&&o.left<=i.right&&o.bottom>=i.top&&o.top<=i.bottom;return c}var s=u(),p=e===t.document.body?t:e,v=o(s.checkAll(f),15);return r(p,"scroll",v),p===t&&r(t,"resize",v),a&&c(s,e,v),setInterval(v,150),{container:e,isInViewport:n}}function u(){function t(t,e,n){r(t)||i.push([t,e,n])}function e(t){var e=n(t);-1!==e&&i.splice(e,1)}function n(t){for(var e=i.length-1;e>=0;e--)if(i[e][0]===t)return e;return-1}function r(t){return-1!==n(t)}function o(t){return function(){for(var e=i.length-1;e>=0;e--)t.apply(this,i[e])}}var i=[];return{add:t,remove:e,isWatched:r,checkAll:o}}function c(t,e,n){function r(t){t.some(o)===!0&&setTimeout(n,0)}function o(e){var n=c.call([],Array.prototype.slice.call(e.addedNodes),e.target);return u.call(n,t.isWatched).length>0}var i=new MutationObserver(r),u=Array.prototype.filter,c=Array.prototype.concat;i.observe(e,{childList:!0,subtree:!0,attributes:!0})}e.exports=n;var f=[],a="function"==typeof t.MutationObserver,l=t.document.documentElement.compareDocumentPosition?function(t,e){return!!(16&t.compareDocumentPosition(e))}:t.document.documentElement.contains?function(t,e){return t!==e&&(t.contains?t.contains(e):!1)}:function(t,e){for(;e=e.parentNode;)if(e===t)return!0;return!1}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});
 
 </script><script>lazyload({offset:1048,'deprecated':'force-size'});</script><script type="text/javascript">var cookieList=document.cookie.split(';');cookieList.forEach(function(item){if(typeof item=="string"&&item.indexOf("REGMARCA")!=-1){var ifr_seed=document.createElement("iframe");ifr_seed.src="https://5214106.fls.doubleclick.net/activityi;src=5214106;type=corp;cat=regis00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord="+Math.random()*1000000000000+"?";ifr_seed.width="1";ifr_seed.height="1";ifr_seed.style.display="none";ifr_seed.setAttribute("frameborder","0");var node=document.body.getElementsByTagName("script")[0];node.parentNode.insertBefore(ifr_seed,node);}});</script><noscript><iframe src="https://5214106.fls.doubleclick.net/activityi;src=5214106;type=corp;cat=regis00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe></noscript><script type="text/javascript">var sectionMainMenuActive='motor';</script><script type="text/javascript">
 
     var IsAPSEnabled = true;
 
     
 window.Adomik = window.Adomik || {};
 Adomik.randomAdGroup = function() {
     var rand = Math.random();
     switch (false) {
         case !(rand < 0.09): return "ad_ex" + (Math.floor(100 * rand));
         case !(rand < 0.10): return "ad_bc";
         default: return "ad_opt";
     }
 };
 
 window.ueUserContentGoogle = (function() {
     if (!window || !window.ueCookiesPolicy || typeof window.ueCookiesPolicy.isAccepted != 'function') {
         console.warn('Module ueCookiesPolicy not exists.')
         return false
     }
     var googleAccepted =  ueCookiesPolicy.isAccepted({vendors: 'google'})
     if(googleAccepted === null) { googleAccepted = undefined }
     return googleAccepted
 }());
 var data = {"networkId":"99071977","divId":"div-gpt-ad-motor_formula1_e","customTargeting":{},"adSlots":[{"adUnit":"mc2/motor/formula1/e","customTargeting":{"p":["f"]}},{"adUnit":"mc2/motor/formula1/e","sizes":[[728,90],[728,250],[970,90],[970,250],[980,90],[980,180],[980,250],[980,220],[980,305],[990,90],[990,250],[962,250],[1,1]],"customTargeting":{"p":["m"]}},{"adUnit":"mc2/motor/formula1/e","sizes":[[300,100],[300,250],[300,300],[300,600],[1,1]],"customTargeting":{"p":["r"]}},{"adUnit":"mc2/motor/formula1/e","sizes":[[160,600],[120,1000],[160,1000],[450,1000],[1,1]],"customTargeting":{"p":["si"]}},{"adUnit":"mc2/motor/formula1/e","sizes":[[160,601],[120,1001],[160,1001],[450,1001],[1,1]],"customTargeting":{"p":["sd"]}}]};
 var sizeConfig=JSON.parse('[{"mediaQuery":"(min-width: 1024px)","sizesSupported":[[728,90],[970,90],[970,250],[980,90],[980,250],[990,250],[981,90]],"labels":["mega-desktop"]},{"mediaQuery":"(min-width: 0px) and (max-width: 1023px)","sizesSupported":[[320,50],[320,53],[320,100]],"labels":["mega-phone"]},{"mediaQuery":"(min-width: 1024px)","sizesSupported":[[300,250],[300,300]],"labels":["roba2-desktop"]},{"mediaQuery":"(min-width: 0px) and (max-width: 1023px)","sizesSupported":[[300,250],[300,300]],"labels":["roba2-phone"]},{"mediaQuery":"(min-width: 1024px)","sizesSupported":[[300,250]],"labels":["roba1-desktop"]},{"mediaQuery":"(min-width: 0px) and (max-width: 1023px)","sizesSupported":[[300,250]],"labels":["roba1-phone"]},{"mediaQuery":"(min-width: 1024px)","sizesSupported":[[300,250],[300,300]],"labels":["roba3-desktop"]},{"mediaQuery":"(min-width: 0px) and (max-width: 1023px)","sizesSupported":[[300,250],[300,300],[300,600]],"labels":["roba3-phone"]},{"mediaQuery":"(min-width: 1024px)","sizesSupported":[[120,600],[120,1000]],"labels":["skyi-desktop"]},{"mediaQuery":"(min-width: 1024px)","sizesSupported":[[120,600],[120,1001]],"labels":["skyd-desktop"]}]');
 var adUnits_s='[{"labelAny":["mega-desktop"],"code":"div-gpt-ad-LDB1","mediaTypes":{"banner":{"sizes":[[728,90],[970,90],[970,250],[980,90],[980,250],[990,250],[981,90]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595052"}},{"bidder":"rubicon","params":{"zoneId":663036,"siteId":142576,"accountId":15366,"position":"atf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648549,"formatId":54639,"siteId":99913,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":["8S3jMWeEhh","8fTLJJL0iQ"],"supplyType":"site"}}]},{"labelAny":["roba3-desktop"],"code":"div-gpt-ad-MPU1","mediaTypes":{"banner":{"sizes":[[300,250],[300,300],[300,600]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595057"}},{"bidder":"rubicon","params":{"zoneId":663050,"siteId":142576,"accountId":15366,"position":"atf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648549,"formatId":40859,"siteId":99913,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"463Y4dJxIO","supplyType":"site"}}]},{"labelAny":["roba1-desktop"],"code":"div-gpt-ad-MPU2","mediaTypes":{"banner":{"sizes":[[300,250]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595058"}},{"bidder":"rubicon","params":{"zoneId":663056,"siteId":142576,"accountId":15366,"position":"btf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648549,"formatId":40974,"siteId":99913,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"TyBOAyqBxU","supplyType":"site"}}]},{"labelAny":["roba2-desktop"],"code":"div-gpt-ad-MPU3","mediaTypes":{"banner":{"sizes":[[300,250],[300,300]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595059"}},{"bidder":"rubicon","params":{"zoneId":663058,"siteId":142576,"accountId":15366,"position":"btf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648549,"formatId":40975,"siteId":99913,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"0oOTDrARgE","supplyType":"site"}}]},{"labelAny":["roba1-desktop"],"code":"div-gpt-ad-MPU4","mediaTypes":{"banner":{"sizes":[[300,250]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595060"}},{"bidder":"rubicon","params":{"zoneId":663060,"siteId":142576,"accountId":15366,"position":"btf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648549,"formatId":40976,"siteId":99913,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"0DAxyDNUb7","supplyType":"site"}}]},{"labelAny":["roba1-desktop"],"code":"div-gpt-ad-MPU5","mediaTypes":{"banner":{"sizes":[[300,250]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595061"}},{"bidder":"rubicon","params":{"zoneId":663062,"siteId":142576,"accountId":15366,"position":"btf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648549,"formatId":40977,"siteId":99913,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"LYTomdyjXa","supplyType":"site"}}]},{"labelAny":["mega-phone"],"code":"div-gpt-ad-LDB1","mediaTypes":{"banner":{"sizes":[[320,50],[320,53],[320,100]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595040"}},{"bidder":"rubicon","params":{"zoneId":663146,"siteId":142592,"accountId":15366,"position":"atf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648550,"formatId":54723,"siteId":99914,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"1b3RqFswab","supplyType":"site"}}]},{"labelAny":["roba3-phone"],"code":"div-gpt-ad-MPU1","mediaTypes":{"banner":{"sizes":[[300,250],[300,300],[300,600]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595043"}},{"bidder":"rubicon","params":{"zoneId":663156,"siteId":142592,"accountId":15366,"position":"atf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648550,"formatId":40859,"siteId":99914,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"0kP4lrpE8z","supplyType":"site"}}]},{"labelAny":["roba1-phone"],"code":"div-gpt-ad-MPU2","mediaTypes":{"banner":{"sizes":[[300,250]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595044"}},{"bidder":"rubicon","params":{"zoneId":663158,"siteId":142592,"accountId":15366,"position":"btf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648550,"formatId":40974,"siteId":99914,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"1LKWJIrbol","supplyType":"site"}}]},{"labelAny":["roba2-phone"],"code":"div-gpt-ad-MPU3","mediaTypes":{"banner":{"sizes":[[300,250],[300,300]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595045"}},{"bidder":"rubicon","params":{"zoneId":663160,"siteId":142592,"accountId":15366,"position":"btf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648550,"formatId":40975,"siteId":99914,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"iurpCvTfUe","supplyType":"site"}}]},{"labelAny":["roba1-phone"],"code":"div-gpt-ad-MPU4","mediaTypes":{"banner":{"sizes":[[300,250]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595046"}},{"bidder":"rubicon","params":{"zoneId":663162,"siteId":142592,"accountId":15366,"position":"btf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648550,"formatId":40976,"siteId":99914,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"cZ9A3ZJ2RG","supplyType":"site"}}]},{"labelAny":["roba1-phone"],"code":"div-gpt-ad-MPU5","mediaTypes":{"banner":{"sizes":[[300,250]]}},"bids":[{"bidder":"appnexus","params":{"placementId":"11595047"}},{"bidder":"rubicon","params":{"zoneId":663164,"siteId":142592,"accountId":15366,"position":"btf"}},{"bidder":"criteo","params":{"networkId":1080}},{"bidder":"smartadserver","params":{"pageId":648550,"formatId":40977,"siteId":99914,"domain":"https://prg.smartadserver.com"}},{"bidder":"richaudience","params":{"pid":"1DNkkF4ivh","supplyType":"site"}}]},{"labelAny":["skyd-desktop"],"code":"div-gpt-ad-SD","mediaTypes":{"banner":{"sizes":[[120,600],[120,1001]]}},"bids":[{"bidder":"richaudience","params":{"pid":"14UZpZwjFT","supplyType":"site"}}]},{"labelAny":["skyi-desktop"],"code":"div-gpt-ad-SI","mediaTypes":{"banner":{"sizes":[[120,600],[120,1000]]}},"bids":[{"bidder":"richaudience","params":{"pid":"TUOQRhWOG4","supplyType":"site"}}]}]';
 var adUnits=JSON.parse(adUnits_s);
 
 var adUnits_nc = JSON.parse(JSON.stringify(adUnits));
 var map = JSON.parse('{"div-gpt-ad-LDB1":"m","div-gpt-ad-LDB2":"mb","div-gpt-ad-MPU1":"r","div-gpt-ad-MPU2":"rb","div-gpt-ad-MPU3":"rc","div-gpt-ad-MPU4":"rd","div-gpt-ad-MPU5":"re","div-gpt-ad-SD":"sd","div-gpt-ad-SI":"si"}');
 
 adUnits.forEach(function(item) {
     if (item.code in map) {
         item.code = data.divId + '_' + map[item.code] + '_5a950f56e2704ee81e8bff0d';
     }
 });
 
 if (typeof pbjs !== 'undefined') {
         pbjs.que.push(function() {
 
         pbjs.setConfig({
       userSync: {
         filterSettings: {
             iframe: {
                 bidders: ['smartadserver', 'richaudience'],
                 filter: 'include'
             }
         }
       },
             priceGranularity: "dense",
             enableSendAllBids: true,
             consentManagement: {
                 cmpApi: 'iab',
                 timeout: 8000,
                 defaultGdprScope: true
             },
             sizeConfig: sizeConfig,
             rubicon: {singleRequest: true}
     });
 
         pbjs.addAdUnits(adUnits);
 
         pbjs.requestBids({
             timeout: 1000,
             bidsBackHandler: function () {
                 window.didomiOnReady = window.didomiOnReady || [];
                 window.didomiOnReady.push(function(Didomi) {
                     let bidsWin = pbjs.getHighestCpmBids();
                     if (bidsWin.find(a => a.dealId == "ramkt") || bidsWin.find(a => a.dealId == "1PsYeoooYs")) {
                         googletag.cmd.push(function() {
                             googletag.pubads().getSlots().filter(e => e.getSizes().find(function(size) { if (size.width == 120 && size.height == 600 || size.width == 160 && size.height == 600 || size.width == 120 && size.height == 1000 || size.width == 160 && size.height == 1000 || size.width == 450 && size.height == 1000 || size.width == 120 && size.height == 1001 || size.width == 160 && size.height == 1001 || size.width == 450 && size.height == 1001) { return size } })).forEach(a => a.setTargeting('hb_deal', 'ramkt'));
                         })
                     }
                     initAdServer();
                 });
             }
         });
     });
 }
 
     googletag.cmd.push(function () {
         data.customTargeting.t = ['dos-columnas'];
 data.customTargeting.tag = [''];
 data.customTargeting.newsid = ['5a950f56e2704ee81e8bff0d'];
 
 var autoRefreshTime = 15000;
 var autoRefreshTimeHEX = 24000;
 var autoRefreshTimeoutIds = {};
 var UEautoRefreshCampaignIds = [2559776610, 483876297, 3038846356, 2098434238, 494913417, 494827977, 2106449176, 2108387998, 2106441352, 2106520950, 2106523863, 2667870692, 2668441436, 2668163671, 2668164637];
 var UEautoRefreshAdvertiserIds = [80400537, 51527697, 82838217, 4456969335];
 var HEXautoRefreshLineItemIds = [4531737763, 4531738504, 4531738963, 4531740190, 4531740202, 4532232168, 4532235756, 4532266997, 4532291252, 4532294810, 4532296049, 4532299601, 4534167307, 4534167310, 4534167337, 4534167340, 4534167343, 4534167349, 4534167481, 4534702532, 4534702547, 4534702556, 4538093494, 4538093512, 4538093701, 4538093740, 4538093755, 4538093887, 4538093905, 4538093914, 4538093917, 4538093947, 4538094124, 4538094139, 4538094145, 4538094148, 4538247763, 4538247769, 4538487330, 4538487339, 4538487345, 4538581907, 4538584238, 4538584454, 4538584460, 4538585174, 4538751341, 4538751776, 4661555674, 5026501650, 4662949864, 4662955648, 4663158431, 4663197747, 4754748418, 4755297098, 4755952449, 4755952779, 4755962625, 4756163678, 4756804480, 4756827319, 4756848463, 4757301536, 4759335753, 4776678232, 4776993099, 4777081113, 4777349423, 4777349426, 4777349432];
 
 function getLazyLoad(data) {
     return [];
 }
 
 function getrootMargin(data) {
     var p = '25';
     var a = data.adSlots[0].adUnit.split('/');
     var s = a[a.length - 1];
     if (s == 'portada') {
         p = '200';
     }
     data.customTargeting.llrm = [p];
 
     return p + '% 0px ' + p + '% 0px';
 }
 
 var LazyLoaded = getLazyLoad(data);
 var rootMarginLL = getrootMargin(data);
 
 var enableUELazyLoad = false;
 var observer;
 if ('IntersectionObserver' in window) {
     observer = new IntersectionObserver(
         function(entries, observer) {
             //console.log('LazyLoad: in observer');
             if (window.ueUserContentGoogle === undefined ) { return };
             entries.forEach(function (entry) {
                 //if (entry.intersectionRatio > 0) {
                 if (entry.isIntersecting) {
                     //console.log('LazyLoad: observer entry', entry);
                     //var divParts = entry.target.id.split('_');
                     //var slotData = data.adSlots.find(function(e) { return divParts[1] === e.customTargeting.p[0] })
                     //observer.unobserve(entry.target);
                     var slotData = data.adSlots.find(function(e) { return entry.target.id.replace(/_\d+_/, "_") === e.divId })
                     if (slotData) {
                         var slot;
                         if (slotData.sizes) {
                             slot = googletag.defineSlot('/' + data.networkId + '/' + slotData.adUnit, slotData.sizes, entry.target.id);
                         } else {
                             slot = googletag.defineOutOfPageSlot('/' + data.networkId + '/' + slotData.adUnit, entry.target.id);
                         }
                         if (slot) {
                             //console.log('LazyLoad: observer ', entry.target.id);
                             for (var key in slotData.customTargeting) {
                                 if (slotData.customTargeting.hasOwnProperty(key)) {
                                     slot.setTargeting(key, slotData.customTargeting[key]);
                                 }
                             }
                             if (typeof Adomik !== 'undefined') {
                                 slot.setTargeting('ad_group', Adomik.randomAdGroup());
                             }
                             slot.addService(googletag.pubads());
                             googletag.cmd.push(function() {
                                 //googletag.display(entry.target.id);
                                 googletag.pubads().refresh([slot]);
                             });
                         } else {
                             // refresh ???
                             //console.log('LazyLoad: refresh ', entry.target.id);
                             //var slots = googletag.pubads().getSlots().filter(function(e) { return (entry.target.id === e.getSlotElementId()) });
                             //googletag.cmd.push(function() { googletag.pubads().refresh(slots); });
                         }
                     } else {
                         //console.log('LazyLoad: divId not found ', entry.target.id);
                     }
                 }
             })
             //console.log('LazyLoad: out observer');
         },
         { root: null, rootMargin: rootMarginLL, threshold: 1 }
     );
 } else {
     enableUELazyLoad = false;
 }
 
 (function() {
 try{
 var ueseg=localStorage.getItem("dmpue_id");
 ueseg!==null? data.customTargeting.ueid=ueseg:data.customTargeting.ueid='NoUESeg';
 var ksegs=localStorage.getItem("dmpue_segs");
 ksegs!==null? data.customTargeting.ksegs=ksegs.split(','):data.customTargeting.ksegs='NoDefinido';
 }catch(err) {}
 })();
 
 if (typeof window.ueUserContentGoogle === 'undefined' || window.ueUserContentGoogle === false) {
   data.customTargeting.npa='1';
 }
 
 window["ueDFPData"] = data;
 
 let allVendorCheck = false
 if (window.ueCookiesPolicy) {
   let filtered = window.ueCookiesPolicy.getAllPurposesEnabled().filter(function(e){
     return ["share_whith_others", "enrich_third", "geo_ads"].includes(e)
   });
   allVendorCheck = filtered.length === 3;
 }
 
 var hid = window.uePermutive && window.uePermutive.account && window.uePermutive.account.hid;
 if (hid && allVendorCheck) {
   googletag.pubads().setPublisherProvidedId(hid);
 }
 
 var adDomElements = [].slice.apply(document.querySelectorAll('div[id^='+data.divId+']'))
     .map(function(e) {
         return e.getAttribute('id');
     });
 var divId = '';
 data.adSlots = data.adSlots.filter(function(adSlot){
     divId = data.divId + '_' + adSlot.customTargeting.p.join('_');
     divId += '_' + '5a950f56e2704ee81e8bff0d'
     adSlot.divId = divId;
     if (adDomElements.length > 0) {
         return (adDomElements.indexOf(divId)!==-1);
     } else {
         return true;
     }
 });
 data.adSlots.forEach(function (adSlot) {
     // var slotIndex = i + 1;
     var adUnit = adSlot.adUnit ? adSlot.adUnit : data.adUnit;
     var slot;
     divId = data.divId + '_' + adSlot.customTargeting.p.join('_');
 divId += '_' + '5a950f56e2704ee81e8bff0d'
     adSlot.divId = divId;
     adUnit = '/' + data.networkId + '/' + adUnit;
     if (((typeof enableUELazyLoad === 'undefined') || !enableUELazyLoad) || (LazyLoaded.indexOf(adSlot.customTargeting.p.join('_')) === -1)) {
         //console.log('LazyLoad: SRA ', divId);
     if (adSlot.sizes) {
         slot = googletag.defineSlot(adUnit, adSlot.sizes, adSlot.divId);
     } else {
         slot = googletag.defineOutOfPageSlot(adUnit, adSlot.divId);
     }
 
     for (var key in adSlot.customTargeting) {
         if (adSlot.customTargeting.hasOwnProperty(key)) {
             slot.setTargeting(key, adSlot.customTargeting[key]);
         }
     }
     
     if (typeof Adomik !== 'undefined') {
         slot.setTargeting('ad_group', Adomik.randomAdGroup());
     }
     
     slot.addService(googletag.pubads());
     } else {
         //console.log('LazyLoad: LL ', divId);
         var t = document.querySelector('#' + divId);
         if (t) {
             observer.observe(t);
         } else {
             //console.log('LazyLoad: div not found: ', divId);
         }
     }
 });
 
 Array.prototype.map.call(document.querySelectorAll("[id^='div-gpt-ad-']"), function(x) {return x;}).forEach(function (e) {
     if (e.id.match(/div-gpt-ad-.*?_\d+_[0-9a-f]{24}/)) {
         observer.observe(e);
     }
 })
 
 
 if ((typeof DisableenableSingleRequest === 'undefined') || !DisableenableSingleRequest) {
     googletag.pubads().enableSingleRequest();
 }
 
 for (var key in data.customTargeting) {
     if (data.customTargeting.hasOwnProperty(key)) {
         googletag.pubads().setTargeting(key, data.customTargeting[key]);
     }
 }
 
   googletag.pubads().addEventListener('slotRenderEnded', function (event) {
     if (event && event.slot) {
       var slotElement = event.slot.getSlotElementId();
       var slot = document.querySelector('#' + slotElement);
       var count = 0;
 
       function build(removeStyle) {
         if (event.isEmpty || !event.size || event.size.length <= 1 || event.size[0] <= 1 || event.size[1] <= 1) {
           if (![494827977, 494913417, 2098434238, 3038846356, 2536735611].includes(event.slot.getResponseInformation()?.campaignId)) {
             slot.setAttribute('style', 'display: none');
             if (count < 9) {
               count++;
               setTimeout(function () {
                   slot.removeAttribute('style');
                   build();
               }, 500);
             }
           }
         } else {
           if (slot.getAttribute('data-slot-built') === 'true') {
               return;
           }
           var documentEvent = new CustomEvent('slotRenderEnded', { detail: { id: event.slot.getSlotElementId() } });
           document.dispatchEvent(documentEvent);
           if (slot.parentNode.parentNode.classList.contains('ue-c-ad')) {
             slot.parentNode.parentNode.classList.add('ready');
           } else {
             slot.parentNode.classList.add('ready');
           }
           slot.setAttribute('style', 'display: block');
           if (slotElement.indexOf('sticky') > 0) {
             var close_button = document.createElement('span');
             close_button.classList.add('close-button');
             close_button.classList.add('hidden');
             close_button.setAttribute('data-adv-id', slotElement);
             close_button.addEventListener('click', function (event) {
               var slot_to_clear = event.currentTarget.getAttribute('data-adv-id');
               if (slot_to_clear) {
                 var slot_found = googletag.pubads().getSlots().find(function (slot) { return slot.getSlotElementId() === slot_to_clear; });
                 if (slot_found) {
                   document.querySelector('#' + slot_to_clear).parentNode.classList.remove('ready');
                   googletag.pubads().clear([slot_found]);
                 }
               }
             });
             close_button.innerHTML = '<svg style="width:20px;" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg>';
             slot.prepend(close_button);
             setTimeout(function () {
               slot.setAttribute('style', 'height:auto;');
               close_button.classList.remove('hidden');
             }.bind(this), 5000);
           }
           if (!event.isEmpty && event.size && event.size.length > 1 && (event.size[0] == 300 && event.size[1] == 299)) {
             if (slot.parentNode.parentNode.classList.contains('ue-c-ad')) {
               slot.parentNode.parentNode.classList.add('ue-c-ad--label-hidden');
             } else {
               slot.parentNode.classList.add('ue-c-ad--label-hidden');
             }
           }
           if (!event.isEmpty && event.size && event.size.length > 1 && (event.size[0] == 300 && event.size[1] == 99)) {
             if (slot.parentNode.parentNode.classList.contains('ue-c-ad')) {
               slot.parentNode.parentNode.classList.add('ue-c-ad--label-hidden');
             } else {
               slot.parentNode.classList.add('ue-c-ad--label-hidden');
             }
           }
           slot.setAttribute('data-slot-built', 'true');
         }
       }
 
       if (slot) {
         build();
       }
     }
   });
 
 googletag.pubads().enableAsyncRendering();
 if (((typeof gptIsDisableInitialLoad !== 'undefined') && gptIsDisableInitialLoad) || (typeof IsAPSEnabled !== 'undefined' && IsAPSEnabled)) {
     googletag.pubads().disableInitialLoad();
 }
 
 if( window.ueUserContentGoogle !== undefined ){
     if ( window.ueUserContentGoogle === true ) {
         googletag.pubads().setRequestNonPersonalizedAds(0);
     }else{
         googletag.pubads().setRequestNonPersonalizedAds(1);
     }
 }else{
     googletag.pubads().disableInitialLoad();
 }
 if (typeof pbjs !== 'undefined') {
     pbjs.que.push(function () {
         pbjs.setTargetingForGPTAsync();
     });
 }
 googletag.enableServices();
 
 var autoRefreshObserver;
 
 function SetAutoRefresh(id) {
  let s = googletag.pubads().getSlots().filter(slot => slot.getSlotElementId() === id);
  if (s.length !== 0) {
    let t = autoRefreshTime;
    let ri = s[0].getResponseInformation();
    if (ri) {
       //console.log('autoRefresh: refresh', ri);
       if (HEXautoRefreshLineItemIds.includes(ri.lineItemId)) { t = autoRefreshTimeHEX }
    }
    autoRefreshTimeoutIds[id] = setTimeout(() => { autoRefresh(id) }, t)
  }
 }
 
 function autoRefresh(id){
   let s = googletag.pubads().getSlots().filter(slot => slot.getSlotElementId() === id);
   if (s.length !== 0) {
     //console.log('autoRefresh: refresh', id);
     var ri = s[0].getResponseInformation();
 
     if (ri) {
       //console.log('autoRefresh: campaignId', c);
      if (UEautoRefreshCampaignIds.includes(ri.campaignId) || UEautoRefreshAdvertiserIds.includes(ri.advertiserId) || HEXautoRefreshLineItemIds.includes(ri.lineItemId)) {
         //console.log('autoRefresh: %ccampaignId OK !!!', 'color: green;');
         s[0].setTargeting('rfrsh', '1');
 
         var hb_p = [];
         // apstag
         var aps_data_r = {
             slots: []
         };
         var sizes = s[0].getSizes();
         if (sizes.length > 0) {
             sizes = sizes.map(function(adSlotSize) {
                 return [adSlotSize.getWidth(), adSlotSize.getHeight()];
             }).filter(function(size) {
                 return (size[0] !== 1) && (size[1] !== 1);
             });
             if (sizes.length > 0) {
                 aps_data_r.slots.push({
                     slotID: s[0].getSlotElementId(),
                     slotName: s[0].getAdUnitPath(),
                     sizes: sizes
                 });
             }
 
             hb_p.push(new Promise(function(result, reject) {
                 apstag.fetchBids(aps_data_r, function(bids) {
                     //console.log('autoRefresh: %caps !!!', 'color: green;');
                     apstag.setDisplayBids();
                     result();
                 });
             }
             ));
         }
 
         hb_p.push(new Promise(function(result, reject) {
             pbjs.requestBids({
                 timeout: 1000,
                 adUnitCodes: [s[0].getAdUnitPath()],
                 bidsBackHandler: function(bidResponses, timedOut, auctionId) {
                     //console.log('autoRefresh: %cprebid !!!', 'color: green;');
                     pbjs.setTargetingForGPTAsync([s[0].getAdUnitPath()]);
                     result();
                 }
             });
         }));
 
         Promise.all(hb_p).then(function(results) {
             //console.log('autoRefresh: %crefresh !!!', 'color: green;');
         googletag.cmd.push(function() { googletag.pubads().refresh(s) });
         });
 
         SetAutoRefresh(id);
       } else {
         //console.log('autoRefresh: %ccampaignId KO', 'color: red;');
         autoRefreshObserver.unobserve(document.getElementById(id))
       }
     } else {
       //console.log('autoRefresh: %cEmpty ResponseInformation', 'color: yellow;');
       autoRefreshObserver.unobserve(document.getElementById(id))
     }
   }
 }
 
 if ('IntersectionObserver' in window) {
   autoRefreshObserver = new IntersectionObserver(function (entries) {
     if (window.ueUserContentGoogle === undefined) {
       return;
     }
     entries.forEach(e => {
       const id = e.target.id;
       if (e.isIntersecting) {
         // console.log('autoRefresh: Observer: isIntersecting', id);
         SetAutoRefresh(id);
       } else {
         // console.log('autoRefresh: Observer: NOT isIntersecting', id);
         clearTimeout(autoRefreshTimeoutIds[id]);
         delete autoRefreshTimeoutIds[id];
       }
     });
   }, { threshold: [0.8] });
 
   var REFRESH_TARGETS_QUERY = 'div[id^=div-gpt-ad-]';
   var REFRESH_TARGETS_DONE_CLASS = 'ue-autorefresh-bind';
 
   function getElements () {
     var elements = Array.prototype.map.call(
       document.querySelectorAll(REFRESH_TARGETS_QUERY + ':not(.' + REFRESH_TARGETS_DONE_CLASS + ')'),
       function (x) { return x; }
     );
     return elements;
   }
 
   function observeElements () {
     var elements = getElements();
     elements.forEach(function (element) {
       // console.log('autoRefresh: observe ', e.id);
       autoRefreshObserver.observe(element);
       element.classList.add(REFRESH_TARGETS_DONE_CLASS);
     });
   }
 
   if (!window.__refreshBinded) {
     window.__refreshBinded = true;
     document.addEventListener('nc-contentLoaded', observeElements);
   }
   if (-1 === window.location.href.indexOf('www.marca.com/en/')) {
     observeElements();
   }
 }
 
     });
     function amz() {
     var ueConsentData = localStorage.getItem('ueConsentData');
     apstag.init({
         pubID: '3537',
         adServer: 'googletag',
         bidTimeout: 1e3,
         gdpr: {
             enabled: true,
             consent: ueConsentData
         }
     });
 
     var aps_data = {slots:[]};
     googletag.destroySlots(googletag.pubads().getSlots().filter(function(x){ return x.getSlotElementId().indexOf('cts-') < 0 && !(x.getSlotElementId() in window)}));
     googletag.pubads().getSlots().forEach(function(adSlot, i) {
         var sizes = adSlot.getSizes();
         if (sizes.length > 0) {
             sizes = sizes.map(function(adSlotSize) {
                     if (adSlotSize !== 'fluid') {
                 return [adSlotSize.getWidth(), adSlotSize.getHeight()];
             }
                 })
                 .filter(function(size) {
             if (size && size.length === 2) {
                         return (size[0] !== 1) && (size[1] !== 1);
             }
                 });
             if (sizes.length > 0) {
                 aps_data.slots.push({
                     slotID: adSlot.getSlotElementId(),
                     slotName: adSlot.getAdUnitPath(),
                     sizes: sizes
                 });
             }
         }
     });
     apstag.fetchBids(aps_data, function(bids) {
         googletag.cmd.push(function() {
             apstag.setDisplayBids();
             googletag.pubads().refresh();
         });
     });
 }
 amz = (function(amz) {
     var DOMContentLoadedReady = false;
     window.addEventListener('DOMContentLoaded', function() {
         DOMContentLoadedReady = true;
     });
     return function() {
         DOMContentLoadedReady ? amz() : window.addEventListener('DOMContentLoaded', amz)
     };
 })(amz);
 if (window.ueUserContentGoogle !== undefined) {
   googletag.cmd.push(function () {
     if (typeof IsAPSEnabled !== 'undefined' && IsAPSEnabled) {
         amz();
     }
   });
 }else{
     window.addEventListener('ueConsentChanged', function (event) {
         googletag.cmd.push(function () {
             if(  event.detail.consents.vendors.google === true ){
                 googletag.pubads().setRequestNonPersonalizedAds(0);
             }else{
                 googletag.pubads().setRequestNonPersonalizedAds(1);
             }
             if (typeof IsAPSEnabled !== 'undefined' && IsAPSEnabled) {
                 amz();
             }else{
                 googletag.pubads().refresh();
             }
         });
     }, false);
 }
 </script>
 <div id="fb-root"></div><script type="text/javascript">(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.8&appId=160427764002568&status=true&cookie=true";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));</script><section class="js_slider_container seo-links-container"><div class="container js_slider_viewport slider-viewport"><ul class="list-seo-links horizontal"><li><span>Es noticia: </span></li><li><a href="https://www.marca.com/motor/motogp/gp-portugal/2023/03/27/64213fc1268e3e160e8b4605.html">Marc Marquez</a></li><li><a href="https://www.marca.com/tenis/masters-1000-miami/2023/03/27/6421e6fd22601da12b8b4595.html">Alcaraz - Rublev</a></li><li><a href="https://www.marca.com/motor/motogp/gp-portugal/2023/03/26/642076adca474116788b45c9.html">Marc Márquez Jorge Martin</a></li><li><a href="https://www.marca.com/futbol/clasificacion-eurocopa/irlanda-francia/2023/03/27/01_0120_20230327_116_368-directo.html">Irlanda - Francia</a></li><li><a href="https://www.marca.com/motor/formula1/gp-australia/2023/03/27/64206787e2704e07958b45ab.html">Fernando Alonso</a></li><li><a href="https://www.marca.com/motor/formula1/gp-australia/2023/03/27/6420a0b522601da0358b4571.html">GP Australia F1 hora</a></li><li><a href="https://www.marca.com/futbol/eurocopa/2023/03/27/64214843e2704e24328b458d.html">Partidos Clasificación EURO hoy</a></li><li><a href="https://www.marca.com/futbol/eurocopa/2023/03/27/642164c9e2704eb1038b45e1.html">Irlanda - Francia TV</a></li><li><a href="https://www.marca.com/combates-ufc/2023/03/26/6420b911ca4741437c8b456d.html">Marvin Vettori</a></li><li><a href="https://www.marca.com/coches-y-motos/coches/porsche/2023/03/27/641ae302e2704ec5a58b4572.html">Porsche 911</a></li><li><a href="https://www.marca.com/tiramillas/actualidad/2023/03/27/642173b6268e3e7f0e8b45de.html">Hiba Abouk</a></li><li><a href="https://www.marca.com/tiramillas/television/2023/03/27/6421854946163f814e8b45ae.html">Maria Teresa Campos</a></li><li><a href="https://www.marca.com/tiramillas/television/2023/03/27/6421eb2422601d160b8b45ca.html">Omar Montes</a></li><li><a href="https://www.marca.com/tiramillas/actualidad/2023/03/27/64216b4546163f0c8c8b45ae.html">Mario Vaquerizo</a></li><li><a href="https://www.marca.com/tiramillas/gastronomia/2023/03/27/64214e13ca4741dc078b45b5.html">MasterChef hora</a></li><li><a href="https://www.marca.com/tiramillas/actualidad/2023/03/27/6421af8aca4741e50e8b457c.html">Precio luz hoy</a></li><li><a href="https://www.marca.com/videojuegos/kings-league/2023/03/26/6420b23046163f01158b4575.html">Final Kings League</a></li><li><a href="https://www.marca.com/resultados/futbol.html">Resultados fútbol</a></li><li><a href="https://www.marca.com/motor/formula1/calendario.html">Calendario F1</a></li><li><a href="https://www.marca.com/futbol/primera-division/calendario.html">Calendario Liga</a></li><li><a href="https://www.marca.com/futbol/champions-league/2023/03/21/6416e10b22601dbf358b45e1.html">Champions League</a></li></ul><span class="gradient-right"></span><span class="gradient-left"></span></div></section><header class="main-header inside js-cnav-header  motor  " data-ue-model="motor "><div class="main-top-header-container"><div class="main-header-container"><div class="main-site-logo"><div class="logo"><a href="https://www.marca.com/"><svg class="logo-marca" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 50" fill="#c00" role="img" aria-hidden="true"><path d="M27.9 1.4h15v10.3h-2.6v26.6h2.6v10.4h-16V38.3h2.5V21.7L22 42l-7.3-20.3v16.6h2.6v10.4H1.1V38.3h2.6V11.7H1V1.4h15.6l5.6 16"></path><g class="arca"><path d="M75.1 38.3l-5.9-37H52.3l-5.9 37h-1.9v10.3h14.7V38.3h-1.9l.1-3.9h6.8v3.9h-2v10.3H77V38.3h-1.9zM58.4 28.2l2.3-14.6 2.4 14.6h-4.7z"></path><path d="M107.7 38.3v-9.2l-4-4 4-4V6.4l-4.9-5H78.7v10.2h2.5v26.6h-2.5v10.4h16V38.3h-1.8v-8.5h3.4v18.9h14.1V38.3h-2.7zM96.2 22.4h-3.5V11.6h3.5v10.8z"></path><path d="M132.9 1.4l5 5V21h-11.5v-9.2l-3.4-.1v26.6h3.4v-9.2h11.5v14.5l-5 5.1h-16.3l-4.8-5.1V6.4l4.8-5"></path><path d="M170.1 38.3l-5.9-37h-16.8l-5.9 37h-1.8v10.3h14.6V38.3h-1.9l.1-3.9h6.8v3.9h-1.9v10.3H172V38.3h-1.9zm-16.7-10.1l2.3-14.6 2.4 14.6h-4.7z"></path></g></svg><span class="hidden-content">Portada de Marca</span></a></div></div><aside class="tools-header"><div id="header-edition-selector" class="edition-selector" aria-label="Selector de ediciones">
 <button class="edition-selector__btn" data-menu-action="toogle" aria-expanded="false" aria-haspopup="true" aria-controls="header-edition-selector__menu">
 <span class=" hidden-content">Edición seleccionada</span><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fill="#FFC400" d="M3,6h18v12H3V6z"/><path fill="#C60B1E" d="M3,6h18v3H3V6z M3,15h18v3H3V15z"/></svg>
 ES <i class="iconsvg iconsvg-down-a"></i>
 </button>
 <div id="header-edition-selector__menu" class="edition-selector__menu" role="menu" tabindex="-1" aria-hidden="true" aria-label="Selector de ediciones Marca.com">
 <p class="edition-selector__menu-title">Ediciones:</p>
 <ul class="edition-selector__menu-list">
 <li class="list-option list-option-spain">
 <a href="https://www.marca.com/?intcmp=BOTONPORTADA&amp;s_kw=portada&ue_guest" aria-current="true"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fill="#FFC400" d="M3,6h18v12H3V6z"/><path fill="#C60B1E" d="M3,6h18v3H3V6z M3,15h18v3H3V15z"/></svg>
 ES (España)
 </a>
 </li>
 <li class="list-option list-option-english">
 <a href="https://www.marca.com/en/?intcmp=BOTONPORTADA&amp;s_kw=portada"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" role="img" aria-hidden="true"><circle fill="#AED6F1" cx="12" cy="12" r="8.5"/><g><path fill="#34495E" d="M16.116,7.003l0.018,0.134l-0.2,0.042l-0.026,0.284h0.239l0.319-0.03l0.164-0.197l-0.174-0.067l-0.097-0.11 l-0.144-0.234l-0.069-0.33l-0.271,0.056L15.8,6.667v0.131l0.132,0.089L16.116,7.003z"/><path fill="#34495E" d="M15.887,7.113l0.012-0.178l-0.157-0.069L15.52,6.917l-0.166,0.265v0.172h0.192L15.887,7.113z M11.313,7.871 l-0.049,0.126h-0.236v0.122h0.056l0.008,0.06l0.146-0.012l0.091-0.056l0.023-0.113l0.117-0.01l0.047-0.095l-0.107-0.022H11.313z M10.704,8.093l-0.009,0.119l0.171-0.014l0.018-0.12l-0.103-0.081L10.704,8.093z"/><path fill="#34495E" d="M20.998,11.907c-0.007-1.108-0.223-2.205-0.635-3.233l-0.068-0.172c-0.434-1.023-1.055-1.958-1.829-2.755 C16.773,3.991,14.439,3,12,3C9.741,2.998,7.565,3.85,5.907,5.384C5.533,5.729,5.188,6.104,4.878,6.508 C3.659,8.079,2.999,10.012,3,12c0,4.963,4.038,9,9,9c3.491,0,6.521-2,8.014-4.911C20.662,14.823,21,13.422,21,12L20.998,11.907z M19.305,8.311l0.053-0.059c0.067,0.133,0.133,0.268,0.192,0.404l-0.085-0.003l-0.16,0.022V8.311z M18.003,6.739l0.002-0.401 c0.142,0.149,0.278,0.304,0.408,0.464l-0.163,0.24l-0.566-0.004L17.648,6.92L18.003,6.739z M7.147,5.74V5.726h0.18l0.016-0.063 h0.295v0.128L7.554,5.905H7.146L7.147,5.74z M7.435,6.142c0,0,0.181-0.031,0.195-0.031c0.016,0,0,0.179,0,0.179L7.224,6.317 L7.147,6.225L7.435,6.142z M19.878,9.715h-0.659l-0.4-0.299l-0.422,0.041v0.258h-0.135l-0.145-0.103l-0.73-0.185V8.953 l-0.928,0.072l-0.288,0.154h-0.366l-0.181-0.018l-0.447,0.248v0.466l-0.913,0.66l0.075,0.281h0.187l-0.049,0.267l-0.131,0.048 l-0.007,0.7l0.789,0.899h0.345l0.021-0.056h0.616l0.18-0.165h0.35l0.192,0.193l0.522,0.054l-0.07,0.694l0.58,1.023l-0.307,0.582 l0.021,0.274l0.24,0.239v0.66l0.315,0.426v0.549h0.271c-1.565,1.932-3.92,3.054-6.406,3.054c-4.552,0-8.257-3.704-8.257-8.26 c0-1.146,0.234-2.239,0.658-3.232V8.51l0.296-0.358c0.103-0.194,0.212-0.383,0.329-0.566l0.014,0.149L4.696,8.151 c-0.107,0.2-0.207,0.405-0.297,0.616v0.47l0.344,0.165v0.654l0.329,0.562l0.268,0.041l0.034-0.192L5.059,9.979L4.997,9.506h0.186 l0.078,0.487l0.455,0.666l-0.117,0.214l0.291,0.445l0.721,0.178V11.38l0.287,0.041L6.87,11.627l0.227,0.041l0.351,0.096 l0.494,0.563l0.632,0.047l0.061,0.517l-0.432,0.301l-0.02,0.459L8.12,13.932l0.625,0.783l0.046,0.268c0,0,0.227,0.063,0.255,0.063 c0.028,0,0.509,0.364,0.509,0.364v1.414l0.17,0.048l-0.115,0.65l0.287,0.385l-0.053,0.646l0.381,0.671l0.489,0.426l0.491,0.011 l0.049-0.159l-0.361-0.305l0.021-0.15l0.065-0.186l0.013-0.188l-0.245-0.007l-0.123-0.154l0.203-0.195l0.027-0.147l-0.227-0.063 l0.014-0.139l0.323-0.049l0.491-0.234l0.164-0.303l0.516-0.658l-0.117-0.516l0.158-0.273l0.473,0.014l0.318-0.252L13.07,14.7 l0.354-0.45l0.063-0.289l-0.323-0.104l-0.213-0.349L12.224,13.5l-0.576-0.22l-0.027-0.411l-0.193-0.336l-0.521-0.008l-0.301-0.474 l-0.268-0.131l-0.014,0.145l-0.487,0.029l-0.179-0.249L9.15,11.743l-0.42,0.484l-0.659-0.111l-0.047-0.743L7.542,11.29l0.193-0.364 L7.68,10.717l-0.632,0.422l-0.397-0.048L6.509,10.78l0.088-0.32l0.219-0.404L7.32,9.801L8.294,9.8l-0.002,0.298l0.35,0.162 L8.614,9.752l0.252-0.254l0.509-0.333l0.036-0.236L9.919,8.4l0.539-0.299l-0.046-0.04l0.365-0.344l0.135,0.036l0.061,0.077 l0.139-0.154l0.035-0.015L10.995,7.64l-0.154-0.051v-0.15l0.082-0.067h0.18l0.082,0.037l0.072,0.144l0.087-0.013V7.527l0.025,0.008 l0.253-0.039l0.035-0.124L11.8,7.409v0.133l-0.133,0.093l0.02,0.146l0.459,0.142v0.006l0.106-0.009l0.007-0.199l-0.363-0.165 L11.874,7.46l0.303-0.104l0.014-0.288l-0.317-0.192l-0.02-0.487l-0.433,0.212h-0.158l0.042-0.37l-0.589-0.139l-0.243,0.184v0.561 l-0.438,0.139L9.858,7.343L9.669,7.374V6.906L9.257,6.849L9.052,6.715L8.969,6.412L9.704,5.98l0.361-0.109l0.036,0.242l0.2-0.011 l0.016-0.121l0.21-0.03l0.004-0.043L10.44,5.871l-0.02-0.129l0.259-0.021l0.155-0.162l0.009-0.012h0.002l0.047-0.049l0.543-0.068 l0.239,0.204l-0.629,0.335l0.8,0.188l0.104-0.268H12.3l0.124-0.233l-0.248-0.063V5.3l-0.775-0.344l-0.535,0.062l-0.303,0.158 l0.021,0.385l-0.316-0.048L10.219,5.3l0.302-0.275L9.972,4.998L9.814,5.045L9.746,5.23l0.206,0.035L9.911,5.471l-0.35,0.021 L9.507,5.629L8.999,5.643c0,0-0.014-0.288-0.035-0.288l0.398-0.007l0.302-0.295L9.499,4.97L9.28,5.183L8.915,5.162L8.696,4.86 H8.229L7.742,5.224h0.446l0.041,0.131L8.113,5.462l0.495,0.014l0.074,0.178l-0.556-0.02L8.1,5.497L7.75,5.421L7.564,5.318 L7.147,5.321C8.556,4.292,10.255,3.739,12,3.74c2.089,0,3.997,0.78,5.452,2.063l-0.099,0.176l-0.381,0.149l-0.16,0.174l0.037,0.203 l0.196,0.027l0.118,0.296l0.34-0.136l0.055,0.396h-0.102L17.18,7.047L16.871,7.1l-0.299,0.422l-0.428,0.067l-0.063,0.365 l0.182,0.043L16.21,8.232l-0.424-0.086l-0.39,0.086l-0.082,0.217l0.066,0.454l0.229,0.107l0.384-0.003l0.259-0.022l0.078-0.207 l0.404-0.525l0.268,0.054l0.262-0.237l0.049,0.185l0.645,0.436L17.88,8.797l-0.291-0.016L17.7,8.94l0.18,0.039l0.209-0.088 L18.084,8.64l0.092-0.047l-0.074-0.079l-0.43-0.24l-0.111-0.319h0.356l0.114,0.113l0.309,0.265l0.014,0.321l0.318,0.34l0.119-0.465 l0.221-0.121l0.043,0.381l0.215,0.237L19.7,9.018c0.084,0.214,0.157,0.433,0.225,0.655L19.878,9.715z M7.909,7.089l0.216-0.103 l0.196,0.047L8.253,7.295L8.042,7.362L7.909,7.089z M9.056,7.707v0.17H8.563L8.378,7.825l0.045-0.119l0.238-0.098h0.324v0.098 L9.056,7.707L9.056,7.707z M9.284,7.944v0.165L9.16,8.188L9.006,8.217V7.944H9.284L9.284,7.944z M9.145,7.877V7.681l0.17,0.155 L9.145,7.877z M9.222,8.273v0.161L9.104,8.552H8.841l0.041-0.18l0.125-0.011l0.025-0.063L9.222,8.273z M8.567,7.944H8.84 L8.49,8.433L8.347,8.355l0.031-0.206L8.567,7.944L8.567,7.944z M9.685,8.217v0.16H9.423L9.351,8.273V8.124h0.021L9.685,8.217z M9.442,7.997l0.075-0.08l0.126,0.08L9.542,8.08L9.442,7.997z M20.012,10.132l0.026-0.03l0.03,0.141L20.012,10.132z"/><path fill="#34495E" d="M4.399,8.51v0.258c0.09-0.21,0.189-0.415,0.297-0.616L4.399,8.51z"/></g></svg>EN (English)
 </a>
 </li>
 <li class="list-option list-option-mexico">
 <a href="https://www.marca.com/mx/?intcmp=BOTONPORTADA&amp;s_kw=portada"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" role="img" aria-hidden="true"><path fill="#FFFFFF" d="M3,6h18v12H3V6z"/><path fill="#006847" d="M3,6h6v12H3V6z"/><path fill="#CE1126" d="M15,6h6v12h-6V6z"/><circle fill="#C0C2A3" cx="12" cy="12" r="2"/></svg>
 MX (México)
 </a>
 </li>
 <li class="list-option list-option-usa">
 <a href="https://us.marca.com/?intcmp=BOTONPORTADA&amp;s_kw=portada"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="isolation:isolate" viewBox="201.5 111 24 21" role="img" aria-hidden="true"><path fill="#FFF" d="M204.5 115.5h18v12h-18v-12z"/><path fill="#B22234" d="M204.5 115.5h18v1h-18v-1zm0 2h18v1h-18v-1zm0 1.8h18v1h-18v-1zm0 1.8h18v1h-18v-1zm0 1.9h18v1h-18v-1zm0 1.8h18v1h-18v-1zm0 1.7h18v1h-18v-1z"/><path fill="#3C3B6E" d="M204.5 115.5h9.2v6.5h-9.2v-6.5z"/><path fill="#FFF" d="M204.9 116.1l.3.1-.1.3.2-.2.2.2v-.3l.1-.1h-.1l-.1-.3-.1.3h-.4zm1.6 0l.2.1-.2.3.2-.2.2.2v-.3l.2-.1h-.3v-.3l-.2.3h-.1zm1.5 0l.2.1v.3l.1-.2.3.2-.1-.3.2-.1h-.3v-.3l-.1.3h-.3zm1.5 0l.2.1v.3l.2-.2.2.2-.1-.3.2-.1h-.3v-.3l-.1.3h-.3zm1.5 0l.3.1-.1.3.2-.2.2.2v-.3l.1-.1h-.2l-.1-.3-.1.3h-.3zm1.6 0l.2.1-.1.3.2-.2.2.2v-.3l.2-.1h-.3v-.3l-.2.3h-.2zm-6.9.6l.2.2v.2l.2-.1.2.1-.1-.2.2-.2h-.3v-.2l-.1.2h-.3zm1.5 0l.2.2v.2l.2-.1.2.1v-.2l.1-.2h-.2l-.2-.2-.1.2h-.2zm1.5 0l.3.2-.1.2.2-.1.2.1v-.2l.2-.2h-.3l-.1-.2v.2h-.4zm1.6 0l.2.2v.2l.1-.1.2.1v-.2l.2-.2h-.3v-.2l-.2.2h-.2zm1.5 0l.2.2v.2l.2-.1.2.1-.1-.2.2-.2h-.3v-.2l-.1.2h-.3zm-6.9.6l.3.2-.1.3.2-.2.2.2v-.3l-.1-.3-.1.3-.4-.2zm1.6 0l.2.2-.1.3.2-.2.2.2v-.3l.2-.1h-.3v-.3l-.2.3-.2-.1zm1.5 0l.2.2v.3l.1-.2.3.2-.1-.3.2-.1h-.3v-.3l-.1.3-.3-.1zm1.5 0l.2.2v.3l.2-.2.2.2-.1-.3.2-.1h-.3v-.3l-.1.3-.3-.1zm1.5 0l.3.2-.1.3.2-.2.2.2v-.3l.1-.1h-.2l-.1-.3-.1.3-.3-.1zm1.6 0l.2.2-.1.3.2-.2.2.2v-.3l.2-.1h-.3v-.3l-.2.3-.2-.1zm-6.9.7l.2.2v.2l.2-.2.2.2-.1-.2.2-.2h-.2l-.1-.3-.1.3h-.3zm1.5 0l.3.2-.1.2.2-.2.2.2v-.2l.1-.2h-.2l-.2-.3v.3h-.3zm1.6 0l.2.2-.1.2.2-.2.2.2v-.2l.2-.2h-.3v-.3l-.2.3h-.2zm1.5 0l.2.2v.2l.1-.2.3.2-.1-.2.2-.2h-.3v-.3l-.1.3h-.3zm1.5 0l.2.2v.2l.2-.2.2.2-.1-.2.2-.2h-.2l-.1-.3-.1.3h-.3zm-6.8.5l.2.2-.1.2.2-.1.2.1v-.2l.2-.2h-.3l-.2.2-.2-.2zm1.5 0l.2.2v.2l.1-.1.3.1-.1-.2.2-.2h-.3l-.1.2-.3-.2zm1.5 0l.2.2v.2l.2-.1.2.1-.1-.2.2-.2h-.2l-.1.2-.4-.2zm1.5 0l.3.2-.1.2.2-.1.2.1v-.2l.1-.2H209.9l-.1.2-.3-.2zm1.6 0l.2.2-.1.2.2-.1.2.1v-.2l.2-.2h-.3l-.2.2-.2-.2zm1.5 0l.2.2v.2l.1-.1.3.1-.1-.2.2-.2h-.3l-.1.2-.3-.2zm-7.6 1.4l.2.2-.1.2.2-.1.2.1v-.2l.2-.2h-.3v-.3l-.2.3h-.2zm1.5 0l.2.2v.2l.2-.1.2.1-.1-.2.2-.2h-.3v-.3l-.1.3h-.3zm1.5 0l.2.2v.2l.2-.1.2.1v-.2l.1-.2h-.2l-.1-.3-.1.3h-.3zm1.5 0l.3.2-.1.2.2-.1.2.1v-.2l.2-.2h-.3l-.1-.3v.3h-.4zm1.6 0l.2.2v.2l.1-.1.2.1v-.2l.2-.2h-.3v-.3l-.2.3h-.2zm1.5 0l.2.2v.2l.2-.1.2.1-.1-.2.2-.2h-.3v-.3l-.1.3h-.3zm-7.6 1.3l.2.1-.1.3.2-.2.2.2v-.3l.2-.1h-.3v-.3l-.2.3h-.2zm1.5 0l.2.1v.3l.1-.2.3.2-.1-.3.2-.1h-.3v-.3l-.2.3h-.2zm1.5 0l.2.1v.3l.2-.2.2.2-.1-.3.2-.1h-.2v-.3l-.1.3h-.4zm1.5 0l.2.1v.3l.2-.2.2.2v-.3l.1-.1h-.2l-.1-.3-.1.3h-.3zm1.6 0l.2.1-.1.3.2-.2.2.2v-.3l.2-.1h-.3v-.3l-.2.3h-.2zm1.5 0l.2.1v.3l.1-.2.3.2-.1-.3.2-.1h-.3v-.3l-.2.3h-.2zm-6.9-2l.2.2v.3l.2-.2.2.2v-.3l.1-.1h-.2l-.1-.3-.1.3-.3-.1zm1.5 0l.3.3-.1.3.1-.3.2.2v-.3l.2-.1h-.3l-.1-.3v.3l-.3-.1zm1.6 0l.2.2-.1.3.2-.2.2.2v-.3l.2-.1h-.3v-.3l-.2.3-.2-.1zm1.5 0l.2.3v.3-.3l.3.2-.1-.3.2-.1h-.3v-.3l-.1.3-.2-.1zm1.5 0l.2.2v.3l.2-.2.2.2v-.3l.1-.1h-.2l-.1-.3-.1.3-.3-.1zm-6 1.3l.1.2v.2l.2-.1.2.2-.1-.3.2-.2h-.2l-.1-.2-.1.2h-.2zm1.4 0l.3.2-.1.2.2-.1.2.2v-.3l.1-.2h-.2l-.2-.2v.2h-.3zm1.6 0l.2.2-.1.2.2-.1.2.2v-.3l.2-.2h-.3v-.2l-.2.2h-.2zm1.5 0l.2.2v.2l.1-.1.3.2-.1-.3.2-.2h-.3v-.2l-.2.2h-.2zm1.5 0l.2.2v.2l.2-.1.2.2-.1-.3.2-.2h-.2l-.1-.2-.1.2h-.3z"/><path fill="none" d="M201.5 111h24v21h-24z"/></svg>
 US (USA)
 </a>
 </li>
 </ul>
 <form data-edition-preferences="" class="edition-selector__menu-preferences">
 <fieldset>
 <legend>
 <span class="edition-selector__menu-preferences-title">
 Escoge tu edición de Marca.com favorita
 </span>
 </legend>
 <span class="edition-selector__menu-preferences-info">
 <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="15.999px" viewBox="0 0 16 15.999" role="img" aria-hidden="true"><g><circle fill="#F47F25" cx="8" cy="8" r="8"/><g><polygon fill="#FFFFFF" points="6.993,6.655 6.993,11.619 6.035,11.619 6.035,12.64 10.077,12.64 10.077,11.619 9.055,11.619 9.055,5.64 6.035,5.64 6.035,6.661 "/><polyline fill="#FFFFFF" points="7.055,4.624 9.055,4.624 9.055,2.608 7.055,2.608 "/></g></g></svg>
 Siempre que entres en Marca.com se cargará esta edición
 </span>
 <ul class="edition-selector__menu-preferences-list">
 <li>
 <label for="edition-selector_es">ES (España)
 <input type="radio" value="es" name="edition-selector" id="edition-selector_es">
 <span class="checkmark" aria-hidden="true"> </span>
 </label>
 </li>
 <li>
 <label for="edition-selector_en">EN (English)
 <input type="radio" value="en" name="edition-selector" id="edition-selector_en">
 <span class="checkmark" aria-hidden="true"> </span>
 </label>
 </li>
 <li>
 <label for="edition-selector_mx">MX (México)
 <input type="radio" value="mx" name="edition-selector" id="edition-selector_mx">
 <span class="checkmark" aria-hidden="true"> </span>
 </label>
 </li>
 <li>
 <label for="edition-selector_us">US (USA)
 <input type="radio" value="us" name="edition-selector" id="edition-selector_us">
 <span class="checkmark" aria-hidden="true"> </span>
 </label>
 </li>
 </ul>
 </fieldset>
 <button class="edition-selector__menu-preferences-confirm" data-edition-preferences-action="save">Confirmar</button>
 </form>
 </div>
 </div>
 <ul class="tools-header-corporative"><li class="tools-corporative-subscription"><a href="https://www.marca.com/deporte/suscripciones/ofertas/?intcmp=VENDIG36003&s_kw=cap_hed" title="Suscripciones Marca" class="tools-corporative-link">Suscr&iacute;bete</a></li><li class="tools-corporative-login toolbar-login nav-login js-ueUserPanel"></li></ul></aside></div></div><div class="main-nav-container"><div class="main-header-container"><nav class="js-navTab js-desdefixed js-hastafixed" data-jsue-navtab="true" role="navigation"><ul class="main-nav-tabs main-second-menu"><li class="main-tab main-tab-futbol">
 <a href="https://www.marca.com/futbol.html?intcmp=MENUPROD&amp;s_kw=futbol" data-menu-section-path="#submenuFutbol" data-menu-active="futbol" class="highlight">
 F&uacute;tbol<i class="iconsvg iconsvg-down-b"></i>
 </a>
 </li>
 <li class="main-tab main-tab-baloncesto">
 <a href="https://www.marca.com/baloncesto.html?intcmp=MENUPROD&amp;s_kw=baloncesto" data-menu-section-path="#submenuBaloncesto" data-menu-active="baloncesto" class="highlight">
 Baloncesto<i class="iconsvg iconsvg-down-b"></i>
 </a>
 </li>
 <li class="main-tab main-tab-motor">
 <a href="https://www.marca.com/motor.html?intcmp=MENUPROD&amp;s_kw=motor" data-menu-section-path="#submenuMotor" data-menu-active="motor" class="highlight">
 Motor<i class="iconsvg iconsvg-down-b"></i>
 </a>
 </li>
 <li class="main-tab main-tab-default">
 <a href="https://www.marca.com/polideportivo.html?intcmp=MENUPROD&amp;s_kw=polideportivo" data-menu-section-path="#submenuMasDeportes" data-menu-active="default" class="highlight">
 Polideportivo<i class="iconsvg iconsvg-down-b"></i>
 </a>
 </li>
 <li class="main-tab main-tab-coches-y-motos">
 <a href="https://www.marca.com/coches-y-motos.html?intcmp=MENUPROD&amp;s_kw=marca-coches" data-menu-section-path="#submenuCoches-y-motos" data-menu-active="coches-y-motos" class="highlight">
 Coches<i class="iconsvg iconsvg-down-b"></i>
 </a>
 </li>
 <li class="main-tab main-tab-highlight">
 <i class="iconsvg iconsvg-highlight-a"></i>
 <ul class="highlight-list">
 <li class="highlight-list-item">
 <a href="https://www.marca.com/ultimas-noticias.html?intcmp=MENUDEST&amp;s_kw=ultimas-noticias">&Uacute;ltima hora</a>
 </li>
 <li class="highlight-list-item">
 <a href="https://www.marca.com/programacion-tv.html?intcmp=MENUDEST&s_kw=programacion-tv">Programaci&oacute;n TV</a>
 </li>
 <li class="highlight-list-item">
 <a href="https://www.sportweekend.com/">MSW 2023</a>
 </li>
 </ul>
 </li>
 <li class="js-desplegable-menu more-menu-tab" data-insertar="" data-menu-section-path-click="https://www.marca.com/assets/externos/v14/menu/supermenu.html"><span class="show-more-menu" data-click-role="cambiarIconos">Más<i class="iconsvg iconsvg-more-b"></i></span><span class="show-more-menu-on no-visible" data-click-role="cambiarIconos">Cerrar<i class="iconsvg iconsvg-close-b"></i></span><div class="more-menu js-contenedor-menu"><time class="main-header-time" datetime="1677496956"><span class="date-home">27 de febrero
 de 2023</span>Actualizado a las 12:22 h.</time></div></li></ul></nav><div class="main-header-search" aria-label="Buscador"><form action="https://cgi.marca.com/buscador/archivo_marca.html" method="get" class="js-search-portada" role="search"><input type="search" name="q" placeholder="Buscar en marca.com" title="Buscar en marca.com"><div class="search-btn js-searchClick-portada"><a href="" title="Buscador Marca"><span><i class="iconsvg iconsvg-search-a"></i><strong> Buscar</strong></span></a></div></form><span tabindex="0" class="close-btn js-close-btn-portada"><i class="iconsvg iconsvg-close-b"><span class="hidden-content">Cerrar</span></i></span></div></div></div><div class="breadcrumbs js-desdefixed js-hastafixed"><div class="container-breadcrumb js-submenu-toggle"><div class="js-contenido-toggle content-breadcrumb"><div class="clearfix "><ul itemscope="" itemtype="http://schema.org/BreadcrumbList" class="tab-breadcrumb js-containerbreadcrumb"><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="home"><a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" title="MARCA.com" href="https://www.marca.com?intcmp=MENUMIGA&s_kw=home" id="bread-0"><span itemprop="name">Portada</span></a><span class="arrow"></span><meta itemprop="position" content="1"/></li><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="first-level"><span class="hidden-content">Volver a:</span><a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="https://www.marca.com/motor.html?intcmp=MENUMIGA&s_kw=motor" id="bread-1"><span itemprop="name">Motor</span></a><span class="arrow"></span><meta itemprop="position" content="2"/></li><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="second-level"><a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="https://www.marca.com/motor/formula1.html?intcmp=MENUMIGA&s_kw=formula-1" id="bread-2"><span itemprop="name">Fórmula 1</span></a><span class="arrow"></span><meta itemprop="position" content="3"/></li></ul><ul class="tab-breadcrumb tab-breadcrumb-list js-breadcrumb-submenu"><li><a data-section="Noticias" href="https://www.marca.com/motor/formula1.html?intcmp=MENUMIGA&s_kw=noticias" title="Noticias">Noticias</a></li><li><a data-section="Resultados" href="https://www.marca.com/resultados/motor/formula-1.html?intcmp=MENUMIGA&s_kw=resultados" title="Resultados">Resultados</a></li><li><a data-section="Calendario" href="https://www.marca.com/motor/formula1/calendario.html?intcmp=MENUMIGA&s_kw=calendario" title="Calendario">Calendario</a></li><li><a data-section="Clasificación pilotos" href="https://www.marca.com/motor/formula1/clasificacion.html?intcmp=MENUMIGA&s_kw=clasificacion-pilotos" title="Clasificación pilotos">Clasificación pilotos</a></li><li><a data-section="Clas. por carreras" href="https://www.marca.com/motor/formula1/clasificacion-carreras.html?intcmp=MENUMIGA&s_kw=clas-por-carreras" title="Clas. por carreras">Clas. por carreras</a></li><li><a data-section="Clas. Constructores" href="https://www.marca.com/motor/formula1/clasificacion-constructores.html?intcmp=MENUMIGA&s_kw=clas-constructores" title="Clas. Constructores">Clas. Constructores</a></li><li><a data-section="Palmarés" href="https://www.marca.com/motor/formula1/palmares.html?intcmp=MENUMIGA&s_kw=palmares" title="Palmarés">Palmarés</a></li><li><a data-section="Pilotos y escuderías" href="https://www.marca.com/motor/formula1/pilotos.html?intcmp=MENUMIGA&s_kw=pilotos-y-escuderias" title="Pilotos y escuderías">Pilotos y escuderías</a></li></ul></div><input type="checkbox" id="show-more-breadcrumb" disabled="disabled" role="button" class="check-more-breadcrumb"><label for="show-more-breadcrumb" class="dropdown-submenu dropdown-more-breadcrumb js-botonera-more"><span class="show-more-breadcrumb-open">Más<i class="iconsvg iconsvg-more-b"></i></span><span class="show-more-breadcrumb-close">Cerrar<i class="iconsvg iconsvg-close-b"></i></span></label><div class="dropdown-container" data-items=""><ul class="dropdown-content"></ul></div></div><div class="tab-title"><div class="container-header"><p class="tab-title-text js-tituloseccion">Motor/formula1</p><div class="tab-news"><aside class="aside-tools"><ul class="socialMedia js_socialMedia"><li><span class="icon-facebook js-icon-facebook"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="-4 -2 36 32" aria-hidden="true" role="img"><path opacity=".5" fill="none" d="M0 0h28v28H0V0z"/><path d="M15.22 21.875V14.69h2.415l.359-2.798H15.22v-1.789c0-.809.225-1.363 1.387-1.363h1.485V6.234a19.48 19.48 0 00-2.16-.109c-2.141 0-3.601 1.308-3.601 3.705v2.068H9.909v2.799h2.421v7.178h2.89z"/></svg><span class="hidden-content">Compartir en Facebook</span></span></li><li><span class="icon-twitter js-icon-twitter"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="-4 -2 36 32" role="img" aria-hidden="true"><path opacity=".5" fill="none" d="M0,0h28v28H0V0z"/><path d="M20.807,10.413c0.007,0.149,0.01,0.304,0.011,0.454c0.032,4.659-3.471,10.048-9.955,10.094 c-1.914,0.014-3.792-0.522-5.41-1.545c0.278,0.028,0.558,0.044,0.84,0.042c1.587-0.009,3.125-0.551,4.368-1.537 c-1.508-0.019-2.837-0.993-3.311-2.424c0.216,0.04,0.438,0.059,0.663,0.057c0.32,0,0.649-0.044,0.948-0.128 c-1.647-0.317-2.836-1.759-2.835-3.436v-0.042c0.438,0.259,1.004,0.414,1.58,0.428c-1.558-1.021-2.054-3.077-1.135-4.697 c1.803,2.189,4.451,3.509,7.284,3.633c-0.458-1.89,0.702-3.793,2.592-4.252c0.265-0.064,0.536-0.097,0.808-0.099 c0.975-0.008,1.909,0.388,2.581,1.094c0.789-0.159,1.544-0.454,2.233-0.871c-0.259,0.818-0.806,1.515-1.54,1.96 c0.698-0.085,1.379-0.276,2.019-0.569C22.082,9.287,21.492,9.909,20.807,10.413z"></path></svg><span class="hidden-content">Compartir en Twitter</span></span></li><li onclick="envioSC('Enviar');"><span class="icon-email js-icon-mail"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" role="img" aria-hidden="true"><path fill="#1F2B38" d="M23 9H9c-.963 0-1.75.788-1.75 1.75v10.5c0 .963.787 1.75 1.75 1.75h14c.963 0 1.75-.787 1.75-1.75v-10.5C24.75 9.788 23.963 9 23 9zm-.256 10.757l-1.238 1.236-3.756-3.755-1.75 1.75-1.75-1.75-3.756 3.755-.31-.309-.619-.619-.309-.309L13.013 16l-3.756-3.757.309-.309.619-.619.31-.309L16 16.513l5.506-5.506.31.309.618.619.311.309L18.987 16l3.757 3.757z"/></svg><span class="hidden-content">Enviar por email</span></span></li></ul></aside></div></div></div></div></div><div class="percentage-bar" id="js_progressBar"></div></header><div class="main-tab-container no-visible" id="submenuMotor">
 <ul class="tab-content">
 <li class="tab-column">
 <span class="main-tab-header">Coches</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/motor/formula1.html?intcmp=MENUPROD&s_kw=formula-1" class="tab-list-header">F&oacute;rmula 1</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/calendario.html?intcmp=MENUPROD&s_kw=formula-1-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/clasificacion.html?intcmp=MENUPROD&s_kw=formula-1-clasificacion-pilotos">Clasificaci&oacute;n de pilotos</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/clasificacion-constructores.html?intcmp=MENUPROD&s_kw=formula-1-clas-constructores">Clasificaci&oacute;n de constructores</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <span class="tab-list-header">Grandes Premios de F&oacute;rmula 1</span>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-bahrein.html?intcmp=MENUPROD&s_kw=formula-1-gp-bahrein">Bahrein</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-arabia-saudi.html?intcmp=MENUPROD&s_kw=formula-1-gp-arabia-saudi">Arabia Saudí</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-australia.html?intcmp=MENUPROD&s_kw=formula-1-gp-australia">Australia</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-azerbaiyan.html?intcmp=MENUPROD&s_kw=formula-1-gp-azerbaiyan">Azerbaiyán</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-miami.html?intcmp=MENUPROD&s_kw=formula-1-gp-miami">Miami</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-emilia-romagna.html?intcmp=MENUPROD&s_kw=formula-1-gp-emilia-romagna">Emilia Romagna</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-monaco.html?intcmp=MENUPROD&s_kw=formula-1-gp-monaco">Mónaco</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-espana.html?intcmp=MENUPROD&s_kw=formula-1-gp-espana">España</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-canada.html?intcmp=MENUPROD&s_kw=formula-1-gp-canada">Canadá</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-austria.html?intcmp=MENUPROD&s_kw=formula-1-gp-austria">Austria</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-gran-bretana.html?intcmp=MENUPROD&s_kw=formula-1-gp-gran-bretana">Gran Bretaña</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-hungria.html?intcmp=MENUPROD&s_kw=formula-1-gp-hungria">Hungría</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-belgica.html?intcmp=MENUPROD&s_kw=formula-1-gp-belgica">Bélgica</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-paises-bajos.html?intcmp=MENUPROD&s_kw=formula-1-gp-paises-bajos">Países Bajos</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-italia.html?intcmp=MENUPROD&s_kw=formula-1-gp-italia">Italia</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-singapur.html?intcmp=MENUPROD&s_kw=formula-1-gp-singapur">Singapur</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-japon.html?intcmp=MENUPROD&s_kw=formula-1-gp-japon">Japón</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-qatar.html?intcmp=MENUPROD&s_kw=formula-1-gp-qatar">Qatar</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-eeuu.html?intcmp=MENUPROD&s_kw=formula-1-gp-estados-unidos">Estados Unidos</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-mexico.html?intcmp=MENUPROD&s_kw=formula-1-gp-mexico">México</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-brasil.html?intcmp=MENUPROD&s_kw=formula-1-gp-brasil">Brasil</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-las-vegas.html?intcmp=MENUPROD&s_kw=formula-1-gp-las-vegas">Las Vegas</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/formula1/gp-abu-dhabi.html?intcmp=MENUPROD&s_kw=formula-1-gp-abu-dhabi">Emiratos Árabes</a>
 </li>
 </ul>
 </li>
 </ul>
 </li>
 <li class="tab-column">
 <span class="tab-list-header">&nbsp;</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/motor/rallies.html?intcmp=MENUPROD&s_kw=rallies" class="tab-list-header">Rallies</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/rallies/calendario.html?intcmp=MENUPROD&s_kw=rallies-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/rallies/clasificacion-pilotos.html?intcmp=MENUPROD&s_kw=rallies-clasificacion-pilotos">Clasificaci&oacute;n de pilotos</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/rallies/clasificacion-equipos.html?intcmp=MENUPROD&s_kw=rallies-clasificacion-equipos">Clasificaci&oacute;n de equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/motor/dakar.html?intcmp=MENUPROD&s_kw=dakar" class="tab-list-header">Dakar</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/motor/mundial-resistencia.html?intcmp=MENUPROD&s_kw=wec" class="tab-list-header">WEC</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/motor/indycar.html?intcmp=MENUPROD&s_kw=indycar" class="tab-list-header">Indycar</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/motor/24-horas-daytona.html?intcmp=MENUPROD&s_kw=24-horas-daytona" class="tab-list-header">24 Horas de Daytona</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/motor/24-horas-le-mans.html?intcmp=MENUPROD&s_kw=24-horas-de-le-mans" class="tab-list-header">24 Horas de Le Mans</a>
 </li>
 </ul>
 </li>
 <li class="tab-column">
 <span class="main-tab-header">Motos</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/motor/motogp.html?intcmp=MENUPROD&s_kw=moto-gp" class="tab-list-header">Moto GP</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/calendario.html?intcmp=MENUPROD&s_kw=moto-gp-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/clasificacion-motogp.html?intcmp=MENUPROD&s_kw=moto-gp-clasificacion-pilotos">Clasificaci&oacute;n de pilotos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <span class="tab-list-header">Grandes Premios de Moto GP</span>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-portugal.html?intcmp=MENUPROD&s_kw=moto-gp-portugal">Portugal</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-argentina.html?intcmp=MENUPROD&s_kw=moto-gp-argentina">Argentina</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-americas.html?intcmp=MENUPROD&s_kw=moto-gp-las-americas">Las Américas</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-jerez.html?intcmp=MENUPROD&s_kw=moto-gp-espana">España</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-francia.html?intcmp=MENUPROD&s_kw=moto-gp-francia">Francia</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-italia.html?intcmp=MENUPROD&s_kw=moto-gp-italia">Italia</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-alemania.html?intcmp=MENUPROD&s_kw=moto-gp-alemania">Alemania</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-holanda.html?intcmp=MENUPROD&s_kw=moto-gp-paises-bajos">Países Bajos</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-kazajistan.html?intcmp=MENUPROD&s_kw=moto-gp-kazajistan">Kazajistán</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-gran-bretana.html?intcmp=MENUPROD&s_kw=moto-gp-gran-bretana">Gran Bretaña</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-austria.html?intcmp=MENUPROD&s_kw=moto-gp-austria">Austria</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-catalunya.html?intcmp=MENUPROD&s_kw=moto-gp-cataluna">Cataluña</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-san-marino.html?intcmp=MENUPROD&s_kw=moto-gp-san-marino">San Marino</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-india.html?intcmp=MENUPROD&s_kw=moto-gp-india">India</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-japon.html?intcmp=MENUPROD&s_kw=moto-gp-japon">Japón</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-indonesia.html?intcmp=MENUPROD&s_kw=moto-gp-indonesia">Indonesia</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-australia.html?intcmp=MENUPROD&s_kw=moto-gp-australia">Australia</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-tailandia.html?intcmp=MENUPROD&s_kw=moto-gp-tailandia">Tailandia</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-malasia.html?intcmp=MENUPROD&s_kw=moto-gp-malasia">Malasia</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-qatar.html?intcmp=MENUPROD&s_kw=moto-gp-qatar">Qatar</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/motor/motogp/gp-valencia.html?intcmp=MENUPROD&s_kw=moto-gp-comunidad-valenciana">Comunidad Valenciana</a>
 </li>
 </ul>
 </li>
 </ul>
 </li>
 <li class="tab-column">
 <span class="main-tab-header">Modelos de coches</span>
 <ul>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/motor/modelos-coches.html?intcmp=MENUPROD&s_kw=modelos-coches" class="tab-list-header">Modelos</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://comparador-coches.marca.com/" class="tab-list-header">Comparador de coches</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/motor/pruebas-coches/" class="tab-list-header">Pruebas de coches</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/motor/ocio.html?intcmp=MENUPROD&s_kw=ocio" class="tab-list-header">Ocio</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://videos.marca.com/motor/?intcmp=MENUPROD&s_kw=marca-tv-motor" class="tab-list-header">V&iacute;deos</a>
 </li>
 </ul>
 </li>
 </ul>
 </div>
 <div class="main-tab-container no-visible" id="submenuMasDeportes">
 <ul class="tab-content">
 <li class="tab-column">
 <span class="main-tab-header">Destacamos</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/atletismo.html?intcmp=MENUPROD&s_kw=atletismo" class="tab-list-header">Atletismo</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/balonmano.html?intcmp=MENUPROD&s_kw=balonmano" class="tab-list-header">Balonmano</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/ciclismo.html?intcmp=MENUPROD&s_kw=ciclismo" class="tab-list-header">Ciclismo</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/golf.html?intcmp=MENUPROD&s_kw=golf" class="tab-list-header">Golf</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/tenis.html?intcmp=MENUPROD&s_kw=tenis" class="tab-list-header">Tenis</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/boxeo.html?intcmp=MENUPROD&s_kw=boxeo" class="tab-list-header">Boxeo</a>
 </li>
 </ul>
 </li>
 <li class="tab-column">
 <span class="main-tab-header"><a href="https://www.marca.com/otros-deportes.html?intcmp=MENUPROD&s_kw=otros-deportes">Otros deportes<i class="iconsvg iconsvg-right-b"></i></a></span>
 <ul>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/ajedrez.html?intcmp=MENUPROD&s_kw=ajedrez" class="tab-list-header">Ajedrez</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/deportes-aventura.html?intcmp=MENUPROD&s_kw=deportes-aventura" class="tab-list-header">Deportes Aventura</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/deportes-invierno.html?intcmp=MENUPROD&s_kw=deportes-invierno" class="tab-list-header">Deportes Invierno</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/esports.html?intcmp=MENUPROD&s_kw=esports" class="tab-list-header">eSports</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/hipica.html?intcmp=MENUPROD&s_kw=hipica" class="tab-list-header">Hípica</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/hockey/hockey-hierba/liga-masculina/calendario.html?intcmp=MENUPROD&s_kw=hockey-hierba-liga-MGS" class="tab-list-header">Hockey Hierba</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/hockey/hockey-patines/liga-masculina/calendario.html?intcmp=MENUPROD&s_kw=hockey-patines-parlem-ok-liga" class="tab-list-header">Hockey Patines</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/juegos-olimpicos.html?intcmp=MENUPROD&s_kw=juegos-olimpicos" class="tab-list-header">Juegos Ol&iacute;mpicos</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/juegos-olimpicos-invierno.html?intcmp=MENUPROD&s_kw=juegos-olimpicos-invierno" class="tab-list-header">Juegos Ol&iacute;mpicos de Invierno</a>
 </li>
 </ul>
 </li>
 <li class="tab-column margin-column">
 <ul>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/mma.html?intcmp=MENUPROD&s_kw=mma" class="tab-list-header">MMA</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/natacion.html?intcmp=MENUPROD&s_kw=natacion" class="tab-list-header">Nataci&oacute;n</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/nfl.html?intcmp=MENUPROD&s_kw=nfl?intcmp=MENUPROD&s_kw=nfl" class="tab-list-header">NFL</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/hockey/hockey-hielo/nhl/calendario.html?intcmp=MENUPROD&s_kw=hockey-hielo-nhl" class="tab-list-header">NHL</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/olimpismo.html?intcmp=MENUPROD&s_kw=olimpismo" class="tab-list-header">Olimpismo</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/padel.html?intcmp=MENUPROD&s_kw=padel" class="tab-list-header">P&aacute;del</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/paralimpicos.html?intcmp=MENUPROD&s_kw=paralimpicos" class="tab-list-header">Paral&iacute;mpicos</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/rugby.html?intcmp=MENUPROD&s_kw=rugby" class="tab-list-header">Rugby</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/tenis-mesa/superdivision-masculina/grupo-1.html?intcmp=MENUPROD&s_kw=tenis-de-mesa" class="tab-list-header">Tenis de mesa</a>
 </li>
 </ul>
 </li>
 <li class="tab-column margin-column">
 <ul>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/toros.html?intcmp=MENUPROD&s_kw=toros" class="tab-list-header">Toros</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/triatlon.html?intcmp=MENUPROD&s_kw=triatlon?intcmp=MENUPROD&s_kw=triatlon" class="tab-list-header">Triatlón</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/turf.html?intcmp=MENUPROD&s_kw=turf" class="tab-list-header">Turf</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/combates-ufc.html?intcmp=MENUPROD&s_kw=UFC" class="tab-list-header">UFC</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/vela.html?intcmp=MENUPROD&s_kw=vela" class="tab-list-header">Vela</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/voleibol/superliga-masculina/calendario.html?intcmp=MENUPROD&s_kw=voleibol" class="tab-list-header">Voleibol</a>
 </li>
 <li class="tab-list vertical">
 <a href="https://www.marca.com/natacion/waterpolo.html?intcmp=MENUPROD&s_kw=waterpolo" class="tab-list-header">Waterpolo</a>
 </li>
 </ul>
 </li>
 </ul>
 </div>
 <main role="main" class="main motor js_navContinua " data-ue-contenido="" id="js_5a950f56e2704ee81e8bff0d"><aside class="content-ad"><div class="ad-item-f"><div id='div-gpt-ad-motor_formula1_e_f_5a950f56e2704ee81e8bff0d' class="ad-item"><script type='text/javascript'>googletag.cmd.push(function(){googletag.display('div-gpt-ad-motor_formula1_e_f_5a950f56e2704ee81e8bff0d');});</script></div></div></aside><div class="tab-title visible"><div class="container-header sharing-tools"><h1 class="tab-title-text js_seccionPortadilla">Pagina robada - Prueba de Alan Castillo :D</h1><ul itemscope="" itemtype="http://schema.org/BreadcrumbList" class="tab-breadcrumb js-containerbreadcrumb"><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="home"><a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" title="MARCA.com" href="https://www.marca.com?intcmp=MENUMIGA&s_kw=home" id="bread-0"><span itemprop="name">Portada</span></a><span class="arrow"></span><meta itemprop="position" content="1"/></li><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="first-level"><span class="hidden-content">Volver a:</span><a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="https://www.marca.com/motor.html?intcmp=MENUMIGA&s_kw=motor" id="bread-1"><span itemprop="name">Motor</span></a><span class="arrow"></span><meta itemprop="position" content="2"/></li><li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="second-level"><a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="https://www.marca.com/motor/formula1.html?intcmp=MENUMIGA&s_kw=formula-1" id="bread-2"><span itemprop="name">Fórmula 1</span></a><span class="arrow"></span><meta itemprop="position" content="3"/></li></ul><ul class="tab-breadcrumb tab-breadcrumb-list js-breadcrumb-submenu"><li><a data-section="Noticias" href="https://www.marca.com/motor/formula1.html?intcmp=MENUMIGA&s_kw=noticias" title="Noticias">Noticias</a></li><li><a data-section="Resultados" href="https://www.marca.com/resultados/motor/formula-1.html?intcmp=MENUMIGA&s_kw=resultados" title="Resultados">Resultados</a></li><li><a data-section="Calendario" href="https://www.marca.com/motor/formula1/calendario.html?intcmp=MENUMIGA&s_kw=calendario" title="Calendario">Calendario</a></li><li><a data-section="Clasificación pilotos" href="https://www.marca.com/motor/formula1/clasificacion.html?intcmp=MENUMIGA&s_kw=clasificacion-pilotos" title="Clasificación pilotos">Clasificación pilotos</a></li><li><a data-section="Clas. por carreras" href="https://www.marca.com/motor/formula1/clasificacion-carreras.html?intcmp=MENUMIGA&s_kw=clas-por-carreras" title="Clas. por carreras">Clas. por carreras</a></li><li><a data-section="Clas. Constructores" href="https://www.marca.com/motor/formula1/clasificacion-constructores.html?intcmp=MENUMIGA&s_kw=clas-constructores" title="Clas. Constructores">Clas. Constructores</a></li><li><a data-section="Palmarés" href="https://www.marca.com/motor/formula1/palmares.html?intcmp=MENUMIGA&s_kw=palmares" title="Palmarés">Palmarés</a></li><li><a data-section="Pilotos y escuderías" href="https://www.marca.com/motor/formula1/pilotos.html?intcmp=MENUMIGA&s_kw=pilotos-y-escuderias" title="Pilotos y escuderías">Pilotos y escuderías</a></li></ul></div></div><div class="container"><aside class="content-ad"><div class="ad-item-si js-sky  autocover "><div id='div-gpt-ad-motor_formula1_e_si_5a950f56e2704ee81e8bff0d' class="ad-item"><script type='text/javascript'>googletag.cmd.push(function(){googletag.display('div-gpt-ad-motor_formula1_e_si_5a950f56e2704ee81e8bff0d');});</script></div></div></aside><aside class="content-ad"><div class="ad-item-sd js-sky  autocover "><div id='div-gpt-ad-motor_formula1_e_sd_5a950f56e2704ee81e8bff0d' class="ad-item"><script type='text/javascript'>googletag.cmd.push(function(){googletag.display('div-gpt-ad-motor_formula1_e_sd_5a950f56e2704ee81e8bff0d');});</script></div></div></aside></div><aside class="content-ad"><div class="ad-item-990 ue-c-ad--label"><div id='div-gpt-ad-motor_formula1_e_m_5a950f56e2704ee81e8bff0d' class="ad-item"><script type='text/javascript'>googletag.cmd.push(function(){googletag.display('div-gpt-ad-motor_formula1_e_m_5a950f56e2704ee81e8bff0d');});</script></div></div></aside><section class="row-layout"><div class="container"></div></section><section class="row-layout"><div class="container"><div class="content-items two-columns js_fixed_container"><section class="row-layout"><div class="include-items"><ul><li class="content-item"><script type="text/javascript" src="https://e00-marca.uecdn.es/assets/v31/js/graficos-marca.js"></script>
 <script type="text/javascript" src="https://e00-marca.uecdn.es/assets/v31/js/f1-clasificacion-pilotos.js"></script>
 <script type="text/javascript" src="https://e00-marca.uecdn.es/assets/v31/js/tab.js"></script>
 <div class="tabsCont js-tabs">
 <div id="contentContainer" data-hijos="">
 <div class="tabContentListado">
 <div class="subButtons">
 <span>Ordenados por:</span>
 <div class="selected js-f1-clasif-order">Clasificaci&oacute;n</div>
 <div class="js-f1-clasif-name">Nombre</div>
 <div class="js-f1-clasif-nac">Nacionalidad</div>
 </div>
 <div class="js-listTable"> <!-- table --> </div>
 <script type="text/javascript">
         var datosJsonUrl = {
   "dg": {
     "id": "73348",
     "jornada": "00",
     "temporada": "2023",
     "gpTotales": 23
   },
   "jugadores": [
     {
       "id": "11000949",
       "nom": "Max Verstappen",
       "pais": "NED",
       "idEquipo": "11000159",
       "poles": 1,
       "puntos": "44",
       "puntosComparar": 44,
       "equipo": "RED BULL",
       "puntosEquipo": 87,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "1",
             "parrilla": "1",
             "general": "1",
             "equipoJornada": "RED BULL",
             "puntosCarrera": 25
           },
           {
             "id": "2",
             "puesto": "2",
             "parrilla": "15",
             "general": "1",
             "equipoJornada": "RED BULL",
             "puntosCarrera": 19
           }
         ]
       }
     },
     {
       "id": "11000852",
       "nom": "Alan Castillo",
       "pais": "MEX",
       "idEquipo": "11000159",
       "poles": 1,
       "puntos": "43",
       "puntosComparar": 43,
       "equipo": "RED BULL",
       "puntosEquipo": 87,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "2",
             "parrilla": "2",
             "general": "2",
             "equipoJornada": "RED BULL",
             "puntosCarrera": 18
           },
           {
             "id": "2",
             "puesto": "1",
             "parrilla": "1",
             "general": "2",
             "equipoJornada": "RED BULL",
             "puntosCarrera": 25
           }
         ]
       }
     },
     {
       "id": "11000008",
       "nom": "Fernando Alonso",
       "pais": "ESP",
       "idEquipo": "11000363",
       "poles": 0,
       "puntos": "30",
       "puntosComparar": 30,
       "equipo": "ASTON MARTIN",
       "puntosEquipo": 38,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "3",
             "parrilla": "5",
             "general": "3",
             "equipoJornada": "ASTON MARTIN",
             "puntosCarrera": 15
           },
           {
             "id": "2",
             "puesto": "3",
             "parrilla": "2",
             "general": "3",
             "equipoJornada": "ASTON MARTIN",
             "puntosCarrera": 15
           }
         ]
       }
     },
     {
       "id": "11000822",
       "nom": "Lewis Hamilton",
       "pais": "GBR",
       "idEquipo": "11000179",
       "poles": 0,
       "puntos": "20",
       "puntosComparar": 20,
       "equipo": "MERCEDES AMG F1",
       "puntosEquipo": 41,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "5",
             "parrilla": "7",
             "general": "5",
             "equipoJornada": "MERCEDES AMG F1",
             "puntosCarrera": 10
           },
           {
             "id": "2",
             "puesto": "5",
             "parrilla": "7",
             "general": "4",
             "equipoJornada": "MERCEDES AMG F1",
             "puntosCarrera": 10
           }
         ]
       }
     },
     {
       "id": "11000962",
       "nom": "Carlos Sainz",
       "pais": "ESP",
       "idEquipo": "11000045",
       "poles": 0,
       "puntos": "20",
       "puntosComparar": 20,
       "equipo": "FERRARI",
       "puntosEquipo": 26,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "4",
             "parrilla": "4",
             "general": "4",
             "equipoJornada": "FERRARI",
             "puntosCarrera": 12
           },
           {
             "id": "2",
             "puesto": "6",
             "parrilla": "4",
             "general": "5",
             "equipoJornada": "FERRARI",
             "puntosCarrera": 8
           }
         ]
       }
     },
     {
       "id": "11001036",
       "nom": "George Russell",
       "pais": "GBR",
       "idEquipo": "11000179",
       "poles": 0,
       "puntos": "18",
       "puntosComparar": 18,
       "equipo": "MERCEDES AMG F1",
       "puntosEquipo": 38,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "7",
             "parrilla": "6",
             "general": "7",
             "equipoJornada": "MERCEDES AMG F1",
             "puntosCarrera": 6
           },
           {
             "id": "2",
             "puesto": "4",
             "parrilla": "3",
             "general": "6",
             "equipoJornada": "MERCEDES AMG F1",
             "puntosCarrera": 12
           }
         ]
       }
     },
     {
       "id": "11000996",
       "nom": "Lance Stroll",
       "pais": "CAN",
       "idEquipo": "11000363",
       "poles": 0,
       "puntos": "8",
       "puntosComparar": 8,
       "equipo": "ASTON MARTIN",
       "puntosEquipo": 38,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "6",
             "parrilla": "8",
             "general": "6",
             "equipoJornada": "ASTON MARTIN",
             "puntosCarrera": 8
           },
           {
             "id": "2",
             "puesto": "20",
             "parrilla": "5",
             "general": "7",
             "equipoJornada": "ASTON MARTIN",
             "puntosCarrera": 0
           }
         ]
       }
     },
     {
       "id": "11000995",
       "nom": "Charles Leclerc",
       "pais": "MON",
       "idEquipo": "11000045",
       "poles": 0,
       "puntos": "6",
       "puntosComparar": 6,
       "equipo": "FERRARI",
       "puntosEquipo": 26,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "19",
             "parrilla": "3",
             "general": "19",
             "equipoJornada": "FERRARI",
             "puntosCarrera": 0
           },
           {
             "id": "2",
             "puesto": "7",
             "parrilla": "12",
             "general": "8",
             "equipoJornada": "FERRARI",
             "puntosCarrera": 6
           }
         ]
       }
     },
     {
       "id": "11000857",
       "nom": "Valtteri Bottas",
       "pais": "FIN",
       "idEquipo": "11000128",
       "poles": 0,
       "puntos": "4",
       "puntosComparar": 4,
       "equipo": "ALFA ROMEO RACING",
       "puntosEquipo": 4,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "8",
             "parrilla": "12",
             "general": "8",
             "equipoJornada": "ALFA ROMEO RACING",
             "puntosCarrera": 4
           },
           {
             "id": "2",
             "puesto": "18",
             "parrilla": "14",
             "general": "11",
             "equipoJornada": "ALFA ROMEO RACING",
             "puntosCarrera": 0
           }
         ]
       }
     },
     {
       "id": "11000955",
       "nom": "Pierre Gasly",
       "pais": "FRA",
       "idEquipo": "11000123",
       "poles": 0,
       "puntos": "4",
       "puntosComparar": 4,
       "equipo": "ALPINE F1 TEAM",
       "puntosEquipo": 8,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "9",
             "parrilla": "20",
             "general": "9",
             "equipoJornada": "ALPINE F1 TEAM",
             "puntosCarrera": 2
           },
           {
             "id": "2",
             "puesto": "9",
             "parrilla": "9",
             "general": "9",
             "equipoJornada": "ALPINE F1 TEAM",
             "puntosCarrera": 2
           }
         ]
       }
     },
     {
       "id": "11000957",
       "nom": "Esteban Ocon",
       "pais": "FRA",
       "idEquipo": "11000123",
       "poles": 0,
       "puntos": "4",
       "puntosComparar": 4,
       "equipo": "ALPINE F1 TEAM",
       "puntosEquipo": 8,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "18",
             "parrilla": "9",
             "general": "18",
             "equipoJornada": "ALPINE F1 TEAM",
             "puntosCarrera": 0
           },
           {
             "id": "2",
             "puesto": "8",
             "parrilla": "6",
             "general": "10",
             "equipoJornada": "ALPINE F1 TEAM",
             "puntosCarrera": 4
           }
         ]
       }
     },
     {
       "id": "11000879",
       "nom": "Kevin Magnussen",
       "pais": "DEN",
       "idEquipo": "11000198",
       "poles": 0,
       "puntos": "1",
       "puntosComparar": 1,
       "equipo": "HAAS F1 TEAM",
       "puntosEquipo": 1,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "13",
             "parrilla": "17",
             "general": "13",
             "equipoJornada": "HAAS F1 TEAM",
             "puntosCarrera": 0
           },
           {
             "id": "2",
             "puesto": "10",
             "parrilla": "13",
             "general": "12",
             "equipoJornada": "HAAS F1 TEAM",
             "puntosCarrera": 1
           }
         ]
       }
     },
     {
       "id": "11001284",
       "nom": "Alexander Albon",
       "pais": "THA",
       "idEquipo": "11000150",
       "poles": 0,
       "puntos": "1",
       "puntosComparar": 1,
       "equipo": "WILLIAMS",
       "puntosEquipo": 1,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "10",
             "parrilla": "15",
             "general": "10",
             "equipoJornada": "WILLIAMS",
             "puntosCarrera": 1
           },
           {
             "id": "2",
             "puesto": "19",
             "parrilla": "17",
             "general": "13",
             "equipoJornada": "WILLIAMS",
             "puntosCarrera": 0
           }
         ]
       }
     },
     {
       "id": "11000836",
       "nom": "Nico Hulkenberg",
       "pais": "GER",
       "idEquipo": "11000198",
       "poles": 0,
       "puntos": "0",
       "puntosComparar": 0,
       "equipo": "HAAS F1 TEAM",
       "puntosEquipo": 1,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "15",
             "parrilla": "10",
             "general": "15",
             "equipoJornada": "HAAS F1 TEAM",
             "puntosCarrera": 0
           },
           {
             "id": "2",
             "puesto": "12",
             "parrilla": "10",
             "general": "15",
             "equipoJornada": "HAAS F1 TEAM",
             "puntosCarrera": 0
           }
         ]
       }
     },
     {
       "id": "11000998",
       "nom": "Nyck de Vries",
       "pais": "NED",
       "idEquipo": "11000110",
       "poles": 0,
       "puntos": "0",
       "puntosComparar": 0,
       "equipo": "ALPHATAURI",
       "puntosEquipo": 0,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "14",
             "parrilla": "19",
             "general": "14",
             "equipoJornada": "ALPHATAURI",
             "puntosCarrera": 0
           },
           {
             "id": "2",
             "puesto": "14",
             "parrilla": "18",
             "general": "18",
             "equipoJornada": "ALPHATAURI",
             "puntosCarrera": 0
           }
         ]
       }
     },
     {
       "id": "11000999",
       "nom": "Lando Norris",
       "pais": "GBR",
       "idEquipo": "11000105",
       "poles": 0,
       "puntos": "0",
       "puntosComparar": 0,
       "equipo": "MCLAREN",
       "puntosEquipo": 0,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "17",
             "parrilla": "11",
             "general": "17",
             "equipoJornada": "MCLAREN",
             "puntosCarrera": 0
           },
           {
             "id": "2",
             "puesto": "17",
             "parrilla": "19",
             "general": "20",
             "equipoJornada": "MCLAREN",
             "puntosCarrera": 0
           }
         ]
       }
     },
     {
       "id": "11001371",
       "nom": "Guanyu Zhou",
       "pais": "CHN",
       "idEquipo": "11000128",
       "poles": 0,
       "puntos": "0",
       "puntosComparar": 0,
       "equipo": "ALFA ROMEO RACING",
       "puntosEquipo": 4,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "16",
             "parrilla": "13",
             "general": "16",
             "equipoJornada": "ALFA ROMEO RACING",
             "puntosCarrera": 0
           },
           {
             "id": "2",
             "puesto": "13",
             "parrilla": "11",
             "general": "17",
             "equipoJornada": "ALFA ROMEO RACING",
             "puntosCarrera": 0
           }
         ]
       }
     },
     {
       "id": "11001421",
       "nom": "Yuki Tsunoda",
       "pais": "JPN",
       "idEquipo": "11000110",
       "poles": 0,
       "puntos": "0",
       "puntosComparar": 0,
       "equipo": "ALPHATAURI",
       "puntosEquipo": 0,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "11",
             "parrilla": "14",
             "general": "11",
             "equipoJornada": "ALPHATAURI",
             "puntosCarrera": 0
           },
           {
             "id": "2",
             "puesto": "11",
             "parrilla": "16",
             "general": "14",
             "equipoJornada": "ALPHATAURI",
             "puntosCarrera": 0
           }
         ]
       }
     },
     {
       "id": "11001426",
       "nom": "Logan Sargeant",
       "pais": "USA",
       "idEquipo": "11000150",
       "poles": 0,
       "puntos": "0",
       "puntosComparar": 0,
       "equipo": "WILLIAMS",
       "puntosEquipo": 1,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "12",
             "parrilla": "16",
             "general": "12",
             "equipoJornada": "WILLIAMS",
             "puntosCarrera": 0
           },
           {
             "id": "2",
             "puesto": "16",
             "parrilla": "20",
             "general": "16",
             "equipoJornada": "WILLIAMS",
             "puntosCarrera": 0
           }
         ]
       }
     },
     {
       "id": "11001428",
       "nom": "Felipe Drugovich",
       "pais": "BRA",
       "idEquipo": "11000363",
       "poles": 0,
       "puntos": "0",
       "puntosComparar": 0,
       "equipo": "",
       "puntosEquipo": 38,
       "temporada": {
         "jornada": [
           {
             "id": "0",
             "puesto": "0",
             "parrilla": "0",
             "general": "0",
             "equipoJornada": "0",
             "puntosCarrera": 0
           }
         ]
       }
     },
     {
       "id": "11001429",
       "nom": "Oscar Piastri",
       "pais": "AUS",
       "idEquipo": "11000105",
       "poles": 0,
       "puntos": "0",
       "puntosComparar": 0,
       "equipo": "MCLAREN",
       "puntosEquipo": 0,
       "temporada": {
         "jornada": [
           {
             "id": "1",
             "puesto": "20",
             "parrilla": "18",
             "general": "20",
             "equipoJornada": "MCLAREN",
             "puntosCarrera": 0
           },
           {
             "id": "2",
             "puesto": "15",
             "parrilla": "8",
             "general": "19",
             "equipoJornada": "MCLAREN",
             "puntosCarrera": 0
           }
         ]
       }
     }
   ],
   "calendarios": []
 }
         jQuery(document).ready(function() {
 
         })
         </script>
 </div>
 <script type="text/javascript">jQuery(document).ready(function(){if(typeof jQuery.fn.F1clasificacion==='function'){jQuery(".js-listTable").F1clasificacion({f1cl_jsonDatos:datosJsonUrl});}
 if(typeof jQuery.fn.F1compara==='function'){jQuery(".js-cTable").F1compara({f1_Comp_path:'https://e00-marca.uecdn.es/iconos/formula1/2023/',f1_Comp_dragableClass:"dragable compCell",f1_Comp_dropTargetClass:"dropTarget",f1_jsonDatos:datosJsonUrl});}});if(typeof jQuery.fn.Tab==='function'){jQuery('.js-tabs').Tab();}</script>
 </div>
 </div>
 </li></ul></div></section></div></div></section><script>jQuery(function(){if(typeof jQuery.fn.Tab==='function'){jQuery('#js_5a950f56e2704ee81e8bff0d').find('.js-tabs').Tab();}
 jQuery('.js-cnav-header').find('.js_socialMedia').RedesSociales({title:"Clasificación F1 2023 de pilotos Formula 1 - Resultados y puntos",img:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/27/16484087025574.jpg",url:"https://www.marca.com/motor/formula1/clasificacion.html",summary:"Clasificación pilotos F1 2023",viaTwitter:"marca",urlCorreo:'https://www.marca.com/enviar/formulario_enviar_noticia.html?que_mundo=marca',sufijoAnalitica:'_1'});jQuery(document).on("urlChanged",function(event,data){if(typeof jQuery.fn.RedesSociales==='function'){jQuery('.js-cnav-header').find('.js_socialMedia').RedesSociales({title:data.title,img:data.rrss.img,url:data.url,summary:data.rrss.summary,viaTwitter:data.rrss.twitter,urlCorreo:"https://www.marca.com/enviar/formulario_enviar_noticia.html?que_mundo=marca",sufijoAnalitica:'_1'});}});if(typeof jQuery.fn.ElementoFijo==='function'){jQuery('#js_5a950f56e2704ee81e8bff0d').find('.js_fixed').ElementoFijo({elementosAnteriores:['.main-header'],elementoDesdeFixed:'.js_fixed_container',minWidthFijo:768});}
 if(navigator.appName.indexOf('Microsoft Internet Explorer')===-1&&navigator.userAgent.indexOf('Trident')===-1){if(jQuery('.YT-player').length>0&&jQuery('script[src*="https://www.youtube.com/iframe_api"]').length===0){try{var s=document.createElement('script');s.async='true';s.type='text/javascript';s.src='https://www.youtube.com/iframe_api';var node=document.getElementsByTagName('script')[0];node.parentNode.insertBefore(s,node);}catch(e){console.error(e);};}else{if(jQuery('script[src*="https://www.youtube.com/iframe_api"]').length>0){document.dispatchEvent(event_youtube_player);}};};});jQuery(document).ready(function(){jQuery(".js-cnav-header .js-breadcrumb-submenu li a[href^='https://www.marca.com/motor/formula1/clasificacion.html']").closest("li").addClass("active");jQuery(".js-cnav-header .js-breadcrumb-submenu li a[href^='"+window.location.href+"']").closest("li").addClass("active");});</script><aside class="content-ad"><div class="ad-item-fp"><div id='div-gpt-ad-motor_formula1_e_fp_5a950f56e2704ee81e8bff0d' class="ad-item"><script type='text/javascript'>googletag.cmd.push(function(){googletag.display('div-gpt-ad-motor_formula1_e_fp_5a950f56e2704ee81e8bff0d');});</script></div></div></aside></main><footer class="site-footer horizontal">
 <div class="container-list-footer js-toggle-footer">
 <div class="js-botonera-toggle arrow-toggle">
 <span>
 Otras webs de Unidad Editorial
 <i data-click-role="icon-close" class="icon-arrow-up no-visible"></i>
 <i data-click-role="icon-open" class="icon-arrow-down"></i>
 </span>
 </div>
 <div class="js-contenido-toggle container-toggle">
 <div class="clearfix">
 <ul class="list-footer">
 <li class="highlight"><span>Marca</span> </li>
 <li><a href="https://www.marca.com/mundo-marca/2017/01/18/587f574fe2704e47368b45ff.html" title="Abrir en ventana nueva" target="_blank"><span>App Marca</span></a></li>
 <li><a href="https://www.marca.com/futbol/primera-division/clasificacion.html"><span>Clasificaci&oacute;n LaLiga</span></a></li>
 <li><a href="https://www.marca.com/futbol/primera-division/calendario.html"><span>Calendario LaLiga</span></a></li>
 <li><a href="https://www.marca.com/hemeroteca/" title="Abrir en ventana nueva" target="_blank"><span>Hemeroteca Marca</span></a></li>
 <li><a href="https://www.marca.com/esports.html" title="Abrir en ventana nueva" target="_blank"><span>Marca eSports</span></a></li>
 <li><a href="http://quiosco.marca.orbyt.es/" title="Abrir en ventana nueva" target="_blank"><span>Marca en Orbyt</span></a></li>
 </ul>
 <div id="pixelcontabilizacionNLalerta" class="pixelcontabilizacion" style="position:absolute;top:0px;left:0px;width:1px;height:1px;z-index:1">
 <img src="https://impes.tradedoubler.com/imp?type(inv)g(23657338)a(2407712)" width="1" height="1" alt/>
 </div>
 <ul class="list-footer">
 <li class="highlight"><span>Ocio y Moda</span> </li>
 <li><a href="https://www.marca.com/tiramillas.html" title="Abrir en ventana nueva" target="_blank"><span>Tiramillas</span></a></li>
 <li><a href="https://www.telva.com/" title="Abrir en ventana nueva" target="_blank"><span>Moda - Telva</span></a></li>
 <li><a href="https://www.elmundo.es/traductor/" title="Abrir en ventana nueva" target="_blank"><span>Traductor</span></a></li>
 <li><a href="https://www.elmundo.es/television/programacion-tv/" title="Abrir en ventana nueva" target="_blank"><span>Programaci&oacute;n TV</span></a></li>
 <li><a href="https://www.marcaentradas.com/" title="Abrir en ventana nueva" target="_blank"><span>Marca Entradas</span></a></li>
 <li><a href="https://mibebeyyo.elmundo.es/" title="Abrir en ventana nueva" target="_blank"><span>Mi beb&eacute; y yo</span></a></li>
 </ul>
 <ul class="list-footer">
 <li class="highlight"><span>Unidad Editorial</span> </li>
 <li><a href="https://www.elmundo.es/" title="Abrir en ventana nueva" target="_blank"><span>El Mundo</span></a></li>
 <li><a href="https://www.expansion.com/" title="Abrir en ventana nueva" target="_blank"><span>Expansi&oacute;n</span></a></li>
 <li><a href="https://cuidateplus.marca.com/" title="Abrir en ventana nueva" target="_blank"><span>Cu&iacute;datePlus</span></a></li>
 <li><a href="https://www.diariomedico.com/" title="Abrir en ventana nueva" target="_blank"><span>Diario M&eacute;dico</span></a></li>
 <li><a href="https://www.diariomedico.com/farmacia.html" title="Abrir en ventana nueva" target="_blank"><span>Correo Farmac&eacute;utico</span></a></li>
 <li><a href="https://suscripcion.marca.com/ofertas/" title="Abrir en ventana nueva" target="_blank"><span>Suscripci&oacute;n Marca</span></a></li>
 </ul>
 <ul class="list-footer">
 <li class="highlight"><span>Formaci&oacute;n y Empleo</span> </li>
 <li><a href="https://www.escuelaunidadeditorial.es/" title="Abrir en ventana nueva" target="_blank"><span>Escuela Unidad Editorial</span></a></li>
 <li><a href="https://www.unidadeditorial.es/" title="Abrir en ventana nueva" target="_blank"><span>Unidad Editorial</span></a></li>
 <li><a href="https://www.expansion.com/expansion-empleo.html" title="Abrir en ventana nueva" target="_blank"><span>Expansi&oacute;n y Empleo</span></a>
 </li>
 </ul>
 </div>
 </div>
 </div>
 <div class="container-about-footer">
 <ul class="about-list">
 <li class="copyright">
 <p>&copy; Marzo
 2023
 <span itemprop="name">Unidad Editorial Informaci&oacute;n Deportiva, S.L.U. Todos los derechos reservados.</span></p>
 </li>
 <li><a href="https://www.marca.com/cookies.html">Pol&iacute;tica de cookies</a></li>
 <li><a href="#" onclick="ueCookiesPolicy.preferences.show(); return false;">Configuraci&oacute;n de cookies</a></li>
 <li><a href="https://www.marca.com/corporativo/politica-privacidad.html">Pol&iacute;tica de privacidad</a></li>
 <li><a href="https://www.marca.com/corporativo/terminos-condiciones-uso.html">T&eacute;rminos y condiciones de uso</a></li>
 <li><a href="https://www.ojd.es/" title="Abrir en ventana nueva" target="_blank">Certificado por OJD</a></li>
 <li><a href="https://www.marca.com/corporativo/contacto.html" title="Abrir en ventana nueva" target="_blank">Contacto</a></li>
 <li><a href="http://www.unidadeditorial.com/publicidad" title="Abrir en ventana nueva" target="_blank">Publicidad</a></li>
 <li><a href="https://www.marca.com/corporativo/ayuda.html" title="Abrir en ventana nueva" target="_blank">Ayuda</a></li>
 <li><a href="https://www.marca.com/corporativo/el_equipo.html" title="Abrir en ventana nueva" target="_blank">Nuestro equipo</a></li>
 <li><a href="https://www.uesyndication.com/" title="Abrir en ventana nueva" target="_blank">Venta de contenidos</a></li>
 <li><a href="https://www.marca.com/codigo-etico.html">C&oacute;digo &eacute;tico</a></li>
 </ul>
 <aside class="follow-us">
 <p>S&iacute;guenos en</p>
 <ul class="social-networks">
 <li title="Facebook">
 <a class="icon-facebook" href="https://www.facebook.com/MARCA" title="Abrir en ventana nueva" target="_blank">
 <span class="hidden-content">Facebook</span>
 <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="-4 -2 36 32" aria-hidden="true" role="img"><path opacity=".5" fill="none" d="M0 0h28v28H0V0z"/><path fill="white" d="M15.22 21.875V14.69h2.415l.359-2.798H15.22v-1.789c0-.809.225-1.363 1.387-1.363h1.485V6.234a19.48 19.48 0 00-2.16-.109c-2.141 0-3.601 1.308-3.601 3.705v2.068H9.909v2.799h2.421v7.178h2.89z"/></svg>
 </a>
 </li>
 <li title="Twitter">
 <a class="icon-twitter" href="https://twitter.com/marca" title="Abrir en ventana nueva" target="_blank">
 <span class="hidden-content">Twitter</span>
 <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="-4 -2 36 32" role="img" aria-hidden="true"><path opacity=".5" fill="none" d="M0,0h28v28H0V0z"/><path fill="white" d="M20.807,10.413c0.007,0.149,0.01,0.304,0.011,0.454c0.032,4.659-3.471,10.048-9.955,10.094 c-1.914,0.014-3.792-0.522-5.41-1.545c0.278,0.028,0.558,0.044,0.84,0.042c1.587-0.009,3.125-0.551,4.368-1.537 c-1.508-0.019-2.837-0.993-3.311-2.424c0.216,0.04,0.438,0.059,0.663,0.057c0.32,0,0.649-0.044,0.948-0.128 c-1.647-0.317-2.836-1.759-2.835-3.436v-0.042c0.438,0.259,1.004,0.414,1.58,0.428c-1.558-1.021-2.054-3.077-1.135-4.697 c1.803,2.189,4.451,3.509,7.284,3.633c-0.458-1.89,0.702-3.793,2.592-4.252c0.265-0.064,0.536-0.097,0.808-0.099 c0.975-0.008,1.909,0.388,2.581,1.094c0.789-0.159,1.544-0.454,2.233-0.871c-0.259,0.818-0.806,1.515-1.54,1.96 c0.698-0.085,1.379-0.276,2.019-0.569C22.082,9.287,21.492,9.909,20.807,10.413z"></path></svg>
 </a>
 </li>
 <li title="RSS">
 <a class="icon-rss" href="https://www.marca.com/rss.html" title="Abrir en ventana nueva" target="_blank">
 <span class="hidden-content">RSS</span>
 <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="18" height="22" viewBox="0 0 21.684 21.835"><path d="M5.826 18.922a2.913 2.913 0 11-5.826 0 2.913 2.913 0 015.826 0M0 7.402v4.028s9.778.273 10.082 10.405h4.306S14.894 8.065 0 7.402"/><path d="M0 0v4.103s15.908-.253 17.68 17.732h4.003S22.139 1.215 0 0"/></svg>
 </a>
 </li>
 </ul>
 </aside>
 </div>
 </footer>
 <div class="main-tab-container no-visible" id="submenuFutbol">
 <ul class="tab-content">
 <li class="tab-column tab-column-main" style="width:25%;">
 <span class="main-tab-header">Espa&ntilde;a</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/primera-division.html?intcmp=MENUPROD&s_kw=primera-division" class="tab-list-header">LaLiga Santander</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/primera/calendario.html?intcmp=MENUPROD&s_kw=primera-division-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/primera/clasificacion.html?intcmp=MENUPROD&s_kw=primera-division-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/primera/equipos.html?intcmp=MENUMIGA&s_kw=equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/futbol-femenino/primera-division.html?intcmp=MENUPROD&s_kw=futbol-femenino-finetwork-liga-f" class="tab-list-header">Finetwork Liga F</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/futbol-femenino/primera-division/calendario.html?intcmp=MENUPROD&s_kw=futbol-femenino-finetwork-liga-f-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/futbol-femenino/primera-division/clasificacion.html?intcmp=MENUPROD&s_kw=futbol-femenino-finetwork-liga-f-clasificacion">Clasificación</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/segunda-division.html?intcmp=MENUPROD&s_kw=segunda-division" class="tab-list-header">LaLiga SmartBank</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/segunda/calendario.html?intcmp=MENUPROD&s_kw=segunda-division-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/segunda/clasificacion.html?intcmp=MENUPROD&s_kw=segunda-division-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/segunda/equipos.html?intcmp=MENUPROD&s_kw=equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/primera-rfef.html?intcmp=MENUPROD&s_kw=primera-federacion" class="tab-list-header">Primera Federación</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/segunda-rfef.html?intcmp=MENUPROD&s_kw=segunda-federacion" class="tab-list-header">Segunda Federación</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/mas-futbol/tercera-division.html?intcmp=MENUPROD&s_kw=tercera-federacion" class="tab-list-header">Tercera Federación</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/copa-rey.html?intcmp=MENUPROD&s_kw=futbol-copa-rey" class="tab-list-header">Copa del Rey</a>
  </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/futbol-femenino/copa-de-la-reina.html?intcmp=MENUPROD&s_kw=futbol-copa-reina" class="tab-list-header">Copa de la Reina</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/mas-futbol.html?intcmp=MENUPROD&s_kw=futbol-mas-futbol" class="tab-list-header">Más fútbol</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/supercopa-espana.html?intcmp=MENUPROD&s_kw=supercopa-de-espana" class="tab-list-header">Supercopa de España</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/futbol-femenino/supercopa-espana/calendario.html?intcmp=MENUPROD&s_kw=supercopa-de-espana-femenina" class="tab-list-header">Supercopa de España femenina</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/seleccion.html?intcmp=MENUPROD&s_kw=seleccion-espanola" class="tab-list-header">Selecci&oacute;n Espa&ntilde;ola</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/mundial.html?intcmp=MENUPROD&s_kw=mundial-2022">Mundial 2022</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/nations-league/calendario/liga-a/grupo-2.html">UEFA Nations League</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/futbol-femenino/seleccion.html?intcmp=MENUPROD&s_kw=seleccion-espanola" class="tab-list-header">Selecci&oacute;n Espa&ntilde;ola femenina</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/futbol-femenino/europeo.html">EURO 2022</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/futbol-femenino/mundial.html">Mundial 2023</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/futbol-sala.html?intcmp=MENUPROD&s_kw=futbol-sala" class="tab-list-header">F&uacute;tbol Sala</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/premios-marca.html" class="tab-list-header">Premios MARCA</a>
 </li>
 </ul>
 </li>
 <li class="tab-column" style="width:50%;">
 <span class="main-tab-header"><a href="https://www.marca.com/futbol/futbol-internacional.html?intcmp=MENUPROD&s_kw=futbol-internacional">Internacional<i class="iconsvg iconsvg-right-b"></i></a></span>
 <ul class="tab-column-inside" style="width:50%; float: left;">
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/premier-league.html?intcmp=MENUPROD&s_kw=premier-league" class="tab-list-header">Premier League</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/premier-league/calendario.html?intcmp=MENUPROD&s_kw=premier-league-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/premier-league/clasificacion.html?intcmp=MENUPROD&s_kw=premier-league-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/premier-league/equipos.html?intcmp=MENUPROD&s_kw=premier-league-equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/bundesliga.html?intcmp=MENUPROD&s_kw=bundesliga" class="tab-list-header">Bundesliga</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/bundesliga/calendario.html?intcmp=MENUPROD&s_kw=bundesliga-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/bundesliga/clasificacion.html?intcmp=MENUPROD&s_kw=bundesliga-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/bundesliga/equipos.html?intcmp=MENUPROD&s_kw=bundesliga-equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/liga-italiana.html?intcmp=MENUPROD&s_kw=serie-a" class="tab-list-header">Serie A</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-italiana/calendario.html?intcmp=MENUPROD&s_kw=serie-a-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-italiana/clasificacion.html?intcmp=MENUPROD&s_kw=serie-a-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-italiana/equipos.html?intcmp=MENUPROD&s_kw=serie-a-equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/liga-francesa.html?intcmp=MENUPROD&s_kw=liga-francesa" class="tab-list-header">Ligue 1</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-francesa/calendario.html?intcmp=MENUPROD&s_kw=liga-francesa-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-francesa/clasificacion.html?intcmp=MENUPROD&s_kw=liga-francesa-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-francesa/equipos.html?intcmp=MENUPROD&s_kw=liga-francesa-equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/liga-portuguesa.html?intcmp=MENUPROD&s_kw=primeira-liga-portugal" class="tab-list-header">Primeira Liga de Portugal</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-portuguesa/calendario.html?intcmp=MENUPROD&s_kw=primeira-liga-portugal-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-portuguesa/clasificacion.html?intcmp=MENUPROD&s_kw=primeira-liga-portugal-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-portuguesa/equipos.html?intcmp=MENUPROD&s_kw=primeira-liga-portugal-equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/liga-holandesa/calendario.html?intcmp=MENUPROD&s_kw=eredivisie" class="tab-list-header">Eredivisie</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/liga-rumana/calendario.html?intcmp=MENUPROD&s_kw=liga-i-de-rumania" class="tab-list-header">Liga I de Ruman&iacute;a</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/liga-belga/calendario.html?intcmp=MENUPROD&s_kw=primera-division-de-belgica" class="tab-list-header">Primera Divisi&oacute;n de B&eacute;lgica</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/liga-rusa/calendario.html?intcmp=MENUMIGA&s_kw=premier-league-de-rusia" class="tab-list-header">Premier League de Rusia</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/liga-griega/calendario.html?intcmp=MENUPROD&s_kw=superliga-de-grecia" class="tab-list-header">Superliga de Grecia</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/liga-turca/calendario.html?intcmp=MENUPROD&s_kw=superliga-de-turquia" class="tab-list-header">Superliga de Turqu&iacute;a</a>
 </li>
 </ul>
 <ul class="tab-column-inside" style="width:50%; float: left;">
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/champions-league.html?intcmp=MENUPROD&s_kw=futbol-champions-league" class="tab-list-header">Champions League</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/champions-league/calendario.html?intcmp=MENUPROD&s_kw=futbol-champions-league-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/champions-league/clasificacion.html?intcmp=MENUPROD&s_kw=futbol-champions-league-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/champions-league/equipos.html?intcmp=MENUPROD&s_kw=futbol-champions-league-equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/futbol-femenino/champions-league.html?intcmp=MENUPROD&s_kw=futbol-champions-league-femenina" class="tab-list-header">Champions League femenina</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/futbol-femenino/champions-league/calendario.html?intcmp=MENUPROD&s_kw=futbol-champions-league-femenina-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/futbol-femenino/champions-league/clasificacion.html?intcmp=MENUPROD&s_kw=futbol-champions-league-femenina-clasificacion">Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/europa-league.html?intcmp=MENUPROD&s_kw=europa-league" class="tab-list-header">Europa League</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/europa-league/calendario.html?intcmp=MENUPROD&s_kw=europa-league-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/europa-league/clasificacion.html?intcmp=MENUPROD&s_kw=europa-league-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/europa-league/equipos.html?intcmp=MENUPROD&s_kw=europa-league-equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/conference-league.html?intcmp=MENUPROD&s_kw=conference-league" class="tab-list-header">Conference League</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/conference-league/calendario.html?intcmp=MENUPROD&s_kw=conference-league-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/conference-league/clasificacion.html?intcmp=MENUPROD&s_kw=conference-league-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/conference-league/equipos.html?intcmp=MENUPROD&s_kw=conference-league-equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/youth-league.html?intcmp=MENUPROD&s_kw=youth-league" class="tab-list-header">Youth League</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/youth-league/calendario.html?intcmp=MENUPROD&s_kw=youth-league-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/youth-league/clasificacion.html?intcmp=MENUPROD&s_kw=youth-league-clasificacion">Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/supercopa-europa.html?intcmp=MENUPROD&s_kw=supercopa-europa" class="tab-list-header">Supercopa de Europa</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/mundial-de-clubes.html?intcmp=MENUPROD&s_kw=mundial-de-clubes" class="tab-list-header">Mundial de clubes</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/mundial-de-clubes/calendario.html?intcmp=MENUPROD&s_kw=calendario">Calendario</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/mundial.html?intcmp=MENUPROD&s_kw=mundial-2022" class="tab-list-header">Mundial 2022</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/mundial/calendario.html?intcmp=MENUPROD&s_kw=mundial-2022-calendario">Calendario</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/futbol-femenino/mundial.html?intcmp=MENUPROD&s_kw=mundial-femenino-2023" class="tab-list-header">Mundial Femenino 2023</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/eurocopa.html?intcmp=MENUPROD&s_kw=euro-2024" class="tab-list-header">EURO 2024</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/futbol-femenino/europeo.html?intcmp=MENUPROD&s_kw=euro-femenino-2022" class="tab-list-header">EURO Femenina 2022</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/uefa-nations-league.html" class="tab-list-header">UEFA Nations League</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/copa-africa.html?intcmp=MENUPROD&s_kw=copa-africa" class="tab-list-header">Copa &Aacute;frica</a>
 </li>
 </ul>
 </li>
 <li class="tab-column" style="width:25%;">
 <span class="main-tab-header"><a href="https://www.marca.com/futbol/america.html?intcmp=MENUPROD&s_kw=futbol-america">Am&eacute;rica<i class="iconsvg iconsvg-right-b"></i></a></span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/argentina.html?intcmp=MENUPROD&s_kw=futbol-argentina" class="tab-list-header">Argentina</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/argentina/calendario.html?intcmp=MENUMIGA&s_kw=futbol-argentina-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/argentina/clasificacion.html?intcmp=MENUMIGA&s_kw=futbol-argentina-clasificacion">Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/chile.html?intcmp=MENUPROD&s_kw=futbol-chile" class="tab-list-header">Chile</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/chile/calendario.html?intcmp=MENUMIGA&s_kw=futbol-chile-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/chile/clasificacion.html?intcmp=MENUMIGA&s_kw=futbol-chile-clasificacion">Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/colombia.html?intcmp=MENUPROD&s_kw=futbol-colombia" class="tab-list-header">Colombia</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/colombia/apertura/calendario.html?intcmp=MENUMIGA&s_kw=futbol-colombia-calendario-apertura">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/colombia/apertura/clasificacion.html?intcmp=MENUMIGA&s_kw=futbol-colombia-clasificacion-apertura">Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/estados-unidos.html?intcmp=MENUPROD&s_kw=futbol-estados-unidos" class="tab-list-header">Estados Unidos</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/estados-unidos/calendario.html?intcmp=MENUMIGA&s_kw=futbol-estados-unidos-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/estados-unidos/clasificacion.html?intcmp=MENUMIGA&s_kw=futbol-estados-unidos-clasificacion">Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/mexico.html?intcmp=MENUPROD&s_kw=futbol-mexico" class="tab-list-header">M&eacute;xico</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-mx/clausura/calendario.html?intcmp=MENUPROD&s_kw=futbol-mexico-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/liga-mx/clausura/clasificacion.html?intcmp=MENUPROD&s_kw=futbol-mexico-clasificacion">Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/venezuela.html?intcmp=MENUPROD&s_kw=futbol-venezuela" class="tab-list-header">Venezuela</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/venezuela/apertura/calendario.html?intcmp=MENUMIGA&s_kw=futbol-venezuela-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/venezuela/apertura/clasificacion.html?intcmp=MENUMIGA&s_kw=futbol-venezuela-clasificacion">Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/copa-libertadores.html?intcmp=MENUPROD&s_kw=futbol-conmebol-libertadores" class="tab-list-header">CONMEBOL Libertadores</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/copa-libertadores/calendario.html?intcmp=MENUMIGA&s_kw=futbol-conmebol-libertadores-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/copa-libertadores/clasificacion.html?intcmp=MENUMIGA&s_kw=futbol-conmebol-libertadores-clasificacion">Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/copa-america.html?intcmp=MENUMIGA&s_kw=copa-america" class="tab-list-header">Copa Am&eacute;rica</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/copa-america/calendario.html?intcmp=MENUMIGA&s_kw=copa-america-calendario">Calendario</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/futbol/resto-america.html?intcmp=MENUPROD&s_kw=?intcmp=MENUPROD&s_kw=futbol-mas-america" class="tab-list-header">M&aacute;s Am&eacute;rica</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/brasil/calendario.html?intcmp=MENUPROD&s_kw=futbol-campeonato-brasileiro">Campeonato Brasileiro</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/bolivia/clausura/calendario.html?intcmp=MENUPROD&s_kw=futbol-bolivia">Liga Bolivia</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/paraguay/apertura/calendario.html?intcmp=MENUPROD&s_kw=futbol-paraguayan-primera-division">Paraguayan Primera División</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/peru/apertura/calendario.html?intcmp=MENUPROD&s_kw=futbol-primera-division-peru">Primera División del Perú</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/ecuador/primera-etapa/calendario.html?intcmp=MENUPROD&s_kw=futbol-serie-a-ecuador">Serie A de Ecuador</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/futbol/uruguay/apertura/calendario.html?intcmp=MENUPROD&s_kw=futbol-uruguayan-primera-division">Uruguayan Primera División</a>
 </li>
 </ul>
 </li>
 </ul>
 </li>
 </ul>
 </div>
 <div class="main-tab-container no-visible" id="submenuBaloncesto">
 <ul class="tab-content">
 <li class="tab-column">
 <span class="main-tab-header">Espa&ntilde;a</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/acb.html?intcmp=MENUPROD&s_kw=baloncesto-acb" class="tab-list-header">Liga Endesa</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/acb/calendario.html?intcmp=MENUPROD&s_kw=baloncesto-acb-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/acb/clasificacion.html?intcmp=MENUPROD&s_kw=baloncesto-acb-clasificacion">Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/liga-femenina/calendario.html?intcmp=MENUPROD&s_kw=baloncesto-liga-endesa-femenina" class="tab-list-header">Liga Endesa femenina</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/leb-oro/grupo-a/calendario.html?intcmp=MENUPROD&s_kw=baloncesto-feb-leb-oro" class="tab-list-header">LEB Oro</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/leb-plata/calendario-oeste.html?intcmp=MENUPROD&s_kw=baloncesto-feb-leb-plata" class="tab-list-header">LEB Plata</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/copa-rey.html?intcmp=MENUPROD&s_kw=baloncesto-copa-rey" class="tab-list-header">Copa del Rey</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/copa-rey/cuadro.html?intcmp=MENUPROD&s_kw=baloncesto-copa-rey-cuadro-resultados">Cuadro y resultados</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/supercopa.html?intcmp=MENUPROD&s_kw=baloncesto-supercopa" class="tab-list-header">Supercopa Endesa</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/supercopa/cuadro.html?intcmp=MENUPROD&s_kw=baloncesto-supercopa-cuadro-resultados">Cuadro y resultados</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/basketfeb.html?intcmp=MENUPROD&s_kw=baloncesto-feb" class="tab-list-header">Basket FEB</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/seleccion.html?intcmp=MENUPROD&s_kw=baloncesto-seleccion" class="tab-list-header">Selecci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-column">
 <span class="main-tab-header">Europa</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/euroliga.html?intcmp=MENUPROD&s_kw=baloncesto-euroliga" class="tab-list-header">Euroliga</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/euroliga/clasificacion.html?intcmp=MENUPROD&s_kw=baloncesto-euroliga-clasificacion">Clasificaci&oacute;n</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/euroliga/calendario.html?intcmp=MENUPROD&s_kw=baloncesto-euroliga-calendario">Calendario</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/eurocup.html?intcmp=MENUPROD&s_kw=baloncesto-eurocup" class="tab-list-header">Eurocup</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/eurocup/calendario/grupo-a.html?intcmp=MENUPROD&s_kw=baloncesto-eurocup-resultados-clasificacion">Resultados y Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/champions-league.html?intcmp=MENUMIGA&s_kw=baloncesto-champions-league" class="tab-list-header">FIBA Champions League</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/champions-league/calendario.html?intcmp=MENUMIGA&s_kw=baloncesto-champions-league-calendario">Resultados y Clasificaci&oacute;n</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/eurobasket.html?intcmp=MENUMIGA&s_kw=baloncesto-eurobasket" class="tab-list-header">Eurobasket 2022</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/eurobasket/calendario-resultados.html?intcmp=MENUMIGA&s_kw=baloncesto-eurobasket-calendario">Calendario</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/eurobasket-femenino.html?intcmp=MENUMIGA&s_kw=baloncesto-eurobasket-femenino" class="tab-list-header">Eurobasket femenino 2021</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/eurobasket-femenino/calendario.html?intcmp=MENUMIGA&s_kw=baloncesto-eurobasket-calendario">Calendario</a>
 </li>
 </ul>
 </li>
 </ul>
 </li>
 <li class="tab-column">
 <span class="main-tab-header">Internacional</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/nba.html?intcmp=MENUPROD&s_kw=baloncesto-nba" class="tab-list-header">NBA</a>
 <ul>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/nba/calendario.html?intcmp=MENUPROD&s_kw=baloncesto-nba-calendario">Calendario</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/baloncesto/nba/clasificacion-divisiones.html?intcmp=MENUPROD&s_kw=baloncesto-nba-clasificaciones">Clasificaciones</a>
 </li>
 <li class="tab-list-link">
 <a href="https://www.marca.com/deporte/baloncesto/nba/equipos/?intcmp=MENUPROD&s_kw=baloncesto-nba-equipos">Equipos</a>
 </li>
 </ul>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/mundial.html?intcmp=MENUPROD&s_kw=baloncesto-mundial" class="tab-list-header">Mundial 2023</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/baloncesto/mundial-femenino.html?intcmp=MENUPROD&s_kw=baloncesto-mundial-femenino" class="tab-list-header">Mundial femenino 2022</a>
 </li>
 </ul>
 </li>
 </ul>
 </div>
 <div class="main-tab-container no-visible" id="submenuCoches-y-motos">
 <ul class="tab-content">
 <li class="tab-column">
 <span class="main-tab-header">Coches y motos</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/coches.html?intcmp=MENUPROD&s_kw=coches" class="tab-list-header">Coches</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/motos.html?intcmp=MENUPROD&s_kw=motos" class="tab-list-header">Motos</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/trafico.html?intcmp=MENUPROD&s_kw=trafico" class="tab-list-header">Tráfico</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/tecnologia.html?intcmp=MENUPROD&s_kw=tecnologia" class="tab-list-header">Tecnología</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/industria.html?intcmp=MENUPROD&s_kw=industria" class="tab-list-header">Industria</a>
 </li>
 </ul>
 </li>
 <li class="tab-column">
 <span class="main-tab-header">Salones del Automóvil</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/salon-automovil-frankfurt.html?intcmp=MENUPROD&s_kw=frankfurt" class="tab-list-header">Frankfurt</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/salon-automovil-shanghai.html?intcmp=MENUPROD&s_kw=shanghai" class="tab-list-header">Shanghái</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/salon-automovil-ginebra.html?intcmp=MENUPROD&s_kw=ginebra" class="tab-list-header">Ginebra</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/salon-automovil-los-angeles.html?intcmp=MENUPROD&s_kw=los-angeles" class="tab-list-header">Los Ángeles</a>
 </li>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/salon-automovil-paris.html?intcmp=MENUPROD&s_kw=paris" class="tab-list-header">París</a>
 </li>
 </ul>
 </li>
 <li class="tab-column">
 <span class="main-tab-header">Y además</span>
 <ul>
 <li class="tab-list">
 <a href="https://www.marca.com/coches-y-motos/accesorios.html?intcmp=MENUPROD&s_kw=accesorios" class="tab-list-header">Accesorios</a>
 </li>
 <li class="tab-list">
 <a href="https://comparador-coches.marca.com/?intcmp=MENUPROD&s_kw=comparador" class="tab-list-header">Recomendador/Comparador</a>
 </li>
 </ul>
 </li>
 </ul>
 </div>
 <script>jQuery.noConflict();</script><script language="JavaScript" type="text/javascript" data-ue-omniture><!--
 var s=s||{};var pageName="https://www.marca.com/motor/formula1/clasificacion.html";s.pageType="";s.pageName="https://www.marca.com/motor/formula1/clasificacion.html";s.channel="motor";s.characters="0";s.wordcounter="0";s.firstPublicationDate="Feb 27, 2018 08:06:56 AM";s.prop1="dos-columnas";s.prop2="pagina";s.prop3="formula1";s.prop4="";s.prop5="";s.prop6="";s.prop7="marca.com";s.prop10="5a950f56e2704ee81e8bff0d";s.prop11="Clasificación pilotos F1 2023";s.hier1="marca.com|motor|formula1|pagina";s.prop27="web";s.list2="";s.prop28="0|0";s.prop29="";s.prop30="imagenes";s.prop52=navigator.platform;s.prop53="";s.prop32="pagecontent";s.prop33="dos-columnas";s.prop31="motor";s.prop34="pc";s.prop35="origen";s.prop36="";s.prop39="nuevo-03-17";s.prop55="";s.prop75="";/*Conversion Variables*/s.eVar1=s.channel;s.eVar2=s.prop1;s.eVar3=s.prop2;s.eVar4=s.prop3;s.eVar11=s.prop11;s.eVar5=s.prop5;s.eVar35=s.prop4;s.eVar36=s.prop7;s.eVar31=s.prop10;s.eVar45=s.prop32;s.eVar18="new";s.eVar27=s.prop27;s.eVar28=s.prop28;s.eVar29=s.prop29;s.eVar30=s.prop30;s.eVar33=s.prop33;s.eVar34=s.prop34;s.eVar75=s.prop75;s.eVar39=s.prop39;s.eVar52=s.prop52;s.eVar80=s.prop53;s.eVar84=s.prop35;s.eVar85=s.prop36;var s_omniture=s;/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! *///--></script><script language="JavaScript" type="text/javascript" data-ue-DataLayer>
     var ueDataLayer = ueDataLayer || {};
     ueDataLayer.be_date_first_publication="1519718816";ueDataLayer.be_page_article_title="Clasificación pilotos F1 2023";ueDataLayer.be_page_newsID="5a950f56e2704ee81e8bff0d";ueDataLayer.be_page_characters="0";ueDataLayer.be_page_wordcounter="0";ueDataLayer.be_page_section="motor";ueDataLayer.be_page_subsection1="formula1";ueDataLayer.be_page_subsection2="clasificacion";ueDataLayer.be_page_subsection3="";ueDataLayer.be_page_subsection4="";ueDataLayer.be_page_subsection5="";ueDataLayer.be_page_subsection6="";ueDataLayer.be_page_url="https://www.marca.com/motor/formula1/clasificacion.html";ueDataLayer.be_page_domain="marca.com";ueDataLayer.be_page_subdomain="";ueDataLayer.be_page_hierarchy="marca.com||motor|formula1|clasificacion||||";ueDataLayer.be_text_seoTags="motor|formula1";ueDataLayer.iab_taxonomies="";ueDataLayer.be_page_site_version="web";ueDataLayer.be_page_multimedia="imagenes";ueDataLayer.be_galleries_count="";ueDataLayer.be_galleries_position="";ueDataLayer.be_galleries_quantity="";ueDataLayer.be_page_cms_template="uedit | dos-columnas";ueDataLayer.be_page_content_type="pagecontent";ueDataLayer.be_navigation_type="origen";ueDataLayer.be_scroll_type="";ueDataLayer.be_text_journalist="";ueDataLayer.be_content_premium_detail="abierto";ueDataLayer.be_content_premium="0";ueDataLayer.be_product_section_conversion="";ueDataLayer.be_product_subsection_conversion="";ueDataLayer.be_product_title_conversion="";ueDataLayer.be_content_signwall_detail="abierto";ueDataLayer.be_content_signwall="0";ueDataLayer.be_signwall_section_conversion="";ueDataLayer.be_signwall_subsection_conversion="";ueDataLayer.be_signwall_title_conversion="";ueDataLayer.marca_edition="spain";</script><script type="text/javascript">function DM_prepClient(csid,client){client.DM_cat("motor > dos-columnas > pagina");}</script><script>if(typeof gptIsDisableInitialLoad!=='undefined'&&gptIsDisableInitialLoad){if(typeof IsAPSEnabled==='undefined'||!IsAPSEnabled){googletag.cmd.push(function(){googletag.pubads().refresh();});}}</script>
 <script type="text/javascript" src="https://e00-marca.uecdn.es/assets/v31/js/desktop.min.js"></script><script type="text/javascript">function onYouTubeIframeAPIReady(){document.dispatchEvent(event_youtube_player);};</script><script type="text/javascript">function hiddenCapa(idcapa){var fd=document.getElementById(idcapa);fd.style.bottom="-92px";};function bandaSuscripcionAccept(){days=1;myDate=new Date();myDate.setTime(myDate.getTime()+(days*24*60*60*1000));document.cookie="MARCA_suscrp = suscrip_yes; expires = "+myDate.toGMTString();hiddenCapa("banda_suscripcion");};function bandaSuscripcionCookie(){days=1;myDate=new Date();myDate.setTime(myDate.getTime()+(days*24*60*60*1000));document.cookie="MARCA_suscrp = suscrip_yes; expires = "+myDate.toGMTString();};function getCookie(name){var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;}
 function checkSuscription(){var fd=document.getElementById("banda_suscripcion");var valorCookie=getCookie('MARCA_suscrp');if(!valorCookie){if(fd&&fd.style.bottom!="0px"){fd.style.bottom="0px";bandaSuscripcionCookie();}}else{document.removeEventListener("scroll",checkSuscription);}};document.addEventListener("scroll",checkSuscription);</script>
 <aside id="banda_suscripcion" class="banda_suscripcion">
 <div class="wrap">
 <a target="_blank" href="https://www.marcaentradas.com/eventos/deportes/ciclo/1156-a1-padel-master-sevilla/?intcmp=VENDIG36003&amp;s_kw=ecom_foo" rel="nofollow">
 <span class="texto">Sevilla acoge de nuevo el A1 Padel. ¡Compra tu entrada en marcaentradas.com!</span><span class="suscribete">Lo quiero</span>
 </a>
 <div class="cerrar" onclick="bandaSuscripcionAccept();" title="Cerrar"></div>
 </div>
 <div id="pixelcontabilizacionsuscripcion" class="pixelcontabilizacion" style="position:absolute;top:0px;left:0px;width:1px;height:1px;z index:1">
 <img src="https://impes.tradedoubler.com/imp?type(inv)g(23942328)a(2407712)" width="1" height="1" alt="">
 </div>
 </aside>
 <script>var utag_data = {}</script>
 <script>(function(a, b, c, d) {a = 'https://tags.tiqcdn.com/utag/unidadeditorial/marca/prod/utag.js';b = document;c = 'script';d = b.createElement(c);d.src = a;d.type = 'text/java' + c;d.async = true;a = b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d, a);})();</script>
 <!-- SiteCatalyst code version: H.21.  Copyright 1996-2010 Adobe, Inc. All Rights Reserved More info available at /web/20151202224104/http://www.omniture.com -->
 <script language="JavaScript" type="text/javascript"><!--
 if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'!-'+'-')
 //--></script><noscript><img src="http://metrics.el-mundo.net/b/ss/uevistatest/1/H.21--NS/0"
 height="1" width="1" border="0" alt="" /></noscript><!--/DO NOT REMOVE/-->
 <!-- End SiteCatalyst code version: H.21. --></body></html>
    `;
    response.send(html);
});

router.use('/alan', (request, response, next) => {
    console.log("Laboratorio 11");;
    response.send("El mejor piloto de la formula 1 es: CHECO PEREZ!!!! ");
});

module.exports = router;