(this.webpackJsonpmonster=this.webpackJsonpmonster||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(6),u=n(5),m=(n(13),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"bhoot",src:"https://robohash.org/".concat(e.monster.id,"/?set=set3&size=180x180")}),r.a.createElement("h2",null," ",e.monster.name),r.a.createElement("p",null,e.monster.email))}),h=(n(14),function(e){return r.a.createElement("div",{className:"card-first"},e.monsters.map((function(e){return r.a.createElement(m,{key:e.id,monster:e})}))," ")}),d=(n(15),function(e){var t=e.placeholder,n=e.handle;return r.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handle=function(t){e.setState({searchbox:t.target.value})},e.state={monsters:[],searchbox:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchbox,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(d,{placeholder:"search Monsters",handle:this.handle}),r.a.createElement(h,{monsters:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.760841f7.chunk.js.map