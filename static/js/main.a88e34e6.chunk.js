(this.webpackJsonploginproject=this.webpackJsonploginproject||[]).push([[0],{16:function(e,a,t){},24:function(e,a,t){e.exports=t(37)},29:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),s=t.n(r),c=(t(16),t(4)),o=t(5),m=t(7),i=t(6),d=t(8),u=(t(29),t(30),t(31),t(9)),p=t(22),b=function(e){for(var a=!0,t=Object.keys(e.inputData).length,n=0,l=0,r=Object.entries(e.inputData);l<r.length;l++){var s=Object(p.a)(r[l],2),c=s[0],o=s[1];n++;var m=h(c,o,e.validCheck);if(Object(u.a)({},m)[c].length>0&&(a=!1),n===t)return[a,m]}},v=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),h=function(e,a,t){switch(e){case"username":t.username=v.test(a)?"":"Please enter valid email address";break;case"password":t.password=a?"":"Please enter valid password"}return t},f=t(3),E=Object(f.a)(),g=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={inputData:{username:"",password:""},validCheck:{username:"",password:""}},t.valueChanged=function(e){var a=e.target,n=a.name,l=a.value,r=h(n,l,Object(u.a)({},t.state.validCheck)),s=Object(u.a)({},t.state.inputData);s[n]=l,t.setState({inputData:s,validCheck:r})},t.handleSubmit=function(e){e.preventDefault();var a=b(t.state),n=Object(u.a)({},t.state.inputData),l=a[1];t.setState({inputData:n,validCheck:l}),a[0]?(alert("Login Success"),localStorage.setItem("username","Ravindra"),E.push("/")):alert("Login Failed")},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.validCheck;return l.a.createElement("div",{className:"bkcolor"},l.a.createElement("div",{className:"row vertical-center"},l.a.createElement("div",{className:"col-10 col-md-8 col-lg-4 mx-auto"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-wrapper",noValidate:!0},l.a.createElement("h2",null,"Login"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"text",className:"form-control",name:"username",placeholder:"Enter email address",onChange:this.valueChanged,noValidate:!0}),e.username.length>0&&l.a.createElement("div",{className:"error"},e.username)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",onChange:this.valueChanged,noValidate:!0}),e.password.length>0&&l.a.createElement("div",{className:"error"},e.password)),l.a.createElement("button",{type:"submit",className:"submit mt-2"},"Login")))))}}]),a}(n.Component),N=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).closeModal=function(){t.props.updateHomeState({toggle:!1})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.homeInfo.toggle?{display:"block"}:{display:"none"};return l.a.createElement("div",{className:"modal",style:e,tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog modal-lg"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title"},"Profile"),l.a.createElement("button",{type:"button",onClick:this.closeModal,className:"close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body profile-bk"},l.a.createElement("div",{className:"col-12 d-flex flex-row-reverse"},l.a.createElement("button",{className:"btn-sm btn-success",href:"#"},l.a.createElement("i",{className:"fa fa-edit"})," Edit")),l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("div",{className:"profile-userpic"},l.a.createElement("img",{src:"https://img.icons8.com/bubbles/300/000000/user.png",className:"img-responsive",alt:""})),l.a.createElement("div",{className:"mt-2"},l.a.createElement("i",{className:"fa fa-diamond pr-2"}),l.a.createElement("b",null,"Ravindra")),l.a.createElement("div",{className:"mt-4"},"Developer"),l.a.createElement("div",{className:"mt-4"},l.a.createElement("button",{type:"button",className:"btn btn-success btn mr-2"},"Follow"),l.a.createElement("button",{type:"button",className:"btn btn-danger btn ml-2"},"Message")),l.a.createElement("div",{className:"mt-4"},l.a.createElement("h5",{className:"mb-3"},"Social Links"),l.a.createElement("i",{className:"fa fa-facebook fa-3x m-2"}),l.a.createElement("i",{className:"fa fa-twitter fa-3x m-2"}),l.a.createElement("i",{className:"fa fa-github fa-3x m-2"}),l.a.createElement("i",{className:"fa fa-instagram fa-3x m-2"})))))))}}]),a}(n.Component),w=(n.Component,t(19),t(38),function(e){function a(e){var t;return Object(c.a)(this,a),t=Object(m.a)(this,Object(i.a)(a).call(this,e)),E.listen((function(e,a){})),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bkcolor"},l.a.createElement(g,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a88e34e6.chunk.js.map