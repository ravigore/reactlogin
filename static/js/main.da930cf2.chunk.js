(this.webpackJsonploginproject=this.webpackJsonploginproject||[]).push([[0],{16:function(e,a,t){},24:function(e,a,t){e.exports=t(37)},29:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),s=t.n(r),c=(t(16),t(4)),o=t(5),m=t(7),i=t(6),u=t(8),d=(t(29),t(30),t(31),t(9)),p=t(22),v=function(e){for(var a=!0,t=Object.keys(e.inputData).length,n=0,l=0,r=Object.entries(e.inputData);l<r.length;l++){var s=Object(p.a)(r[l],2),c=s[0],o=s[1];n++;var m=b(c,o,e.validCheck);if(Object(d.a)({},m)[c].length>0&&(a=!1),n===t)return[a,m]}},f=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),b=function(e,a,t){switch(e){case"username":t.username=f.test(a)?"":"Please enter valid email address";break;case"password":t.password=a?"":"Please enter valid password"}return t},h=t(3),g=Object(h.a)(),E=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={inputData:{username:"",password:""},validCheck:{username:"",password:""}},t.valueChanged=function(e){var a=e.target,n=a.name,l=a.value,r=b(n,l,Object(d.a)({},t.state.validCheck)),s=Object(d.a)({},t.state.inputData);s[n]=l,t.setState({inputData:s,validCheck:r})},t.handleSubmit=function(e){e.preventDefault();var a=v(t.state),n=Object(d.a)({},t.state.inputData),l=a[1];t.setState({inputData:n,validCheck:l}),a[0]?(alert("Login Success"),localStorage.setItem("username","Ravindra"),g.push("/")):alert("Login Failed")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.validCheck;return l.a.createElement("div",{className:"bkcolor"},l.a.createElement("div",{className:"row vertical-center"},l.a.createElement("div",{className:"col-10 col-md-8 col-lg-4 mx-auto"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-wrapper",noValidate:!0},l.a.createElement("h2",null,"Login"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"text",className:"form-control",name:"username",placeholder:"Enter email address",onChange:this.valueChanged,noValidate:!0}),e.username.length>0&&l.a.createElement("div",{className:"error"},e.username)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",onChange:this.valueChanged,noValidate:!0}),e.password.length>0&&l.a.createElement("div",{className:"error"},e.password)),l.a.createElement("button",{type:"submit",className:"submit mt-2"},"Login")))))}}]),a}(n.Component),N=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).closeModal=function(){t.props.updateHomeState({toggle:!1})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.homeInfo.toggle?{display:"block"}:{display:"none"};return l.a.createElement("div",{className:"modal",style:e,tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog modal-lg"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title"},"Profile"),l.a.createElement("button",{type:"button",onClick:this.closeModal,className:"close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body profile-bk"},l.a.createElement("div",{className:"col-12 d-flex flex-row-reverse"},l.a.createElement("button",{className:"btn-sm btn-success",href:"#"},l.a.createElement("i",{className:"fa fa-edit"})," Edit")),l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("div",{className:"profile-userpic"},l.a.createElement("img",{src:"https://img.icons8.com/bubbles/300/000000/user.png",className:"img-responsive",alt:""})),l.a.createElement("div",{className:"mt-2"},l.a.createElement("i",{className:"fa fa-diamond pr-2"}),l.a.createElement("b",null,"Ravindra")),l.a.createElement("div",{className:"mt-4"},"Developer"),l.a.createElement("div",{className:"mt-4"},l.a.createElement("button",{type:"button",className:"btn btn-success btn mr-2"},"Follow"),l.a.createElement("button",{type:"button",className:"btn btn-danger btn ml-2"},"Message")),l.a.createElement("div",{className:"mt-4"},l.a.createElement("h5",{className:"mb-3"},"Social Links"),l.a.createElement("i",{className:"fa fa-facebook fa-3x m-2"}),l.a.createElement("i",{className:"fa fa-twitter fa-3x m-2"}),l.a.createElement("i",{className:"fa fa-github fa-3x m-2"}),l.a.createElement("i",{className:"fa fa-instagram fa-3x m-2"})))))))}}]),a}(n.Component),w=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={displayMenu:!1,toggle:!1},t.toggle=function(){t.setState({toggle:!t.state.toggle})},t.showDropdownMenu=function(e){e.preventDefault(),t.setState({displayMenu:!0})},t.hideDropdownMenu=function(e){e.preventDefault(),t.setState({displayMenu:!1})},t.logoutMe=function(e){localStorage.setItem("username",""),g.push("/")},t.updateStateInfo=function(e){var a=e.displayMenu,n=void 0===a?t.state.displayMenu:a,l=e.toggle,r=void 0===l?t.state.toggle:l;t.setState({displayMenu:n,toggle:r})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=localStorage.getItem("username");return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg nav-custom"},l.a.createElement("div",{className:"navbar-header d-flex col"},l.a.createElement("a",{className:"navbar-brand",href:"/#"},l.a.createElement("i",{className:"fa fa-cube pr-2"}),"My",l.a.createElement("b",null,"Site"))),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("div",{className:"input-group"}," ",l.a.createElement("input",{type:"text",className:"form-control input-text",placeholder:"Search "}),l.a.createElement("div",{className:"input-group-append"}," ",l.a.createElement("button",{className:"btn btn-outline-warning btn-sm pl-4 pr-4 search-btn",type:"button"},l.a.createElement("i",{className:"fa fa-search"}))," "))),l.a.createElement("div",{id:"navbarCollapse",className:"collapse navbar-collapse justify-content-start"},l.a.createElement("ul",{className:"nav navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{href:"/#",onClick:this.showDropdownMenu,className:"nav-link dropdown-toggle"},l.a.createElement("i",{className:"fa fa-user-circle-o fa-lg p-2"}),e),this.state.displayMenu?l.a.createElement("ul",{onMouseLeave:this.hideDropdownMenu,className:"dropdown-menu ".concat(this.state.displayMenu?"show":"")},l.a.createElement("li",null,l.a.createElement("span",{onClick:this.toggle,className:"dropdown-item"},l.a.createElement("i",{className:"fa fa-user-o"})," Profile")),l.a.createElement("li",{className:"divider dropdown-divider"}),l.a.createElement("li",null,l.a.createElement("span",{onClick:this.logoutMe,className:"dropdown-item"},l.a.createElement("i",{className:"fa fa-sign-out"})," Logout"))):null)))),l.a.createElement(N,{updateHomeState:this.updateStateInfo,homeInfo:this.state}))}}]),a}(n.Component),y=t(19),j=t(38);console.log("Here main route");var O=function(e){var a=e.component,t=Object(y.a)(e,["component"]);return l.a.createElement(j.b,Object.assign({},t,{render:function(e){return localStorage.getItem("username")?l.a.createElement(a,e):l.a.createElement(j.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},k=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return console.log("Here","/reactlogin"),console.log("Here",this.props),l.a.createElement("div",{className:"bkcolor"},l.a.createElement(j.c,{history:g,basename:"/reactlogin"},l.a.createElement(j.d,null,l.a.createElement(O,{exact:!0,path:"/",component:w}),l.a.createElement(j.b,{path:"/login",component:E}),l.a.createElement(j.b,{component:function(){return l.a.createElement("div",null,"404 Not found ")}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.da930cf2.chunk.js.map