exports.id = 965;
exports.ids = [965];
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

/***/ 4443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Section_Section)
});

// EXTERNAL MODULE: external "C:\\Users\\matth\\REPOS\\mjm-portfolio\\portfolio-react-gatsby\\node_modules\\react\\index.js"
var external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_ = __webpack_require__(6340);
var external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/style.module.css
// Exports
var Section = "style-module--Section--1d871";
var Heading = "style-module--Heading--2c002";
var ContentWrapper  = "style-module--ContentWrapper --36dde";

;// CONCATENATED MODULE: ./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/index.tsx
function Section_Section(props){let classList;if(props.additionalClasses){classList=props.additionalClasses.concat(ContentWrapper).join(' ');}else{classList=ContentWrapper;}return/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("section",{id:props.anchor,className:Section},/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("div",{className:classList},props.heading&&/*#__PURE__*/external_C_Users_matth_REPOS_mjm_portfolio_portfolio_react_gatsby_node_modules_react_index_js_default().createElement("h3",{className:Heading},props.heading),props.children));}

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

/***/ 5577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6340);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5479);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4443);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(533);
function NotFoundPage(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_3__/* .Seo */ .p,{title:"404: Not found",noIndex:true}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Page__WEBPACK_IMPORTED_MODULE_1__/* .Page */ .T,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .$,{heading:"Not Found",anchor:"404"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"You just hit a route that doesn't exist... the sadness."))));}

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
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-pages-404-tsx.js.map