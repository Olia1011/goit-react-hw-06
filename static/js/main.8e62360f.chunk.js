(this["webpackJsonpgoit-react-hw-06"]=this["webpackJsonpgoit-react-hw-06"]||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),l=n(7),i=n(31),u=n(14),s=n(15),m=n(18),b=n(17),f=n(32),d=n.n(f),p=function(e){var t=e.title,n=e.children;return c.a.createElement("section",{className:d.a.section},c.a.createElement("h2",null,t),n)},_=n(11),E=n(135),h=n(21),v=n.n(h),j=n(16),O=n.n(j),g=n(22),C=n.n(g),N=function(e){var t=e.name;return c.a.createElement("div",{className:C.a.error},c.a.createElement("h3",{className:C.a.message},"".concat(t," Contact already exist!")))},y=n(33),x=n(5),w={addContact:Object(x.b)("contacts/add",(function(e){return{payload:{id:Object(y.uuid)(),name:e.name,number:e.number}}})),deleteContact:Object(x.b)("contacts/delete"),filterContact:Object(x.b)("contacts/filterContact")},L=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",isShow:!1},e.changeHandler=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.submitHandler=function(t){t.preventDefault(),e.props.contacts.filter((function(t){return t.name===e.state.name})).length>0&&e.NotificationMessage()},e.NotificationMessage=function(){e.setState((function(e){return{isShow:!e.isShow}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.isShow;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{in:a,timeout:500,unmountOnExit:!0,classNames:O.a},c.a.createElement(N,{name:t})),c.a.createElement("form",{className:v.a.contactForm,onSubmit:this.submitHandler},c.a.createElement("label",null,"Name",c.a.createElement("input",{type:"text",value:t,name:"name",onChange:this.changeHandler,placeholder:"Enter your name "})),c.a.createElement("label",null,"Number",c.a.createElement("input",{type:"tel",value:n,name:"number",onChange:this.changeHandler,placeholder:"Enter your phone"})),c.a.createElement("button",{className:v.a.btn,type:"submit"},"Add contact")))}}]),n}(a.Component),F={onAddContact:w.addContact},k=Object(l.b)((function(e){return{contacts:e.contacts}}),F)(L),A=n(136),S=n(19),D=n.n(S),P=function(e){var t=e.name,n=e.number,a=e.onDelete;return c.a.createElement("li",{className:D.a.contactLi},c.a.createElement("p",{className:D.a.contactLiP},t,": ",n),c.a.createElement("button",{type:"button",onClick:a,className:D.a.btn},"Delete"))},H=n(34),I=n.n(H),Z={onDelete:w.deleteContact},z=Object(l.b)((function(e){return{items:e.contacts.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())}))}}),Z)((function(e){var t=e.items,n=e.onDelete;return c.a.createElement(A.a,{className:I.a.ul},t.map((function(e){return c.a.createElement(E.a,{key:e.id,timeout:250,classNames:O.a},c.a.createElement(P,Object.assign({},e,{onDelete:function(){return n(e.id)}})))})))})),G=n(23),J=n.n(G),M={onFilter:w.filterContact},T=Object(l.b)((function(e){return{value:e.filter}}),M)((function(e){var t=e.value,n=e.onFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:J.a.searchInput}," Find contacts by name "),c.a.createElement("input",{className:J.a.inputName,type:"text",value:t,onChange:function(e){return n(e.target.value)}}))})),B=n(24),U=n(25),X=n(35);function q(){var e=Object(B.a)(["",""]);return q=function(){return e},e}function K(){var e=Object(B.a)(["animation: 3s ",""]);return K=function(){return e},e}var Q,R=U.a.div(K(),Object(U.b)(q(),X.bounce)),V=n(26),W=n.n(V),Y=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null,c.a.createElement(R,null," ",c.a.createElement("h2",{className:W.a.title},"Phonebook")," "),c.a.createElement(k,null)),c.a.createElement(p,null,c.a.createElement("h2",{className:W.a.title},"Contacts"),c.a.createElement(T,null),c.a.createElement(z,null)))}}]),n}(a.Component),$=n(40),ee=n(2),te=Object(x.c)([],(Q={},Object(_.a)(Q,w.addContact,(function(e,t){return[].concat(Object($.a)(e),[t.payload])})),Object(_.a)(Q,w.deleteContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Q)),ne=Object(x.c)("",Object(_.a)({},w.filterContact,(function(e,t){return t.payload}))),ae=Object(ee.c)({contacts:te,filter:ne}),ce=n(27),re=n(39),oe={key:"root",storage:n.n(re).a},le=Object(ce.a)(oe,ae),ie=Object(x.a)({reducer:le,middleware:Object(x.d)({serializableCheck:!1})}),ue=Object(ce.b)(ie),se=ie;o.a.render(c.a.createElement(l.a,{store:se},c.a.createElement(i.a,{loading:null,persistor:ue},c.a.createElement(Y,null))),document.getElementById("root"))},16:function(e,t,n){e.exports={enter:"slide_enter__1Xjpz",enterActive:"slide_enterActive__1raoE",exit:"slide_exit__16ilT",exitActive:"slide_exitActive__1ZAb7"}},19:function(e,t,n){e.exports={contactLi:"ContactListItem_contactLi__16hrs",contactLiP:"ContactListItem_contactLiP__2P2a8",btn:"ContactListItem_btn__3xk0a"}},21:function(e,t,n){e.exports={contactForm:"contactForm_contactForm__2oZ8G",btn:"contactForm_btn__3CZ9A"}},22:function(e,t,n){e.exports={error:"Notification_error__vl814",message:"Notification_message__2uLPr"}},23:function(e,t,n){e.exports={inputName:"filter_inputName__2Tg8v"}},26:function(e,t,n){},32:function(e,t,n){e.exports={section:"Section_section__7Gruv"}},34:function(e,t,n){e.exports={ul:"contactlist_ul__2p2fU"}},43:function(e,t,n){e.exports=n(133)}},[[43,1,2]]]);
//# sourceMappingURL=main.8e62360f.chunk.js.map