(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[346],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},876:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],u={sidebar_position:2},l="Configure your Shield",s={unversionedId:"tutorial-basics/configure-your-shield",id:"tutorial-basics/configure-your-shield",isDocsHomePage:!1,title:"Configure your Shield",description:"In order to configure NextShield:",source:"@site/docs/tutorial-basics/configure-your-shield.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/configure-your-shield",permalink:"/next-shield/docs/tutorial-basics/configure-your-shield",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-basics/configure-your-shield.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install NextShield",permalink:"/next-shield/docs/tutorial-basics/install-nextshield"},next:{title:"Create the Pages!",permalink:"/next-shield/docs/tutorial-basics/create-the-pages"}},c=[{value:"Set up your Shield.",id:"set-up-your-shield",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-your-shield"},"Configure your Shield"),(0,i.kt)("p",null,"In order to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"NextShield"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide your ",(0,i.kt)("strong",{parentName:"li"},"public & private routes"),"."),(0,i.kt)("li",{parentName:"ul"},"Provide the ",(0,i.kt)("strong",{parentName:"li"},"state")," where you store your authenticated user and when this user is available (",(0,i.kt)("inlineCode",{parentName:"li"},"isAuth")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"isLoading"),")."),(0,i.kt)("li",{parentName:"ul"},"Put your ",(0,i.kt)("inlineCode",{parentName:"li"},"LoadingComponent"),"."),(0,i.kt)("li",{parentName:"ul"},"Add your router instance."),(0,i.kt)("li",{parentName:"ul"},"Finally specify the route where you put your login page (",(0,i.kt)("inlineCode",{parentName:"li"},"loginRoute"),") and the route where your user is going to be redirected (",(0,i.kt)("inlineCode",{parentName:"li"},"accessRoute"),") after login.")),(0,i.kt)("h2",{id:"set-up-your-shield"},"Set up your Shield."),(0,i.kt)("p",null,"For this example, we are going to hard code the required props:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="pages/_app.js"',title:'"pages/_app.js"'},"export default function MyApp({ Component, pageProps }) {\n  const router = useRouter()\n\n  return (\n    <NextShield\n      isAuth={true}\n      isLoading={false}\n      router={router}\n      privateRoutes={['/private', '/control-panel']}\n      publicRoutes={['/', '/login']}\n      accessRoute=\"/private\"\n      loginRoute=\"/login\"\n      LoadingComponent={<p>Loading...</p>}\n    >\n      <Component {...pageProps} />\n    </NextShield>\n  )\n}\n")))}d.isMDXComponent=!0}}]);