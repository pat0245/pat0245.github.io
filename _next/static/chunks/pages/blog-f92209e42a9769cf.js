(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2316:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(4247)}])},3151:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893);function o(e){return(0,n.jsxs)("div",{className:"rounded-xl p-4 m-4 rotate-scale shadow-xl",style:{background:e.color},children:[(0,n.jsx)("h1",{className:"font-bold text-xl",children:e.title}),(0,n.jsx)("p",{children:e.body})]})}},7663:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893);function o(e){return(0,n.jsx)("section",{className:"container",children:(0,n.jsx)("div",{className:e.className,children:e.children})})}},9703:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),o=r(1664),a=r(7294);function l(e){var t=(0,a.useState)(e.expanded),r=t[0],l=t[1];return(0,a.useEffect)((function(){}),[r]),(0,n.jsxs)("nav",{className:"",children:[(0,n.jsx)("button",{onClick:function(){return l(!r)}}),(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:"Home"})}),(0,n.jsx)(o.default,{href:"/blog",children:(0,n.jsx)("a",{children:"Blog"})}),(0,n.jsx)(o.default,{href:"/about",children:(0,n.jsx)("a",{children:"About"})})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(u){i=!0,o=u}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),u=r(387),c=r(7190);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),a=l.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,h=a.as,p=e.children,v=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var g=(t=l.default.Children.only(p))&&"object"===typeof t&&t.ref,x=o(c.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],E=l.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);l.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof m?m:n&&n.locale,o=s[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(n,d,h,{locale:t})}),[h,d,w,m,r,n]);var _={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:l}))}(e,n,d,h,v,y,b,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof m?m:n&&n.locale,k=n&&n.isLocaleDomain&&i.getDomainLocale(h,M,n&&n.locales,n&&n.domainLocales);_.href=k||i.addBasePath(i.addLocale(h,M,n&&n.defaultLocale))}return l.default.cloneElement(t,_)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(u){i=!0,o=u}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],h=f[1],p=o(a.useState(t?t.current:null),2),v=p[0],y=p[1],b=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]);return a.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return h(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&y(t.current)}),[t]),[b,d]};var a=r(7294),l=r(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map,c=[]},4247:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),o=r(7663),a=r(9703),l=r(9008),i=r(3151),u=r(1664);function c(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.default,{children:[(0,n.jsx)("title",{children:"Pat | About"}),(0,n.jsx)("meta",{name:"description",content:"Patrick Maier's website"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(a.Z,{}),(0,n.jsxs)(o.Z,{className:"p-24",children:[(0,n.jsx)("h1",{className:"text-xl font-bold",children:"Blog"}),(0,n.jsx)(u.default,{href:"/myFirstBlog",children:(0,n.jsx)("a",{children:(0,n.jsx)(i.Z,{color:"lightblue",title:"My first blog",body:"The first blog where I tell you more about me"})})}),(0,n.jsx)(u.default,{href:"#",children:(0,n.jsx)("a",{children:(0,n.jsx)(i.Z,{color:"lightblue",title:"test2",body:"test2"})})})]})]})}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=2316,e(e.s=t);var t}));var t=e.O();_N_E=t}]);