_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{fY9I:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),l=n.n(a),s=n("HaE+"),r=n("q1tI"),o=n.n(r),u=n("8Kt/"),i=n.n(u),c=n("nOHt"),p=n("+oBk"),d=n("YFqc"),b=n.n(d),m=n("vDqi"),g=n.n(m),h=n("tsWT"),w=o.a.createElement;t.default=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],a=Object(r.useState)(null),u=(a[0],a[1],Object(r.useState)(null)),d=(u[0],u[1],Object(r.useState)(null)),m=(d[0],d[1],Object(r.useState)("")),f=m[0],y=m[1],v=Object(r.useState)(null),S=v[0],N=v[1],O=Object(r.useState)(null),j=O[0],k=O[1],x=Object(r.useState)(""),_=x[0],E=x[1],P=Object(r.useState)(""),I=P[0],T=P[1],q=Object(r.useState)(!1),D=(q[0],q[1]),F=Object(r.useState)(""),A=(F[0],F[1],Object(r.useState)("blue")),B=(A[0],A[1],Object(c.useRouter)()),C=function(){var e=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),D(!0),e.prev=2,e.next=5,g.a.post("http://51.116.114.155:8080/auth/token",{authentication_property:_,password:I});case 5:(a=e.sent)&&(D(!1),200===a.status&&(window.localStorage.setItem("cp-a",JSON.stringify(a.data)),D(!1),B.push("/blog"))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),D(!1),"Request failed with status code 401"===e.t0.message?(console.log("BAD CREDENTIALS"),y("Please check your credentials and try again."),N("signup"),k(""),n(!0),D(!1)):"Request failed with status code 404"===e.t0.message||"Network Error"===e.t0.message&&(y("Please check your network connection and try again."),n(!0),D(!1));case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return w(o.a.Fragment,null,w(p.a,null,w(i.a,null,w("link",{rel:"stylesheet",type:"text/css",href:"/auth.css"})),w(h.a,{title:"",linkTo:S,linkText:j,show:t,handleClose:function(){return n(!1)}},w("p",null,f)),w("div",{style:{textAlign:"center",margin:"50px 0"}},w("div",null,w("h3",null,w("b",null,"Login"))),w("br",null))," ",w("div",{className:"row",style:{margin:"0px 5px"}},w("form",{style:{width:"100%"},onSubmit:C},w("div",{className:"form-group col-12"},w("label",{htmlFor:"email"},"Email address / Phone Number"),w("input",{type:"email",className:"form-control cinput",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email or Phone number",value:_,onChange:function(e){return E(e.target.value)},style:{padding:"20px"}})),w("div",{className:"form-group col-12",style:{marginBottom:30}},w("label",{htmlFor:"exampleInputPassword1"},"Password"),w("input",{type:"password",className:"form-control cinput",id:"password",placeholder:"Password","data-toggle":"password",value:I,onChange:function(e){return T(e.target.value)},style:{padding:"20px"}})),w("div",{className:"form-group col-12"},w("button",{type:"submit",className:"btn btn-primary btn-block submitbutton",id:"submitButton",style:{padding:"10px"}},"Login")),w("div",{style:{textAlign:"center",fontWeight:"bolder",color:"grey"}},w("a",null,"Forgot password?"),w("br",null),w("br",null),"Don't have an account?"," ",w(b.a,{href:"/auth/signup"},w("a",{id:"signup"},"Sign Up")))))))}},yzXZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return n("fY9I")}])}},[["yzXZ",0,1,2,3,4,5]]]);