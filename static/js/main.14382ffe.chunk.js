(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(25),i=a.n(n),r=(a(51),a(17)),o=(a(52),a(9)),l=(a(53),a(54),a(3)),d=function(){return Object(l.jsx)("div",{className:"logo",children:Object(l.jsxs)(r.b,{to:"/",exact:!0,activeClassName:"logo-active",children:[Object(l.jsx)("p",{className:"logo__weather",children:"WEATHER."}),Object(l.jsx)("p",{className:"logo__app",children:"app"})]})})},j=a(15),u=a.p+"static/media/Menu.4a321fbd.svg",h=Object(j.b)((function(e){return{city:e.main.city}}),null)((function(e){var t=e.city;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"header__logo",children:Object(l.jsx)(d,{})}),Object(l.jsx)("div",{className:"header__info",children:Object(l.jsxs)("ul",{className:"header__list",children:[Object(l.jsx)("li",{className:"header__list__item",children:"SIGN IN"}),Object(l.jsx)("li",{className:"header__list__item",children:Object(l.jsx)(r.b,{to:"/",children:t.toUpperCase()})}),Object(l.jsx)("li",{className:"header__list__item",children:Object(l.jsx)(r.b,{to:"/favorites",children:"CITIES"})}),Object(l.jsx)("img",{src:u,alt:"menu"})]})})]})})),b=(a(60),a(22)),p=(a(61),a(23)),f=a.n(p),m=a(28),O=function(){var e=Object(m.a)(f.a.mark((function e(t){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=".concat(t,",RU&key=5c5fe7823c0f43d78798ff8dcdd824cd"));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x="SELECT_CITY",_="GET_ARR",v="SHOW_TWO_WEEKS",g=(a(63),a.p+"static/media/snowy-6.abf21199.svg"),w=a.p+"static/media/snowy-4.73884080.svg",N=a.p+"static/media/rainy-2.d017a156.svg",y=a.p+"static/media/rainy-4.4a3f03de.svg",k=a.p+"static/media/day.212e0420.svg",S=a.p+"static/media/cloudy-day-1.b2e53053.svg",T=a.p+"static/media/cloudy.22e97e83.svg",E=a.p+"static/media/rings.f85f7656.svg",L=a(45),A=a.n(L),W=function(e){var t=e.data,a=(e.indexId,new Date(1e3*t.ts).getDay()),c=new Date(1e3*t.ts).getDate(),s=t.weather.description;console.log(s);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(A.a,{className:"Tilt weather-card",options:{reverse:!1,max:50,perspective:1e3,scale:1,speed:1e3,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"},children:Object(l.jsxs)("li",{className:"Tilt-inner",children:[Object(l.jsxs)("p",{className:"Tilt-inner",children:[c,"\xa0"]}),Object(l.jsx)("p",{className:"Tilt-inner",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][a]}),Object(l.jsx)("img",{src:function(){switch(s){case"Mix snow/rain":return g;case"Scattered clouds":return S;case"Overcast clouds":case"Broken clouds":return T;case"Light shower rain":return N;case"Light snow":return w;case"Clear Sky":return k;case"Few clouds":return S;case"Light rain":return y;case"Snow":return g;default:return E}}(),alt:"image",className:"Tilt-inner"}),Object(l.jsxs)("p",{className:"Tilt-inner",children:[t.temp,"\xb0"]})]})})})},I={getArr:function(e){return{type:_,payload:e}}},C=Object(j.b)((function(e){return{city:e.main.city,dataApi:e.main.dataApi}}),I)((function(e){var t=e.city,a=e.dataApi,s=e.getArr,n=Object(c.useState)(!0),i=Object(b.a)(n,2),r=i[0],o=i[1];Object(c.useEffect)((function(){O(t).then((function(e){o(!1),s(e)}))}),[]);return Object(l.jsx)("div",{className:"change",children:Object(l.jsxs)("div",{className:"change__container",children:[Object(l.jsxs)("div",{className:"change__text",children:[Object(l.jsx)("p",{className:"change__aaa",children:"available"}),Object(l.jsx)("p",{children:"weather"})]}),Object(l.jsx)("div",{className:"change__selectors",children:Object(l.jsx)("ul",{className:"change__selectors__list",children:!r&&(null===a||void 0===a?void 0:a.data.map((function(e,t){return Object(l.jsx)(W,{data:e},t)})))})})]})})})),D=a(18),R=(a(64),function(){var e=Object(m.a)(f.a.mark((function e(t){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,",ru&appid=64a44bf6d1b65cbca94928d15987fedf"));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),M=a.p+"static/media/snowy-6.dce3f5e7.svg",U=a.p+"static/media/day.c33ef664.svg",B=a.p+"static/media/thunder.19ff3c30.svg",K=a.p+"static/media/cloudy.24f9a474.svg",H=a.p+"static/media/rainy-6.130d6250.svg",F=a.p+"static/media/rings.f85f7656.svg",J=Object(j.b)((function(e){return{city:e.main.city}}),null)((function(e){var t=e.city,a=(e.getApi,Object(c.useState)({})),s=Object(b.a)(a,2),n=s[0],i=s[1];Object(c.useEffect)((function(){R(t).then((function(e){i((function(t){return Object(D.a)(Object(D.a)({},t),{},{locate:e.name,temp:Math.round(e.main.temp-273),feelsLike:Math.round(e.main.feels_like-273),sunrise:e.sys.sunrise,description:e.weather[0].main,date:e.dt})}))}))}),[]);var r=function(){switch(n.description){case"Snow":return M;case"Thunder":return B;case"Clouds":return K;case"Clear":return U;case"Rain":return H;default:return F}};return Object(l.jsx)("div",{className:"weather",children:Object(l.jsxs)("div",{className:"weather__main",children:[Object(l.jsx)("img",{className:"weather__img",src:r(),alt:"Weather"}),Object(l.jsx)("p",{className:"weather__locate",children:t}),Object(l.jsx)("p",{className:"weather__now",children:"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0443\u043b\u0438\u0446\u0435: "}),Object(l.jsxs)("h2",{className:"weather__temp",children:[n.temp,"\xb0",Object(l.jsx)("img",{src:r(),alt:""})]}),Object(l.jsx)("p",{className:"weather__feelsLike",children:"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: "})," ",Object(l.jsxs)("h3",{children:[n.feelsLike,"\xb0 ",n.feelsLike<=-10?"\ud83e\udd76":n.feelsLike<=0||n.feelsLike>=0?"\ud83e\udd27":n.feelsLike>=10?"\ud83e\udd12":n.feelsLike>=20?"\ud83e\udd75":"\ud83d\ude0e"]})]})})})),P=(a(65),{showTwoWeeks:function(){return{type:v,payload:!0}}}),X=Object(j.b)((function(e){return{twoWeeks:e.main.twoWeeks}}),P)((function(e){e.twoWeeks,e.showTwoWeeks;return Object(l.jsxs)("div",{className:"central",children:[Object(l.jsx)(C,{}),Object(l.jsx)(J,{})]})})),z=(a(66),a(67),function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("div",{className:"footer__left",children:Object(l.jsx)("p",{children:"Payments Options:"})}),Object(l.jsxs)("div",{className:"footer__right",children:[Object(l.jsx)("div",{className:"footer__right__features",children:Object(l.jsx)("p",{children:"FEATURES:"})}),Object(l.jsxs)("div",{className:"footer__right__info",children:[Object(l.jsx)("p",{children:"3D Stereo Music"}),Object(l.jsx)("p",{children:"Air Control Music String"}),Object(l.jsx)("p",{children:"24 BIT Music Transmit"}),Object(l.jsx)("p",{children:"Line in/Line out"}),Object(l.jsx)("p",{children:"Compatible with Android/iPhones"}),Object(l.jsx)("p",{children:"57mm Ultra Big Drive Units for Bass"}),Object(l.jsx)("button",{className:"footer__right__button",children:"\u041f\u041e\u0414\u041f\u0418\u0421\u0410\u0422\u042c\u0421\u042f \u041d\u0410 PUSH \u0423\u0412\u0415\u0414\u041e\u041c\u041b\u0415\u041d\u0418\u042f"})]})]})]})}),G=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(X,{})})},V=(a(68),{selectCity:function(e){return{type:x,payload:e}}}),Y=Object(j.b)(null,V)((function(e){var t=e.selectCity,a=["Krasnodar","Moscow","Rostov-On-Don","St. Petersburg","Sochi","Novosibirsk","Saratov","Vladivostok","Habarovsk","Siktivkar","Anapa","Krasnoyarsk","Kazan","Ekaterinburg","Tula"].sort().map((function(e,a){return Object(l.jsx)("span",{className:"favorites__items ".concat(a),onClick:function(){return t(e)},children:Object(l.jsx)(r.b,{to:"/",className:"favorites__items ".concat(a),children:e},a)},a)}));return Object(l.jsx)("div",{className:"favorites",children:Object(l.jsx)("div",{className:"favorites__cities",children:a})})}));a(69);var q=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:G}),Object(l.jsx)(o.a,{path:"/favorites",component:Y}),Object(l.jsx)(z,{})]})},Q=a(20),Z={city:"Krasnodar",cities:null,dataApi:null,twoWeeks:!1},$=Object(Q.b)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(D.a)(Object(D.a)({},e),{},{city:t.payload});case _:return Object(D.a)(Object(D.a)({},e),{},{dataApi:t.payload});case v:return Object(D.a)(Object(D.a)({},e),{},{twoWeeks:t.payload});default:return e}}}),ee=a(46),te=Object(Q.d)($,Object(Q.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));ee.a.initializeApp({apiKey:"AIzaSyCTSO65DHWXHPJ02GBWQueiKRmiLrJsdxE",authDomain:"weather-app-9ee4f.firebaseapp.com",databaseURL:"https://weather-app-9ee4f-default-rtdb.europe-west1.firebasedatabase.app",projectId:"weather-app-9ee4f",storageBucket:"weather-app-9ee4f.appspot.com",messagingSenderId:"128842807054",appId:"1:128842807054:web:e33e297be33928a516495f",measurementId:"G-Y5ETZLYFJW"});var ae=Object(l.jsx)(j.a,{store:te,children:Object(l.jsx)(r.a,{children:Object(l.jsx)(q,{})})});i.a.render(Object(l.jsx)(s.a.StrictMode,{children:ae}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.14382ffe.chunk.js.map