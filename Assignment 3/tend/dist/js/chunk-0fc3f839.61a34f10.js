(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fc3f839"],{1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),o=n("1d80"),c=n("4840"),u=n("8aa5"),l=n("50c4"),s=n("577e"),b=n("dc4a"),d=n("14c3"),f=n("9263"),m=n("9f7f"),p=n("d039"),g=m.UNSUPPORTED_Y,O=[].push,j=Math.min,h=4294967295,v=!p((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=s(o(this)),i=void 0===n?h:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,i);var c,u,l,b=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,p=new RegExp(e.source,d+"g");while(c=f.call(p,r)){if(u=p.lastIndex,u>m&&(b.push(r.slice(m,c.index)),c.length>1&&c.index<r.length&&O.apply(b,c.slice(1)),l=c[0].length,m=u,b.length>=i))break;p.lastIndex===c.index&&p.lastIndex++}return m===r.length?!l&&p.test("")||b.push(""):b.push(r.slice(m)),b.length>i?b.slice(0,i):b}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=o(this),i=void 0==t?void 0:b(t,e);return i?i.call(t,a,n):r.call(s(a),t,n)},function(e,a){var o=i(this),b=s(e),f=n(r,o,b,a,r!==t);if(f.done)return f.value;var m=c(o,RegExp),p=o.unicode,O=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"g":"y"),v=new m(g?"^(?:"+o.source+")":o,O),y=void 0===a?h:a>>>0;if(0===y)return[];if(0===b.length)return null===d(v,b)?[b]:[];var w=0,I=0,P=[];while(I<b.length){v.lastIndex=g?0:I;var k,x=d(v,g?b.slice(I):b);if(null===x||(k=j(l(v.lastIndex+(g?I:0)),b.length))===w)I=u(b,I,p);else{if(P.push(b.slice(w,I)),P.length===y)return P;for(var M=1;M<=x.length-1;M++)if(P.push(x[M]),P.length===y)return P;I=w=k}}return P.push(b.slice(w)),P}]}),!v,g)},"459a":function(e,t,n){},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"64cb":function(e,t,n){},8887:function(e,t,n){"use strict";n("459a")},b64b:function(e,t,n){var r=n("23e7"),a=n("7b0b"),i=n("df75"),o=n("d039"),c=o((function(){i(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(e){return i(a(e))}})},dbb4:function(e,t,n){var r=n("23e7"),a=n("83ab"),i=n("56ef"),o=n("fc6a"),c=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,n,r=o(e),a=c.f,l=i(r),s={},b=0;while(l.length>b)n=a(r,t=l[b++]),void 0!==n&&u(s,t,n);return s}})},e0cf:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function a(e,t,n,a,i,o){var c=Object(r["H"])("LogInForm"),u=Object(r["H"])("ImageGallery"),l=Object(r["H"])("PopUp");return Object(r["z"])(),Object(r["i"])(r["a"],null,[Object(r["l"])(u,{images:i.images,onMoreImages:t[0]||(t[0]=function(e){return o.getImageData()})},{default:Object(r["R"])((function(){return[i.isMobile?(Object(r["z"])(),Object(r["g"])(c,{key:0,class:"formCard"})):Object(r["h"])("",!0)]})),_:1},8,["images"]),Object(r["l"])(l,{class:"formPopUp",closable:!1,scrollable:""},{default:Object(r["R"])((function(){return[i.isMobile?Object(r["h"])("",!0):(Object(r["z"])(),Object(r["g"])(c,{key:0}))]})),_:1})],64)}var i=n("2909"),o=n("5530"),c=(n("99af"),n("686a")),u=n("dacb"),l=function(e){return Object(r["C"])("data-v-6e0b167a"),e=e(),Object(r["A"])(),e},s={class:"login-container"},b={class:"logo-container"},d={class:"checkbox-container"},f=l((function(){return Object(r["j"])("label",{class:"checkboxLabel",for:"rememberMe"},"Remember me:",-1)})),m={class:"button-container"},p=Object(r["k"])(" submit "),g=Object(r["k"])(" reset "),O=l((function(){return Object(r["j"])("div",{style:{width:"100%"}},[Object(r["j"])("h2",{style:{"text-align":"center"}}," Any Email/Password will work for testing. ")],-1)}));function j(e,t,n,a,i,o){var c=Object(r["H"])("MainLogo"),u=Object(r["H"])("AppInput"),l=Object(r["H"])("AppButton");return Object(r["z"])(),Object(r["i"])("div",s,[Object(r["j"])("div",b,[Object(r["l"])(c)]),Object(r["j"])("form",{class:Object(r["s"])(["form",{submitted:a.hasSubmitted}]),id:"loginForm",onSubmit:t[2]||(t[2]=Object(r["T"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["stop","prevent"])),onReset:t[3]||(t[3]=function(){return a.resetForm&&a.resetForm.apply(a,arguments)})},[Object(r["l"])(r["d"],{name:"slide",appear:""},{default:Object(r["R"])((function(){return[(Object(r["z"])(!0),Object(r["i"])(r["a"],null,Object(r["F"])(a.getInputs(),(function(e){return Object(r["z"])(),Object(r["g"])(u,{key:e.label,label:e.label,type:e.type,validation:e.validation,required:"",modelValue:a.formData[e.dataName],"onUpdate:modelValue":function(t){return a.formData[e.dataName]=t}},null,8,["label","type","validation","modelValue","onUpdate:modelValue"])})),128))]})),_:1}),Object(r["j"])("div",d,[f,Object(r["S"])(Object(r["j"])("input",{class:"checkbox",id:"rememberMe",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.formData.rememberMe=e}),"true-value":!0,"false-value":!1},null,512),[[r["M"],a.formData.rememberMe]])]),Object(r["j"])("div",m,[Object(r["l"])(l,{class:"button",type:"submit",form:"loginForm",onClick:t[1]||(t[1]=function(e){return a.hasSubmitted=!0})},{default:Object(r["R"])((function(){return[p]})),_:1}),Object(r["l"])(l,{class:"button",type:"reset",form:"loginForm"},{default:Object(r["R"])((function(){return[g]})),_:1}),Object(r["l"])(l,{class:"button",type:"button",onClick:a.toggleRegister},{default:Object(r["R"])((function(){return[Object(r["k"])(Object(r["K"])(a.register?"Login":"register"),1)]})),_:1},8,["onClick"])]),O],34)])}n("4de4"),n("caad"),n("2532"),n("ac1f"),n("1276");var h=n("a1e9"),v=n("5502"),y=n("6c02"),w=n("45c2"),I=n("97f7"),P=n("b4f6"),k=function(){return{email:"",username:"",password:"",confirmPassword:"",rememberMe:!1}},x=[{label:"Username",type:"text",dataName:"username",appearsIn:["register"]},{label:"Email",type:"email",dataName:"email",appearsIn:["login","register"]},{label:"Password",type:"password",dataName:"password",appearsIn:["login","register"],validation:{minlength:8,maxlength:30}},{label:"Confirm Password",type:"password",dataName:"confirmPassword",appearsIn:["register"],validation:{minlength:8,maxlength:30}}],M={name:"LogInForm",components:{AppButton:w["a"],AppInput:I["a"],MainLogo:P["a"]},setup:function(){var e=Object(v["b"])(),t=Object(y["g"])(),n=Object(h["l"])(!1),r=Object(h["l"])(!1),a=Object(h["l"])(k()),i=function(){return x.filter((function(e){return e.appearsIn.includes(n.value?"register":"login")}))},o=function(e){document.getElementById("Password").setCustomValidity(e),n.value&&document.getElementById("ConfirmPassword").setCustomValidity(e)},c=function(){return n.value&&a.value.password!=a.value.confirmPassword?(o("Password and Confirm Password must match."),!1):(o(""),!0)},u=function(){r.value=!1,o(""),a.value=k()},l=function(){if(r.value=!0,c()){var n=a.value.username?a.value.username:a.value.email.split("@")[0];e.commit("user/logIn",n),t.push("/my-plants")}},s=function(){u(),n.value=!n.value},b=function(e,t){a.value[t]=e};return{getInputs:i,register:n,formData:a,hasSubmitted:r,onSubmit:l,toggleRegister:s,resetForm:u,test:b}},methods:{}},D=(n("8887"),n("d959")),R=n.n(D),S=R()(M,[["render",j],["__scopeId","data-v-6e0b167a"]]),C=n("0275"),U=n("33b5"),E={name:"LogIn",components:{ImageGallery:c["a"],PopUp:u["a"],LogInForm:S},data:function(){return{images:[],currentImageRound:0,isMobile:!1,debouncedUpdateMobile:Object(U["a"])(this.updateIsMobile)}},methods:{getDataStub:function(){for(var e=[],t=0;t<5;t++)for(var n=0;n<7;n++){var r=Object(o["a"])({},C[n]);r.id=r.id+7*t+7*this.currentImageRound*5,e.push(r)}return e},getImageData:function(){this.images=[].concat(Object(i["a"])(this.images),Object(i["a"])(this.getDataStub())),this.currentImageRound++},updateIsMobile:function(){this.isMobile=window.innerWidth<572}},created:function(){this.updateIsMobile(),this.getImageData(),window.addEventListener("resize",this.debouncedUpdateMobile)},unmounted:function(){window.removeEventListener("resize",this.debouncedUpdateMobile)}};n("f04e"),t["default"]=R()(E,[["render",a],["__scopeId","data-v-564f0de8"]])},e439:function(e,t,n){var r=n("23e7"),a=n("d039"),i=n("fc6a"),o=n("06cf").f,c=n("83ab"),u=a((function(){o(1)})),l=!c||u;r({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(e,t){return o(i(e),t)}})},f04e:function(e,t,n){"use strict";n("64cb")}}]);
//# sourceMappingURL=chunk-0fc3f839.61a34f10.js.map