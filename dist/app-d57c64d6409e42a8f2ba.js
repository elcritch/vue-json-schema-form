webpackJsonp([0],{13:function(t,e){t.exports=function(t,e,a,n){var o,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,r=t.default);var i="function"==typeof r?r.options:r;if(e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),a&&(i._scopeId=a),n){var l=Object.create(i.computed||null);Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}}),i.computed=l}return{esModule:o,exports:r,options:i}}},209:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}Object.defineProperty(e,"__esModule",{value:!0});var o,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},s=a(7),i=a(25),l=(o={},n(o,i.SHOW_ALL,"All"),n(o,i.SHOW_ACTIVE,"Active"),n(o,i.SHOW_COMPLETED,"Completed"),o),c=[i.SHOW_ALL,i.SHOW_ACTIVE,i.SHOW_COMPLETED];e.default={name:"Footer",props:["activeCount","completedCount","selectedFilter","onShow"],data:function(){return{filterTitles:l,filters:c}},methods:r({},(0,s.mapActions)(["clearCompleted"]),{handleClear:function(){this.clearCompleted()}})}},210:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},o=a(7);e.default={name:"Header",methods:n({},(0,o.mapActions)(["addTodo"]),{handleSave:function(t){0!==t.length&&this.addTodo(t)}}),created:function(){console.log("HEADER:: "),console.log("router:: ")},computed:{currentRoute:function(){var t=this.$route.path.split("/").slice(1),e=[],a="";for(var n in t)a+="/"+t[n],e.push({name:t[n],path:a});return e}},components:{}}},211:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}Object.defineProperty(e,"__esModule",{value:!0});var o=(a(7),a(52));e.default={name:"MainForm",props:{value:{},focus:!1},data:function(){return{formDataEmpty:{name:"",variety:"",location:"",created_date:""}}},computed:{selectedFilter:function(){return null}},filters:{},methods:{updatedValue:function(t,e){var a=Object.assign({},this.value,n({},t,e));this.$emit("input",a)},updated:function(t){var e=this.findId(t),a=t.target.value;this.updatedValue(e,a)},findId:function(t){for(var e=t.target;e&&!e.id;)e=e.parentNode;return e.id}},directives:{focus:o.focus},components:{}}},212:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=a(7),s=a(25),i=n(s),l=a(89),c=n(l),u=a(91),d=n(u);e.default={name:"MainSection",props:["filter"],data:function(){return{mainFilter:this.filter,pagination:{},isShow:!1,selectedItems:null,formData:{},formDataEmpty:{name:"",variety:"",location:"",created_date:""},createAnother:!1}},computed:o({},(0,r.mapGetters)(["todos"]),{checked:function(){return this.completedCount===this.todos.length},completedCount:function(){return this.todos.reduce(function(t,e){return e.completed?t+1:t},0)},activeCount:function(){return this.todos.length-this.completedCount},selectedFilter:function(){return i.default[this.mainFilter]}}),methods:o({},(0,r.mapActions)(["addHarvest"]),{handleCompleteAll:function(){this.completeAll()},handleShow:function(t){this.mainFilter=t},onTableChange:function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];console.log("onTableChange",e)},onSelectChange:function(t,e){console.log("onSelectChange",JSON.stringify({arg1:t,arg2:e},null,4)),console.log("selectedItems",JSON.stringify(this.selectedItems,null,4))},hasSelect:function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];console.log("hasSelect",e)},handleSave:function(t){var e=this;this.$data.isShow=!1;var a=Object.assign({},this.$data.formData);this.$data.formData=Object.assign({},this.$data.formDataEmpty),console.log("handleSave:: ",a),this.$store.dispatch("addHarvest",a),!0===this.$data.createAnother&&setTimeout(function(){return e.$data.isShow=!0},10)},handleClose:function(t){this.$data.isShow=!1,this.$data.formData=Object.assign({},this.$data.formDataEmpty)},handleEdit:function(t){this.$data.isShow=!0}}),components:{"footer-component":c.default,"main-form":d.default}}},213:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=a(7),s=a(25),i=n(s),l=a(89),c=n(l),u=a(91),d=n(u);e.default={name:"MainSection",props:["filter"],data:function(){return{mainFilter:this.filter,pagination:{},isShow:!1,selectedItems:null,formData:{},formDataEmpty:{name:"",variety:"",location:"",created_date:""},createAnother:!1}},computed:o({},(0,r.mapGetters)(["todos"]),{checked:function(){return this.completedCount===this.todos.length},completedCount:function(){return this.todos.reduce(function(t,e){return e.completed?t+1:t},0)},activeCount:function(){return this.todos.length-this.completedCount},selectedFilter:function(){return i.default[this.mainFilter]}}),methods:o({},(0,r.mapActions)(["addHarvest"]),{handleCompleteAll:function(){this.completeAll()},handleShow:function(t){this.mainFilter=t},onTableChange:function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];console.log("onTableChange",e)},onSelectChange:function(t,e){console.log("onSelectChange",JSON.stringify({arg1:t,arg2:e},null,4)),console.log("selectedItems",JSON.stringify(this.selectedItems,null,4))},hasSelect:function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];console.log("hasSelect",e)},handleSave:function(t){var e=this;this.$data.isShow=!1;var a=Object.assign({},this.$data.formData);this.$data.formData=Object.assign({},this.$data.formDataEmpty),console.log("handleSave:: ",a),this.$store.dispatch("addHarvest",a),!0===this.$data.createAnother&&setTimeout(function(){return e.$data.isShow=!0},10)},handleClose:function(t){this.$data.isShow=!1,this.$data.formData=Object.assign({},this.$data.formDataEmpty)},handleEdit:function(t){this.$data.isShow=!0}}),components:{"footer-component":c.default,"main-form":d.default}}},214:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(90),r=n(o),s=a(221),i=n(s),l=a(25);e.default={name:"App",data:function(){return{filter:l.SHOW_ALL}},components:{"header-component":r.default,"main-section":i.default}}},215:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(90),r=n(o),s=a(222),i=n(s);e.default={name:"FormApp",data:function(){return{}},components:{"header-component":r.default,"main-section":i.default}}},216:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(8),r=n(o),s=a(36),i=n(s);a(95);var l=a(96),c=n(l),u=a(97),d=n(u),f=a(94),h=n(f),v=a(37),p=n(v);r.default.use(i.default),r.default.use(p.default);var m=new p.default({mode:"history",routes:[{path:"/",components:{default:c.default}},{path:"/form",components:{default:d.default}}]});e.default=new r.default({el:"#root",store:h.default,router:m,render:function(t){return t("router-view")}})},221:function(t,e,a){var n=a(13)(a(212),a(224),null,null);t.exports=n.exports},222:function(t,e,a){var n=a(13)(a(213),a(229),null,null);t.exports=n.exports},223:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("nav",{staticClass:"nav box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"nav-right nav-menu"},[a("div",{staticClass:"nav-item"},[a("breadcrumb",[a("breadcrumb-item",{attrs:{label:"Home",to:"/"}}),t._v(" "),t._l(t.currentRoute,function(t){return a("breadcrumb-item",{attrs:{label:t.name,to:t.path}})})],2)],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-item"},[a("h1",{staticClass:"title"},[t._v("\n        Plant Harvest Data\n      ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-center"},[a("div",{staticClass:"nav-item"},[a("h2",{staticClass:"subtitle"},[t._v("\n          Database for collecting plant harvest information.\n        ")])])])}]}},224:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"main"},[a("br"),t._v(" "),a("div",{staticClass:"container"},[a("data-table",{attrs:{data:t.todos,change:t.onTableChange,"on-select-change":t.onSelectChange,checkable:"","show-index":"",bordered:""}},[a("table-toolbar",{attrs:{"has-refresh":"","has-columns-control":""}},[a("template",{slot:"left"},[a("div",{staticClass:"level-item"},[a("a",{staticClass:"button is-primary",class:{"is-disabled":!t.hasSelect},on:{click:t.handleEdit}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("span",[t._v("New Harvest")])])])]),t._v(" "),a("template",{slot:"right"},[a("div",{staticClass:"level-item"},[a("p",{staticClass:"control has-addons"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Find a post"}}),t._v(" "),a("button",{staticClass:"button"},[t._v("Search")])])])])],2),t._v(" "),a("column",{attrs:{label:"Short Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.name))])]}}])}),t._v(" "),a("column",{attrs:{label:"Variety",field:"variety",sorter:"custom"}}),t._v(" "),a("column",{attrs:{label:"Location",field:"location",sorter:"custom"}}),t._v(" "),a("column",{attrs:{label:"Date",field:"created_date",sorter:"custom"}})],1),t._v(" "),a("modal",{attrs:{title:"Table?",width:520,"is-show":t.isShow,transition:"fadeDown"},on:{close:function(e){t.isShow=!1},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.handleSave(e)}}},[a("div",{staticStyle:{width:"100%"},slot:"header"},[a("h1",{staticClass:"title"},[t._v("\n          Harvests\n        ")]),t._v(" "),a("h2",{staticClass:"subtitle"},[t._v("\n          Add new item\n        ")])]),t._v(" "),a("div",[a("main-form",{attrs:{focus:t.isShow},model:{value:t.formData,callback:function(e){t.formData=e},expression:"formData"}})],1),t._v(" "),a("div",{slot:"footer"},[a("p",{staticClass:"control"}),a("p",[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.createAnother,expression:"createAnother"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.createAnother)?t._i(t.createAnother,null)>-1:t.createAnother},on:{__c:function(e){var a=t.createAnother,n=e.target,o=!!n.checked;if(Array.isArray(a)){var r=t._i(a,null);o?r<0&&(t.createAnother=a.concat(null)):r>-1&&(t.createAnother=a.slice(0,r).concat(a.slice(r+1)))}else t.createAnother=o}}}),t._v("\n              Create another\n            ")])]),t._v(" "),a("button",{staticClass:"button is-primary",on:{click:t.handleSave}},[t._v("Submit")]),t._v(" "),a("button",{staticClass:"button is-link",on:{click:t.handleClose}},[t._v("Cancel")]),t._v(" "),a("p")])])],1)])},staticRenderFns:[]}},225:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"root"}},[a("header-component"),t._v(" "),a("main-section",{attrs:{filter:t.filter}})],1)},staticRenderFns:[]}},226:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("footer",{staticClass:"footer"})},staticRenderFns:[]}},227:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"label"},[t._v("Short Name for Harvest")]),t._v(" "),a("p",{staticClass:"control"},[a("input",{directives:[{name:"focus",rawName:"v-focus.lazy",value:t.focus,expression:"focus",modifiers:{lazy:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Text input",id:"name"},domProps:{value:t.value.name},on:{input:t.updated}})]),t._v(" "),a("label",{staticClass:"label"},[t._v("Variety")]),t._v(" "),a("p",{staticClass:"control has-icon has-icon-right"},[a("input",{staticClass:"input is-success",attrs:{type:"text",placeholder:"Text input",id:"variety"},domProps:{value:t.value.variety},on:{input:t.updated}}),t._v(" "),a("i",{staticClass:"fa fa-check"}),t._v(" "),a("span",{staticClass:"help is-success"},[t._v("This username is available")])]),t._v(" "),a("label",{staticClass:"label"},[t._v("Location")]),t._v(" "),a("p",{staticClass:"control "},[a("span",{staticClass:"select is-fullwidth"},[a("select",{attrs:{id:"location"},domProps:{value:t.value.location},on:{input:t.updated}},[a("option",[t._v("BAHQ - DLI Boxes")]),t._v(" "),a("option",[t._v("BAHQ - Research Farm")]),t._v(" "),a("option",[t._v("PLHQ - Production Farm")]),t._v(" "),a("option",[t._v("PLHQ - Production Tests")])])])]),t._v(" "),a("label",{staticClass:"label"},[t._v("Date")]),t._v(" "),a("p",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Date Input",id:"created_date"},domProps:{value:t.value.created_date},on:{input:t.updated}})])])},staticRenderFns:[]}},228:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"root"}},[a("header-component",{key:"header"}),t._v(" "),a("main-section")],1)},staticRenderFns:[]}},229:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"box"},[a("br"),t._v(" "),a("div",{staticStyle:{width:"100%"},slot:"header"},[a("h1",{staticClass:"title"},[t._v("\n      Harvests\n    ")]),t._v(" "),a("h2",{staticClass:"subtitle"},[t._v("\n      Add new item\n    ")])]),t._v(" "),a("div",[a("main-form",{attrs:{focus:t.isShow},model:{value:t.formData,callback:function(e){t.formData=e},expression:"formData"}})],1),t._v(" "),a("div",{slot:"footer"},[a("p",{staticClass:"control"}),a("p",[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.createAnother,expression:"createAnother"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.createAnother)?t._i(t.createAnother,null)>-1:t.createAnother},on:{__c:function(e){var a=t.createAnother,n=e.target,o=!!n.checked;if(Array.isArray(a)){var r=t._i(a,null);o?r<0&&(t.createAnother=a.concat(null)):r>-1&&(t.createAnother=a.slice(0,r).concat(a.slice(r+1)))}else t.createAnother=o}}}),t._v("\n          Create another\n        ")])]),t._v(" "),a("button",{staticClass:"button is-primary",on:{click:t.handleSave}},[t._v("Submit")]),t._v(" "),a("button",{staticClass:"button is-link",on:{click:t.handleClose}},[t._v("Cancel")]),t._v(" "),a("p")])])},staticRenderFns:[]}},25:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ADD_DATA="ADD_DATA",e.GET_HARVESTS="GET_HARVESTS",e.ADD_HARVEST="ADD_HARVEST",e.SHOW_ALL="show_all",e.SHOW_COMPLETED="show_completed",e.SHOW_ACTIVE="show_active"},89:function(t,e,a){var n=a(13)(a(209),a(226),null,null);t.exports=n.exports},90:function(t,e,a){var n=a(13)(a(210),a(223),null,null);t.exports=n.exports},91:function(t,e,a){var n=a(13)(a(211),a(227),null,null);t.exports=n.exports},94:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialState=void 0;var o=a(8),r=n(o),s=a(7),i=n(s),l=a(25),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(l);r.default.use(i.default);e.initialState={todos:[{text:"Use Redux",completed:!1,id:0}]};e.default=new i.default.Store({state:{count:0,todoBlank:{name:"",variety:"",created_date:"",location:""},todos:[{name:"DLI Trials 1",variety:"Lettuce",created_date:"2017-01-23",location:"BAHQ - Experimental Boxes"},{name:"DLI Trials 2",variety:"Basil",created_date:"2017-02-05",location:"BAHQ - Experimental Boxes"}]},mutations:function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}({increment:function(t){t.count++}},c.ADD_DATA,function(t,e){console.log("Mutations:ADD_DATA::",t,e),t.todos.unshift(e)}),actions:{getHarvest:function(t,e){t.commit,t.state},addHarvest:function(t,e){var a=t.commit,n=t.state;console.log("Actions:ADD_HARVEST::",a,n,e),a(c.ADD_DATA,Object.assign({},e))}},getters:{todos:function(t){return t.todos}}})},95:function(t,e){},96:function(t,e,a){var n=a(13)(a(214),a(225),null,null);t.exports=n.exports},97:function(t,e,a){var n=a(13)(a(215),a(228),null,null);t.exports=n.exports}},[216]);