(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{7123:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mangas",function(){return t(6363)}])},3151:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893);function a(e){return(0,r.jsxs)("div",{className:"rounded-xl p-4 m-4 rotate-scale shadow-xl",style:{background:e.color},children:[(0,r.jsx)("h1",{className:"font-bold text-xl",children:e.title}),(0,r.jsx)("p",{children:e.body})]})}},7663:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893);function a(e){return(0,r.jsx)("section",{className:"container",children:(0,r.jsx)("div",{className:e.className,children:e.children})})}},9703:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),a=t(1664),o=t(7294);function i(e){var n=(0,o.useState)(e.expanded),t=n[0],i=n[1];return(0,o.useEffect)((function(){}),[t]),(0,r.jsxs)("nav",{className:"",children:[(0,r.jsx)("button",{onClick:function(){return i(!t)}}),(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})}),(0,r.jsx)(a.default,{href:"/blog",children:(0,r.jsx)("a",{children:"Blog"})}),(0,r.jsx)(a.default,{href:"/about",children:(0,r.jsx)("a",{children:"About"})})]})}},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},l=t(6273),s=t(387),c=t(7190);var u={};function f(e,n,t,r){if(e&&l.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=s.useRouter(),o=i.default.useMemo((function(){var n=a(l.resolveHref(r,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?l.resolveHref(r,e.as):o||t}}),[r,e.href,e.as]),d=o.href,h=o.as,p=e.children,m=e.replace,v=e.shallow,y=e.scroll,x=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var b=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,j=a(c.useIntersection({rootMargin:"200px"}),2),g=j[0],N=j[1],k=i.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);i.default.useEffect((function(){var e=N&&t&&l.isLocalURL(d),n="undefined"!==typeof x?x:r&&r.locale,a=u[d+"%"+h+(n?"%"+n:"")];e&&!a&&f(r,d,h,{locale:n})}),[h,d,N,x,t,r]);var w={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),n[a?"replace":"push"](t,r,{shallow:o,locale:s,scroll:i}))}(e,r,d,h,m,v,y,x)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(d)&&f(r,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof x?x:r&&r.locale,M=r&&r.isLocaleDomain&&l.getDomainLocale(h,E,r&&r.locales,r&&r.domainLocales);w.href=M||l.addBasePath(l.addLocale(h,E,r&&r.defaultLocale))}return i.default.cloneElement(n,w)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!l,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],h=f[1],p=a(o.useState(n?n.current:null),2),m=p[0],v=p[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=s.get(r):(n=s.get(t),c.push(t));if(n)return n;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(t,n={id:t,observer:o,elements:a}),n}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(a);var n=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:t}))}),[r,m,t,d]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){n&&v(n.current)}),[n]),[y,d]};var o=t(7294),i=t(9311),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},6363:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),a=t(7663),o=t(9703),i=t(9008),l=t(3151),s=t(1664);function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Pat | Mangas"}),(0,r.jsx)("meta",{name:"description",content:"Patrick Maier's website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(o.Z,{}),(0,r.jsxs)(a.Z,{className:"p-24",children:[(0,r.jsx)("p",{className:"font-bold text-xl",children:"Mangas I've read"}),(0,r.jsx)("p",{className:"font-serif text-lg pb-4",children:"Unlike books I were able to read a lot of mangas"}),(0,r.jsx)("p",{className:"font-serif text-sm",children:"Currently reading:"}),(0,r.jsxs)("ul",{className:"pb-3 pt-2",children:[(0,r.jsx)("li",{className:"list-disc",children:"One Piece"}),(0,r.jsx)("li",{className:"list-disc",children:"Berserk"}),(0,r.jsx)("li",{className:"list-disc",children:"Record Of Ragnarok"}),(0,r.jsx)("li",{className:"list-disc",children:"Vinlad Saga"}),(0,r.jsx)("li",{className:"list-disc",children:"Chaninsaw Man"})]}),(0,r.jsx)("p",{className:"font-serif text-sm",children:"Done reading"}),(0,r.jsxs)("ul",{className:"pb-3 pt-2",children:[(0,r.jsx)("li",{className:"list-disc",children:"Attack On Titan (Shingeki no kyojin)"}),(0,r.jsx)("li",{className:"list-disc",children:"Demon Slayer(Kimetsu no Yaiba)"}),(0,r.jsx)("li",{className:"list-disc",children:"Tokyo Revengers"}),(0,r.jsx)("li",{className:"list-disc",children:"Solo Leveling"})]}),(0,r.jsx)("p",{className:"font-serif text-sm",children:'On my "want to read list"'}),(0,r.jsx)("ul",{className:"pb-6 pt-2",children:(0,r.jsx)("li",{className:"list-disc",children:"Jujutsu Kaisen"})}),(0,r.jsx)(s.default,{href:"/books",children:(0,r.jsx)("a",{children:(0,r.jsx)(l.Z,{color:"lightblue",body:"Return to books"})})})]})]})}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=7123,e(e.s=n);var n}));var n=e.O();_N_E=n}]);