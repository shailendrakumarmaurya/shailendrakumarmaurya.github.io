"use strict";(self.webpackChunkRecipiesApp=self.webpackChunkRecipiesApp||[]).push([[378],{7378:(Z,c,s)=>{s.r(c),s.d(c,{AuthModule:()=>_});var p=s(9808),i=s(2382),d=s(8588),t=s(1223),m=s(4815);function g(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"app-alert",5),t.NdJ("close",function(){return t.CHM(o),t.oxw().onHandleError()}),t.qZA()}if(2&e){const o=t.oxw();t.Q6J("message",o.error)}}function h(e,r){1&e&&(t.TgZ(0,"div",6),t._UZ(1,"app-loading-spinner"),t.qZA())}function f(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"form",7,8),t.NdJ("ngSubmit",function(){t.CHM(o);const l=t.MAs(1);return t.oxw().onSubmit(l)}),t.TgZ(2,"div",9),t.TgZ(3,"label",10),t._uU(4,"E-Mail"),t.qZA(),t._UZ(5,"input",11),t.qZA(),t.TgZ(6,"div",9),t.TgZ(7,"label",12),t._uU(8,"Password"),t.qZA(),t._UZ(9,"input",13),t.qZA(),t.TgZ(10,"div"),t.TgZ(11,"button",14),t._uU(12),t.qZA(),t._uU(13," | "),t.TgZ(14,"button",15),t.NdJ("click",function(){return t.CHM(o),t.oxw().onSwitchMode()}),t._uU(15),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=t.MAs(1),n=t.oxw();t.xp6(11),t.Q6J("disabled",!o.valid),t.xp6(1),t.Oqu(n.isLoginMode?"Login":"Sign Up"),t.xp6(3),t.hij("Switch to ",n.isLoginMode?"Sign Up":"Login","")}}let A=(()=>{class e{constructor(o,n){this.authService=o,this.router=n,this.isLoginMode=!0,this.isLoading=!1,this.error=null}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(o){if(!o.valid)return;const n=o.value.email,l=o.value.password;let a;this.isLoading=!0,a=this.isLoginMode?this.authService.login(n,l):this.authService.signup(n,l),a.subscribe(u=>{console.log(u),this.isLoading=!1,this.router.navigate(["/recipes"])},u=>{console.log(u),this.error=u,this.isLoading=!1}),o.reset()}onHandleError(){this.error=null}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m.e),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-auth"]],decls:5,vars:3,consts:[[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],[3,"message","close",4,"ngIf"],["style","text-align: center;",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[3,"message","close"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,g,1,1,"app-alert",2),t.YNc(3,h,2,0,"div",3),t.YNc(4,f,16,3,"form",4),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("ngIf",n.error),t.xp6(1),t.Q6J("ngIf",n.isLoading),t.xp6(1),t.Q6J("ngIf",!n.isLoading))},directives:[p.O5,i._Y,i.JL,i.F,i.Fj,i.JJ,i.On,i.Q7,i.on,i.wO],encapsulation:2}),e})(),_=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,i.u5,d.Bz.forChild([{path:"",component:A}])]]}),e})()}}]);