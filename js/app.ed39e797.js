(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var r={},n={app:0},o=[];function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=r,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0148":function(e,t,s){"use strict";var r=s("9906"),n=s.n(r);n.a},1241:function(e,t,s){e.exports=s.p+"img/delivery.4cf78fb9.png"},"2b31":function(e,t,s){e.exports=s.p+"img/marcador.9ea7368b.png"},"3cec":function(e,t,s){},"3d7e":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("stepper",{attrs:{currentStep:e.step,steps:e.steps,nameTop:!0}}),s("router-view",{key:e.$route.fullPath})],1)},o=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"checkout-wrapper",class:{"has-top-name":e.nameTop},on:{keyup:e.controlKeyEvents}},[s("ol",{staticClass:"checkout"},e._l(e.steps,(function(t,r){return s("li",{key:t.id,staticClass:"step",class:{prev:r<e.currentStep,active:r===e.currentStep},on:{click:function(t){return e.toStep(r)}}},[s("span",{staticClass:"step-dot"},[e._v(e._s(r+1))]),s("span",{staticClass:"step-label"},[e._v(e._s(t.name))])])})),0),s("div",{staticClass:"step-mobile"},e._l(e.steps,(function(t,r){return s("div",{key:t.id,staticClass:"step",class:{prev:r<e.currentStep,active:r===e.currentStep}},[s("span",{staticClass:"step-label"},[e._v(e._s(r+1)+" - "+e._s(t.name))])])})),0),s("step-buttons")],1)},i=[],c=(s("c5f6"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step-buttons"},[s("button",{staticClass:"step-button is-prev",class:{"is-hidden":e.currentStep<1},on:{click:function(t){return e.prev()}}},[s("i",[s("IconButtonLeft")],1),e._v("\n    Anterior\n  ")]),e.currentStep<4?s("button",{staticClass:"step-button is-next",on:{click:function(t){return e.next()}}},[e._v("\n    Continuar\n    "),s("i",[s("IconButtonRight")],1)]):e._e()])}),l=[],p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{attrs:{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{id:"Fill","fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9998 0.666748C6.63604 0.666748 0.666504 6.63628 0.666504 14.0001C0.666504 21.3639 6.63604 27.3334 13.9998 27.3334C21.3636 27.3334 27.3332 21.3639 27.3332 14.0001C27.3332 6.63628 21.3636 0.666748 13.9998 0.666748ZM13.9998 24.6667C8.1088 24.6667 3.33317 19.8911 3.33317 14.0001C3.33317 8.10904 8.1088 3.33341 13.9998 3.33341C19.8909 3.33342 24.6665 8.10904 24.6665 14.0001C24.6665 19.8911 19.8909 24.6667 13.9998 24.6667ZM20.6665 13.8801V14.0001C20.6662 14.1788 20.6299 14.3556 20.5598 14.5201C20.4948 14.679 20.3998 14.8239 20.2798 14.9467L16.2798 18.9467L16.2721 18.9545C15.7493 19.473 14.9051 19.4696 14.3865 18.9467L14.3788 18.939C13.8602 18.4162 13.8637 17.572 14.3865 17.0534L16.1198 15.3334H8.6665C7.93012 15.3334 7.33317 14.7365 7.33317 14.0001C7.33317 13.2637 7.93012 12.6667 8.6665 12.6667H16.2132L14.5732 10.9201C14.0651 10.3862 14.086 9.54152 14.6198 9.03341C15.1537 8.52531 15.9984 8.54621 16.5065 9.08008L20.3198 13.0801C20.3643 13.1346 20.4045 13.1926 20.4398 13.2534C20.5014 13.3299 20.5509 13.4153 20.5865 13.5067C20.6334 13.626 20.6604 13.7521 20.6665 13.8801Z",fill:"white"}})])},d=[],u=s("2877"),v={},m=Object(u["a"])(v,p,d,!1,null,null,null),f=m.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{attrs:{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9998 0.666748C6.63604 0.666748 0.666504 6.63628 0.666504 14.0001C0.666504 21.3639 6.63604 27.3334 13.9998 27.3334C21.3636 27.3334 27.3332 21.3639 27.3332 14.0001C27.3332 6.63628 21.3636 0.666748 13.9998 0.666748ZM13.9998 24.6667C8.1088 24.6667 3.33317 19.8911 3.33317 14.0001C3.33317 8.10904 8.1088 3.33341 13.9998 3.33341C19.8909 3.33342 24.6665 8.10904 24.6665 14.0001C24.6665 19.8911 19.8909 24.6667 13.9998 24.6667ZM11.7865 12.6667H19.3332C20.0695 12.6667 20.6665 13.2637 20.6665 14.0001C20.6665 14.7365 20.0695 15.3334 19.3332 15.3334H11.8798L13.6132 17.0401L13.6209 17.0478C14.1395 17.5706 14.136 18.4149 13.6132 18.9334L13.6054 18.9411C13.0826 19.4597 12.2384 19.4562 11.7198 18.9334L7.71984 14.9334C7.5999 14.8105 7.50483 14.6657 7.43984 14.5067C7.37152 14.3465 7.33528 14.1743 7.33317 14.0001L7.35984 13.8801C7.36594 13.7521 7.39297 13.626 7.43984 13.5067C7.47549 13.4153 7.52495 13.3299 7.5865 13.2534C7.62187 13.1926 7.66199 13.1346 7.7065 13.0801L11.5198 9.08008C12.0279 8.54621 12.8726 8.52531 13.4065 9.03341C13.9404 9.54152 13.9613 10.3862 13.4532 10.9201L11.7865 12.6667Z",fill:"#e06666"}})])},_=[],b={},C=Object(u["a"])(b,h,_,!1,null,null,null),g=C.exports,S={components:{IconButtonRight:f,IconButtonLeft:g},computed:{currentStep:function(){return this.$store.state.step}},methods:{next:function(){this.currentStep<4&&this.$store.dispatch("incrementStep")},prev:function(){this.currentStep>0&&this.$store.dispatch("decreaseStep")}}},O=S,y=Object(u["a"])(O,c,l,!1,null,null,null),E=y.exports,I={name:"Stepper",components:{StepButtons:E},props:{currentStep:{type:Number,default:0},steps:{type:Array,required:!0},nameTop:{type:Boolean,default:!1}},mounted:function(){document.addEventListener("keyup",this.controlKeyEvents)},methods:{toStep:function(e){this.$store.dispatch("toStep",e)},controlKeyEvents:function(e){if("39"!=e.key&&"ArrowRight"!=e.key||this.next(),"37"!=e.key&&"ArrowLeft"!=e.key||this.prev(),!isNaN(e.key)){var t=Number(e.key)-1;this.toStep(t)}},next:function(){this.currentStep<this.numberSteps-1&&this.$store.dispatch("incrementStep")},prev:function(){this.currentStep>0&&this.$store.dispatch("decreaseStep")}},computed:{numberSteps:function(){return this.$store.state.steps.length}}},j=I,k=(s("0148"),Object(u["a"])(j,a,i,!1,null,null,null)),x=k.exports,w={name:"app",components:{Stepper:x},created:function(){this.$store.dispatch("fetchOrders")},computed:{step:function(){return this.$store.state.step},steps:function(){return this.$store.state.steps}}},P=w,D=Object(u["a"])(P,n,o,!1,null,null,null),R=D.exports,$=s("8c4f"),L=s("2f62"),T=s("0e44"),q={step:0,currentStep:0,steps:[{name:"Step 1"},{name:"Step 2"},{name:"Step 3"},{name:"Step 4"},{name:"Step 5"}],orders:[],products:[],productsDetailOrder:[]},A=s("bc3a"),M=s.n(A),N="https://ecommerce.v1.backend.pre.mrjeffapp.net",Z=M.a.create({baseURL:N,headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json"}}),B=Z,J="/apps/orders/search/findByCustomerId",z="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0LWZyb250ZWRAbXJqZWZmYXBwLmNvbSIsInJvbGVzIjpbIlJPTEVfQ1VTVE9NRVIiXSwibmFtZSI6IkNhcmxvcyIsImlzcyI6ImJhY2tlbmQubXJqZWZmYXBwLm5ldCIsImlkIjoiMjk3NGQ4NGEtZDBhZS00MTQwLWJlZjktNjRjYWE0NmNmMDFhIiwiZnVsbG5hbWUiOiJDYXJsb3MgSGVybsOhbmRleiIsInR5cGUiOiJjdXN0b21lciIsImV4cCI6MTU4NDc5MTIwOCwiaWF0IjoxNTg0MTg2NDA4LCJqdGkiOiI4ODQxOTRlNC1iOWYyLTQxNmEtYWFiMy02MTY4NDdkOTc2YTUiLCJlbWFpbCI6InRlc3QtZnJvbnRlZEBtcmplZmZhcHAuY29tIn0.8kvrTI9ojm5Tr5HbBshQmUXtVoI-Q0fPYj1vUvOONpTTcpznFcRT3qHNVyNlbbyM3zsNiNsa1KHEo_wM98DfBA";function V(){return B.get(J,{headers:{Authorization:"Bearer ".concat(z)}}).then((function(e){return e.data})).catch((function(e){throw e}))}var H=V,W=(s("ac6a"),function(e){var t=[];return e.forEach((function(e){var s={},r=e.productsOrder,n=e.visits;s.code=e.code,s.orderDate=e.orderDate,s.id=e.id,s.logisticCode=e.orderStatus.code,s.cuponId=e.cuponId||"",s.totalPrice=e.totalPrice,s.totalDeliveryPrice=e.totalDeliveryPrice,s.productsOrder=[],s.pickupDates=[],r.forEach((function(e){var t={};t.productId=e.productId,t.quantity=e.quantity,s.productsOrder.push(t)})),n.forEach((function(e){var t={};t.id=e.id,t.pickupDate=e.date,t.pickupStart=e.timeSlotStart,t.pickupEnd=e.timeSlotEnd,s.pickupDates.push(t)})),t.push(s)})),t}),U=(s("7f7f"),function(e){var t=[];return e.forEach((function(e){var s={};s.id=e.id,s.name=e.name,s.price=e.price,t.push(s)})),t}),Y={incrementStep:function(e){var t=e.commit,s=e.state;t("incrementStateStep"),ut.push("/step-".concat(s.step+1))},decreaseStep:function(e){var t=e.commit,s=e.state;t("decreaseStateStep"),s.step>=1?ut.push("/step-".concat(s.step+1)):ut.push("/")},controlStepRouter:function(e,t){var s=e.commit;s("putStep",t)},toStep:function(e,t){var s=e.commit,r=e.state,n=e.dispatch;t<=r.currentStep&&(s("putStep",t),t>=1?ut.push("/step-".concat(t+1)).catch((function(e){})):ut.push("/").catch((function(e){}))),t>r.currentStep&&t<r.steps.length&&n("incrementStep")},fetchOrders:function(e){var t=e.commit;H().then((function(e){var s=W(e.orders._embedded.orders),r=U(e.products._embedded.products);t("setOrders",s),t("setProducts",r)})).catch((function(e){console.log("token api expired")}))},getProductsOrder:function(e,t){var s=e.commit,r=e.state,n=r.products.filter((function(e){return t.some((function(t){return e.id===t.productId}))}));s("setFullOrder",n)}},F={incrementStateStep:function(e){e.step+=1,e.step>e.currentStep&&(e.currentStep+=1)},decreaseStateStep:function(e){e.step-=1},putStep:function(e,t){e.step=t,e.step>e.currentStep&&(e.currentStep+=1)},setOrders:function(e,t){e.orders=t},setProducts:function(e,t){e.products=t},setFullOrder:function(e,t){e.productsDetailOrder=t}};r["a"].use(L["a"]);var X=new L["a"].Store({state:q,plugins:[Object(T["a"])({storage:window.sessionStorage})],actions:Y,mutations:F}),G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step"},[s("div",{staticClass:"exercise"},[s("h1",[e._v("Step 1")])])])}],K={name:"step-one"},ee=K,te=Object(u["a"])(ee,G,Q,!1,null,null,null),se=te.exports,re=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step"},[s("div",{staticClass:"exercise"},[s("h1",[e._v("Task 2a - Styles 🎨")]),s("p",[e._v("El equipo de diseño ha pedido algunos cambios en el componente. \n      Quieren probar si los usuarios lo entienden mejor mostrando los nombres de los pasos \n      en la parte superior en vez de en la inferior.")]),s("p",[s("strong",[e._v("Requisitos:")])]),s("ul",[s("li",[e._v("Modifica los estilos del componente para que el nombre de cada paso se muestre sobre él, en vez de debajo.\n        El componente debe ser configurable para soportar ambas variantes, tanto la original como la nueva.")])])]),s("div",{staticClass:"exercise"},[s("h1",[e._v("Task 2b - Responsiveness 📱")]),s("p",[e._v("El componente va a empezar a usarse en móviles (<768px), donde presenta algunos problemas.")]),s("p",[s("strong",[e._v("Requisitos:")])]),s("ul",[s("li",[e._v("Haz que en disposivos móviles sólo se muestre el nombre del paso activo.")])]),s("p",[s("strong",[e._v("Bonus:")])]),s("ul",[s("li",[e._v("En los anchos de pantalla más pequeños, o si los nombres de los pasos son un poco largos, surge otro problema de visualización. Propón alguna solución sencilla pero efectiva.")]),s("li",[e._v("Implementa las tareas con un enfoque mobile-first y elementos de accesibilidad.")])])]),s("div",{staticClass:"info"},[e._v("Avanza al siguiente paso para continuar con la prueba!")])])}],oe={name:"step-two"},ae=oe,ie=Object(u["a"])(ae,re,ne,!1,null,null,null),ce=ie.exports,le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step"},[e.apiResponse.length>0?s("div",{staticClass:"apires"},[s("div",[e._v("Respuesta API OK")]),s("div",[e._v("Número de pedidos "+e._s(e.apiResponse.length))]),e._l(e.apiResponse,(function(t){return s("div",{key:t.id},[e._v(e._s(t.code))])}))],2):s("div",{staticClass:"apires"},[e._v("\n    Respuesta API ERROR\n  ")]),e._m(0),s("div",{staticClass:"info"},[e._v("Avanza al siguiente paso para continuar con la prueba!")])])},pe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"exercise"},[s("h1",[e._v("Task 3a - API Request 📡")]),s("p",[e._v("Implementa una llamada HTTP al siguiente servicio de la API de MrJeff.")]),s("div",{staticClass:"doc-box"},[s("p",[s("strong",[e._v("HOST: ")]),s("code",[e._v("https://ecommerce.v1.backend.pre.mrjeffapp.net")])]),s("p",[s("strong",[e._v("PATH: ")]),s("code",[e._v("/apps/orders/search/findByCustomerId")])]),s("p",[s("strong",[e._v("HEADERS: ")]),s("br"),s("code",[e._v("Token: (Te lo enviaremos por email)\n        ")])])]),s("p",[s("strong",[e._v("Requisitos:")])]),s("ul",[s("li",[e._v("Implementa la petición al backend usando los datos proporcionados")])]),s("p",[s("strong",[e._v("Bonus:")])]),s("ul",[s("li",[e._v("Modifica la arquitectura del proyecto para que las llamadas al backend\n        estén más organizadas (p.ej: servicios, constantes, etc.)\n      ")])])])}],de={name:"step-three",computed:{apiResponse:function(){return this.$store.state.orders}}},ue=de,ve=Object(u["a"])(ue,le,pe,!1,null,null,null),me=ve.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step"},[s("router-link",{staticClass:"step-button has-margin-top",attrs:{to:{name:"orders"}}},[e._v("VER PEDIDOS")]),e._m(0),s("div",{staticClass:"info"},[e._v("Avanza al siguiente paso para continuar con la prueba!")])],1)},he=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"exercise"},[s("h1",[e._v("Task 4 - A new feature 🎉")]),s("p",[e._v("Tenemos que elaborar dos nuevas vistas para los usuarios: un listado de todos\n      sus pedidos realizados, y el detalle de cada uno de esos pedidos.\n      El equipo de producto nos ha pasado los siguientes diseños:\n    ")]),s("ul",[s("li",[s("a",{attrs:{href:"https://marvelapp.com/5668dj6/screen/59706050"}},[e._v("Listado")])]),s("li",[s("a",{attrs:{href:"https://marvelapp.com/5668dj6/screen/59706049"}},[e._v("Detalle")])]),s("li",[s("a",{attrs:{href:"https://mrjeffapp.invisionapp.com/share/GBWEEI62PCW#/screens/409194447"}},[e._v("Listado y detalle - update")])])]),s("br"),s("p",[s("strong",[e._v("Requisitos:")])]),s("ol",[s("li",[e._v("Utiliza los datos del endpoint creado en el paso anterior")]),s("li",[e._v("Añade al router dos nuevas rutas para mostrar las dos vistas\n        nuevas (p.ej: /orders y /orders/:orderId)")]),s("li",[e._v("Crea los componentes necesarios para generar las vistas")]),s("li",[e._v("Añade los estilos necesarios")]),s("li",[e._v("Puedes ignorar que las tarjetas son desplegables, no necesitamos esa\n        información extra.\n      ")])]),s("p",[s("strong",[e._v("Comentarios:")])]),s("ul",[s("li",[e._v("La lista de pedidos está en el objeto "),s("code",[e._v("orders")]),e._v(" de la respuesta")]),s("li",[e._v("La lista de productos de cada pedido está en "),s("code",[e._v("productsOrder")]),e._v(". Estos \n        sólo contienen los ID de los productos. Si necesitas más información sobre cada\n        producto, está en el objeto "),s("code",[e._v("products")]),e._v(", a primer nivel en la respuesta\n        del endpoint.")]),s("li",[e._v("Los horarios de recogida y entrega de cada producto están en la propiedad "),s("code",[e._v("visits")])]),s("li",[e._v("Si el código de logística es 'PICKUP-DELIVERY', hay que mostrar el icono del camión.\n        En cualquier otro caso, hay que mostrar el otro icono (marcador).\n      ")])])])}],_e={name:"step-four"},be=_e,Ce=Object(u["a"])(be,fe,he,!1,null,null,null),ge=Ce.exports,Se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Oe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"step"},[s("div",{staticClass:"exercise"},[s("h1",[e._v("Task 5 - Tests 🥇")]),s("p",[e._v("\n      Genera los tests que consideres oportunos para el componente realizado.\n    ")])]),s("div",{staticClass:"info"},[e._v("Has llegado al final, enhorabuena! 🎉🎉🎉")])])}],ye={name:"step-five"},Ee=ye,Ie=Object(u["a"])(Ee,Se,Oe,!1,null,null,null),je=Ie.exports,ke=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"orders-page"},[s("ordersList",e._l(e.ordersList,(function(e,t){return s("OrderItem",{key:"order"+t,attrs:{order:e}})})),1)],1)},xe=[],we=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"orders"},[s("div",{staticClass:"orders--title"},[e._v("Información de tus pedidos")]),s("div",{staticClass:"orders-list"},[e._t("default")],2)])},Pe=[],De={name:"order-list"},Re=De,$e=(s("8c76"),Object(u["a"])(Re,we,Pe,!1,null,null,null)),Le=$e.exports,Te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order"},[r("div",{staticClass:"order--content"},[r("div",{staticClass:"order--icon"},["DELIVERED-PICKUP"===e.order.logisticCode?r("img",{attrs:{src:s("1241"),alt:"marcador"}}):r("img",{attrs:{src:s("2b31"),alt:"marcador"}})]),r("div",{staticClass:"order--text"},[r("div",{staticClass:"order--title"},[e._v("Pedido nº "+e._s(e.order.code))]),r("div",{staticClass:"order--date"},[e._v("Fecha pedido: "+e._s(e.order.orderDate))])])]),r("div",{staticClass:"order--button",attrs:{id:e.order.code}},[r("router-link",{staticClass:"button",attrs:{to:{name:"orderId",params:{id:e.order.code}}}},[e._v("\n        VER PEDIDO\n      ")])],1)])},qe=[],Ae={name:"order",props:{order:{type:Object,required:!0}}},Me=Ae,Ne=(s("e8af"),Object(u["a"])(Me,Te,qe,!1,null,"261425cd",null)),Ze=Ne.exports,Be={name:"orders",components:{OrdersList:Le,OrderItem:Ze},computed:{ordersList:function(){return this.$store.state.orders.length>0?this.$store.state.orders:[{logisticCode:"delivery",code:"1234",orderDate:"12-03-20"}]}}},Je=Be,ze=Object(u["a"])(Je,ke,xe,!1,null,null,null),Ve=ze.exports,He=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"orders-page"},[s("OrdersList",[s("OrderCard",{attrs:{order:e.order}})],1)],1)},We=[],Ue=(s("8615"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card--text"},[s("div",{staticClass:"card--title"},[e._v("Datos del pedido nº "+e._s(e.order.code))]),s("div",{staticClass:"card--date"},[e._v("Fecha pedido: "+e._s(e.order.orderDate))])]),s("div",{staticClass:"card--content"},[s("div",{staticClass:"card--content-title"},[e._v("Productos")]),s("div",{staticClass:"card--box"},[e.order.cuponId?s("div",{staticClass:"card--product"},[s("div",{staticClass:"card--product-title"},[e._v("Cupón "+e._s(e.order.cuponId))]),s("div",{staticClass:"card--product-price"},[e._v("-20 €")])]):e._e(),s("div",{staticClass:"card--product"},[s("div",{staticClass:"card--product-title"},[e._v("Recogida/entrega")]),s("div",{staticClass:"card--product-price"},[e._v(e._s(e.order.totalDeliveryPrice)+" €")])])]),s("div",{staticClass:"card--box"},[s("div",{staticClass:"card--content-title"},[e._v("Productos Añadidos")]),e._l(e.productsDetailOrder,(function(t){return s("div",{key:t.id,staticClass:"card--product"},[s("div",{staticClass:"card--product-title"},[t.quantity>1?s("span",[e._v(e._s(t.quantity)+" x ")]):e._e(),e._v(" "+e._s(t.name)+"\n        ")]),s("div",{staticClass:"card--product-price"},[e._v(e._s(t.price)+" €")])])}))],2),s("div",{staticClass:"card--box"},[s("div",{staticClass:"card--product"},[s("div",{staticClass:"card--product-title"},[e._v("Total")]),s("div",{staticClass:"card--product-price"},[e._v(e._s(e.order.totalPrice)+" €")])])])]),s("div",{staticClass:"card--button"},[s("Collapse-Component",{attrs:{"open-default":!1}},[s("template",{slot:"collapse-component-header"},[s("button",{staticClass:"button"},[e._v("Cambiar hora recogida y entrega")])]),s("template",{slot:"collapse-component-content"},[e.order.pickupDates.length>0?s("form",{attrs:{action:"#"}},[e._l(e.order.pickupDates,(function(t,r){return s("div",{key:"option"+r,staticClass:"input-radio"},[s("input",0===r?{attrs:{type:"radio",id:"option"+r,name:"date",checked:""},domProps:{value:t.id}}:{attrs:{type:"radio",id:"option"+r,name:"date"},domProps:{value:t.id}}),s("label",{attrs:{for:"option"+r}},[e._v(e._s(t.pickupDate)+" - "+e._s(t.pickupStart)+" - "+e._s(t.pickupEnd))])])})),s("div",{staticClass:"card--button"},[s("button",{staticClass:"button is-small"},[e._v("\n                Cambiar\n              ")])])],2):e._e()])],2)],1),s("div",{staticClass:"card--button is-transparent"},[s("router-link",{staticClass:"button",attrs:{to:{name:"orders"}}},[s("span",[e._v("←")]),e._v("VOLVER")])],1)])}),Ye=[],Fe=(s("8e6e"),s("456d"),s("bd86")),Xe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["collapse-component",e.classes]},[s("div",{staticClass:"collapse-trigger",on:{click:function(t){return e.toggle()}}},[e._t("collapse-component-header")],2),s("div",{staticClass:"collapse-component--wrapper"},[s("div",{staticClass:"collapse-component--collapsible"},[s("div",{staticClass:"collapse-component--content"},[e._t("collapse-component-content")],2)])])])},Ge=[],Qe={props:{openDefault:{type:Boolean,default:!1}},data:function(){return{isActive:this.openDefault}},computed:{classes:function(){return{"is-open":this.isActive}}},methods:{open:function(){this.isActive=!0},close:function(){this.isActive=!1},toggle:function(){this.isActive?this.close():this.open()}}},Ke=Qe,et=(s("acd4"),Object(u["a"])(Ke,Xe,Ge,!1,null,"2e6266d8",null)),tt=et.exports;function st(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function rt(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?st(Object(s),!0).forEach((function(t){Object(Fe["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):st(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var nt={name:"card",components:{CollapseComponent:tt},props:{order:{type:Object,required:!0}},created:function(){this.$store.dispatch("getProductsOrder",this.order.productsOrder)},computed:{productsDetailOrder:function(){var e=this,t=[];return this.$store.state.productsDetailOrder.length>0?(this.$store.state.productsDetailOrder.forEach((function(s){e.order.productsOrder.forEach((function(e){s.id===e.productId&&t.push(rt({},e,{},s))}))})),t):[{id:"12",quantity:"2",name:"Chaqueta",price:"12"}]}}},ot=nt,at=(s("e925"),Object(u["a"])(ot,Ue,Ye,!1,null,"56a8788c",null)),it=at.exports,ct={name:"orders",components:{OrdersList:Le,OrderCard:it},props:{id:{required:!0,type:String}},computed:{order:function(){var e=this;return this.$store.state.orders.length>0?Object.values(this.$store.state.orders.filter((function(t){return t.code==e.id})))[0]||{}:{logisticCode:"delivery",code:"1234",orderDate:"12-03-20",price:"12",cuponId:"",totalDeliveryPrice:"0",totalPrice:"12",pickupDates:[{id:"123",pickupDate:"12-03-2020",pickupStart:"9:00",pickupEnd:"12:00"}]}}}},lt=ct,pt=Object(u["a"])(lt,He,We,!1,null,null,null),dt=pt.exports;r["a"].use($["a"]);var ut=new $["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:se,beforeEnter:function(e,t,s){X.dispatch("controlStepRouter",0),s()}},{path:"/step-2",name:"step-2",component:ce,beforeEnter:function(e,t,s){X.state.currentStep>=1?(X.dispatch("controlStepRouter",1),s()):s({name:"home"})}},{path:"/step-3",name:"step-3",component:me,beforeEnter:function(e,t,s){X.state.currentStep>=2?(X.dispatch("controlStepRouter",2),s()):s({name:"home"})}},{path:"/step-4",name:"step-4",component:ge,beforeEnter:function(e,t,s){X.state.currentStep>=3?(X.dispatch("controlStepRouter",3),s()):s({name:"home"})}},{path:"/step-5",name:"step-5",component:je,beforeEnter:function(e,t,s){4==X.state.currentStep?(X.dispatch("controlStepRouter",4),s()):s({name:"home"})}},{path:"/orders",name:"orders",component:Ve,beforeEnter:function(e,t,s){X.state.currentStep>=3?(X.dispatch("controlStepRouter",3),s()):s({name:"home"})}},{path:"/orders/:id",name:"orderId",component:dt,props:!0,beforeEnter:function(e,t,s){X.state.currentStep>=3?(X.dispatch("controlStepRouter",3),s()):s({name:"home"})}},{path:"*",redirect:"/"}]});r["a"].config.productionTip=!1,new r["a"]({store:X,router:ut,render:function(e){return e(R)}}).$mount("#app")},"5b35":function(e,t,s){},"8c76":function(e,t,s){"use strict";var r=s("5b35"),n=s.n(r);n.a},9906:function(e,t,s){},a122:function(e,t,s){},acd4:function(e,t,s){"use strict";var r=s("3cec"),n=s.n(r);n.a},e8af:function(e,t,s){"use strict";var r=s("3d7e"),n=s.n(r);n.a},e925:function(e,t,s){"use strict";var r=s("a122"),n=s.n(r);n.a}});
//# sourceMappingURL=app.ed39e797.js.map