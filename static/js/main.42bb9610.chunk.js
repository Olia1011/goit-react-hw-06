(this["webpackJsonpgoit-react-hw-06"]=this["webpackJsonpgoit-react-hw-06"]||[]).push([[0],{12:function(e,t,n){e.exports={error:"Notification_error__37ReI",message:"Notification_message__2VohP"}},134:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),i=n(7),l=n(31),s=n(16),u=n(17),m=n(19),b=n(18),f=n(32),d=n.n(f),p=function(e){var t=e.title,n=e.children;return c.a.createElement("section",{className:d.a.section},c.a.createElement("h2",null,t),n)},E=n(33),h=n(8),_=n(136),O=n(22),v=n.n(O),j=n(14),g=n.n(j),N=n(12),C=n.n(N),y=function(e){var t=e.name,n=void 0===t?"":t;return c.a.createElement("div",{className:C.a.error},c.a.createElement("h3",{className:C.a.message},"".concat(n," already exist!")))},x=function(){return c.a.createElement("div",{className:C.a.error},c.a.createElement("h3",{className:C.a.message},"Add all information!"))},S=n(34),w=n(5),F={addContact:Object(w.b)("contacts/add",(function(e){return{payload:{id:Object(S.uuid)(),name:e.name,number:e.number}}})),deleteContact:Object(w.b)("contacts/delete"),filterContact:Object(w.b)("contacts/filterContact")},L=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",isShow:!1,isOpen:!1,displayName:""},e.changeHandler=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.submitHandler=function(t){if(t.preventDefault(),e.setState({displayName:e.state.name}),e.props.contacts.filter((function(t){return t.name===e.state.name})).length>0)return e.NotificationMessage(),void setTimeout((function(){e.NotificationMessage()}),3e3);""!==e.state.name&&""!==e.state.number?e.props.onAddContact(Object(E.a)({},e.state)):(e.errorMessage(),setTimeout((function(){e.errorMessage()}),3e3)),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e.errorMessage=function(){e.setState((function(e){return{isShow:!e.isShow}}))},e.NotificationMessage=function(){e.setState((function(e){return{isOpen:!e.isOpen}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.isShow,r=e.isOpen;return c.a.createElement(c.a.Fragment,null,c.a.createElement(_.a,{in:r,timeout:500,unmountOnExit:!0,classNames:g.a},c.a.createElement(y,{name:this.state.displayName})),c.a.createElement(_.a,{in:a,timeout:500,unmountOnExit:!0,classNames:g.a},c.a.createElement(x,null)),c.a.createElement("form",{className:v.a.contactForm,onSubmit:this.submitHandler},c.a.createElement("label",null,"Name",c.a.createElement("input",{type:"text",value:t,name:"name",onChange:this.changeHandler,placeholder:"Enter your name "})),c.a.createElement("label",null,"Number",c.a.createElement("input",{type:"tel",value:n,name:"number",onChange:this.changeHandler,placeholder:"Enter your phone"})),c.a.createElement("button",{className:v.a.btn,type:"submit",onClick:this.props.onToggleFilter},"Add contact")))}}]),n}(a.Component),k={onAddContact:F.addContact},A=Object(i.b)((function(e){return{contacts:e.contacts}}),k)(L),D=n(137),I=n(20),M=n.n(I),H=function(e){var t=e.name,n=e.number,a=e.onDelete;return c.a.createElement("li",{className:M.a.contactLi},c.a.createElement("p",{className:M.a.contactLiP},t,": ",n),c.a.createElement("button",{type:"button",onClick:a,className:M.a.btn},"Delete"))},P=n(35),T=n.n(P),R={onDelete:F.deleteContact},G=Object(i.b)((function(e){return{items:e.contacts.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())}))}}),R)((function(e){var t=e.items,n=e.onDelete;return c.a.createElement(D.a,{className:T.a.ul},t.map((function(e){return c.a.createElement(_.a,{key:e.id,timeout:250,classNames:g.a},c.a.createElement(H,Object.assign({},e,{onDelete:function(){return n(e.id)}})))})))})),J=n(23),K=n.n(J),V={onFilter:F.filterContact},q=Object(i.b)((function(e){return{value:e.filter}}),V)((function(e){var t=e.value,n=e.onFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:K.a.searchInput}," Find contacts by name "),c.a.createElement("input",{className:K.a.inputName,type:"text",value:t,onChange:function(e){return n(e.target.value)}}))})),z=n(24),B=n(25),Q=n(36);function U(){var e=Object(z.a)(["",""]);return U=function(){return e},e}function W(){var e=Object(z.a)(["animation: 3s ",""]);return W=function(){return e},e}var X,Y=B.a.div(W(),Object(B.b)(U(),Q.bounce)),Z=n(26),$=n.n(Z),ee=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null,c.a.createElement(Y,null," ",c.a.createElement("h2",{className:$.a.title},"Phonebook")," "),c.a.createElement(A,null)),c.a.createElement(p,null,c.a.createElement("h2",{className:$.a.title},"Contacts"),c.a.createElement(q,null),c.a.createElement(G,null)))}}]),n}(a.Component),te=n(41),ne=n(2),ae=Object(w.c)([],(X={},Object(h.a)(X,F.addContact,(function(e,t){return[].concat(Object(te.a)(e),[t.payload])})),Object(h.a)(X,F.deleteContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),X)),ce=Object(w.c)("",Object(h.a)({},F.filterContact,(function(e,t){return t.payload}))),re=Object(ne.c)({contacts:ae,filter:ce}),oe=n(27),ie=n(40),le={key:"root",storage:n.n(ie).a},se=Object(oe.a)(le,re),ue=Object(w.a)({reducer:se,middleware:Object(w.d)({serializableCheck:!1})}),me=Object(oe.b)(ue),be=ue;o.a.render(c.a.createElement(i.a,{store:be},c.a.createElement(l.a,{loading:null,persistor:me},c.a.createElement(ee,null))),document.getElementById("root"))},14:function(e,t,n){e.exports={enter:"slide_enter__1GK3j",enterActive:"slide_enterActive__Q0T8x",exit:"slide_exit__2cs1r",exitActive:"slide_exitActive__37CSu"}},20:function(e,t,n){e.exports={contactLi:"ContactListItem_contactLi__1K-DS",contactLiP:"ContactListItem_contactLiP__GosnR",btn:"ContactListItem_btn__1yqVd"}},22:function(e,t,n){e.exports={contactForm:"contactForm_contactForm__2vjth",btn:"contactForm_btn__78ipv"}},23:function(e,t,n){e.exports={inputName:"filter_inputName__2vELy"}},26:function(e,t,n){},32:function(e,t,n){e.exports={section:"Section_section__4gORy"}},35:function(e,t,n){e.exports={ul:"contactlist_ul__-hCOl"}},44:function(e,t,n){e.exports=n(134)}},[[44,1,2]]]);
//# sourceMappingURL=main.42bb9610.chunk.js.map