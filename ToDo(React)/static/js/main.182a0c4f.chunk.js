(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var l=a(11),n=a(0),r=a.n(n),c=a(1),i=a.n(c),o=a(3),s=a(2),m=a(9),u=a(10),d=a(13),p=a(12),f=(a(25),function(){return r.a.createElement("h1",{className:"app-title"},"Your todo list")}),E=(a(26),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("input",{className:"new-item-input",type:"text",placeholder:"Enter your taskname here",required:!0}),r.a.createElement("button",{className:"new-item-btn visually-hidden",type:"submit"},"Add new task"))}),b=(a(27),function(e){var t=e.id,a=e.label;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"todo-item__check visually-hidden",type:"checkbox",id:t}),r.a.createElement("label",{className:"todo-item__check-label",htmlFor:t},r.a.createElement("i",{className:"fa fa-check"}),a),r.a.createElement("button",{className:"todo-item__del-btn",type:"button"},r.a.createElement("i",{className:"fa fa-trash"})))}),_=(a(28),function(e){var t=e.todos.map((function(e){return r.a.createElement("li",{className:"todo-item",key:e.id},r.a.createElement("div",{className:"container"},r.a.createElement(b,{id:e.id,label:e.label})))}));return r.a.createElement("ul",{className:"todo-list"},t)}),h=(a(29),function(e){var t=e.todos;return r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"filter__btn",id:"check-all-btn",type:"button"},t.length," tasks left"),r.a.createElement("ul",{className:"filter__list"},r.a.createElement("li",{className:"filter__item"},r.a.createElement("input",{className:"filter__input visually-hidden",type:"radio",name:"filter",id:"all"}),r.a.createElement("label",{className:"filter__label",htmlFor:"all"},"All")),r.a.createElement("li",{className:"filter__item"},r.a.createElement("input",{className:"filter__input visually-hidden",type:"radio",name:"filter",id:"todo"}),r.a.createElement("label",{className:"filter__label",htmlFor:"todo"},"Todo")),r.a.createElement("li",{className:"filter__item"},r.a.createElement("input",{className:"filter__input visually-hidden",type:"radio",name:"filter",id:"completed"}),r.a.createElement("label",{className:"filter__label",htmlFor:"completed"},"Completed"))),r.a.createElement("button",{className:"filter__btn",id:"clear-completed-btn",type:"button"},"Clear completed")))}),N=(a(30),0),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).addTask=function(){var t=document.querySelector(".new-item-input"),a=t.value;e.props.onAddTask({label:a,id:N}),N++,t.value=""},e}return Object(u.a)(a,[{key:"render",value:function(){return console.log(this.props.store),r.a.createElement("div",{className:"app-container"},r.a.createElement(f,null),r.a.createElement("form",{className:"todo-form",action:"#",onSubmit:this.addTask},r.a.createElement(E,null),r.a.createElement(_,{todos:this.props.store}),r.a.createElement(h,{todos:this.props.store})))}}]),a}(n.Component),y=Object(o.b)((function(e){return{store:e}}),(function(e){return{onAddTask:function(t){e({type:"ADD_NEW_ITEM",payload:t})}}}))(v),k=[];var g=Object(s.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;return"ADD_NEW_ITEM"===t.type?[].concat(Object(l.a)(e),[t.payload]):e}));i.a.render(r.a.createElement(o.a,{store:g},r.a.createElement(y,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.182a0c4f.chunk.js.map