exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 3248:
/***/ ((__unused_webpack_module, exports) => {

exports.validGATrackingId=function(options){return options.trackingId&&options.trackingId.trim()!=="";};exports.validGTMTrackingId=function(options){return options.trackingId&&options.trackingId.trim()!=="";};exports.validFbPixelId=function(options){return options.pixelId&&options.pixelId.trim()!=="";};exports.validTikTokPixelId=function(options){return options.pixelId&&options.pixelId.trim()!=="";};exports.validHotjarId=function(options){return options.hjid&&options.hjid.trim()!==""&&options.hjsv&&options.hjsv.trim()!=="";};exports.validChatwootConfig=function(options){return options.baseUrl&&options.baseUrl.trim()!==""&&options.websiteToken&&options.websiteToken.trim()!=="";};exports.validLinkedinTrackingId=function(options){return options.trackingId&&options.trackingId.trim()!=="";};exports.getCookie=function(name){var v=document.cookie.match('(^|;) ?'+name+'=([^;]*)(;|$)');return v?v[2]:null;};exports.isEnvironmentValid=function(environments){var currentEnvironment=({}).ENV||"production"||0;return environments.includes(currentEnvironment);};

/***/ }),

/***/ 9024:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require=__webpack_require__(8576),initializeAndTrackGoogleAnalytics=_require.initializeAndTrackGoogleAnalytics,initializeAndTrackGoogleTagManager=_require.initializeAndTrackGoogleTagManager,initializeAndTrackFacebookPixel=_require.initializeAndTrackFacebookPixel,initializeAndTrackTikTokPixel=_require.initializeAndTrackTikTokPixel,initializeAndTrackHotjar=_require.initializeAndTrackHotjar,initializeChatwoot=_require.initializeChatwoot,initializeLinkedin=_require.initializeLinkedin;var _require2=__webpack_require__(3248),isEnvironmentValid=_require2.isEnvironmentValid;exports.v=function(location){var options=window.gatsbyPluginGDPRCookiesOptions;if(isEnvironmentValid(options.environments)){if(location===undefined||location===null){console.error('Please provide a reach router location to the initializeAndTrack function.');}else{initializeAndTrackGoogleAnalytics(options.googleAnalytics,location);initializeAndTrackGoogleTagManager(options.googleTagManager,location);initializeAndTrackFacebookPixel(options.facebookPixel);initializeAndTrackTikTokPixel(options.tikTokPixel);initializeAndTrackHotjar(options.hotjar);initializeChatwoot(options.chatwoot);initializeLinkedin(options.linkedin);}}};

/***/ }),

/***/ 8555:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require=__webpack_require__(3248),validChatwootConfig=_require.validChatwootConfig,getCookie=_require.getCookie;exports.addChatwoot=function(options){return new Promise(function(resolve,reject){if(window.gatsbyPluginGDPRCookiesChatwootAdded)return resolve(true);/* eslint-disable */!function(d,t){var BASE_URL=options.baseUrl;var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src=BASE_URL+"/packs/js/sdk.js";g.defer=true;g.async=true;s.parentNode.insertBefore(g,s);g.onload=function(){window.chatwootSDK.run({websiteToken:options.websiteToken,baseUrl:BASE_URL});};}(document,"script");/* eslint-enable */window.gatsbyPluginGDPRCookiesChatwootAdded=true;resolve(true);});};

/***/ }),

/***/ 9120:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require=__webpack_require__(3248),validFbPixelId=_require.validFbPixelId,getCookie=_require.getCookie;exports.addFacebookPixel=function(){return new Promise(function(resolve,reject){if(window.gatsbyPluginGDPRCookiesFacebookPixelAdded)return resolve(true);/* eslint-disable */!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments);};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');/* eslint-enable */window.gatsbyPluginGDPRCookiesFacebookPixelAdded=true;resolve(true);});};exports.initializeFacebookPixel=function(options){if(!window.gatsbyPluginGDPRCookiesFacebookPixelInitialized&&getCookie(options.cookieName)==="true"&&validFbPixelId(options)){window.fbq("init",options.pixelId);window.gatsbyPluginGDPRCookiesFacebookPixelInitialized=true;}};exports.trackFacebookPixel=function(options){if(getCookie(options.cookieName)==="true"&&validFbPixelId(options)&&typeof window.fbq==="function"){window.fbq("track","PageView");}};

/***/ }),

/***/ 4054:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require=__webpack_require__(3248),validGATrackingId=_require.validGATrackingId,getCookie=_require.getCookie;exports.addGoogleAnalytics=function(_ref){var trackingId=_ref.trackingId;return new Promise(function(resolve,reject){if(window.gatsbyPluginGDPRCookiesGoogleAnalyticsAdded)return resolve(true);var head=document.getElementsByTagName('head')[0];var script=document.createElement("script");script.type="text/javascript";script.onload=function(){window.gatsbyPluginGDPRCookiesGoogleAnalyticsAdded=true;resolve(true);};script.src="https://www.googletagmanager.com/gtag/js?id="+trackingId;head.appendChild(script);});};exports.initializeGoogleAnalytics=function(options){if(!window.gatsbyPluginGDPRCookiesGoogleAnalyticsInitialized&&getCookie(options.cookieName)==="true"&&validGATrackingId(options)){window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());var gaAnonymize=options.anonymize;var gaAllowAdFeatures=options.allowAdFeatures;gaAnonymize=gaAnonymize!==undefined?gaAnonymize:true;gaAllowAdFeatures=gaAllowAdFeatures!==undefined?gaAllowAdFeatures:true;window.gtag('config',options.trackingId,{'anonymize_ip':gaAnonymize,'allow_google_signals':gaAllowAdFeatures});window.gatsbyPluginGDPRCookiesGoogleAnalyticsInitialized=true;}};exports.trackGoogleAnalytics=function(options,location){if(getCookie(options.cookieName)==="true"&&validGATrackingId(options)&&typeof window.gtag==="function"){var pagePath=location?location.pathname+location.search+location.hash:undefined;window.gtag("event","page_view",{page_path:pagePath});}};

/***/ }),

/***/ 2437:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require=__webpack_require__(3248),validGTMTrackingId=_require.validGTMTrackingId,getCookie=_require.getCookie;exports.addGoogleTagManager=function(_ref,environmentParamStr){var trackingId=_ref.trackingId,dataLayerName=_ref.dataLayerName;return new Promise(function(resolve,reject){if(window.gatsbyPluginGDPRCookiesGoogleTagManagerAdded)return resolve(true);/* eslint-disable */!function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl+environmentParamStr;f.parentNode.insertBefore(j,f);}(window,document,"script",dataLayerName,trackingId);/* eslint-enable */var iframe=document.createElement("iframe");iframe.key="gatsby-plugin-gdpr-cookies-google-tagmanager-iframe";iframe.src="https://www.googletagmanager.com/ns.html?id="+trackingId+environmentParamStr;iframe.height=0;iframe.width=0;iframe.style="display: none; visibility: hidden";document.body.insertBefore(iframe,document.body.firstChild);window.gatsbyPluginGDPRCookiesGoogleTagManagerAdded=true;resolve(true);});};exports.initializeGoogleTagManager=function(options){// console.log(`initing tag manager`)
if(!window.gatsbyPluginGDPRCookiesGoogleTagManagerInitialized&&getCookie(options.cookieName)==="true"&&validGTMTrackingId(options)){window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};window.gtag("js",new Date());var gaAnonymize=options.anonymize;var gaAllowAdFeatures=options.allowAdFeatures;gaAnonymize=gaAnonymize!==undefined?gaAnonymize:true;gaAllowAdFeatures=gaAllowAdFeatures!==undefined?gaAllowAdFeatures:true;window.gtag("config",options.trackingId,{anonymize_ip:gaAnonymize,allow_google_signals:gaAllowAdFeatures});}};exports.trackGoogleTagManager=function(options,location){// console.log(`tracking tag manager`)
if(getCookie(options.cookieName)==="true"&&validGTMTrackingId(options)&&typeof window.gtag==="function"){var pagePath=location?location.pathname+location.search+location.hash:undefined;window.gtag("event","page_view",{page_path:pagePath});}setTimeout(function(){var data=options.dataLayerName?window[options.dataLayerName]:window.dataLayer;if(typeof data==="object"){var eventName=options.routeChangeEvent||"gatsbyRouteChange";data.push({event:eventName});}},50);};

/***/ }),

/***/ 489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require=__webpack_require__(3248),validHotjarId=_require.validHotjarId,getCookie=_require.getCookie;exports.addHotjar=function(options){return new Promise(function(resolve,reject){if(window.gatsbyPluginGDPRCookiesHotjarAdded)return resolve(true);/* eslint-disable */!function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments);};h._hjSettings={hjid:options.hjid,hjsv:options.hjsv};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);}(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');/* eslint-enable */window.gatsbyPluginGDPRCookiesHotjarAdded=true;resolve(true);});};exports.initializeHotjar=function(options){if(!window.gatsbyPluginGDPRCookiesHotjarInitialized&&getCookie(options.cookieName)==="true"&&validHotjarId(options)){window.gatsbyPluginGDPRCookiesHotjarInitialized=true;}};exports.trackHotjar=function(options){// this is supposed to so nothing
};

/***/ }),

/***/ 8576:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require=__webpack_require__(3248),validGATrackingId=_require.validGATrackingId,validGTMTrackingId=_require.validGTMTrackingId,validFbPixelId=_require.validFbPixelId,validTikTokPixelId=_require.validTikTokPixelId,validHotjarId=_require.validHotjarId,validChatwootConfig=_require.validChatwootConfig,validLinkedinTrackingId=_require.validLinkedinTrackingId,getCookie=_require.getCookie;var _require2=__webpack_require__(4054),addGoogleAnalytics=_require2.addGoogleAnalytics,initializeGoogleAnalytics=_require2.initializeGoogleAnalytics,trackGoogleAnalytics=_require2.trackGoogleAnalytics;var _require3=__webpack_require__(2437),addGoogleTagManager=_require3.addGoogleTagManager,initializeGoogleTagManager=_require3.initializeGoogleTagManager,trackGoogleTagManager=_require3.trackGoogleTagManager;var _require4=__webpack_require__(9120),addFacebookPixel=_require4.addFacebookPixel,initializeFacebookPixel=_require4.initializeFacebookPixel,trackFacebookPixel=_require4.trackFacebookPixel;var _require5=__webpack_require__(6499),addTikTokPixel=_require5.addTikTokPixel,initializeTikTokPixel=_require5.initializeTikTokPixel,trackTikTokPixel=_require5.trackTikTokPixel;var _require6=__webpack_require__(489),addHotjar=_require6.addHotjar,initializeHotjar=_require6.initializeHotjar,trackHotjar=_require6.trackHotjar;var _require7=__webpack_require__(8555),addChatwoot=_require7.addChatwoot;var _require8=__webpack_require__(9082),addLinkedin=_require8.addLinkedin,initializeLinkedin=_require8.initializeLinkedin;exports.initializeAndTrackGoogleAnalytics=function(options,location){if(getCookie(options.cookieName)==="true"&&validGATrackingId(options)){addGoogleAnalytics(options).then(function(status){if(status){initializeGoogleAnalytics(options);trackGoogleAnalytics(options,location);}});}};exports.initializeAndTrackGoogleTagManager=function(options,location){if(getCookie(options.cookieName)==="true"&&validGTMTrackingId(options)){var environmentParamStr="";if(options.gtmAuth&&options.gtmPreview){environmentParamStr="&gtm_auth="+options.gtmAuth+"&gtm_preview="+options.gtmPreview+"&gtm_cookies_win=x";}addGoogleTagManager(options,environmentParamStr).then(function(status){if(status){initializeGoogleTagManager(options);trackGoogleTagManager(options,location);}});}};exports.initializeAndTrackFacebookPixel=function(options){if(getCookie(options.cookieName)==="true"&&validFbPixelId(options)){addFacebookPixel().then(function(status){if(status){initializeFacebookPixel(options);trackFacebookPixel(options);}});}};exports.initializeAndTrackTikTokPixel=function(options){if(getCookie(options.cookieName)==="true"&&validTikTokPixelId(options)){addTikTokPixel().then(function(status){if(status){initializeTikTokPixel(options);trackTikTokPixel(options);}});}};exports.initializeAndTrackHotjar=function(options){if(getCookie(options.cookieName)==="true"&&validHotjarId(options)){addHotjar(options).then(function(status){if(status){initializeHotjar(options);trackHotjar(options);}});}};exports.initializeLinkedin=function(options){if(getCookie(options.cookieName)==="true"&&validLinkedinTrackingId(options)){addLinkedin(options).then(function(status){if(status){initializeLinkedin(options);}});}};exports.initializeChatwoot=function(options){if(getCookie(options.cookieName)==="true"&&validChatwootConfig(options)){addChatwoot(options).then(function(status){if(status){console.info('Chat is added and running');}});}};

/***/ }),

/***/ 9082:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require=__webpack_require__(3248),validLinkedinTrackingId=_require.validLinkedinTrackingId,getCookie=_require.getCookie;exports.addLinkedin=function(options){return new Promise(function(resolve,reject){if(window.gatsbyPluginGDPRCookiesLinkedinAdded)return resolve(true);/* eslint-disable */ // LINKED IN SPECIFIC CODE HERE
_linkedin_partner_id=options.trackingId;window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);/* eslint-enable */window.gatsbyPluginGDPRCookiesLinkedinAdded=true;resolve(true);});};exports.initializeLinkedin=function(options){if(!window.gatsbyPluginGDPRCookiesLinkedinInitialized&&getCookie(options.cookieName)==="true"&&validLinkedinTrackingId(options)){// (function(){
var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);// })();
window.gatsbyPluginGDPRCookiesLinkedinInitialized=true;}};

/***/ }),

/***/ 6499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require=__webpack_require__(3248),validTikTokPixelId=_require.validTikTokPixelId,getCookie=_require.getCookie;exports.addTikTokPixel=function(){return new Promise(function(resolve,reject){if(window.gatsbyPluginGDPRCookiesTikTokPixelAdded)return resolve(true);/* eslint-disable */!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)));};};for(var i=0;i<ttq.methods.length;i++){ttq.setAndDefer(ttq,ttq.methods[i]);}ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++){ttq.setAndDefer(e,ttq.methods[n]);}return e;},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date(),ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e);};}(window,document,'ttq');/* eslint-enable */window.gatsbyPluginGDPRCookiesTikTokPixelAdded=true;resolve(true);});};exports.initializeTikTokPixel=function(options){if(!window.gatsbyPluginGDPRCookiesTikTokPixelInitialized&&getCookie(options.cookieName)==="true"&&validTikTokPixelId(options)){window.ttq.load(options.pixelId);window.gatsbyPluginGDPRCookiesTikTokPixelInitialized=true;}};exports.trackTikTokPixel=function(options){if(getCookie(options.cookieName)==="true"&&validTikTokPixelId(options)&&typeof window.fbq==="function"){window.fbq("track","PageView");window.ttq.page();}};

/***/ }),

/***/ 3040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HN": () => (/* binding */ B)
/* harmony export */ });
/* unused harmony exports MainImage, Placeholder, StaticImage, generateImageData, getImage, getImageData, getLowResolutionImageURL, getSrc, getSrcSet, withArtDirection */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6340);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2369);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=function(e){return console.warn(e);},c=function(e,t){return e-t;},h=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function g(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function p(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,d=e.formats,c=void 0===d?["auto","webp"]:d;return c=c.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:c,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||1.3333333333333333))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/1.3333333333333333):800),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:c}));}function m(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=p(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function f(e){var t,a=(e=p(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,c=e.options,m=e.width,f=e.height,b=e.filename,k=e.reporter,E=void 0===k?{warn:d}:k,M=e.backgroundColor,S=e.placeholderURL;if(a||E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=g(b)):i={width:m,height:f,format:(null==(t=i)?void 0:t.format)||g(b)||"auto"};var N=new Set(e.formats);(0===N.size||N.has("auto")||N.has(""))&&(N.delete("auto"),N.delete(""),N.add(i.format)),N.has("jpg")&&N.has("png")&&(E.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),N.delete("jpg"===i.format?"png":"jpg"));var x=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:d}:o,c=e.breakpoints,h=void 0===c?l:c,g=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(g.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+g.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,c=void 0===u?{warn:d}:u,h=a.width/a.height,g=v(void 0===l?s:l);if(i&&r){var p=y(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):800;var m=i;if(a.width<i||a.height<r){var f=a.width<i?"width":"height";c.warn("\nThe requested "+f+' "'+("width"===f?i:r)+'px" for the image '+t+" was larger than the actual image "+f+" of "+a[f]+"px. If possible, replace the current image with a larger one."),"width"===f?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:g.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}(e):"constrained"===i?w(e):"fullWidth"===i?w(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),I={sources:[]},W=e.sizes;W||(W=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}}(x.presentationWidth,o)),N.forEach(function(e){var t=x.sizes.map(function(t){var i=r(b,t,Math.round(t/x.aspectRatio),e,u,c);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;E.warn("["+a+"] The resolver for image "+b+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===x.unscaledWidth;})||t[0];i&&(I.fallback={src:i.src,srcSet:h(t),sizes:W});}else{var n;null==(n=I.sources)||n.push({srcSet:h(t),sizes:W,type:"image/"+e});}});var j={images:I,layout:o,backgroundColor:M};switch(S&&(j.placeholder={fallback:S}),o){case"fixed":j.width=x.presentationWidth,j.height=x.presentationHeight;break;case"fullWidth":j.width=1,j.height=1/x.aspectRatio;break;case"constrained":j.width=e.width||x.presentationWidth||1,j.height=(j.width||1)/x.aspectRatio;}return j;}var v=function(e){return Array.from(new Set([1].concat(e))).sort(c);};function w(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,d=e.layout,h=a.width/a.height,g=v(void 0===l?s:l);if(i&&r){var p=y(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(800,a.width))/h),i||(i=r*h);var m=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==d||t.includes(i)||t.push(i),{sizes:t=t.sort(c),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}function y(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var b=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),k=(/* unused pure expression or super */ null && (["images","placeholder"]));function E(){return true&&true;}var M=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},S=function(e){var t,a,i;return null==(t=M(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},N=function(e){var t,a,i;return null==(t=M(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function x(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,b);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),f(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function I(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,k),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var W,j=["src","srcSet","loading","alt","shouldLoad"],R=["fallback","sources","shouldLoad"],_=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,j);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},A=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,R),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};_.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool},A.displayName="Picture",A.propTypes={alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string}),sources:prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired}),prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired})]))};var O=["fallback"],T=function(t){var a=t.fallback,i=o(t,O);return a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",n({},i));};T.displayName="Placeholder",T.propTypes={fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sources:null==(W=A.propTypes)?void 0:W.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var z=function(t){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A,n({},t)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A,n({},t,{shouldLoad:!0}))));};z.displayName="MainImage",z.propTypes=A.propTypes;var L=["children"],q=function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},C=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+i+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},D=function(a){var i=a.children,r=o(a,L);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C,n({},r)),i,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q,null));},P=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],H=["style","className"],F=function(e){return e.replace(/\n/g,"");},B=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,P);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,M=u.placeholder,S=u.backgroundColor,N=function(e,t,a){var i={},r="gatsby-image-wrapper";return E()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(E()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),x=N.style,I=N.className,W=o(N,H),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?F(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:F(e.srcSet)});})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i,n({},W,{style:n({},x,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D,{layout:b,width:w,height:y},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return E()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(M,0,b,w,y,S,m,f))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),E()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},G=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],V=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,G);return s&&console.warn(s),r?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(B),U=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},X=new Set(["fixed","fullWidth","constrained"]),Y={src:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),alt:function(e,t,a){return e.alt||""===e.alt?prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:U,height:U,sizes:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),layout:function(e){if(void 0!==e.layout&&!X.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};V.displayName="StaticImage",V.propTypes=Y;

/***/ }),

/***/ 2369:
/***/ ((module) => {

"use strict";
const preserveCamelCase=string=>{let isLastCharLower=false;let isLastCharUpper=false;let isLastLastCharUpper=false;for(let i=0;i<string.length;i++){const character=string[i];if(isLastCharLower&&/[a-zA-Z]/.test(character)&&character.toUpperCase()===character){string=string.slice(0,i)+'-'+string.slice(i);isLastCharLower=false;isLastLastCharUpper=isLastCharUpper;isLastCharUpper=true;i++;}else if(isLastCharUpper&&isLastLastCharUpper&&/[a-zA-Z]/.test(character)&&character.toLowerCase()===character){string=string.slice(0,i-1)+'-'+string.slice(i-1);isLastLastCharUpper=isLastCharUpper;isLastCharUpper=false;isLastCharLower=true;}else{isLastCharLower=character.toLowerCase()===character&&character.toUpperCase()!==character;isLastLastCharUpper=isLastCharUpper;isLastCharUpper=character.toUpperCase()===character&&character.toLowerCase()!==character;}}return string;};const camelCase=(input,options)=>{if(!(typeof input==='string'||Array.isArray(input))){throw new TypeError('Expected the input to be `string | string[]`');}options=Object.assign({pascalCase:false},options);const postProcess=x=>options.pascalCase?x.charAt(0).toUpperCase()+x.slice(1):x;if(Array.isArray(input)){input=input.map(x=>x.trim()).filter(x=>x.length).join('-');}else{input=input.trim();}if(input.length===0){return'';}if(input.length===1){return options.pascalCase?input.toUpperCase():input.toLowerCase();}const hasUpperCase=input!==input.toLowerCase();if(hasUpperCase){input=preserveCamelCase(input);}input=input.replace(/^[_.\- ]+/,'').toLowerCase().replace(/[_.\- ]+(\w|$)/g,(_,p1)=>p1.toUpperCase()).replace(/\d+(\w|$)/g,m=>m.toUpperCase());return postProcess(input);};module.exports=camelCase;// TODO: Remove this for the next major release
module.exports["default"]=camelCase;

/***/ }),

/***/ 1391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ Animation)
});

// EXTERNAL MODULE: external "C:\\Users\\matth\\REPOS\\mjm-portfolio\\portfolio-react-gatsby\\node_modules\\react\\index.js"
var external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_ = __webpack_require__(6340);
var external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useCastedRef.tsx
function useCastedRef(){return external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().useRef();}
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useOnScreen.tsx
// https://usehooks.com/useOnScreen/
function useOnScreen(ref,threshold=0.25){const{0:isIntersecting,1:setIntersecting}=(0,external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_.useState)(false);(0,external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_.useEffect)(()=>{const element=ref.current;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setIntersecting(true);observer.unobserve(entry.target);}},{threshold});if(element&&element instanceof Element)observer.observe(element);return()=>{if(element&&element instanceof Element)observer.unobserve(element);};},[ref,threshold]);return isIntersecting;}
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Animation/index.tsx
function Animation(props){var _props$type,_props$timing,_props$duration,_props$delay,_props$iterationCount,_props$fillMode;const ref=useCastedRef();const onScreen=useOnScreen(ref);// Set defaults
const type=(_props$type=props.type)!==null&&_props$type!==void 0?_props$type:'fadeIn';const timing=(_props$timing=props.timing)!==null&&_props$timing!==void 0?_props$timing:'ease-out';const duration=(_props$duration=props.duration)!==null&&_props$duration!==void 0?_props$duration:200;const delay=(_props$delay=props.delay)!==null&&_props$delay!==void 0?_props$delay:0;const count=(_props$iterationCount=props.iterationCount)!==null&&_props$iterationCount!==void 0?_props$iterationCount:1;const fillMode=(_props$fillMode=props.fillMode)!==null&&_props$fillMode!==void 0?_props$fillMode:'backwards';return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{ref:ref,className:props.className,onAnimationEnd:props.onAnimationEnd,style:onScreen?{...props.style,animationName:`${type}`,animationTimingFunction:`${timing}`,animationDuration:`${duration}ms`,animationDelay:`${delay}ms`,animationIterationCount:`${count}`,animationFillMode:`${fillMode}`}:{...props.style,opacity:0}},props.children);}

/***/ }),

/***/ 5479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ Page)
});

// EXTERNAL MODULE: external "C:\\Users\\matth\\REPOS\\mjm-portfolio\\portfolio-react-gatsby\\node_modules\\react\\index.js"
var external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_ = __webpack_require__(6340);
var external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/context/index.tsx
var context = __webpack_require__(5400);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration.tsx
function useSiteConfiguration(){const data=(0,gatsby_browser_entry.useStaticQuery)(query);return data.allSettingsJson.settings[0].siteConfiguration;}const query="1094019748";
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Logo/style.module.css
// Exports
var Logo = "style-module--Logo--c7351";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Logo/index.tsx
function Logo_Logo(props){const siteConfiguration=useSiteConfiguration();const fontSize=props.fontSize||'2rem';const color=props.color||'var(--primary-color)';return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:Logo,"aria-roledescription":"logo",style:{fontSize,color}},siteConfiguration.logo.text);}
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Animation/index.tsx + 2 modules
var Animation = __webpack_require__(1391);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/SplashScreen/style.module.css
// Exports
var SplashScreen = "style-module--SplashScreen--bd73a";
var LogoWrapper = "style-module--LogoWrapper--040d0";
var Backdrop = "style-module--Backdrop--22a80";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/SplashScreen/index.tsx
function SplashScreen_SplashScreen(){const[shouldUnmount,setShouldUnmount]=external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().useState(false);const{dispatch}=(0,context/* useGlobalState */.j1)();return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Animation/* Animation */.f,{className:SplashScreen,type:shouldUnmount===false?'fadeIn':'fadeOut',duration:250,fillMode:"forwards",onAnimationEnd:()=>{if(shouldUnmount)dispatch({type:context/* ActionType.SetSplashScreenDone */.Us.SetSplashScreenDone,value:true});}},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Helmet.Helmet,{bodyAttributes:{class:'fixed'}}),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:LogoWrapper},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Animation/* Animation */.f,{className:Backdrop,type:"reduceHeight",delay:800,fillMode:"forwards",onAnimationEnd:()=>{// Wait 500ms and start unmounting the splash screen
setTimeout(()=>{setShouldUnmount(true);},500);}}),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Logo_Logo,{fontSize:"3rem",color:"var(--background-color)"})));}
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Footer/style.module.css
// Exports
var Footer = "style-module--Footer--a57f4";
var ContentWrapper = "style-module--ContentWrapper--e818c";
var Links = "style-module--Links--2e0f2";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Footer/index.tsx
function Footer_Footer(){const{globalState}=(0,context/* useGlobalState */.j1)();const siteConfiguration=useSiteConfiguration();const darkModeEnabled=globalState.theme===context/* Theme.Dark */.Q2.Dark;return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("footer",{className:Footer,style:{background:darkModeEnabled?'var(--background-color)':'var(--primary-color)',borderTop:darkModeEnabled?'3px solid var(--box-shadow-hover-color)':undefined}},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:ContentWrapper},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/","aria-label":"home"},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Logo_Logo,{fontSize:"1.5rem",color:darkModeEnabled?'var(--primary-color)':'var(--background-color)'})),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:Links},siteConfiguration.navigation.footer.map((linkObject,key)=>{return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{key:key,to:linkObject.url,"aria-label":linkObject.label,style:{color:darkModeEnabled?'var(--primary-color)':'var(--background-color)'}},linkObject.label);}))));}
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery.tsx
var useMediaQuery = __webpack_require__(8758);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Header/style.module.css
// Exports
var Header = "style-module--Header--9993b";
var style_module_ContentWrapper  = "style-module--ContentWrapper --5d8c4";
var Burger = "style-module--Burger--1ab74";
var TopNavigationBar = "style-module--TopNavigationBar--574b3";
var NavLink = "style-module--NavLink--94101";
var CtaButton = "style-module--CtaButton--cf786";
var SideBarWrapper = "style-module--SideBarWrapper--e7152";
var SideNavigationBar = "style-module--SideNavigationBar--57a7b";
var SideBarBackdrop = "style-module--SideBarBackdrop--fb470";
var Blurred = "style-module--Blurred--f203e";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Header/index.tsx
function Header_Header(){const[open,setOpen]=external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().useState(false);const siteConfiguration=useSiteConfiguration();const isDesktopBreakpoint=(0,useMediaQuery/* useMediaQuery */.a)('(min-width: 992px)');const navigationItems=/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement((external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default()).Fragment,null,siteConfiguration.navigation.header.map((linkObject,key)=>{return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{key:key,to:linkObject.url,className:NavLink,onClick:!isDesktopBreakpoint?()=>setOpen(!open):undefined},linkObject.label);}),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("a",{href:siteConfiguration.navigation.ctaButton.url,target:siteConfiguration.navigation.ctaButton.openNewTab?'_blank':undefined,rel:"noopener noreferrer",className:CtaButton,onClick:!isDesktopBreakpoint?()=>setOpen(!open):undefined},siteConfiguration.navigation.ctaButton.label));const sideNavigationBar=/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement((external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:Burger,onClick:()=>setOpen(!open)},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{style:open?{transform:'rotate(45deg)'}:undefined}),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{style:open?{transform:'translateX(20px)',opacity:0}:undefined}),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{style:open?{transform:'rotate(-45deg)'}:undefined})),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:SideBarWrapper,style:open?{transform:'translateX(0)',visibility:'visible'}:undefined,"aria-hidden":!open,tabIndex:open?1:-1},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("nav",{className:SideNavigationBar},navigationItems)),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:SideBarBackdrop,style:open?{display:'block'}:undefined}));const topNavigationBar=/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("nav",{className:TopNavigationBar},navigationItems);return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("header",{className:Header},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Helmet.Helmet,{bodyAttributes:{class:open?Blurred:undefined}}),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Animation/* Animation */.f,{className:style_module_ContentWrapper,type:"fadeDown"},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/","aria-label":"home"},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Logo_Logo,{fontSize:"2rem",color:"var(--primary-color"})),isDesktopBreakpoint?topNavigationBar:sideNavigationBar));}
// EXTERNAL MODULE: ./node_modules/react-cookie-consent/build/index.js
var build = __webpack_require__(2491);
var build_default = /*#__PURE__*/__webpack_require__.n(build);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-gdpr-cookies/index.js
var gatsby_plugin_gdpr_cookies = __webpack_require__(9024);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs
var index_modern = __webpack_require__(7896);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/style.module.css
// Exports
var CookieBar = "style-module--CookieBar--93100";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/index.tsx
// Uses the class names from the original package
function CookieBar_CookieBar(){const location=(0,index_modern.useLocation)();return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Animation/* Animation */.f,{className:CookieBar,type:"fadeUp",delay:1000},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement((build_default()),{cookieName:"gatsby-gdpr-google-analytics",buttonId:"confirm",buttonText:"Accept",declineButtonId:"decline",declineButtonText:"Decline",enableDeclineButton:true,disableStyles:true,onAccept:()=>(0,gatsby_plugin_gdpr_cookies/* initializeAndTrack */.v)(location)},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("p",null,"This website uses cookies \uD83C\uDF6A ")));}
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Layout/style.module.css
// Exports
var Layout = "style-module--Layout--b3aca";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Layout/index.tsx
function Layout_Layout(props){const{globalState}=(0,context/* useGlobalState */.j1)();const showSplashScreen=props.useSplashScreenAnimation&&!globalState.splashScreenDone;const darkModeEnabled=globalState.theme===context/* Theme.Dark */.Q2.Dark;const splashScreenView=/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement((external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Helmet.Helmet,{bodyAttributes:{'data-theme':context/* Theme.Light */.Q2.Light}}),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(SplashScreen_SplashScreen,null));const layoutView=/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement((external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Helmet.Helmet,{bodyAttributes:{'data-theme':darkModeEnabled?context/* Theme.Dark */.Q2.Dark:context/* Theme.Light */.Q2.Light}}),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:Layout},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Header_Header,null),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("main",null,props.children),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Footer_Footer,null),props.useCookieBar&&/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(CookieBar_CookieBar,null)));return showSplashScreen?splashScreenView:layoutView;}
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Page/index.tsx
function Page(props){const siteConfiguration=useSiteConfiguration();return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(context/* GlobalStateProvider */.MC,{defaultTheme:siteConfiguration.featureToggles.useDarkModeAsDefault?context/* Theme.Dark */.Q2.Dark:context/* Theme.Light */.Q2.Light,useDarkModeBasedOnUsersPreference:siteConfiguration.featureToggles.useDarkModeBasedOnUsersPreference,useSplashScreenAnimation:props.useSplashScreenAnimation||false},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Layout_Layout,{useSplashScreenAnimation:props.useSplashScreenAnimation||false,useCookieBar:siteConfiguration.featureToggles.useCookieBar},props.children));}

/***/ }),

/***/ 533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6340);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7896);
/* harmony import */ var _hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1379);
function Seo(props){const location=(0,_reach_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();const siteMetadata={...(0,_hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_3__/* .useSiteMetadata */ .$)(),...props};const thumbnailUrl=siteMetadata.thumbnail?(siteMetadata.siteUrl+siteMetadata.thumbnail.childImageSharp.original.src).replace(/([^:]\/)\/+/g,'$1'):undefined;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{title:siteMetadata.title,titleTemplate:props.useTitleTemplate?siteMetadata.titleTemplate:undefined,htmlAttributes:{lang:siteMetadata.language}},props.noIndex&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"robots",content:"noindex"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:siteMetadata.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:title",content:siteMetadata.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:site_name",content:siteMetadata.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:url",content:siteMetadata.siteUrl+location.pathname}),thumbnailUrl&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:image",content:thumbnailUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:description",content:siteMetadata.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"twitter:creator",content:siteMetadata.author}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"twitter:title",content:siteMetadata.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"twitter:description",content:siteMetadata.description}));}

/***/ }),

/***/ 5400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC": () => (/* binding */ GlobalStateProvider),
/* harmony export */   "Q2": () => (/* binding */ Theme),
/* harmony export */   "Us": () => (/* binding */ ActionType),
/* harmony export */   "j1": () => (/* binding */ useGlobalState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6340);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8758);
let Theme;(function(Theme){Theme["Light"]="lightTheme";Theme["Dark"]="darkTheme";})(Theme||(Theme={}));let ActionType;(function(ActionType){ActionType["SetTheme"]="SET_THEME";ActionType["SetSplashScreenDone"]="SET_SPLASH_SCREEN_DONE";})(ActionType||(ActionType={}));const GlobalStateContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);function GlobalStateProvider(props){const[globalState,dispatch]=react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(globalStateReducer,{theme:initializeTheme(props.defaultTheme,props.useDarkModeBasedOnUsersPreference),// If useSplashScreenAnimation=false, we skip the animation by setting the initial value to true
splashScreenDone:props.useSplashScreenAnimation?false:true});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GlobalStateContext.Provider,{value:{globalState,dispatch}},props.children);}function useGlobalState(){const context=react__WEBPACK_IMPORTED_MODULE_0___default().useContext(GlobalStateContext);if(context===undefined){throw new Error('useGlobalState must be used within a GlobalStateProvider');}return context;}function globalStateReducer(state,action){switch(action.type){case ActionType.SetTheme:{return{...state,theme:action.value};}case ActionType.SetSplashScreenDone:{return{...state,splashScreenDone:action.value};}default:{throw new Error(`Unhandled action type`);}}}function initializeTheme(defaultTheme,useDarkMode){const darkModeEnabled=(0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__/* .useMediaQuery */ .a)('(prefers-color-scheme: dark)',isMatch=>{const updatedTheme=isMatch?Theme.Dark:Theme.Light;document.body.setAttribute('data-theme',updatedTheme);});let initialTheme=defaultTheme;if(useDarkMode&&darkModeEnabled){initialTheme=Theme.Dark;}return initialTheme;}

/***/ }),

/***/ 8758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6340);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function useMediaQuery(query,callback){if(typeof window==='undefined'||typeof window.matchMedia==='undefined'){return false;}const mediaQuery=window.matchMedia(query);const[match,setMatch]=react__WEBPACK_IMPORTED_MODULE_0___default().useState(mediaQuery.matches);react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(()=>{function handleMatch(){setMatch(mediaQuery.matches);callback===null||callback===void 0?void 0:callback(mediaQuery.matches);}if(mediaQuery.addEventListener){mediaQuery.addEventListener('change',handleMatch);return()=>mediaQuery.removeEventListener('change',handleMatch);}else{// backwards compatibility
// https://betterprogramming.pub/using-window-matchmedia-in-react-8116eada2588
mediaQuery.addListener(handleMatch);return()=>mediaQuery.removeListener(handleMatch);}},[]);return match;}

/***/ }),

/***/ 1379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useSiteMetadata)
/* harmony export */ });
/* unused harmony export query */
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7076);
function useSiteMetadata(){const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)(query);return data.allSettingsJson.settings[0].siteMetadata;}const query="4239582004";

/***/ }),

/***/ 7719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ArticleTemplate)
});

// EXTERNAL MODULE: external "C:\\Users\\matth\\REPOS\\mjm-portfolio\\portfolio-react-gatsby\\node_modules\\react\\index.js"
var external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_ = __webpack_require__(6340);
var external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Page/index.tsx + 13 modules
var Page = __webpack_require__(5479);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Seo/index.tsx
var Seo = __webpack_require__(533);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata.tsx
var useSiteMetadata = __webpack_require__(1379);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/AuthorSnippet/style.module.css
// Exports
var AuthorSnippet = "style-module--AuthorSnippet--7c737";
var Avatar = "style-module--Avatar--1e2ce";
var Description = "style-module--Description--1bbd7";
var WrittenBy = "style-module--WrittenBy--181a0";
var Bio = "style-module--Bio--2fd8d";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/AuthorSnippet/index.tsx
function AuthorSnippet_AuthorSnippet(){const{author,avatar,bio}=(0,useSiteMetadata/* useSiteMetadata */.$)();return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:AuthorSnippet},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{image:avatar.childImageSharp.gatsbyImageData,alt:author,className:Avatar}),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:Description},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("span",{className:WrittenBy},"Written By ",/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("u",null,author)),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("p",{className:Bio},bio)));}
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/templates/Article/style.module.css
// Exports
var Breadcrumb = "style-module--Breadcrumb--15487";
var BackArrow = "style-module--BackArrow--f76ce";
var Article = "style-module--Article--a4577";
var Header = "style-module--Header--1fafc";
var Banner = "style-module--Banner--cbdac";
var Body = "style-module--Body--9dac7";
var Footer = "style-module--Footer--d408f";
var Category = "style-module--Category--d42a1";
var Details = "style-module--Details--92676";
var ReadingTime = "style-module--ReadingTime--45206";
var BannerImage = "style-module--BannerImage--71c8d";
var BannerCaption = "style-module--BannerCaption--55184";
var Content = "style-module--Content--a6403";
var Keyword = "style-module--Keyword--9a2c3";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/templates/Article/index.tsx
// Reference to the local prismjs theme (Modified)
__webpack_require__(571);function ArticleTemplate(props){const article=props.pageContext.article;return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement((external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Seo/* Seo */.p,{title:article.title,description:article.description||undefined,useTitleTemplate:true}),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(Page/* Page */.T,null,/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("article",{className:Article},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:Breadcrumb},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:props.pageContext.listingPagePath,title:"Back To Article Listing"},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("span",{className:BackArrow},"\u276E"),"All Articles")),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("section",{className:Header},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("span",{className:Category},article.categories.join(' / ')),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("h1",null,article.title),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:Details},article.date,/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("span",{className:ReadingTime},article.readingTime.text))),article.banner&&article.banner.src&&/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("section",{className:Banner},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{image:article.banner.src.childImageSharp.gatsbyImageData,alt:article.banner.alt||`Image for ${article.title}`,imgClassName:BannerImage}),article.banner.caption&&/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("span",{className:BannerCaption,dangerouslySetInnerHTML:{__html:article.banner.caption}})),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("section",{className:Body},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:Content,dangerouslySetInnerHTML:{__html:article.body}}),article.keywords&&article.keywords.map((keyword,key)=>{return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("span",{key:key,className:Keyword},keyword);})),/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("section",{className:Footer},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement(AuthorSnippet_AuthorSnippet,null)))));}

/***/ }),

/***/ 571:
/***/ (() => {



/***/ }),

/***/ 2491:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! For license information please see index.js.LICENSE.txt */
!(function () {
  var e = {
      808: function (e, t, n) {
        var o, r, i;
        void 0 ===
          (r =
            "function" ==
            typeof (o = i =
              function () {
                function e() {
                  for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) t[o] = n[o];
                  }
                  return t;
                }
                function t(e) {
                  return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                }
                return (function n(o) {
                  function r() {}
                  function i(t, n, i) {
                    if ("undefined" != typeof document) {
                      "number" == typeof (i = e({ path: "/" }, r.defaults, i)).expires &&
                        (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
                        (i.expires = i.expires ? i.expires.toUTCString() : "");
                      try {
                        var c = JSON.stringify(n);
                        /^[\{\[]/.test(c) && (n = c);
                      } catch (e) {}
                      (n = o.write
                        ? o.write(n, t)
                        : encodeURIComponent(String(n)).replace(
                            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                            decodeURIComponent
                          )),
                        (t = encodeURIComponent(String(t))
                          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                          .replace(/[\(\)]/g, escape));
                      var l = "";
                      for (var a in i)
                        i[a] && ((l += "; " + a), !0 !== i[a] && (l += "=" + i[a].split(";")[0]));
                      return (document.cookie = t + "=" + n + l);
                    }
                  }
                  function c(e, n) {
                    if ("undefined" != typeof document) {
                      for (
                        var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0;
                        c < i.length;
                        c++
                      ) {
                        var l = i[c].split("="),
                          a = l.slice(1).join("=");
                        n || '"' !== a.charAt(0) || (a = a.slice(1, -1));
                        try {
                          var s = t(l[0]);
                          if (((a = (o.read || o)(a, s) || t(a)), n))
                            try {
                              a = JSON.parse(a);
                            } catch (e) {}
                          if (((r[s] = a), e === s)) break;
                        } catch (e) {}
                      }
                      return e ? r[e] : r;
                    }
                  }
                  return (
                    (r.set = i),
                    (r.get = function (e) {
                      return c(e, !1);
                    }),
                    (r.getJSON = function (e) {
                      return c(e, !0);
                    }),
                    (r.remove = function (t, n) {
                      i(t, "", e(n, { expires: -1 }));
                    }),
                    (r.defaults = {}),
                    (r.withConverter = n),
                    r
                  );
                })(function () {});
              })
              ? o.call(t, n, t, e)
              : o) || (e.exports = r),
          (e.exports = i());
      },
      703: function (e, t, n) {
        "use strict";
        var o = n(414);
        function r() {}
        function i() {}
        (i.resetWarningCache = r),
          (e.exports = function () {
            function e(e, t, n, r, i, c) {
              if (c !== o) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: r,
            };
            return (n.PropTypes = n), n;
          });
      },
      697: function (e, t, n) {
        e.exports = n(703)();
      },
      414: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var o in t)
        n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var o = {};
  !(function () {
    "use strict";
    n.r(o),
      n.d(o, {
        Cookies: function () {
          return l();
        },
        OPTIONS: function () {
          return m;
        },
        SAME_SITE_OPTIONS: function () {
          return g;
        },
        VISIBLE_OPTIONS: function () {
          return S;
        },
        default: function () {
          return B;
        },
        getCookieConsentValue: function () {
          return C;
        },
        resetCookieConsentValue: function () {
          return k;
        },
      });
    const e = __webpack_require__(6340);
    var t = n.n(e),
      r = n(697),
      i = n.n(r),
      c = n(808),
      l = n.n(c);
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var s = ["children"];
    function u() {
      return (u =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
    }
    function p(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? p(Object(n), !0).forEach(function (t) {
              h(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : p(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function b(e, t) {
      return (b =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function y(e, t) {
      if (t && ("object" === a(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined");
      return v(e);
    }
    function v(e) {
      if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function O(e) {
      return (O = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function h(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var m = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
      g = { STRICT: "strict", LAX: "lax", NONE: "none" },
      S = { HIDDEN: "hidden", SHOW: "show", BY_COOKIE_VALUE: "byCookieValue" },
      C = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
          t = l().get(e);
        return void 0 === t && (t = l().get(x(e))), t;
      },
      k = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w;
        l().remove(e);
      },
      x = function (e) {
        return "".concat(e, "-legacy");
      },
      w = "CookieConsent",
      j = function (e) {
        var t = e.condition,
          n = e.wrapper,
          o = e.children;
        return t ? n(o) : o;
      },
      T = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && b(e, t);
        })(a, e);
        var n,
          o,
          r,
          i,
          c =
            ((r = a),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = O(r);
              if (i) {
                var n = O(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return y(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, a),
            h(v((t = c.call(this, e))), "handleScroll", function () {
              var e = t.props.acceptOnScrollPercentage,
                n = document.documentElement,
                o = document.body,
                r = "scrollTop",
                i = "scrollHeight";
              ((n[r] || o[r]) / ((n[i] || o[i]) - n.clientHeight)) * 100 > e && t.accept(!0);
            }),
            h(v(t), "removeScrollListener", function () {
              t.props.acceptOnScroll && window.removeEventListener("scroll", t.handleScroll);
            }),
            (t.state = {
              visible: !1,
              style: {
                alignItems: "baseline",
                background: "#353535",
                color: "white",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                left: "0",
                position: "fixed",
                width: "100%",
                zIndex: "999",
              },
              buttonStyle: {
                background: "#ffd42d",
                border: "0",
                borderRadius: "0px",
                boxShadow: "none",
                color: "black",
                cursor: "pointer",
                flex: "0 0 auto",
                padding: "5px 10px",
                margin: "15px",
              },
              declineButtonStyle: {
                background: "#c12a2a",
                border: "0",
                borderRadius: "0px",
                boxShadow: "none",
                color: "#e5e5e5",
                cursor: "pointer",
                flex: "0 0 auto",
                padding: "5px 10px",
                margin: "15px",
              },
              contentStyle: { flex: "1 0 300px", margin: "15px" },
              overlayStyle: {
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                zIndex: "999",
                backgroundColor: "rgba(0,0,0,0.3)",
              },
            }),
            t
          );
        }
        return (
          (n = a),
          (o = [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props.debug;
                (void 0 === this.getCookieValue() || e) &&
                  (this.setState({ visible: !0 }),
                  this.props.acceptOnScroll &&
                    window.addEventListener("scroll", this.handleScroll, { passive: !0 }));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeScrollListener();
              },
            },
            {
              key: "accept",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  t = this.props,
                  n = t.cookieName,
                  o = t.cookieValue,
                  r = t.hideOnAccept,
                  i = t.onAccept;
                this.setCookie(n, o),
                  i(null != e && e),
                  r && (this.setState({ visible: !1 }), this.removeScrollListener());
              },
            },
            {
              key: "decline",
              value: function () {
                var e = this.props,
                  t = e.cookieName,
                  n = e.declineCookieValue,
                  o = e.hideOnDecline,
                  r = e.onDecline;
                e.setDeclineCookie && this.setCookie(t, n),
                  r(),
                  o && this.setState({ visible: !1 });
              },
            },
            {
              key: "setCookie",
              value: function (e, t) {
                var n = this.props,
                  o = n.extraCookieOptions,
                  r = n.expires,
                  i = n.sameSite,
                  c = this.props.cookieSecurity;
                void 0 === c && (c = !location || "https:" === location.protocol);
                var a = f(f({ expires: r }, o), {}, { sameSite: i, secure: c });
                i === g.NONE && l().set(x(e), t, a), l().set(e, t, a);
              },
            },
            {
              key: "getCookieValue",
              value: function () {
                var e = this.props.cookieName;
                return C(e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                switch (this.props.visible) {
                  case S.HIDDEN:
                    return null;
                  case S.BY_COOKIE_VALUE:
                    if (!this.state.visible) return null;
                }
                var n = this.props,
                  o = n.location,
                  r = n.style,
                  i = n.buttonStyle,
                  c = n.declineButtonStyle,
                  l = n.contentStyle,
                  a = n.disableStyles,
                  s = n.buttonText,
                  p = n.declineButtonText,
                  d = n.containerClasses,
                  b = n.contentClasses,
                  y = n.buttonClasses,
                  v = n.buttonWrapperClasses,
                  O = n.declineButtonClasses,
                  h = n.buttonId,
                  g = n.declineButtonId,
                  C = n.disableButtonStyles,
                  k = n.enableDeclineButton,
                  x = n.flipButtons,
                  w = n.ButtonComponent,
                  T = n.overlay,
                  B = n.overlayClasses,
                  E = n.overlayStyle,
                  P = n.ariaAcceptLabel,
                  D = n.ariaDeclineLabel,
                  I = {},
                  _ = {},
                  N = {},
                  A = {},
                  L = {};
                switch (
                  (a
                    ? ((I = u({}, r)),
                      (_ = u({}, i)),
                      (N = u({}, c)),
                      (A = u({}, l)),
                      (L = u({}, E)))
                    : ((I = u({}, f(f({}, this.state.style), r))),
                      (A = u({}, f(f({}, this.state.contentStyle), l))),
                      (L = u({}, f(f({}, this.state.overlayStyle), E))),
                      C
                        ? ((_ = u({}, i)), (N = u({}, c)))
                        : ((_ = u({}, f(f({}, this.state.buttonStyle), i))),
                          (N = u({}, f(f({}, this.state.declineButtonStyle), c))))),
                  o)
                ) {
                  case m.TOP:
                    I.top = "0";
                    break;
                  case m.BOTTOM:
                    I.bottom = "0";
                }
                var R = [];
                return (
                  k &&
                    R.push(
                      t().createElement(
                        w,
                        {
                          key: "declineButton",
                          style: N,
                          className: O,
                          id: g,
                          "aria-label": D,
                          onClick: function () {
                            e.decline();
                          },
                        },
                        p
                      )
                    ),
                  R.push(
                    t().createElement(
                      w,
                      {
                        key: "acceptButton",
                        style: _,
                        className: y,
                        id: h,
                        "aria-label": P,
                        onClick: function () {
                          e.accept();
                        },
                      },
                      s
                    )
                  ),
                  x && R.reverse(),
                  t().createElement(
                    j,
                    {
                      condition: T,
                      wrapper: function (e) {
                        return t().createElement("div", { style: L, className: B }, e);
                      },
                    },
                    t().createElement(
                      "div",
                      { className: "".concat(d), style: I },
                      t().createElement("div", { style: A, className: b }, this.props.children),
                      t().createElement(
                        "div",
                        { className: "".concat(v) },
                        R.map(function (e) {
                          return e;
                        })
                      )
                    )
                  )
                );
              },
            },
          ]) && d(n.prototype, o),
          a
        );
      })(e.Component);
    (T.propTypes = {
      location: i().oneOf(
        Object.keys(m).map(function (e) {
          return m[e];
        })
      ),
      visible: i().oneOf(
        Object.keys(S).map(function (e) {
          return S[e];
        })
      ),
      sameSite: i().oneOf(
        Object.keys(g).map(function (e) {
          return g[e];
        })
      ),
      style: i().object,
      buttonStyle: i().object,
      declineButtonStyle: i().object,
      contentStyle: i().object,
      children: i().any,
      disableStyles: i().bool,
      hideOnAccept: i().bool,
      hideOnDecline: i().bool,
      onAccept: i().func,
      onDecline: i().func,
      buttonText: i().oneOfType([i().string, i().func, i().element]),
      declineButtonText: i().oneOfType([i().string, i().func, i().element]),
      cookieName: i().string,
      cookieValue: i().oneOfType([i().string, i().bool, i().number]),
      declineCookieValue: i().oneOfType([i().string, i().bool, i().number]),
      setDeclineCookie: i().bool,
      debug: i().bool,
      expires: i().number,
      containerClasses: i().string,
      contentClasses: i().string,
      buttonClasses: i().string,
      buttonWrapperClasses: i().string,
      declineButtonClasses: i().string,
      buttonId: i().string,
      declineButtonId: i().string,
      extraCookieOptions: i().object,
      disableButtonStyles: i().bool,
      enableDeclineButton: i().bool,
      flipButtons: i().bool,
      ButtonComponent: i().elementType,
      cookieSecurity: i().bool,
      overlay: i().bool,
      overlayClasses: i().string,
      overlayStyle: i().object,
      ariaAcceptLabel: i().string,
      ariaDeclineLabel: i().string,
      acceptOnScroll: i().bool,
      acceptOnScrollPercentage: i().number,
    }),
      (T.defaultProps = {
        disableStyles: !1,
        hideOnAccept: !0,
        hideOnDecline: !0,
        location: m.BOTTOM,
        visible: S.BY_COOKIE_VALUE,
        onAccept: function () {},
        onDecline: function () {},
        cookieName: w,
        cookieValue: !0,
        declineCookieValue: !1,
        setDeclineCookie: !0,
        buttonText: "I understand",
        declineButtonText: "I decline",
        debug: !1,
        expires: 365,
        containerClasses: "CookieConsent",
        contentClasses: "",
        buttonClasses: "",
        buttonWrapperClasses: "",
        declineButtonClasses: "",
        buttonId: "rcc-confirm-button",
        declineButtonId: "rcc-decline-button",
        extraCookieOptions: {},
        disableButtonStyles: !1,
        enableDeclineButton: !1,
        flipButtons: !1,
        sameSite: g.LAX,
        ButtonComponent: function (e) {
          var n = e.children,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                o,
                r = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    o,
                    r = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (n = i[o]),
                    t.indexOf(n) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
              }
              return r;
            })(e, s);
          return t().createElement("button", o, n);
        },
        overlay: !1,
        overlayClasses: "",
        ariaAcceptLabel: "Accept cookies",
        ariaDeclineLabel: "Decline cookies",
        acceptOnScroll: !1,
        acceptOnScrollPercentage: 25,
      });
    const B = T;
  })(),
    (module.exports = o);
})();


/***/ })

};
;
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-index-tsx.js.map