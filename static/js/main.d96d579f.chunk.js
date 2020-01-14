(this["webpackJsonpcolombian-holidays"]=this["webpackJsonpcolombian-holidays"]||[]).push([[0],{37:function(e,t,n){e.exports=n(58)},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),c=n(6),l=n(2),s=n(12),m=n(8),d=n(22),u=n(23),h=n(24),p=n(33),y=n(25),f=n(34),g=n(26);function b(){var e=Object(c.a)(["\n  position: relative;\n  margin: 1rem auto 0;\n  background: none;\n  display: inline-block;\n  cursor: pointer;\n  margin: 0.5rem;\n  &:after {\n    content: '';\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 10px 7px 0;\n    border-color: "," transparent transparent\n      transparent;\n    position: absolute;\n    right: 11px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  select {\n    border-radius: 4px;\n    background-color: ",";\n    color: ",";\n    border: none;\n    font-size: inherit;\n    line-height: 1.5em;\n    appearance: none;\n    margin: 0;\n    padding: 0 2rem 0 20px;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    &:focus {\n      outline: 0;\n    }\n  }\n"]);return b=function(){return e},e}var v=l.c.div(b(),(function(e){return e.theme.dark}),(function(e){return e.theme.white}),(function(e){return e.theme.dark})),E=function(e){return r.a.createElement(v,null,r.a.createElement("select",{name:e.name,value:e.selected||("year"===e.name?e.placeholder:"00"),onChange:e.onChangeHandler},[e.placeholder].concat(e.options).map((function(t,n){return r.a.createElement("option",{key:t,value:"year"===e.name?t:"0".concat(n).slice(-2),disabled:t===e.placeholder,hidden:t===e.placeholder},t)}))))};function w(){var e=Object(c.a)(["\n  background-color: ",";\n  padding: 1rem 1rem 3rem;\n  border-bottom: 6px solid ",";\n  color: ",";\n  .dropdowns {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    @media screen and (min-width: ",") {\n      flex-direction: row;\n    }\n  }\n  select {\n    font-size: 1.5rem;\n    @media screen and (min-width: ",") {\n      font-size: 2rem;\n    }\n  }\n"]);return w=function(){return e},e}var k=l.c.header(w(),(function(e){return e.theme.primary}),(function(e){return e.theme.danger}),(function(e){return e.theme.white}),(function(e){return e.theme.maxWidth}),(function(e){return e.theme.maxWidth})),C=function(e){var t=e.month&&parseInt(e.month,10)-1,n={name:"day",placeholder:"day",options:e.days},a={name:"year",placeholder:"year",options:e.years},o={name:"month",placeholder:"month",options:e.months};return r.a.createElement(k,null,r.a.createElement("h1",null,"Colombian Holidays ",t?o.options[t]:""," ",e.year),e.year&&r.a.createElement("div",{className:"dropdowns"},r.a.createElement(E,Object.assign({},a,{onChangeHandler:e.onChangeHandler,selected:e.year})),r.a.createElement(E,Object.assign({},o,{onChangeHandler:e.onChangeHandler,selected:e.month})),e.month&&r.a.createElement(E,Object.assign({},n,{onChangeHandler:e.onChangeHandler,selected:e.day}))))},x=l.c.main.withConfig({displayName:"Main__MainWrapper",componentId:"sc-19buve9-0"})(["text-align:center;padding:2rem 1rem;display:flex;align-items:center;justify-content:center;height:100%;time{display:block;}time::first-letter{text-transform:uppercase;}"]),H=l.c.div.withConfig({displayName:"Main__MainContentWrapper",componentId:"sc-19buve9-1"})(["max-width:",";"],(function(e){return e.theme.maxWidth})),j=function(e){var t=e.children,n=e.className;return r.a.createElement(x,{className:n},r.a.createElement(H,null,t))};function O(){var e=Object(c.a)(["\n  font-size: 2rem;\n  select {\n    border-bottom: 4px solid ",";\n  }\n"]);return O=function(){return e},e}var Y=Object(l.c)(j)(O(),(function(e){return e.theme.grey})),N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(Y,null,e.message?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{role:"img","aria-label":"not-found"},e.emoji||"\ud83e\udd14"),r.a.createElement("p",null,e.message)):null,e.options?r.a.createElement(E,{name:e.name,placeholder:e.placeholder,options:e.options,onChangeHandler:e.onChangeHandler}):null))},D=function(e){return r.a.createElement("time",{dateTime:e.date},new Intl.DateTimeFormat(e.locale,{weekday:e.weekday,year:e.year,month:e.month,day:e.day}).format(new Date("".concat(e.date,"T05:00Z"))))};D.defaultProps={locale:"en",weekday:"long",year:"numeric",month:"long",day:"numeric"};var F=D,I=n(65),A=n(64),W=n(30),M=n.n(W);A.a.locale(M.a);var z=l.c.div.withConfig({displayName:"Countdown__CountDownWrapper",componentId:"sc-66cioa-0"})(["margin:0.15rem auto;display:inline-block;font-size:0.85rem;padding:0.35rem 0.5rem 0.25rem;color:",";border-radius:4px;&.current{background-color:",";color:white;}&.inactive{background-color:inherit;color:",";text-decoration:line-through;opacity:0.75;font-size:0.75rem;padding:0.15rem 0.25rem;}"],(function(e){return e.theme.success}),(function(e){return e.theme.success}),(function(e){return e.theme.danger})),S=function(e){return r.a.createElement(z,{className:"".concat(e.inactive?"inactive":""," ").concat(e.current?"current":"")},r.a.createElement(I.a,{date:e.date,locale:"en"}))},_=Object(l.c)(j).withConfig({displayName:"HolidaysList__HolidaysListWrapper",componentId:"sc-19akigk-0"})(["height:auto;time{display:block;}time::first-letter{text-transform:uppercase;}ul{list-style:none;padding:0;margin:0;li:first-child{border-top:1px solid ",";}li{padding:0.75em;border-bottom:1px solid ",";h3{margin:0 0 0.25rem;}time{display:block;overflow:hidden;}}li.inactive{padding:0.25rem 0.75rem 0.15rem;color:",";font-size:0.85rem;h3{font-weight:normal;margin-bottom:0.15rem;}}}"],(function(e){return e.theme.greylighter}),(function(e){return e.theme.greylighter}),(function(e){return e.theme.inactiveFG})),T=function(e){var t=new Date;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,e),r.a.createElement(_,null,r.a.createElement("ul",null,e.holidays.map((function(e,n,a){var o=new Date("".concat(e.date,"T05:00")),i=o.getFullYear()===t.getFullYear(),c=o<t&&i,l=!1;if(n){var s=new Date("".concat(a[n-1].date,"T05:00"))<t;l=i&&c!==s}return r.a.createElement("li",{key:e.name,className:c?"inactive":""},r.a.createElement("h3",null,e.name),r.a.createElement(F,{date:e.date}),r.a.createElement(S,{date:e.date,inactive:c,current:l}))})))))};function J(){var e=Object(c.a)(["\n  font-size: 1.5rem;\n  .celebrate:after,\n  .celebrate:before {\n    content: '\u2728';\n  }\n"]);return J=function(){return e},e}var V=Object(l.c)(j)(J()),L=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,e),r.a.createElement(V,null,r.a.createElement(F,{date:e.date}),e.isHoliday?r.a.createElement("p",{className:"celebrate"},"HOLIDAY"):r.a.createElement("p",null,"NOT HOLIDAY"),r.a.createElement("span",{role:"img","aria-label":e.isHoliday?"holiday":"not holiday"},e.isHoliday?"\ud83d\ude04":"\ud83d\ude25")))},P=["January","February","March","April","May","June","July","August","September","October","November","December"],U=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,e),r.a.createElement(j,null,r.a.createElement("p",null,"No holidays during ",P[parseInt(e.month,10)-1]," ",r.a.createElement(s.b,{to:"/".concat(e.year)},e.year),"."),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"no holidays"},"\ud83d\ude25"))))},B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).startYear=1984,n.currentYear=(new Date).getFullYear(),n.yearsPastCurrentYear=10,n.endYear=n.currentYear+n.yearsPastCurrentYear,n.state={year:n.props.match.params.year,month:n.props.match.params.month,day:n.props.match.params.day,years:n.getYears(),months:n.getMonths(),days:n.getDays(n.props.match.params.year,n.props.match.params.month),holidays:n.getHolidays(n.props.match.params.year)},n.onChangeHandler=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r));var o="year"===a?"/".concat(r):"month"===a?"/".concat(n.state.year,"/").concat(r):"/".concat(n.state.year,"/").concat(n.state.month,"/").concat(r);n.props.history.push(o)},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"getYears",value:function(){var e=this,t=this.currentYear-this.startYear+this.yearsPastCurrentYear+1;return Array.from({length:t},(function(t,n){return e.startYear+n}))}},{key:"getMonths",value:function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}},{key:"getDays",value:function(e,t){if(!e||!t)return[];var n=parseInt(e,10),a=parseInt(t,10);if(isNaN(n)||isNaN(a))return[];var r=new Date(n,a,0).getDate();return Array.from({length:r},(function(e,t){return t+1}))}},{key:"getHolidays",value:function(e){return this.isValidYear(e)?Object(g.getAllHolidays)(e).sort((function(e,t){return e.date.localeCompare(t.date)})):[]}},{key:"isValidYear",value:function(e){var t=parseInt(this.startYear,10),n=parseInt(this.endYear,10);return e>=t&&e<=n}},{key:"isValidMonth",value:function(e){var t=parseInt(e,10);return t>=1&&t<=12}},{key:"isValidDay",value:function(e){return this.state.days.includes(parseInt(e,10))}},{key:"componentDidUpdate",value:function(e){this.props.match.params.year!==e.match.params.year&&this.setState({year:this.props.match.params.year,holidays:this.getHolidays(this.props.match.params.year)}),this.props.match.params.month!==e.match.params.month&&this.setState({month:this.props.match.params.month,days:this.getDays(this.props.match.params.year,this.props.match.params.month)}),this.props.match.params.day!==e.match.params.day&&this.setState({day:this.props.match.params.day})}},{key:"render",value:function(){var e=this;if(this.state.year&&!this.isValidYear(this.state.year)||this.state.month&&!this.isValidMonth(this.state.month)||this.state.day&&!this.isValidDay(this.state.day)){var t={name:"year",placeholder:"a\xf1o",options:this.state.years};return r.a.createElement(N,Object.assign({},t,{message:"It seems like we don't have that information.",onChangeHandler:this.onChangeHandler}))}if(this.state.day){var n="".concat(this.state.year,"-").concat(this.state.month,"-").concat(this.state.day),a=this.state.holidays.find((function(e){return e.date===n}));return r.a.createElement(L,Object.assign({},this.state,{onChangeHandler:this.onChangeHandler,date:n,isHoliday:a}))}var o=this.state.month?this.state.holidays.filter((function(t){return t.date.split("-")[1]===e.state.month})):this.state.holidays;return this.state.month&&0===o.length?r.a.createElement(U,Object.assign({},this.state,{onChangeHandler:this.onChangeHandler})):r.a.createElement(T,Object.assign({},this.state,{onChangeHandler:this.onChangeHandler,holidays:o}))}}]),t}(a.Component),G=l.c.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1izuo13-0"})(["background-color:",";color:",";padding:2rem 1rem 1rem;margin-top:auto;a{color:",";}span{font-size:2rem;}"],(function(e){return e.theme.primary}),(function(e){return e.theme.white}),(function(e){return e.theme.white})),R=function(){return r.a.createElement(G,null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/mauriciorobayo/colombianholidays"},"This is an open source project.")),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"Fireworks"},"\ud83c\udf86")))};function Z(){var e=Object(c.a)(["\n  html {\n    box-sizing: border-box;\n    font: 18px Arial, Helvetica, sans-serif;\n    color: ",";\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    color: ",";\n  }\n  #root {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n"]);return Z=function(){return e},e}var $={dark:"#444",grey:"#777",greylighter:"#ddd",white:"#fff",inactiveFG:"#aaa",inactiveBG:"#f4f4f4",primary:"#6b5b95",success:"#00A591",danger:"#fe840e",maxWidth:"640px"},q=Object(l.b)(Z(),$.dark,$.dark),K=function(){return r.a.createElement(l.a,{theme:$},r.a.createElement(s.a,null,r.a.createElement(a.Fragment,null,r.a.createElement(q,null),r.a.createElement(m.d,null,r.a.createElement(m.a,{exact:!0,from:"/",to:"/".concat((new Date).getFullYear())}),r.a.createElement(m.b,{exact:!0,path:"/:year([1-2]\\d{3})/:month(\\d{2})?/:day(\\d{2})?",component:B}),r.a.createElement(m.b,{render:function(e){return r.a.createElement(N,Object.assign({},e,{message:"Something doesn't make sense."}))}})),r.a.createElement(R,null))))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(K,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/colombian-holidays",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/colombian-holidays","/service-worker.js");Q?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):X(t,e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.d96d579f.chunk.js.map