/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-canvas-cssanimations-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,a,s,i;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)s=e[a],i=s.split("."),1===i.length?Modernizr[i[0]]=r:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=r),h.push((r?"":"no-")+i.join("-"))}}function a(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var r;for(var a in e)if(e[a]in n)return t===!1?e[a]:(r=n[e[a]],o(r,"function")?u(r,t||n):r);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function p(e,t,o,r){var a,i,l,u,f="modernizr",c=s("div"),p=d();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=r?r[o]:f+(o+1),c.appendChild(l);return a=s("style"),a.type="text/css",a.id="s"+f,(p.fake?p:c).appendChild(a),p.appendChild(c),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),i=t(c,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=u,_.offsetHeight):c.parentNode.removeChild(c),!!i}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(c(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];r--;)a.push("("+c(n[r])+":"+o+")");return a=a.join(" or "),p("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function y(e,n,r,a){function u(){c&&(delete E.style,delete E.modElem)}if(a=o(a,"undefined")?!1:a,!o(r,"undefined")){var f=m(e,r);if(!o(f,"undefined"))return f}for(var c,d,p,y,v,g=["modernizr","tspan"];!E.style;)c=!0,E.modElem=s(g.shift()),E.style=E.modElem.style;for(p=e.length,d=0;p>d;d++)if(y=e[d],v=E.style[y],i(y,"-")&&(y=l(y)),E.style[y]!==t){if(a||o(r,"undefined"))return u(),"pfx"==n?y:!0;try{E.style[y]=r}catch(h){}if(E.style[y]!=v)return u(),"pfx"==n?y:!0}return u(),!1}function v(e,n,t,r,a){var s=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+T.join(s+" ")+s).split(" ");return o(n,"string")||o(n,"undefined")?y(i,n,r,a):(i=(e+" "+S.join(s+" ")+s).split(" "),f(i,n,t))}function g(e,n,o){return v(e,t,t,n,o)}var h=[],C=[],w={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=s("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))});var P="Moz O ms Webkit",T=w._config.usePrefixes?P.split(" "):[];w._cssomPrefixes=T;var S=w._config.usePrefixes?P.toLowerCase().split(" "):[];w._domPrefixes=S;var b={elem:s("modernizr")};Modernizr._q.push(function(){delete b.elem});var E={style:b.elem.style};Modernizr._q.unshift(function(){delete E.style}),w.testAllProps=v,w.testAllProps=g,Modernizr.addTest("cssanimations",g("animationName","a",!0)),r(),a(h),delete w.addTest,delete w.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);

/** Copyright 2013 mocking@gmail.com * http://github.com/relay/anim

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

var anim = function(A) {
"use strict";

A = function(n, g, t, e) {
  var a, o, c,
    q = [],
    cb = function(i) {
      //our internal callback function maintains a queue of objects
      //that contain callback info. If the object is an array of length
      //over 2, then it is parameters for the next animation. If the object
      //is an array of length 1 and the item in the array is a number,
      //then it is a timeout period, otherwise it is a callback function.
      if(i = q.shift()) i[1] ?
          A.apply(this, i).anim(cb) :
          i[0] > 0 ? setTimeout(cb, i[0]*1000) : (i[0](), cb())
    };

  if(n.charAt) n = document.getElementById(n);

  //if the 1st param is a number then treat it as a timeout period.
  //If the node reference is null, then we skip it and run the next callback
  //so that we can continue with the animation without throwing an error.
  if(n > 0 || !n) g = {}, t = 0, cb(q = [[n || 0]]);

  //firefox don't allow reading shorthand CSS styles like "margin" so
  //we have to expand them to be "margin-left", "margin-top", etc.
  //Also, expanding them allows the 4 values to animate independently
  //in the case that the 4 values are different to begin with.
  expand(g, {padding:0, margin:0, border:"Width"}, [T, R, B, L]);
  expand(g, {borderRadius:"Radius"}, [T+L, T+R, B+R, B+L]);

  //if we animate a property of a node, we set a unique number on the
  //node, so that if we run another animation concurrently, it will halt
  //the first animation. This is needed so that if we animate on mouseover
  //and want to reverse the animation on mouseout before the mouseover
  //is complete, they won't clash and the last animation prevails.
  ++mutex;

  for(a in g) {
    o = g[a];
    if(!o.to && o.to !== 0) o = g[a] = {to: o};  //shorthand {margin:0} => {margin:{to:0}}

    A.defs(o, n, a, e);  //set defaults, get initial values, selects animation fx
  }

  A.iter(g, t*1000, cb);

  return {
    //this allows us to queue multiple animations together in compact syntax
    anim: function() {
      q.push([].slice.call(arguments));
      return this
    }
  }
};

var T="Top", R="Right", B="Bottom", L="Left",
  mutex = 1,

  //{border:1} => {borderTop:1, borderRight:1, borderBottom:1, borderLeft:1}
  expand = function(g, dim, dir, a, i, d, o) {
    for(a in g) {  //for each animation property
      if(a in dim) {
        o = g[a];
        for(i = 0; d = dir[i]; i++)  //for each dimension (Top, Right, etc.)
          //margin => marginTop
          //borderWidth => borderTopWidth
          //borderRadius => borderTopRadius
          g[a.replace(dim[a], "") + d + (dim[a] || "")] = {
            to:(o.to === 0) ? o.to : (o.to || o), fr:o.fr, e:o.e
          };
        delete g[a];
      }
    }
  },

  timeout = function(w, a) {
    return w["webkitR"+a] || w["r"+a] || w["mozR"+a] || w["msR"+a] || w["oR"+a]
  }(window, "equestAnimationFrame");

A.defs = function(o, n, a, e, s) {
  s = n.style;
  o.a = a;  //attribute
  o.n = n;  //node
  o.s = (a in s) ? s : n;  //= n.style || n
  o.e = o.e || e;  //easing

  o.fr = o.fr || (o.fr === 0 ? 0 : o.s == n ? n[a] :
        (window.getComputedStyle ? getComputedStyle(n, null) : n.currentStyle)[a]);

  o.u = (/\d(\D+)$/.exec(o.to) || /\d(\D+)$/.exec(o.fr) || [0, 0])[1];  //units (px, %)

  //which animation fx to use. Only color needs special treatment.
  o.fn = /color/i.test(a) ? A.fx.color : (A.fx[a] || A.fx._);

  //the mutex is composed of the animating property name and a unique number
  o.mx = "anim_" + a;
  n[o.mx] = o.mxv = mutex;
  if(n[o.mx] != o.mxv) o.mxv = null;  //test expando
};

A.iter = function(g, t, cb) {
  var _, i, o, p, e,
    z = +new Date + t,

  _ = function(now) {
    i = z - (now || new Date().getTime());

    if(i < 50) {
      for(o in g)
        o = g[o],
        o.p = 1,
        o.fn(o, o.n, o.to, o.fr, o.a, o.e);

      cb && cb()

    } else {

      i = i/t;

      for(o in g) {
        o = g[o];

        if(o.n[o.mx] != o.mxv) return;  //if mutex not match then halt.

        e = o.e;
        p = i;

        if(e == "lin") {
          p = 1 - p

        } else if(e == "ease") {
          p = (0.5 - p)*2;
          p = 1 - ((p*p*p - p*3) + 2)/4

        } else if(e == "ease-in") {
          p = 1 - p;
          p = p*p*p

        } else {  //ease-out
          p = 1 - p*p*p
        }
        o.p = p;
        o.fn(o, o.n, o.to, o.fr, o.a, o.e)
      }
      timeout ? timeout(_) : setTimeout(_, 20, 0)
    }
  }
  _();
};

A.fx = {  //CSS names which need special handling

  _: function(o, n, to, fr, a, e) {  //for generic fx
    fr = parseFloat(fr) || 0,
    to = parseFloat(to) || 0,
    o.s[a] = (o.p >= 1 ? to : (o.p*(to - fr) + fr)) + o.u
  },

  width: function(o, n, to, fr, a, e) {  //for width/height fx
    if(!(o._fr >= 0))
      o._fr = !isNaN(fr = parseFloat(fr)) ? fr : a == "width" ? n.clientWidth : n.clientHeight;
    A.fx._(o, n, to, o._fr, a, e)
  },

  opacity: function(o, n, to, fr, a, e) {
    if(isNaN(fr = fr || o._fr))
      fr = n.style,
      fr.zoom = 1,
      fr = o._fr = (/alpha\(opacity=(\d+)\b/i.exec(fr.filter) || {})[1]/100 || 1;
    fr *= 1;
    to = (o.p*(to - fr) + fr);
    n = n.style;
    if(a in n) {
      n[a] = to
    } else {
      n.filter = to >= 1 ? "" : "alpha(" + a + "=" + Math.round(to*100) + ")"
    }
  },

  color: function(o, n, to, fr, a, e, i, v) {
    if(!o.ok) {
      to = o.to = A.toRGBA(to);
      fr = o.fr = A.toRGBA(fr);
      if(to[3] == 0) to = [].concat(fr), to[3] = 0;
      if(fr[3] == 0) fr = [].concat(to), fr[3] = 0;
      o.ok = 1
    }

    v = [0, 0, 0, o.p*(to[3] - fr[3]) + 1*fr[3]];
    for(i=2; i>=0; i--) v[i] = Math.round(o.p*(to[i] - fr[i]) + 1*fr[i]);

    if(v[3] >= 1 || A.rgbaIE) v.pop();

    try {
      o.s[a] = (v.length > 3 ? "rgba(" : "rgb(") + v.join(",") + ")"
    } catch(e) {
      A.rgbaIE = 1
    }
  }
};
A.fx.height = A.fx.width;

A.RGBA = /#(.)(.)(.)\b|#(..)(..)(..)\b|(\d+)%,(\d+)%,(\d+)%(?:,([\d\.]+))?|(\d+),(\d+),(\d+)(?:,([\d\.]+))?\b/;
A.toRGBA = function(s, v) {
  v = [0, 0, 0, 0];
  s.replace(/\s/g, "").replace(A.RGBA, function(i, a,b,c, f,g,h, l,m,n,o, w,x,y,z) {
    var h = [a+a||f, b+b||g, c+c||h], p = [l, m, n];

    for(i=0; i<3; i++) h[i] = parseInt(h[i], 16), p[i] = Math.round(p[i]*2.55);

    v = [h[0]||p[0]||w||0,  h[1]||p[1]||x||0,  h[2]||p[2]||y||0,  o||z||1]
  });
  return v
};

return A
}();

// $(window).ready(function(){
//   var audio_preload = 0;
//   function launchApp(launch){
//     audio_preload++;
//     if ( audio_preload == 3 || launch == 1) {  // set 3 to # of your files
//       start();  // set this function to your start function
//     }
//   }
//   var support = {};
//   function audioSupport() {
//     var a = document.createElement('audio');
//     var ogg = !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
//     if (ogg) return 'ogg';
//     var mp3 = !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
//     if (mp3) return 'mp3';
//     else return 0;
//   }
//   support.audio = audioSupport();
//   function loadAudio(url, vol){
//     var audio = new Audio();
//     audio.src = url;
//     audio.preload = "auto";
//     audio.volume = vol;
//     $(audio).on("loadeddata", launchApp);  // jQuery checking
//     return audio;
//   }
//   if (support.audio === 'ogg') {
//     var snd1 = loadAudio("sounds/sound1.ogg", 1);  // ie) the 1 is 100% volume
//     var snd2 = loadAudio("sounds/sound2.ogg", 0.3);  // ie) the 0.3 is 30%
//     var snd3 = loadAudio("sounds/sound3.ogg", 0.05);
//         // add more sounds here
//   } else if (support.audio === 'mp3') {
//     var snd1 = loadAudio("sounds/sound1.mp3", 1);
//     var snd2 = loadAudio("sounds/sound2.mp3", 0.3);
//     var snd3 = loadAudio("sounds/sound3.mp3", 0.05);
//         // add more sounds here
//   } else {
//     launchApp(1);  // launch app without audio
//   }
//
// // this is your first function you want to start after audio is preloaded:
//   function start(){
//      if (support.audio) snd1.play();  // this is how you play sounds
//   }
//
// });
var audioPath = "sound/";
var sounds = [
    {id:"sound1", src:audioPath+"xmas2015_01-katie_hi.mp3"}, // katie
    {id:"sound2", src:audioPath+"hohoho.mp3"}, // merass
    {id:"sound14", src:audioPath+"xmas2015_15-paul_low.mp3"}, // paul
    {id:"sound3", src:audioPath+"xmas2015_10-danny.mp3"}, // danny
    {id:"sound4", src:audioPath+"xmas2015_06-chris.mp3"}, // chris
    {id:"sound5", src:audioPath+"woof.mp3"}, // rufus
    {id:"sound6", src:audioPath+"xmas2015_05-dave.mp3"}, //dave
    {id:"sound7", src:audioPath+"ian.mp3"}, //ian, // me
    {id:"sound22", src:audioPath+"xmas2015_11-matty_hi.mp3"}, // matty
    {id:"sound23", src:audioPath+"xmas2015_12-dan.mp3"}, // dan
    {id:"sound8", src:audioPath+"xmas2015_08-jonny_low.mp3"}, // jonny
    {id:"sound9", src:audioPath+"xmas2015_07-jonny_hi.mp3"}, // miles
    {id:"sound10", src:audioPath+"xmas2015_02-katie_low.mp3"}, // katie
    {id:"sound11", src:audioPath+"hohoho.mp3"}, // ed
    {id:"sound12", src:audioPath+"xmas2015_04-dan.mp3"}, //tristan
    {id:"sound13", src:audioPath+"xmas2015_13-stig.mp3"},
    {id:"sound15", src:audioPath+"xmas2015_14-paul_hi.mp3"}, //jon
    {id:"sound16", src:audioPath+"merryxmas.mp3"}, // elliot
    {id:"sound17", src:audioPath+"xmas2015_03-mel.mp3"}, //mel
    {id:"sound18", src:audioPath+"tree.mp3"}, //tree
    {id:"sound19", src:audioPath+"xmas2015_09-rachelsas.mp3"}, // rachel
    {id:"sound20", src:audioPath+"merryxmas.mp3"}, // gabrielle
    {id:"sound21", src:audioPath+"sas.mp3"}
];
var soundInstances = [];

$(document).ready(initSounds);

function initSounds() {
    var queue = new createjs.LoadQueue();
    // createjs.Sound.alternateExtensions = ["mp3"];
    queue.installPlugin(createjs.Sound);
    // queue.addEventListener("error",  fileerrorBOO );
    queue.addEventListener("fileload",  fileloadBOO );
    queue.addEventListener("complete", continueLoading);
    queue.loadManifest(sounds);
}

// function fileerrorBOO(e) {
//     console.log('fileerrorBOO');
//     // console.log(e);
// }
//
function fileloadBOO(e) {
    // console.log('fileloadBOO');
    // alert(e.item.src);
}

function continueLoading() {
    setUpSounds();
    assignListeners();
    $('#loading').hide();
    $('#start').show();
}

function setUpSounds() {
    createjs.Sound.registerSounds(sounds);
    for(i = 1; i <= 23; i++) {
        var loop = -1;
        if ($('#person-' + i).hasClass('person--once')) {
            loop = 0;
        }
        var sound = createjs.Sound.play("sound" + i, 'none', 0, 0, loop);
        sound.muted = true;
        soundInstances.push(sound);
    }
}

function assignListeners() {
    $('#start').click(playCard);
    $('.person').on('click touchstart',manageSinging);
}

function playCard(e) {
    e.preventDefault();
    soundInstances[0].muted = false;
    $('#splashScreen').hide();
    $('.person:eq(0)').toggleClass('person--animated');
}

function manageSinging(e) {
    e.preventDefault();
    var value = $(this).index();
    soundInstances[value].muted = !soundInstances[value].muted;
    if (!$(this).hasClass('person--once')) {
        $(this).toggleClass('person--animated');
    } else {
        soundInstances[value].muted = false;
        soundInstances[value].play();
    }
    console.log(value, soundInstances[value].muted);
}

var goHouse = function(){
    anim('house', {marginTop: {to:'-12px', fr:'12px'}}, 3, 'ease').anim('house', {marginTop: {to:'12px', fr:'-12px'}}, 3, 'ease').anim(goHouse);
}

var goClouds = function() {
    anim('clouds', {marginLeft: {to: '-12px', fr:'12px'}}, 6, 'ease').anim('clouds', {marginLeft: {to:'12px', fr:'-12px'}}, 6, 'ease').anim(goClouds);
}

var goSanta = function() {
    anim('santa', {marginLeft: {to: '130%', fr:'0%'}}, 10.8, 'lin').anim(goSanta);
}


//IF NO CSS Animations or Canvas
if(!Modernizr.cssanimations) {
    goHouse();
    goClouds();
    goSanta();
}
if (Modernizr.audio.mp3)
{
    document.getElementById('fallback-splash').style.display = 'none';
}
