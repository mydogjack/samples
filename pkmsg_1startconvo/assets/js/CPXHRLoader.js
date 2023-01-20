/*

    This files uses parts of the LazyLoad library and the headJSlibrary.

    LazyLoad makes it easy and painless to lazily load one or more external
    JavaScript or CSS files on demand either during or after the rendering of a web
    page.
    Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile
    Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and
    are not officially supported.
    Visit https://github.com/rgrove/lazyload/ for more info.
    Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
    All rights reserved.
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the 'Software'), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 HeadJS- headJS.com
*/
cpXHRJSLoader=function(k){function m(e,d){var a=k.createElement(e),c;for(c in d)d.hasOwnProperty(c)&&a.setAttribute(c,d[c]);return a}function n(){var e=o,d;e&&(d=e.d,e=e.a,e.shift(),l=0,e.length||(d&&d.call(),o=null,p.length&&load()))}function s(e){var d;try{d=!!e.sheet.cssRules}catch(a){l+=1;200>l?setTimeout(function(){s(e)},50):d&&n();return}n()}function t(){var e=o,d;if(e){for(d=u.length;0<=--d;)if(u[d].href===e.a[0]){n();break}l+=1;e&&(200>l?setTimeout(t,50):n())}}function v(){function e(){++g;
g>=a.length||(g==a.length-1?a[g].call():d(a[g]))}function d(a){a=m("script",{src:a,async:!1});a.onload=e;j.appendChild(a)}for(var a=[],c=0;c<arguments.length;c++)if("[object Array]"===Object.prototype.toString.call(arguments[c]))for(var b=arguments[c],f=0;f<b.length;f++)a.push(b[f]);else a.push(arguments[c]);var g=0;j||(j=k.head||k.getElementsByTagName("head")[0]);d(a[0])}function w(){function e(){++g;g>=a.length||(g==a.length-1?a[g].call():(d(a[g]),e()))}function d(a){a=m("script",{src:a,async:!1});
j.appendChild(a)}for(var a=[],c=0;c<arguments.length;c++)if("[object Array]"===Object.prototype.toString.call(arguments[c]))for(var b=arguments[c],f=0;f<b.length;f++)a.push(b[f]);else a.push(arguments[c]);var g=0;d(a[0]);e()}var i,j,o,l=0,p=[],u=k.styleSheets;eval('(function(f,w){function m(){}function g(a,b){if(a){"object"===typeof a&&(a=[].slice.call(a));for(var c=0,d=a.length;c<d;c++)b.call(a,a[c],c)}}function v(a,b){var c=Object.prototype.toString.call(b).slice(8,-1);return b!==w&&null!==b&&c===a}function k(a){return v("Function",a)}function h(a){a=a||m;a._done||(a(),a._done=1)}function n(a){var b={};if("object"===typeof a)for(var c in a)a[c]&&(b={name:c,url:a[c]});else b=a.split("/"),b=b[b.length-1],c=b.indexOf("?"),b={name:-1!==c?b.substring(0,c):b,url:a};return(a=p[b.name])&&a.url===b.url?a:p[b.name]=b}function q(a){var a=a||p,b;for(b in a)if(a.hasOwnProperty(b)&&a[b].state!==r)return!1;return!0}function s(a,b){b=b||m;a.state===r?b():a.state===x?d.ready(a.name,b):a.state===y?a.onpreload.push(function(){s(a,b)}):(a.state=x,z(a,function(){a.state=r;b();g(l[a.name],function(a){h(a)});j&&q()&&g(l.ALL,function(a){h(a)})}))}function z(a,b){var b=b||m,c;/.css[^.]*$/.test(a.url)?(c=e.createElement("link"),c.type="text/"+(a.type||"css"),c.rel="stylesheet",c.href=a.url):(c=e.createElement("script"),c.type="text/"+(a.type||"javascript"),c.src=a.url);c.onload=c.onreadystatechange=function(a){a=a||f.event;if("load"===a.type||/loaded|complete/.test(c.readyState)&&(!e.documentMode||9>e.documentMode))c.onload=c.onreadystatechange=c.onerror=null,b()};c.onerror=function(){c.onload=c.onreadystatechange=c.onerror=null;b()};c.async=!1;c.defer=!1;var d=e.head||e.getElementsByTagName("head")[0];d.insertBefore(c,d.lastChild)}function i(){e.body?j||(j=!0,g(A,function(a){h(a)})):(f.clearTimeout(d.readyTimeout),d.readyTimeout=f.setTimeout(i,50))}function t(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",t,!1),i()):"complete"===e.readyState&&(e.detachEvent("onreadystatechange",t),i())}var e=f.document,A=[],B=[],l={},p={},E="async"in e.createElement("script")||"MozAppearance"in e.documentElement.style||f.opera,C,j,D=f.head_conf&&f.head_conf.head||"head",d=f[D]=f[D]||function(){d.ready.apply(null,arguments)},y=1,x=3,r=4;d.load=E?function(){var a=arguments,b=a[a.length-1],c={};k(b)||(b=null);g(a,function(d,e){d!==b&&(d=n(d),c[d.name]=d,s(d,b&&e===a.length-2?function(){q(c)&&h(b)}:null))});return d}:function(){var a=arguments,b=[].slice.call(a,1),c=b[0];if(!C)return B.push(function(){d.load.apply(null,a)}),d;c?(g(b,function(a){if(!k(a)){var b=n(a);b.state===w&&(b.state=y,b.onpreload=[],z({url:b.url,type:"cache"},function(){b.state=2;g(b.onpreload,function(a){a.call()})}))}}),s(n(a[0]),k(c)?c:function(){d.load.apply(null,b)})):s(n(a[0]));return d};d.js=d.load;d.test=function(a,b,c,e){a="object"===typeof a?a:{test:a,success:b?v("Array",b)?b:[b]:!1,failure:c?v("Array",c)?c:[c]:!1,callback:e||m};(b=!!a.test)&&a.success?(a.success.push(a.callback),d.load.apply(null,a.success)):!b&&a.failure?(a.failure.push(a.callback),d.load.apply(null,a.failure)):e();return d};d.ready=function(a,b){if(a===e)return j?h(b):A.push(b),d;k(a)&&(b=a,a="ALL");if("string"!==typeof a||!k(b))return d;var c=p[a];if(c&&c.state===r||"ALL"===a&&q()&&j)return h(b),d;(c=l[a])?c.push(b):l[a]=[b];return d};d.ready(e,function(){q()&&g(l.ALL,function(a){h(a)});d.feature&&d.feature("domloaded",!0)});if("complete"===e.readyState)i();else if(e.addEventListener)e.addEventListener("DOMContentLoaded",t,!1),f.addEventListener("load",i,!1);else{e.attachEvent("onreadystatechange",t);f.attachEvent("onload",i);var u=!1;try{u=null==f.frameElement&&e.documentElement}catch(F){}u&&u.doScroll&&function b(){if(!j){try{u.doScroll("left")}catch(c){f.clearTimeout(d.readyTimeout);d.readyTimeout=f.setTimeout(b,50);return}i()}}()}setTimeout(function(){C=!0;g(B,function(b){b()})},300)})(window);');
return{css:function(e,d){function a(){n()}var c=[],b,f,g,h,q,r;i||(b=navigator.userAgent,i={async:!0===k.createElement("script").async},(i.c=/AppleWebKit\//.test(b))||(i.e=/MSIE/.test(b))||(i.opera=/Opera/.test(b))||(i.b=/Gecko\//.test(b))||(i.f=!0));e&&(e="string"===typeof e?[e]:e.concat(),p.push({a:e,d:d}));if(!o&&(h=o=p.shift())){j||(j=k.head||k.getElementsByTagName("head")[0]);q=h.a;b=0;for(f=q.length;b<f;++b)r=q[b],g=i.b?m("style"):m("link",{href:r,rel:"stylesheet"}),g.setAttribute("charset",
"utf-8"),i.b||i.c?i.c?(h.a[b]=g.href,t()):(g.innerHTML='@import "'+r+'";',s(g)):g.onload=g.onerror=a,c.push(g);b=0;for(f=c.length;b<f;++b)j.appendChild(c[b])}},js:function(){function e(){for(var d=0;d<a.length-1;++d)try{eval.call(window,g[a[d]])}catch(b){console&&(b.stack?console.log(b.stack):console.log(b.message))}a[a.length-1].call()}function d(b){var c=new XMLHttpRequest;c.open("GET",b,!0);c.onreadystatechange=function(){4==c.readyState&&(++h,g[b]=c.responseText,h>=a.length||(h==a.length-1?e():
d(a[h])))};c.send()}if("file"==window.location.protocol.substr(0,4))v.apply(null,arguments);else{for(var a=[],c=0;c<arguments.length;c++)if("[object Array]"===Object.prototype.toString.call(arguments[c]))for(var b=arguments[c],f=0;f<b.length;f++)a.push(b[f]);else a.push(arguments[c]);var g={},h=0;d(a[0])}},loadImagesJSON:function(){function e(a){var b=new XMLHttpRequest;b.open("GET",a,!0);b.onreadystatechange=function(){if(4==b.readyState&&200===b.status){++f;var a=b.responseText;0==a.length?f==d.length-
1&&d[f].call(null,""):(a=a.slice(54,a.length-1),a=JSON.parse(a),f>=d.length||(f==d.length-1?d[f].call(null,a):e(d[f])))}};b.send()}if("file"==window.location.protocol.substr(0,4))w.apply(null,arguments);else{for(var d=[],a=0;a<arguments.length;a++)if("[object Array]"===Object.prototype.toString.call(arguments[a]))for(var c=arguments[a],b=0;b<c.length;b++)d.push(c[b]);else d.push(arguments[a]);var f=0;e(d[0])}},preloadURLs:function(e){function d(){h++;h>=c.length||(h==c.length-1?c[h].call():a(c[h]))}
function a(a){a=m("script",{src:a,async:!1});j.appendChild(a);a.onload=d}if("file"==window.location.protocol.substr(0,4)){for(var c=[],b=0;b<arguments.length;b++)if("[object Array]"===Object.prototype.toString.call(arguments[b]))for(var f=arguments[b],g=0;g<f.length;g++)c.push(f[g]);else c.push(arguments[b]);var h=0;a(e[0])}else for(b=0;b<e.length;b++)f=new XMLHttpRequest,f.open("GET",e[b],!0),f.onreadystatechange=function(){},f.send()}}}(window.document);
