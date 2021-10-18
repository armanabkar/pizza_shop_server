(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6978ece"],{"0b42":function(t,e,r){var n=r("e8b5"),a=r("68ee"),s=r("861d"),c=r("b622"),i=c("species");t.exports=function(t){var e;return n(t)&&(e=t.constructor,a(e)&&(e===Array||n(e.prototype))?e=void 0:s(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},"1dde":function(t,e,r){var n=r("d039"),a=r("b622"),s=r("2d00"),c=a("species");t.exports=function(t){return s>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3530:function(t,e,r){"use strict";r.r(e);r("b0c0");var n=r("7a23");Object(n["u"])("data-v-ec777474");var a={class:"admin"},s=Object(n["g"])('<p class="text-center description" style="margin:0 0.5em;padding:1em 0;" data-v-ec777474><span class="text-white" data-v-ec777474> The REST API for the pizza ordering application. Built with Node.js and Express.</span><br data-v-ec777474><span class="text-secondary" data-v-ec777474>*This server is using lowdb as a database and save the new data to a .json file, so new data won&#39;t persist.</span><br data-v-ec777474><a href="https://github.com/armanabkar/pizza_shop_server" class="text-info" data-v-ec777474>Source Code</a> | <a href="https://github.com/armanabkar/PizzaShop" class="text-info" data-v-ec777474>iOS application</a></p><h3 data-v-ec777474><span class="text-white" data-v-ec777474>API Endpoints:</span></h3><table class="table" data-v-ec777474><thead data-v-ec777474><tr data-v-ec777474><th scope="col" class="hidden" data-v-ec777474>Method</th><th scope="col" data-v-ec777474>Endpoint</th><th scope="col" data-v-ec777474>Description</th></tr></thead><tbody data-v-ec777474><tr data-v-ec777474><td class="hidden" data-v-ec777474>GET</td><td data-v-ec777474>/api/v1/foods</td><td data-v-ec777474>Get all foods</td></tr><tr data-v-ec777474><td class="hidden" data-v-ec777474>GET</td><td data-v-ec777474>/api/v1/orders</td><td data-v-ec777474>Get all orders</td></tr><tr data-v-ec777474><td class="hidden" data-v-ec777474>POST</td><td data-v-ec777474>/api/v1/orders/add</td><td data-v-ec777474>Add a new order</td></tr><tr data-v-ec777474><td class="hidden" data-v-ec777474>DELETE</td><td data-v-ec777474>/api/v1/orders/delete/:id</td><td data-v-ec777474>Delete order by id</td></tr><tr data-v-ec777474><td class="hidden" data-v-ec777474>GET</td><td data-v-ec777474>/api/v1/reservations</td><td data-v-ec777474>Get all reservations</td></tr><tr data-v-ec777474><td class="hidden" data-v-ec777474>POST</td><td data-v-ec777474>/api/v1/reservations/add</td><td data-v-ec777474>Add a new reservation</td></tr><tr data-v-ec777474><td class="hidden" data-v-ec777474>DELETE</td><td data-v-ec777474>/api/v1/reservations/delete/:id</td><td data-v-ec777474>Delete reservation by id</td></tr><tr data-v-ec777474><td class="hidden" data-v-ec777474>GET</td><td data-v-ec777474>/api/v1/users</td><td data-v-ec777474>Get all users</td></tr><tr data-v-ec777474><td class="hidden" data-v-ec777474>GET</td><td data-v-ec777474>/api/v1/users/login</td><td data-v-ec777474>Login</td></tr><tr data-v-ec777474><td class="hidden" data-v-ec777474>POST</td><td data-v-ec777474>/api/v1/users/register</td><td data-v-ec777474>Register</td></tr><tr data-v-ec777474><td class="hidden" data-v-ec777474>DELETE</td><td data-v-ec777474>/api/v1/users/delete/:phone</td><td data-v-ec777474>Delete user by phone number</td></tr></tbody></table>',3),c=Object(n["f"])("span",{class:"text-white"},"Orders:",-1),i={class:"list-group-item list-group-item-action order flex-column align-items-start bg-dark text-white"},d={class:"d-flex w-100 justify-content-between"},o={class:"mb-1"},l={class:"text-white"},u=Object(n["h"])(" | "),b=["onClick"],f={class:"text-info"},h={class:"text-warning"},p=Object(n["f"])("br",null,null,-1),v={class:"text-warning"},O=Object(n["f"])("br",null,null,-1),j=Object(n["f"])("span",{class:"text-white"},"Reservations:",-1),m={class:"list-group-item list-group-item-action order flex-column align-items-start bg-dark text-white"},w={class:"d-flex w-100 justify-content-between"},g={class:"mb-1"},y={class:"text-white"},x=Object(n["h"])(" | "),k=["onClick"],E={class:"text-warning"},A=Object(n["f"])("br",null,null,-1),z={class:"text-warning"},T=Object(n["f"])("br",null,null,-1),R={class:"text-secondary"},C=Object(n["f"])("span",{class:"text-white"},"Users:",-1),D={class:"list-group-item list-group-item-action order flex-column align-items-start bg-dark text-white"},S={class:"d-flex w-100 justify-content-between"},U={class:"mb-1"},G={class:"text-white"},L=Object(n["h"])(" | "),P=["onClick"],I={style:{margin:"0"},class:"text-warning"};function M(t,e,r,M,N,_){return Object(n["r"])(),Object(n["e"])("div",a,[s,Object(n["f"])("h3",null,[c,Object(n["f"])("div",null,[Object(n["f"])("button",{type:"button",class:"btn btn-outline-warning refetch",onClick:e[0]||(e[0]=function(){return _.newOrder&&_.newOrder.apply(_,arguments)})}," New Order "),Object(n["f"])("button",{type:"button",class:"btn btn-info refetch",onClick:e[1]||(e[1]=function(){return _.refetchOrders&&_.refetchOrders.apply(_,arguments)}),style:{"margin-left":"0.5em"}}," Refresh ")])]),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.orders,(function(t,e){return Object(n["r"])(),Object(n["e"])("div",{class:"list-group",key:t.id},[Object(n["f"])("span",i,[Object(n["f"])("div",d,[Object(n["f"])("h5",o,Object(n["A"])(t.name),1),Object(n["f"])("div",null,[Object(n["f"])("small",l,Object(n["A"])(t.totalPrice)+"$",1),u,Object(n["f"])("button",{type:"button",class:"btn btn-danger",onClick:function(t){return _.deleteOrder(e)}}," Delete Order ",8,b)])]),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.items,(function(t){return Object(n["r"])(),Object(n["e"])("ul",{class:"mb-1",key:t.id},[Object(n["f"])("li",f,Object(n["A"])(t),1)])})),128)),Object(n["f"])("small",h,Object(n["A"])(t.address),1),p,Object(n["f"])("small",v,Object(n["A"])(t.phone),1),O])])})),128)),Object(n["f"])("h3",null,[j,Object(n["f"])("div",null,[Object(n["f"])("button",{type:"button",class:"btn btn-outline-warning refetch",onClick:e[2]||(e[2]=function(){return _.newReservation&&_.newReservation.apply(_,arguments)})}," New Reservation "),Object(n["f"])("button",{type:"button",class:"btn btn-info refetch",onClick:e[3]||(e[3]=function(){return _.refetchReservations&&_.refetchReservations.apply(_,arguments)}),style:{"margin-left":"0.5em"}}," Refresh ")])]),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.reservations,(function(t,e){return Object(n["r"])(),Object(n["e"])("div",{class:"list-group",key:t.id},[Object(n["f"])("span",m,[Object(n["f"])("div",w,[Object(n["f"])("h5",g,Object(n["A"])(t.name),1),Object(n["f"])("div",null,[Object(n["f"])("small",y,Object(n["A"])(t.phone),1),x,Object(n["f"])("button",{type:"button",class:"btn btn-danger",onClick:function(t){return _.deleteReservation(e)}}," Delete Reservation ",8,k)])]),Object(n["f"])("small",E,Object(n["A"])(t.tableSize)+" Table",1),A,Object(n["f"])("small",z,Object(n["A"])(t.time),1),T,Object(n["f"])("small",R,Object(n["A"])(t.request),1)])])})),128)),Object(n["f"])("h3",null,[C,Object(n["f"])("div",null,[Object(n["f"])("button",{type:"button",class:"btn btn-outline-warning refetch",onClick:e[4]||(e[4]=function(){return _.newUser&&_.newUser.apply(_,arguments)})}," New User "),Object(n["f"])("button",{type:"button",class:"btn btn-info refetch",onClick:e[5]||(e[5]=function(){return _.refetchUsers&&_.refetchUsers.apply(_,arguments)}),style:{"margin-left":"0.5em"}}," Refresh ")])]),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.users,(function(t,e){return Object(n["r"])(),Object(n["e"])("div",{class:"list-group",key:t.id},[Object(n["f"])("span",D,[Object(n["f"])("div",S,[Object(n["f"])("h5",U,Object(n["A"])(t.name),1),Object(n["f"])("div",null,[Object(n["f"])("small",G,Object(n["A"])(t.phone),1),L,Object(n["f"])("button",{type:"button",class:"btn btn-danger",onClick:function(t){return _.deleteUser(e)}}," Delete User ",8,P)])]),Object(n["f"])("p",I,Object(n["A"])(t.address),1)])])})),128))])}Object(n["s"])();r("d3b7"),r("a434");var N={data:function(){return{orders:[],reservations:[],users:[]}},created:function(){var t=this;fetch("https://pizzashop-server.herokuapp.com/api/v1/orders").then((function(t){return t.json()})).then((function(e){return t.orders=e})),fetch("https://pizzashop-server.herokuapp.com/api/v1/reservations").then((function(t){return t.json()})).then((function(e){return t.reservations=e})),fetch("https://pizzashop-server.herokuapp.com/api/v1/users").then((function(t){return t.json()})).then((function(e){return t.users=e}))},methods:{deleteOrder:function(t){var e=this.orders[t].id;confirm("Are you sure you want to delete this order?")&&fetch("https://pizzashop-server.herokuapp.com/api/v1/orders/delete/"+e,{method:"DELETE"}).then(this.orders.splice(t,1))},deleteReservation:function(t){var e=this.reservations[t].id;confirm("Are you sure you want to delete this reservation?")&&fetch("https://pizzashop-server.herokuapp.com/api/v1/reservations/delete/"+e,{method:"DELETE"}).then(this.reservations.splice(t,1))},deleteUser:function(t){var e=this.users[t].phone;confirm("Are you sure you want to delete this user?")&&fetch("https://pizzashop-server.herokuapp.com/api/v1/users/delete/"+e,{method:"DELETE"}).then(this.users.splice(t,1))},refetchOrders:function(){var t=this;fetch("https://pizzashop-server.herokuapp.com/api/v1/orders").then((function(t){return t.json()})).then((function(e){return t.orders=e}))},refetchReservations:function(){var t=this;fetch("https://pizzashop-server.herokuapp.com/api/v1/reservations").then((function(t){return t.json()})).then((function(e){return t.reservations=e}))},refetchUsers:function(){var t=this;fetch("https://pizzashop-server.herokuapp.com/api/v1/users").then((function(t){return t.json()})).then((function(e){return t.users=e}))},newOrder:function(){},newReservation:function(){},newUser:function(){}}},_=(r("7daa"),r("6b0d")),B=r.n(_);e["default"]=B()(N,[["render",M],["__scopeId","data-v-ec777474"]])},5179:function(t,e,r){},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"7daa":function(t,e,r){"use strict";r("5179")},8418:function(t,e,r){"use strict";var n=r("a04b"),a=r("9bf2"),s=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?a.f(t,c,s(0,r)):t[c]=r}},a434:function(t,e,r){"use strict";var n=r("23e7"),a=r("23cb"),s=r("a691"),c=r("50c4"),i=r("7b0b"),d=r("65f0"),o=r("8418"),l=r("1dde"),u=l("splice"),b=Math.max,f=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var r,n,l,u,v,O,j=i(this),m=c(j.length),w=a(t,m),g=arguments.length;if(0===g?r=n=0:1===g?(r=0,n=m-w):(r=g-2,n=f(b(s(e),0),m-w)),m+r-n>h)throw TypeError(p);for(l=d(j,n),u=0;u<n;u++)v=w+u,v in j&&o(l,u,j[v]);if(l.length=n,r<n){for(u=w;u<m-n;u++)v=u+n,O=u+r,v in j?j[O]=j[v]:delete j[O];for(u=m;u>m-n+r;u--)delete j[u-1]}else if(r>n)for(u=m-n;u>w;u--)v=u+n-1,O=u+r-1,v in j?j[O]=j[v]:delete j[O];for(u=0;u<r;u++)j[u+w]=arguments[u+2];return j.length=m-n+r,l}})},b0c0:function(t,e,r){var n=r("83ab"),a=r("5e77").EXISTS,s=r("9bf2").f,c=Function.prototype,i=c.toString,d=/^\s*function ([^ (]*)/,o="name";n&&!a&&s(c,o,{configurable:!0,get:function(){try{return i.call(this).match(d)[1]}catch(t){return""}}})},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-c6978ece.b68aba01.js.map