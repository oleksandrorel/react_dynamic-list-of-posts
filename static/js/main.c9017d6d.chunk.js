(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),s=a.n(r),o=a(2),l=a.n(o),u=a(3),i=a(1),m=(a(12),a(13),a(14),function(e){var t=e.posts,a=e.postId,n=e.setPostId;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return c.a.createElement("li",{className:"PostsList__item",key:e.id},c.a.createElement("div",null,c.a.createElement("b",null,"[User #".concat(e.userId,"]: ")),e.title),c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){var t;t=e.id,n(a!==t?t:0)}},a===e.id?"Close":"Open"))}))))}),p=(a(15),function(e){var t=e.addComment,a=Object(n.useState)(""),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),m=u[0],p=u[1],f=Object(n.useState)(""),d=Object(i.a)(f,2),b=d[0],E=d[1],v=Object(n.useState)(!0),h=Object(i.a)(v,2),_=h[0],O=h[1];return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),s.trim()&&m.trim()&&b.trim()?(t(s,m,b),o(""),p(""),E(""),O(!0)):O(!1)}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",value:s,placeholder:"Your name",className:"NewCommentForm__input",onChange:function(e){o(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",value:m,placeholder:"Your email",className:"NewCommentForm__input",onChange:function(e){p(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",value:b,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(e){E(e.target.value)}})),!_&&c.a.createElement("p",{className:"NewCommentForm__error"},"Form should not have empty fields."),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),f="https://mate-api.herokuapp.com",d=function(e,t){return fetch(e,t).then((function(e){return e.json()}))},b=function(e){return d("".concat(f,"/comments")).then((function(t){return t.data.filter((function(t){return t.postId===e}))}))},E=function(e){return d("".concat(f,"/comments/").concat(e),{method:"Delete"})},v=function(e,t,a,n){return d("".concat(f,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({postId:e,name:t,email:a,body:n})})},h=function(e){return d("".concat(f,"/posts/").concat(e)).then((function(e){return e.data}))},_=(a(16),function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader__content"}))}),O=(a(17),function(e){var t=e.postId,a=Object(n.useState)({}),r=Object(i.a)(a,2),s=r[0],o=r[1],m=Object(n.useState)([]),f=Object(i.a)(m,2),d=f[0],O=f[1],j=Object(n.useState)(!0),N=Object(i.a)(j,2),y=N[0],w=N[1],C=Object(n.useState)(!1),S=Object(i.a)(C,2),k=S[0],x=S[1],P=Object(n.useState)(!1),g=Object(i.a)(P,2),D=g[0],I=g[1],F=Object(n.useCallback)(Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,h(t);case 3:a=e.sent,o(a),x(!1);case 6:case"end":return e.stop()}}),e)}))),[t]),L=Object(n.useCallback)(Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,b(t);case 3:a=e.sent,O(a),I(!1);case 6:case"end":return e.stop()}}),e)}))),[t]);Object(n.useEffect)((function(){F(),L()}),[F,L]);var A=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:L();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(u.a)(l.a.mark((function e(a,n,c){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,v(t,a,n,c);case 3:return e.next=5,b(t);case 5:r=e.sent,I(!1),O(r);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return!!t&&s&&c.a.createElement("div",{className:"PostDetails"},k?c.a.createElement(_,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,s.title)),c.a.createElement("section",{className:"PostDetails__comments"},!!d.length&&c.a.createElement("button",{type:"button",className:"button",onClick:function(){w((function(e){return!e}))}},y?"Hide ".concat(d.length," comments"):"Show ".concat(d.length," comments")),D?c.a.createElement(_,null):y&&c.a.createElement("div",null,c.a.createElement("ul",{className:"PostDetails__list"},d.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){A(e.id)}},"X"),c.a.createElement("p",null,e.body))}))))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(p,{addComment:G})))))}),j=function(){return d("".concat(f,"/posts")).then((function(e){return e.data}))},N=function(e){return j().then((function(t){return t.filter((function(t){return t.userId===e}))}))},y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(0),o=Object(i.a)(s,2),p=o[0],f=o[1],d=Object(n.useState)(0),b=Object(i.a)(d,2),E=b[0],v=b[1],h=Object(n.useState)(!1),y=Object(i.a)(h,2),w=y[0],C=y[1];Object(n.useEffect)((function(){p?k(p):S()}),[p]);var S=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,j();case 3:t=e.sent,C(!1),r(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,N(t);case 3:a=e.sent,C(!1),r(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:p,onChange:function(e){var t=e.target.value;f(+t)}},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},w?c.a.createElement(_,null):c.a.createElement(m,{posts:a,setPostId:v,postId:E})),c.a.createElement("div",{className:"App__content"},c.a.createElement(O,{postId:E}))))};s.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.c9017d6d.chunk.js.map