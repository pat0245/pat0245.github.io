(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{356:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gym",function(){return n(8249)}])},7663:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(5893);function r(e){return(0,o.jsx)("section",{className:"container",children:(0,o.jsx)("div",{className:e.className,children:e.children})})}},9703:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(5893),r=n(1664),a=n(7294);function i(e){var t=(0,a.useState)(e.expanded),n=t[0],i=t[1];return(0,a.useEffect)((function(){}),[n]),(0,o.jsxs)("nav",{className:"",children:[(0,o.jsx)("button",{onClick:function(){return i(!n)}}),(0,o.jsx)(r.default,{href:"/",children:(0,o.jsx)("a",{children:"Home"})}),(0,o.jsx)(r.default,{href:"/blog",children:(0,o.jsx)("a",{children:"Blog"})}),(0,o.jsx)(r.default,{href:"/about",children:(0,o.jsx)("a",{children:"About"})})]})}},8418:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(l){s=!0,r=l}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},s=n(6273),l=n(387),u=n(7190);var c={};function d(e,t,n,o){if(e&&s.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=l.useRouter(),a=i.default.useMemo((function(){var t=r(s.resolveHref(o,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?s.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),f=a.href,h=a.as,m=e.children,y=e.replace,p=e.shallow,w=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,v=r(u.useIntersection({rootMargin:"200px"}),2),I=v[0],k=v[1],x=i.default.useCallback((function(e){I(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,I]);i.default.useEffect((function(){var e=k&&n&&s.isLocalURL(f),t="undefined"!==typeof g?g:o&&o.locale,r=c[f+"%"+h+(t?"%"+t:"")];e&&!r&&d(o,f,h,{locale:t})}),[h,f,k,g,n,o]);var j={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),t[r?"replace":"push"](n,o,{shallow:a,locale:l,scroll:i}))}(e,o,f,h,y,p,w,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(f)&&d(o,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var A="undefined"!==typeof g?g:o&&o.locale,N=o&&o.isLocaleDomain&&s.getDomainLocale(h,A,o&&o.locales,o&&o.domainLocales);j.href=N||s.addBasePath(s.addLocale(h,A,o&&o.defaultLocale))}return i.default.cloneElement(t,j)};t.default=f},7190:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(l){s=!0,r=l}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,o=e.disabled||!s,c=a.useRef(),d=r(a.useState(!1),2),f=d[0],h=d[1],m=r(a.useState(t?t.current:null),2),y=m[0],p=m[1],w=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),o||f||e&&e.tagName&&(c.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));o?t=l.get(o):(t=l.get(n),u.push(n));if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:r}),t}(n),r=o.id,a=o.observer,i=o.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(r);var t=u.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:y,rootMargin:n}))}),[o,y,n,f]);return a.useEffect((function(){if(!s&&!f){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&p(t.current)}),[t]),[w,f]};var a=n(7294),i=n(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map,u=[]},8249:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var o=n(5893),r=n(7663),a=n(9703),i=n(9008);n(1664);function s(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:"Pat | Gymstory"}),(0,o.jsx)("meta",{name:"description",content:"Patrick Maier's website"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(a.Z,{}),(0,o.jsxs)(r.Z,{className:"p-24",children:[(0,o.jsx)("h1",{className:"text-xl font-bold",children:"How all started"}),(0,o.jsx)("p",{className:"mt-2",children:"I were always a bit more interested in muscles. May it be from anime i watched in my childhood or a movie. I always wanted to be like these people. Strong and confident."}),(0,o.jsx)("p",{className:"mt-2",children:"But in reality I were the rather fat asian kid who was emotionaly unstable. And I mean I didn't care about that. until one time. And this time was during the summer break from 8th grade to 9th grade. I were as every year in Thailand with my family. I could't even do one pushup, had a shitty stamina and were fat. I think at that time it was 75kg at 1,68 And I had enough of being weak. There was no particualr reason. I just wanted a change in my life. I started with light workout. And as we returned my fathered bought a \"power station\", like those you can see in a gym. Shortly after that we bought dumbbells and other gym equipment. My father also wanted to workout again. And since i wanted to start it was the perfect opportunity for him to buy these. He and I trained 2 times a week full body and I lost a lot of fat. Since i also grew I think it was 62kg on 1,75m. I got more strength and lost weight. At some times my reason to workout was to impress a girl. We continued our workout until my father, couldn't due to his eyes. For a year he wasn't allowed tp lift weights and at the end he lost a lot of eyesight."}),(0,o.jsx)("p",{className:"mt-2",children:"I continued th workout for 2 months alone, but after that I lost my motivation and questioned, why am I doing this...the girl I wanted to impress moved away and I lost motivation. I didn't trained properly for 1 year. Sometimes I got a bit motivation and did Something with a dumbbel in my room but that's everything. Then our workout room was flood with water and the room was not usable for almost 1 year. But since I didn't trained I didn't care. It was a boring life for 7months. I almost live alone. Due to my grandmothers condition(more about this maybe in another blog.) and my parents moved to her house, while I remained alone in the old house. My parents came for lunch and dinner and then left again for my grandmother. I had a quiet and boring life for some months, or was it more than a year? Due to the lockdown I were completely alone. Couldn't meet with friends and no real family. Many other people would say that it was the perfect live. Wake up, eat, play games, learn a bit for school and play more games. But if I'm being honest it was hell. It was an interesting experience but I don't want it anymore. Too much time alone is not good. And I'm still fighting with some of the problems you get."}),(0,o.jsx)("p",{className:"mt-2",children:"In the same Week, were I turned 17 I moved to my parents again and started to workout a bit. After 2 weeks I were at the point I were before I took the break. And I have never felt better before than being in shape again. I continued to workout and even workout more and more serious than ever. And all this while I were in school. You have enough time to train and to learn. Even going out with friends was possible. You just need a good and most important a schedule which is just for you, were you plan everything. And If you are able to not do everything it is okay. There are cheatdays, or days without motivation. And they are completely normal."}),(0,o.jsx)("p",{className:"font-bold text-xl mt-2",children:"Just do not give up on yourself!!"}),(0,o.jsx)("p",{children:"This goes for everything, a life schedule or a gym schedule. Don't give up."}),(0,o.jsx)("h2",{className:"font-bold text-xl mt-2",children:"Why am I training now"}),(0,o.jsx)("p",{className:"mt-2",children:"Now my motivation is to workout for my self. I want to see, what my body is capable to become. But I don't want to do too much. Now there is someone who I want to impress again. But I'm doing it mostly for myself now. Also it is a great way to kill time and to do a break from working. If Work for too long, you should move youre body a bit.And you should also do this. If you're not 100% behind youre thought you won'be able to achive youre goals."}),(0,o.jsx)("h2",{className:"mt-2 font-bold text-lg",children:"Thank you for listening"}),(0,o.jsx)("p",{className:"mt-2",children:"If you now read to this point, well done you survived my shitty English xD. But no now for real, thank you for reading my story and I hope I were able to inspire you a bit ;)"})]})]})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=356,e(e.s=t);var t}));var t=e.O();_N_E=t}]);