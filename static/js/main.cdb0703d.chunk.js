(this["webpackJsonpgoit-react-hw-06"]=this["webpackJsonpgoit-react-hw-06"]||[]).push([[0],{12:function(e,t,n){e.exports={error:"Notification_error__vl814",message:"Notification_message__2uLPr"}},134:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),l=n(7),i=n(31),u=n(16),s=n(17),m=n(19),b=n(18),f=n(32),d=n.n(f),p=function(e){var t=e.title,n=e.children;return c.a.createElement("section",{className:d.a.section},c.a.createElement("h2",null,t),n)},E=n(33),_=n(8),h=n(136),O=n(22),v=n.n(O),j=n(14),g=n.n(j),C=n(12),N=n.n(C),y=function(e){var t=e.name;return c.a.createElement("div",{className:N.a.error},c.a.createElement("h3",{className:N.a.message},"".concat(t," Contact already exist!")))},x=function(e){var t=e.name;return c.a.createElement("div",{className:N.a.error},c.a.createElement("h3",{className:N.a.message},"".concat(t," Add all information!")))},w=n(34),F=n(5),L={addContact:Object(F.b)("contacts/add",(function(e){return{payload:{id:Object(w.uuid)(),name:e.name,number:e.number}}})),deleteContact:Object(F.b)("contacts/delete"),filterContact:Object(F.b)("contacts/filterContact")},k=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",isShow:!1},e.changeHandler=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.submitHandler=function(t){t.preventDefault(),e.props.contacts.filter((function(t){return t.name===e.state.name})).length>0?e.NotificationMessage():(""!==e.state.name&&""!==e.state.number?e.props.onAddContact(Object(E.a)({},e.state)):e.errorMessage(),e.reset())},e.reset=function(){e.setState({name:"",number:""})},e.NotificationMessage=function(){e.setState((function(e){return{isShow:!e.isShow}}))},e.errorMessage=function(){e.setState((function(e){return{isShow:!e.isOpen}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.isShow,r=e.isOpen;return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{in:a,timeout:500,unmountOnExit:!0,classNames:g.a},c.a.createElement(y,{name:t})),c.a.createElement(h.a,{in:r,timeout:500,unmountOnExit:!0,classNames:g.a},c.a.createElement(x,{name:t})),c.a.createElement("form",{className:v.a.contactForm,onSubmit:this.submitHandler},c.a.createElement("label",null,"Name",c.a.createElement("input",{type:"text",value:t,name:"name",onChange:this.changeHandler,placeholder:"Enter your name "})),c.a.createElement("label",null,"Number",c.a.createElement("input",{type:"tel",value:n,name:"number",onChange:this.changeHandler,placeholder:"Enter your phone"})),c.a.createElement("button",{className:v.a.btn,type:"submit",onClick:this.props.onToggleFilter},"Add contact")))}}]),n}(a.Component),A={onAddContact:L.addContact},S=Object(l.b)((function(e){return{contacts:e.contacts}}),A)(k),D=n(137),P=n(20),H=n.n(P),I=function(e){var t=e.name,n=e.number,a=e.onDelete;return c.a.createElement("li",{className:H.a.contactLi},c.a.createElement("p",{className:H.a.contactLiP},t,": ",n),c.a.createElement("button",{type:"button",onClick:a,className:H.a.btn},"Delete"))},M=n(35),T=n.n(M),Z={onDelete:L.deleteContact},z=Object(l.b)((function(e){return{items:e.contacts.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())}))}}),Z)((function(e){var t=e.items,n=e.onDelete;return c.a.createElement(D.a,{className:T.a.ul},t.map((function(e){return c.a.createElement(h.a,{key:e.id,timeout:250,classNames:g.a},c.a.createElement(I,Object.assign({},e,{onDelete:function(){return n(e.id)}})))})))})),G=n(23),J=n.n(G),B={onFilter:L.filterContact},U=Object(l.b)((function(e){return{value:e.filter}}),B)((function(e){var t=e.value,n=e.onFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:J.a.searchInput}," Find contacts by name "),c.a.createElement("input",{className:J.a.inputName,type:"text",value:t,onChange:function(e){return n(e.target.value)}}))})),X=n(24),q=n(25),K=n(36);function Q(){var e=Object(X.a)(["",""]);return Q=function(){return e},e}function R(){var e=Object(X.a)(["animation: 3s ",""]);return R=function(){return e},e}var V,W=q.a.div(R(),Object(q.b)(Q(),K.bounce)),Y=n(26),$=n.n(Y),ee=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null,c.a.createElement(W,null," ",c.a.createElement("h2",{className:$.a.title},"Phonebook")," "),c.a.createElement(S,null)),c.a.createElement(p,null,c.a.createElement("h2",{className:$.a.title},"Contacts"),c.a.createElement(U,null),c.a.createElement(z,null)))}}]),n}(a.Component),te=n(41),ne=n(2),ae=Object(F.c)([],(V={},Object(_.a)(V,L.addContact,(function(e,t){return[].concat(Object(te.a)(e),[t.payload])})),Object(_.a)(V,L.deleteContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),V)),ce=Object(F.c)("",Object(_.a)({},L.filterContact,(function(e,t){return t.payload}))),re=Object(ne.c)({contacts:ae,filter:ce}),oe=n(27),le=n(40),ie={key:"root",storage:n.n(le).a},ue=Object(oe.a)(ie,re),se=Object(F.a)({reducer:ue,middleware:Object(F.d)({serializableCheck:!1})}),me=Object(oe.b)(se),be=se;o.a.render(c.a.createElement(l.a,{store:be},c.a.createElement(i.a,{loading:null,persistor:me},c.a.createElement(ee,null))),document.getElementById("root"))},14:function(e,t,n){e.exports={enter:"slide_enter__1Xjpz",enterActive:"slide_enterActive__1raoE",exit:"slide_exit__16ilT",exitActive:"slide_exitActive__1ZAb7"}},20:function(e,t,n){e.exports={contactLi:"ContactListItem_contactLi__16hrs",contactLiP:"ContactListItem_contactLiP__2P2a8",btn:"ContactListItem_btn__3xk0a"}},22:function(e,t,n){e.exports={contactForm:"contactForm_contactForm__2oZ8G",btn:"contactForm_btn__3CZ9A"}},23:function(e,t,n){e.exports={inputName:"filter_inputName__2Tg8v"}},26:function(e,t,n){},32:function(e,t,n){e.exports={section:"Section_section__7Gruv"}},35:function(e,t,n){e.exports={ul:"contactlist_ul__2p2fU"}},44:function(e,t,n){e.exports=n(134)}},[[44,1,2]]]);
//# sourceMappingURL=main.cdb0703d.chunk.js.map