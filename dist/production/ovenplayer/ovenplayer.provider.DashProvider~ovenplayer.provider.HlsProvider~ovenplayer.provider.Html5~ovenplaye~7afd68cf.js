/*! For license information please see ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{393:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n(9));t.extractVideoElement=function(e){return o.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!(!e||!e.isDynamic)&&e.isDynamic()},t.errorTrigger=function(e,t){t&&(t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e))},t.pickCurrentSource=function(e,t,n){var r=Math.max(0,t);if(e)for(var o=0;o<e.length;o++)if(e[o].default&&(r=o),n.getSourceLabel()&&e[o].label===n.getSourceLabel())return o;return r}},394:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(395)),o=l(n(93)),a=l(n(398)),i=n(393),u=n(1);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){OvenPlayerConsole.log("CORE loaded. ");var l={};(0,o.default)(l);var s=!1,c=e.element,g=null,E=null,d=!1;e.adTagUrl&&(g=(0,r.default)(c,l,t,e.adTagUrl)),E=(0,a.default)(c,e.mse,l,g?g.videoEndedCallback:null),c.playbackRate=c.defaultPlaybackRate=t.getPlaybackRate();var f=function(r){var o=e.sources[e.currentSource];if(e.framerate=o.framerate,e.framerate||t.setTimecodeMode(!0),n)n(o,r);else{OvenPlayerConsole.log("source loaded : ",o,"lastPlayPosition : "+r);var a=c.src,i=document.createElement("source");i.src=o.file,i.src!==a?(c.append(i),a&&c.load()):0===r&&c.currentTime>0&&l.seek(r),r>0&&(l.seek(r),t.isAutoStart()||l.play()),t.isAutoStart()&&l.play()}};return l.getName=function(){return e.name},l.canSeek=function(){return e.canSeek},l.setCanSeek=function(t){e.canSeek=t},l.isSeeking=function(){return e.seeking},l.setSeeking=function(t){e.seeking=t},l.setState=function(t){if(e.state!==t){var n=e.state;if(n===u.STATE_AD_PLAYING&&(t===u.STATE_ERROR||t===u.STATE_IDLE))return!1;if(g&&g.isAutoPlaySupportCheckTime());else{switch(t){case u.STATE_COMPLETE:l.trigger(u.PLAYER_COMPLETE);break;case u.STATE_PAUSED:l.trigger(u.PLAYER_PAUSE,{prevState:e.state,newstate:u.STATE_PAUSED});break;case u.STATE_AD_PAUSED:l.trigger(u.PLAYER_PAUSE,{prevState:e.state,newstate:u.STATE_AD_PAUSED});break;case u.STATE_PLAYING:l.trigger(u.PLAYER_PLAY,{prevState:e.state,newstate:u.STATE_PLAYING});case u.STATE_AD_PLAYING:l.trigger(u.PLAYER_PLAY,{prevState:e.state,newstate:u.STATE_AD_PLAYING})}e.state=t,l.trigger(u.PLAYER_STATE,{prevstate:n,newstate:e.state})}}},l.getState=function(){return e.state},l.setBuffer=function(t){e.buffer=t},l.getBuffer=function(){return e.buffer},l.getDuration=function(){return c.duration===1/0||(0,i.separateLive)(e.mse)?1/0:c.duration},l.getPosition=function(){return c?c.currentTime:0},l.setVolume=function(e){if(!c)return!1;c.volume=e/100},l.getVolume=function(){return c?100*c.volume:0},l.setMute=function(e){return!!c&&(void 0===e?(c.muted=!c.muted,l.trigger(u.CONTENT_MUTE,{mute:c.muted})):(c.muted=e,l.trigger(u.CONTENT_MUTE,{mute:c.muted})),c.muted)},l.getMute=function(){return!!c&&c.muted},l.preload=function(n,r){return e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),f(r||0),new Promise(function(e,n){t.isMute()&&l.setMute(!0),t.getVolume()&&l.setVolume(t.getVolume()),e()})},l.load=function(n){e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),f(e.sources.starttime||0)},l.play=function(){if(!c)return!1;if(d)return!1;if(d=!0,l.getState()!==u.STATE_PLAYING)if(g&&g.isActive()||g&&!g.started())g.play().then(function(e){d=!1}).catch(function(e){d=!1,console.log(e)});else if(l.getName()===u.PROVIDER_DASH)g&&!s&&(e.mse.attachView(c),s=!0),setTimeout(function(){var e=c.play();void 0!==e&&e.then(function(e){d=!1}).catch(function(e){setTimeout(function(){d=!1,l.play()},100)})},500);else{var t=c.play();void 0!==t&&t.then(function(e){d=!1}).catch(function(e){setTimeout(function(){d=!1,l.play()},100)})}},l.pause=function(){if(!c)return!1;l.getState()===u.STATE_PLAYING?c.pause():l.getState()===u.STATE_AD_PLAYING&&g.pause()},l.seek=function(e){if(!c)return!1;c.currentTime=e},l.setPlaybackRate=function(e){return!!c&&(l.trigger(u.PLAYBACK_RATE_CHANGED,{playbackRate:e}),c.playbackRate=c.defaultPlaybackRate=e)},l.getPlaybackRate=function(){return c?c.playbackRate:0},l.getSources=function(){return c?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},l.getCurrentSource=function(){return e.currentSource},l.setCurrentSource=function(n,r){return e.currentSource!==n&&(n>-1&&e.sources&&e.sources.length>n?(OvenPlayerConsole.log("source changed : "+n),e.currentSource=n,l.trigger(u.CONTENT_SOURCE_CHANGED,{currentSource:n}),t.setSourceLabel(e.sources[n].label),r&&f(c.currentTime||0),l.setState(u.STATE_IDLE),e.currentSource):void 0)},l.getQualityLevels=function(){return c?e.qualityLevels:[]},l.getCurrentQuality=function(){return c?e.currentQuality:null},l.setCurrentQuality=function(e){},l.isAutoQuality=function(){},l.setAutoQuality=function(e){},l.getFramerate=function(){return e.framerate},l.setFramerate=function(t){return e.framerate=t},l.seekFrame=function(t){var n=e.framerate,r=(c.currentTime*n+t)/n;r+=1e-5,l.pause(),l.seek(r)},l.stop=function(){if(!c)return!1;for(OvenPlayerConsole.log("CORE : stop() "),c.removeAttribute("preload"),c.removeAttribute("src");c.firstChild;)c.removeChild(c.firstChild);l.pause(),l.setState(u.STATE_IDLE)},l.destroy=function(){if(!c)return!1;l.stop(),E.destroy(),g&&g.destroy(),l.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},l.super=function(e){var t=l[e];return function(){return t.apply(l,arguments)}},l}},395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(396)),o=i(n(7)),a=(n(393),n(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n,i){var u=google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,l=google.ima.AdErrorEvent.Type.AD_ERROR,s={},c=!1,g={started:!1,active:!1,isVideoEnded:!1,checkAutoplayStart:!0},E=!1,d=!1;google.ima.settings.setLocale("ko"),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0);var f=null,T=null,A=null,v=null,S=null,p=function(e){console.log(e.getError().getVastErrorCode(),e.getError().getMessage());var n=e.getError().getInnerError();n&&console.log(n.getErrorCode(),n.getMessage()),A&&A.destroy(),g.active=!1,g.started=!0,t.play()},y=function(n){var o=new google.ima.AdsRenderingSettings;o.restoreCustomPlaybackStateOnAdBreakComplete=!0,A=n.getAdsManager(e,o),v=(0,r.default)(A,t,g,p),t.on(a.CONTENT_VOLUME,function(e){e.mute?A.setVolume(0):A.setVolume(e.volume/100)},s),c=!0};function m(){OvenPlayerConsole.log("AutoPlay Support : ","autoplayAllowed",E,"autoplayRequiresMuted",d),(S=new google.ima.AdsRequest).forceNonLinearFullSlot=!1,S.setAdWillAutoPlay(E),S.setAdWillPlayMuted(d),S.adTagUrl=i,T.requestAds(S)}return f=new google.ima.AdDisplayContainer(function(){var e=document.createElement("div");return e.setAttribute("class","ovp-ads"),e.setAttribute("id","ovp-ads"),n.getContainer().append(e),e}(),e),(T=new google.ima.AdsLoader(f)).addEventListener(u,y,!1),T.addEventListener(l,p,!1),function(){if(!e.play)return E=!0,d=!1,g.checkAutoplayStart=!1,m(),!1;var t=e.play();void 0!==t?t.then(function(){e.pause(),E=!0,d=!1,g.checkAutoplayStart=!1,m()}).catch(function(){e.pause(),E=!1,d=!1,g.checkAutoplayStart=!1,m()}):(e.pause(),E=!0,d=!1,g.checkAutoplayStart=!1,m())}(),s.isActive=function(){return g.active},s.started=function(){return g.started},s.play=function(){if(g.started)return new Promise(function(e,t){try{return A.resume(),e()}catch(e){return t(e)}});var t=0;return new Promise(function(r,o){!function a(){return t++,c?n.isAutoStart()&&!E?(E=!0,g.started=!1,o(new Error("autoplayNotAllowed"))):("iOS"!==n.getBrowser().os&&"Android"!==n.getBrowser().os||e.load(),f.initialize(),A.init("100%","100%",google.ima.ViewMode.NORMAL),A.start(),g.started=!0,r()):t<300?void setTimeout(a,100):o(new Error("admanagerLoadingTimeout"))}()})},s.pause=function(){A.pause()},s.videoEndedCallback=function(e){v.isAllAdComplete()||!v.isLinearAd()?e():(g.isVideoEnded=!0,T.contentComplete())},s.isAutoPlaySupportCheckTime=function(){return g.checkAutoplayStart},s.destroy=function(){T&&(T.removeEventListener(u,y),T.removeEventListener(l,p)),A&&A.destroy(),f&&f.destroy(),v&&v.destroy();var e=(0,o.default)(n.getContainer()).find(".ovp-ads");e&&e.remove(),t.off(a.CONTENT_VOLUME,null,s)},s}},396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(n(7));var r=n(1);t.default=function(e,t,n,o){var a={},i={},u=null,l=google.ima.AdEvent.Type.AD_BUFFERING,s=google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,c=google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,g=google.ima.AdErrorEvent.Type.AD_ERROR,E=google.ima.AdEvent.Type.ALL_ADS_COMPLETED,d=google.ima.AdEvent.Type.CLICK,f=google.ima.AdEvent.Type.SKIPPED,T=google.ima.AdEvent.Type.COMPLETE,A=google.ima.AdEvent.Type.FIRST_QUARTILE,v=google.ima.AdEvent.Type.LOADED,S=google.ima.AdEvent.Type.MIDPOINT,p=google.ima.AdEvent.Type.PAUSED,y=google.ima.AdEvent.Type.RESUMED,m=google.ima.AdEvent.Type.STARTED,_=google.ima.AdEvent.Type.USER_CLOSE,L=google.ima.AdEvent.Type.THIRD_QUARTILE,P=!1,O=null;return i[s]=function(e){OvenPlayerConsole.log(e.type),n.started&&(n.active=!0,t.pause())},i[c]=function(e){OvenPlayerConsole.log(e.type),n.active=!1,!n.started||0!==t.getPosition()&&n.isVideoEnded||t.play()},i[g]=o,i[E]=function(e){console.log("ALL_ADS_COMPLETED"),OvenPlayerConsole.log(e.type),P=!0,n.isVideoEnded&&t.setState(r.STATE_COMPLETE)},i[d]=function(e){OvenPlayerConsole.log(e.type)},i[A]=function(e){OvenPlayerConsole.log(e.type)},i[l]=function(e){console.log("AD_BUFFERING"),OvenPlayerConsole.log("AD_BUFFERING",e.type)},i[v]=function(n){console.log("LOADED"),OvenPlayerConsole.log(n.type);var o=e.getRemainingTime(),a=n.getAd();t.trigger(r.STATE_AD_LOADED,{remaining:o,isLinear:a.isLinear()})},i[S]=function(e){OvenPlayerConsole.log(e.type)},i[p]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PAUSED)},i[y]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PLAYING)},i[m]=function(o){console.log("STARTED"),OvenPlayerConsole.log(o.type);var a=o.getAd();O=a;var i={isLinear:a.isLinear(),duration:a.getDuration(),skipTimeOffset:a.getSkipTimeOffset()};t.trigger(r.AD_CHANGED,i),a.isLinear()?(t.setState(r.STATE_AD_PLAYING),n.started=!0,u=setInterval(function(){var n=e.getRemainingTime(),o=a.getDuration();t.trigger(r.AD_TIME,{duration:o,skipTimeOffset:a.getSkipTimeOffset(),remaining:n,position:o-n,skippable:e.getAdSkippableState()})},300)):t.play()},i[T]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},i[f]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},i[_]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},i[L]=function(e){OvenPlayerConsole.log(e.type)},Object.keys(i).forEach(function(t){e.removeEventListener(t,i[t]),e.addEventListener(t,i[t])}),a.setAdCompleteCallback=function(e){},a.isAllAdComplete=function(){return P},a.isLinearAd=function(){return!O||O.isLinear()},a.destroy=function(){OvenPlayerConsole.log("AdsEventListener : destroy()"),t.trigger(r.STATE_AD_COMPLETE),Object.keys(i).forEach(function(t){e.removeEventListener(t,i[t])})},a}},398:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(393);t.default=function(e,t,n,a){var i={};OvenPlayerConsole.log("EventListener loaded.",e,n);var u={},l=-1,s=e;return i.canplay=function(){n.setCanSeek(!0),n.trigger(r.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},i.durationchange=function(){i.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},i.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),n.getState()!==r.STATE_IDLE&&n.getState()!==r.STATE_COMPLETE&&(a?a(function(){n.setState(r.STATE_COMPLETE)}):n.setState(r.STATE_COMPLETE))},i.loadeddata=function(){},i.loadedmetadata=function(){var e=s.duration===1/0||(0,o.separateLive)(t),a=n.getSources(),i=n.getCurrentSource(),u=i>-1?a[i].type:"",l={duration:e?1/0:s.duration,type:u};OvenPlayerConsole.log("EventListener : on loadedmetadata",l),n.trigger(r.CONTENT_META,l)},i.pause=function(){return n.getState()!==r.STATE_COMPLETE&&n.getState()!==r.STATE_ERROR&&!s.ended&&!s.error&&s.currentTime!==s.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void n.setState(r.STATE_PAUSED))},i.play=function(){l=-1,s.paused||n.getState()===r.STATE_PLAYING||n.setState(r.STATE_LOADING)},i.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),l<0&&n.setState(r.STATE_PLAYING)},i.progress=function(){var e=s.buffered;if(!e)return!1;var t=s.duration,o=s.currentTime,a=function(e,t,n){return Math.max(Math.min(e,n),t)}((e.length>0?e.end(e.length-1):0)/t,0,1);n.setBuffer(100*a),n.trigger(r.CONTENT_BUFFER,{bufferPercent:100*a,position:o,duration:t}),OvenPlayerConsole.log("EventListener : on progress",100*a)},i.timeupdate=function(){var e=s.currentTime,t=s.duration;isNaN(t)||(n.isSeeking()||s.paused||n.getState()!==r.STATE_STALLED&&n.getState()!==r.STATE_LOADING&&n.getState()!==r.STATE_AD_PLAYING||function(e,t){return e.toFixed(2)===t.toFixed(2)}(l,e)||(l=-1,n.setState(r.STATE_PLAYING)),(n.getState()===r.STATE_PLAYING||n.isSeeking())&&n.trigger(r.CONTENT_TIME,{position:e,duration:t}))},i.seeking=function(){n.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",s.currentTime),n.trigger(r.CONTENT_SEEK,{position:s.currentTime})},i.seeked=function(){n.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),n.setSeeking(!1),n.trigger(r.CONTENT_SEEKED))},i.stalled=function(){OvenPlayerConsole.log("EventListener : on stalled")},i.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",n.getState()),n.isSeeking()?n.setState(r.STATE_LOADING):n.getState()===r.STATE_PLAYING&&(l=s.currentTime,n.setState(r.STATE_STALLED))},i.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*s.volume)),n.trigger(r.CONTENT_VOLUME,{volume:Math.round(100*s.volume),mute:s.muted})},i.error=function(){var e=s.error&&s.error.code||0,t={0:r.PLAYER_UNKNWON_ERROR,1:r.PLAYER_UNKNWON_OPERATION_ERROR,2:r.PLAYER_UNKNWON_NEWWORK_ERROR,3:r.PLAYER_UNKNWON_DECODE_ERROR,4:r.PLAYER_FILE_ERROR}[e]||0;OvenPlayerConsole.log("EventListener : on error",t),(0,o.errorTrigger)(r.ERRORS[t])},Object.keys(i).forEach(function(e){s.removeEventListener(e,i[e]),s.addEventListener(e,i[e])}),u.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(i).forEach(function(e){s.removeEventListener(e,i[e])})},u}}}]);