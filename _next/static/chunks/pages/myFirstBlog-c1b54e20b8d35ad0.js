(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[881],{9655:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/myFirstBlog",function(){return t(1918)}])},7663:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(5893);function o(e){return(0,n.jsx)("section",{className:"container",children:(0,n.jsx)("div",{className:e.className,children:e.children})})}},9703:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(5893),o=t(1664),a=t(7294);function i(e){var r=(0,a.useState)(e.expanded),t=r[0],i=r[1];return(0,a.useEffect)((function(){}),[t]),(0,n.jsxs)("nav",{className:"",children:[(0,n.jsx)("button",{onClick:function(){return i(!t)}}),(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:"Home"})}),(0,n.jsx)(o.default,{href:"/blog",children:(0,n.jsx)("a",{children:"Blog"})}),(0,n.jsx)(o.default,{href:"/about",children:(0,n.jsx)("a",{children:"About"})})]})}},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},u=t(6273),c=t(387),l=t(7190);var f={};function s(e,r,t,n){if(e&&u.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),a=i.default.useMemo((function(){var r=o(u.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?u.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(r=i.default.Children.only(h))&&"object"===typeof r&&r.ref,j=o(l.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],E=i.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);i.default.useEffect((function(){var e=w&&t&&u.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,w,b,t,n]);var M={ref:E,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:c,scroll:i}))}(e,n,d,p,v,y,m,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var _="undefined"!==typeof b?b:n&&n.locale,I=n&&n.isLocaleDomain&&u.getDomainLocale(p,_,n&&n.locales,n&&n.domainLocales);M.href=I||u.addBasePath(u.addLocale(p,_,n&&n.defaultLocale))}return i.default.cloneElement(r,M)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(r?r.current:null),2),v=h[0],y=h[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=c.get(n):(r=c.get(t),l.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var r=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&l.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&y(r.current)}),[r]),[m,d]};var a=t(7294),i=t(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},1918:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(5893),o=t(7663),a=t(9703),i=t(9008);function u(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Pat | "}),(0,n.jsx)("meta",{name:"description",content:"Patrick Maier's website"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(a.Z,{}),(0,n.jsxs)(o.Z,{className:"p-24",children:[(0,n.jsx)("h1",{children:"My first Blog"}),(0,n.jsx)("p",{children:"As told before My name is Patrick Maier and I am currently 17 years old(as I am writing this)"})]})]})}},9008:function(e,r,t){e.exports=t(5443)},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=9655,e(e.s=r);var r}));var r=e.O();_N_E=r}]);