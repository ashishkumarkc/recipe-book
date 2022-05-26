!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CXQP:function(t,i,o){"use strict";o.r(i),o.d(i,"ShoppingListModule",(function(){return I}));var r=o("tyNb"),s=o("3Pt+"),c=o("fXoL"),b=o("ozzT"),u=o("9rNa"),a=o("ofXK"),d=["f"];function l(e,t){if(1&e){var n=c.Lb();c.Kb(0,"button",14),c.Rb("click",(function(){return c.ac(n),c.Tb().onDelete()})),c.ec(1,"Delete"),c.Jb()}}var f,p=((f=function(){function t(n){e(this,t),this.slService=n,this.editMode=!1}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.subscription=this.slService.startedEditing.subscribe((function(t){e.editedItemIndex=t,e.editMode=!0,e.editedItem=e.slService.getIngredient(t),e.slForm.setValue({name:e.editedItem.name,amount:e.editedItem.amount})}))}},{key:"onSubmit",value:function(e){var t=e.value,n=new u.a(t.name,t.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,n):this.slService.addIngredient(n),this.editMode=!1,e.reset()}},{key:"onClear",value:function(){this.slForm.reset(),this.editMode=!1}},{key:"onDelete",value:function(){this.slService.deleteIngredient(this.editedItemIndex),this.onClear()}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}}]),t}()).\u0275fac=function(e){return new(e||f)(c.Hb(b.a))},f.\u0275cmp=c.Bb({type:f,selectors:[["app-shopping-edit"]],viewQuery:function(e,t){var n;1&e&&c.ic(d,!0),2&e&&c.Xb(n=c.Sb())&&(t.slForm=n.first)},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],[1,"col-xs-12","shoppingListActions"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,t){if(1&e){var n=c.Lb();c.Kb(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"form",2,3),c.Rb("ngSubmit",(function(){c.ac(n);var e=c.Yb(3);return t.onSubmit(e)})),c.Kb(4,"div",0),c.Kb(5,"div",4),c.Kb(6,"label",5),c.ec(7,"Name"),c.Jb(),c.Ib(8,"input",6),c.Jb(),c.Kb(9,"div",7),c.Kb(10,"label",8),c.ec(11,"Amount"),c.Jb(),c.Ib(12,"input",9),c.Jb(),c.Jb(),c.Kb(13,"div",0),c.Kb(14,"div",10),c.Kb(15,"button",11),c.ec(16),c.Jb(),c.dc(17,l,2,0,"button",12),c.Kb(18,"button",13),c.Rb("click",(function(){return t.onClear()})),c.ec(19,"Clear"),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb()}if(2&e){var i=c.Yb(3);c.xb(15),c.Ub("disabled",!i.valid),c.xb(1),c.fc(t.editMode?"Update":"Add"),c.xb(1),c.Ub("ngIf",t.editMode)}},directives:[s.s,s.k,s.l,s.a,s.j,s.m,s.q,s.n,s.o,a.i],styles:[".shoppingListActions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}"]}),f);function m(e,t){if(1&e){var n=c.Lb();c.Kb(0,"a",4),c.Rb("click",(function(){c.ac(n);var e=t.index;return c.Tb().onEditItem(e)})),c.ec(1),c.Jb()}if(2&e){var i=t.$implicit;c.xb(1),c.hc(" ",i.name," (",i.amount,") ")}}var v,g,h=((v=function(){function t(n){e(this,t),this.slService=n}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.ingredients=this.slService.getIngredients(),this.subscription=this.slService.ingredientsChanged.subscribe((function(t){e.ingredients=t}))}},{key:"onEditItem",value:function(e){this.slService.startedEditing.next(e)}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}}]),t}()).\u0275fac=function(e){return new(e||v)(c.Hb(b.a))},v.\u0275cmp=c.Bb({type:v,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(e,t){1&e&&(c.Kb(0,"div",0),c.Kb(1,"div",1),c.Ib(2,"app-shopping-edit"),c.Ib(3,"hr"),c.Kb(4,"ul",2),c.dc(5,m,2,2,"a",3),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.xb(5),c.Ub("ngForOf",t.ingredients))},directives:[p,a.h],styles:[""]}),v),y=o("PCNd"),I=((g=function t(){e(this,t)}).\u0275mod=c.Fb({type:g}),g.\u0275inj=c.Eb({factory:function(e){return new(e||g)},imports:[[s.i,r.e.forChild([{path:"",component:h}]),y.a]]}),g)}}])}();