(this["webpackJsonpphoto-port"]=this["webpackJsonpphoto-port"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),a=c(6),n=c.n(a),o=(c(11),c(2));function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=c(0);var m=function(e){var t=e.categories,c=void 0===t?[]:t,r=e.setCurrentCategory,a=e.currentCategory,n=e.contactSelected,o=e.setContactSelected;return Object(i.useEffect)((function(){document.title=s(a.name)}),[a]),console.log("category",a),console.log("props",e),Object(l.jsxs)("header",{children:[Object(l.jsx)("h2",{children:Object(l.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(l.jsx)("span",{role:"img","aria-label":"camera",children:"\ud83d\udcf8"}),"Oh Snap!"]})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return o(!1)},children:"About me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(n&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return o(!0)},children:"Contact"})}),c.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(a.name===e.name&&!n&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){r(e),o(!1)},children:s(e.name)})},e.name)}))]})})]})},u=c.p+"static/media/cover-image.533ae8f6.jpg";var d=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:"Who am I?"}),Object(l.jsx)("img",{src:u,className:"my-2",style:{width:"100%"},alt:"cover"})]})},j=c(3),p=function(e){var t=e.onClose,c=e.currentPhoto,i=c.name,r=c.category,a=c.description,n=c.index;return Object(l.jsx)("div",{className:"modalBackdrop",children:Object(l.jsxs)("div",{className:"modalContainer",children:[Object(l.jsx)("h3",{className:"modalTitle",children:i}),Object(l.jsx)("img",{src:"./img/large/".concat(r,"/").concat(n,".jpg"),alt:"current category"}),Object(l.jsx)("p",{children:a}),Object(l.jsx)("button",{onClick:t,type:"button",children:"Close this modal"})]})})},b=function(e){var t=e.category,c=Object(i.useState)(),r=Object(o.a)(c,2),a=r[0],n=r[1],s=Object(i.useState)(!1),m=Object(o.a)(s,2),u=m[0],d=m[1],b=Object(i.useState)([{name:"Grocery aisle",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Grocery booth",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Building exterior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Restaurant table",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cafe interior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cat green eyes",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green parrot",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Yellow macaw",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pug smile",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pancakes",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burrito",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Scallop pasta",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burger",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Fruit bowl",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green river",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Docks",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Panoramic village by sea",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Domestic landscape",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Park bench",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"}]),g=Object(o.a)(b,1)[0].filter((function(e){return e.category===t})),O=function(e,t){n(Object(j.a)(Object(j.a)({},e),{},{index:t})),d(!u)};return Object(l.jsxs)("div",{children:[u&&Object(l.jsx)(p,{currentPhoto:a,onClose:O}),Object(l.jsx)("div",{className:"flex-row",children:g.map((function(e,t){return Object(l.jsx)("img",{src:"./img/small/".concat(e.category,"/").concat(t,".jpg"),alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return O(e,t)}},e.name)}))})]})};var g=function(e){var t=e.currentCategory,c=t.name,i=t.description;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:s(c)}),Object(l.jsx)("p",{children:i}),Object(l.jsx)(b,{category:t.name})]})},O=c(4);var h=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(i.useState)(""),n=Object(o.a)(a,2),s=n[0],m=n[1],u=c.name,d=c.email,p=c.message;function b(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),m(t?"":"Your email is invalid.")}else e.target.value.length?m(""):m("".concat(e.target.name," is required."))}return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact Me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),s||(r(Object(j.a)(Object(j.a)({},c),{},Object(O.a)({},e.target.name,e.target.value))),console.log("Form",c))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:b})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:b})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:p,onBlur:b})]}),s&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:s})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};c(13);var x=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(i.useState)([{name:"commercial",description:"Photos of grocery stores, food trucks, and other commercial projects"},{name:"portraits",description:"Portraits of people in my life"},{name:"food",description:"Delicious delicacies"},{name:"landscape",description:"Fields, farmhouses, waterfalls, and the beauty of nature"}]),n=Object(o.a)(a,1)[0],s=Object(i.useState)(n[0]),u=Object(o.a)(s,2),j=u[0],p=u[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{categories:n,setCurrentCategory:p,currentCategory:j,contactSelected:c,setContactSelected:r}),Object(l.jsx)("main",{children:Object(l.jsx)("div",{children:c?Object(l.jsx)(h,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{currentCategory:j}),Object(l.jsx)(d,{})]})})})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),i(e),r(e),a(e),n(e)}))};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.3174243a.chunk.js.map