(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{4045:function(e,n,t){e.exports=t(8418)},5380:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books",function(){return t(7508)}])},7663:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893);function o(e){return(0,r.jsx)("section",{className:"container",children:(0,r.jsx)("div",{className:e.className,children:e.children})})}},9703:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),o=t(4045);function a(){return(0,r.jsxs)("nav",{className:"nav",children:[(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})}),(0,r.jsx)(o.default,{href:"/blog",children:(0,r.jsx)("a",{children:"Blog"})}),(0,r.jsx)(o.default,{href:"/about",children:(0,r.jsx)("a",{children:"About"})})]})}},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},u=t(6273),c=t(387),l=t(7190);var s={};function f(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=c.useRouter(),a=i.default.useMemo((function(){var n=o(u.resolveHref(r,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?u.resolveHref(r,e.as):a||t}}),[r,e.href,e.as]),d=a.href,p=a.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,_=o(l.useIntersection({rootMargin:"200px"}),2),j=_[0],x=_[1],w=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);i.default.useEffect((function(){var e=x&&t&&u.isLocalURL(d),n="undefined"!==typeof b?b:r&&r.locale,o=s[d+"%"+p+(n?"%"+n:"")];e&&!o&&f(r,d,p,{locale:n})}),[p,d,x,b,t,r]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:i}))}(e,r,d,p,h,y,m,b)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof b?b:r&&r.locale,L=r&&r.isLocaleDomain&&u.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);k.href=L||u.addBasePath(u.addLocale(p,E,r&&r.defaultLocale))}return i.default.cloneElement(n,k)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],v=o(a.useState(n?n.current:null),2),h=v[0],y=v[1],m=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=c.get(r):(n=c.get(t),l.push(t));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(t,n={id:t,observer:a,elements:o}),n}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var n=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&l.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:t}))}),[r,h,t,d]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){n&&y(n.current)}),[n]),[m,d]};var a=t(7294),i=t(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},7508:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),o=t(7663),a=t(9703),i=t(9008),u=t(8549),c=t.n(u);function l(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Pat | Booklist"}),(0,r.jsx)("meta",{name:"description",content:"Patrick Maier's website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(a.Z,{}),(0,r.jsx)(o.Z,{className:c().container})]})}},8549:function(e){e.exports={container:"styles_container__Nwnoi",linkList:"styles_linkList__5xb_a",specialLink:"styles_specialLink__uay1R"}},9008:function(e,n,t){e.exports=t(5443)}},function(e){e.O(0,[774,888,179],(function(){return n=5380,e(e.s=n);var n}));var n=e.O();_N_E=n}]);