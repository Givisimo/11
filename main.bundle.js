!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){"use strict";e.__esModule=!0,e.extend=s,e.indexOf=function(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!i.test(t))return t;return t.replace(a,o)},e.isEmpty=function(t){return!t&&0!==t||!(!c(t)||0!==t.length)},e.createFrame=function(t){var e=s({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,i=/[&<>"'`=]/;function o(t){return n[t]}function s(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}var l=Object.prototype.toString;e.toString=l;var u=function(t){return"function"==typeof t};u(/x/)&&(e.isFunction=u=function(t){return"function"==typeof t&&"[object Function]"===l.call(t)}),e.isFunction=u;var c=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===l.call(t)};e.isArray=c},function(t,e,r){"use strict";e.__esModule=!0;var n=["description","fileName","lineNumber","message","name","number","stack"];function a(t,e){var r=e&&e.loc,i=void 0,o=void 0;r&&(t+=" - "+(i=r.start.line)+":"+(o=r.start.column));for(var s=Error.prototype.constructor.call(this,t),l=0;l<n.length;l++)this[n[l]]=s[n[l]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{r&&(this.lineNumber=i,Object.defineProperty?Object.defineProperty(this,"column",{value:o,enumerable:!0}):this.column=o)}catch(t){}}a.prototype=new Error,e.default=a,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=u;var a=r(0),i=n(r(1)),o=r(9),s=r(17),l=n(r(19));e.VERSION="4.1.2";e.COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(t,e,r){this.helpers=t||{},this.partials=e||{},this.decorators=r||{},o.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:l.default,log:l.default.log,registerHelper:function(t,e){if("[object Object]"===a.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple helpers");a.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===a.toString.call(t))a.extend(this.partials,t);else{if(void 0===e)throw new i.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===a.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple decorators");a.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var c=l.default.log;e.log=c,e.createFrame=a.createFrame,e.logger=l.default},function(t){t.exports=[{id:"XWaQXcbk0",name:"Картофель, запеченный в мундире",description:"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.",image:"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",price:100,ingredients:["Картофель","Чеснок","Сметана","Бекон","Твердый сыр","Зеленый лук"]},{id:"pkXzyRp1P",name:"Томатный магрибский суп",description:"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.",image:"https://i.pinimg.com/originals/12/4f/bb/124fbbac1f27c69156ff579b4a845f2f.jpg",price:150,ingredients:["Помидоры","Куриный бульон","Мед","Петрушка","Кинза","Паприка"]},{id:"QMom9q4Ku",name:"Крем-суп из тыквы",description:"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.",image:"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png",price:100,ingredients:["Тыква","Петрушка","Сливки","Бренди","Куриный бульон"]},{id:"k2k0UrjZG",name:"Салат из красной фасоли с творожным сыром",description:"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.",image:"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg",price:150,ingredients:["Фасоль","Соль","Чеснок","Оливковое масло","Творожный сыр","Красный лук"]},{id:"j2k8U1jZd",name:"Классический греческий салат ",description:"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.",image:"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg",price:350,ingredients:["Оливковое масло","Лимонный сок","Чеснок","Помидоры","Красный лук","Сыр фета","Маслины"]},{id:"X2aQ7cvkd",name:"Маффины с голубикой и мускатным орехом",description:"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.",image:"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg",price:170,ingredients:["Сливочное масло","Пшеничная мука","Голубика","Ванильный экстракт","Мускатный орех"]},{id:"nk3zy1pf8",name:"Азу по‑татарски",description:"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.",image:"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg",price:270,ingredients:["Говядина","Соленые огурцы","Картофель","Мясной бульон","Чеснок"]},{id:"b7k2U13fd",name:"Жареный рис с яйцом по‑китайски",description:"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.",image:"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg",price:240,ingredients:["Круглый рис","Мини цукини","Тертый имбирь","Грибы шиитаке","Соевый соус","Кунжутное масло"]}]},function(t,e,r){var n=r(7);t.exports=(n.default||n).template({1:function(t,e,r,n,a){return'<li class="tag-list__item">'+t.escapeExpression(t.lambda(e,e))+"</li>"},compiler:[7,">= 4.0.0"],main:function(t,e,r,n,a){var i,o,s=null!=e?e:t.nullContext||{},l=r.helperMissing,u=t.escapeExpression;return'<li class="menu__item">\r\n\t<div class="card">\r\n\t\t<img\r\n\t\t\t\t\t\tsrc="'+u("function"==typeof(o=null!=(o=r.image||(null!=e?e.image:e))?o:l)?o.call(s,{name:"image",hash:{},data:a}):o)+'"\r\n\t\t\t\t\t\talt=""\r\n\t\t\t\t\t\tclass="card__image"\r\n\t\t/>\r\n\t\t<div class="card__content">\r\n\t\t\t<h2 class="card__name">'+u("function"==typeof(o=null!=(o=r.name||(null!=e?e.name:e))?o:l)?o.call(s,{name:"name",hash:{},data:a}):o)+'</h2>\r\n\t\t\t<p class="card__price">\r\n\t\t\t\t<i class="material-icons">\r\n\t\t\t\t\tmonetization_on\r\n\t\t\t\t</i>\r\n\t\t\t\t'+u("function"==typeof(o=null!=(o=r.price||(null!=e?e.price:e))?o:l)?o.call(s,{name:"price",hash:{},data:a}):o)+'\r\n\t\t\t</p>\r\n\r\n\t\t\t<p class="card__descr">\r\n\t\t\t\t'+u("function"==typeof(o=null!=(o=r.description||(null!=e?e.description:e))?o:l)?o.call(s,{name:"description",hash:{},data:a}):o)+'\r\n\t\t\t</p>\r\n\r\n\t\t\t<ul class="tag-list">\r\n\t\t\t\t'+(null!=(i=r.each.call(s,null!=e?e.ingredients:e,{name:"each",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a}))?i:"")+'\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<button class="card__button button">\r\n\t\t\t<i class="material-icons button__icon">\r\n\t\t\t\tshopping_cart\r\n\t\t\t</i>\r\n\t\t\tВ корзину\r\n\t\t</button>\r\n\t</div>\r\n</li>'},useData:!0})},function(t,e,r){"use strict";r.r(e);r(6);var n=r(3),a=r(4),i=r.n(a),o=n.map(function(t){return i()(t)}).join("");document.querySelector(".menu").insertAdjacentHTML("beforeend",o);var s=document.querySelector("body"),l=document.querySelector('button[data-action="theme-switch"]'),u=document.querySelector(".toolbar__icon");function c(){s.classList.add("theme-light"),u.textContent="wb_sunny"}function d(){s.classList.add("theme-dark"),u.textContent="brightness_3"}l.addEventListener("click",function(){s.classList.contains("theme-dark")?(s.classList.remove("theme-dark"),localStorage.setItem("theme","light"),c()):(d(),localStorage.setItem("theme","dark"))}),"dark"===localStorage.theme?d():"light"===localStorage.theme&&c()},function(t,e,r){},function(t,e,r){t.exports=r(8).default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}e.__esModule=!0;var i=a(r(2)),o=n(r(20)),s=n(r(1)),l=a(r(0)),u=a(r(21)),c=n(r(22));function d(){var t=new i.HandlebarsEnvironment;return l.extend(t,i),t.SafeString=o.default,t.Exception=s.default,t.Utils=l,t.escapeExpression=l.escapeExpression,t.VM=u,t.template=function(e){return u.template(e,t)},t}var f=d();f.create=d,c.default(f),f.default=f,e.default=f,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){a.default(t),i.default(t),o.default(t),s.default(t),l.default(t),u.default(t),c.default(t)};var a=n(r(10)),i=n(r(11)),o=n(r(12)),s=n(r(13)),l=n(r(14)),u=n(r(15)),c=n(r(16))},function(t,e,r){"use strict";e.__esModule=!0;var n=r(0);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,r){var a=r.inverse,i=r.fn;if(!0===e)return i(this);if(!1===e||null==e)return a(this);if(n.isArray(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):a(this);if(r.data&&r.ids){var o=n.createFrame(r.data);o.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:o}}return i(e,r)})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n,a=r(0),i=r(1),o=(n=i)&&n.__esModule?n:{default:n};e.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new o.default("Must pass iterator to #each");var r=e.fn,n=e.inverse,i=0,s="",l=void 0,u=void 0;function c(e,n,i){l&&(l.key=e,l.index=n,l.first=0===n,l.last=!!i,u&&(l.contextPath=u+e)),s+=r(t[e],{data:l,blockParams:a.blockParams([t[e],e],[u+e,null])})}if(e.data&&e.ids&&(u=a.appendContextPath(e.data.contextPath,e.ids[0])+"."),a.isFunction(t)&&(t=t.call(this)),e.data&&(l=a.createFrame(e.data)),t&&"object"==typeof t)if(a.isArray(t))for(var d=t.length;i<d;i++)i in t&&c(i,i,i===t.length-1);else{var f=void 0;for(var p in t)t.hasOwnProperty(p)&&(void 0!==f&&c(f,i-1),f=p,i++);void 0!==f&&c(f,i-1,!0)}return 0===i&&(s=n(this)),s})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n,a=r(1),i=(n=a)&&n.__esModule?n:{default:n};e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n=r(0);e.default=function(t){t.registerHelper("if",function(t,e){return n.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||n.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,r){return t.helpers.if.call(this,e,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)e.push(arguments[n]);var a=1;null!=r.hash.level?a=r.hash.level:r.data&&null!=r.data.level&&(a=r.data.level),e[0]=a,t.log.apply(t,e)})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){return t?"constructor"!==e||t.propertyIsEnumerable(e)?t[e]:void 0:t})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n=r(0);e.default=function(t){t.registerHelper("with",function(t,e){n.isFunction(t)&&(t=t.call(this));var r=e.fn;if(n.isEmpty(t))return e.inverse(this);var a=e.data;return e.data&&e.ids&&((a=n.createFrame(e.data)).contextPath=n.appendContextPath(e.data.contextPath,e.ids[0])),r(t,{data:a,blockParams:n.blockParams([t],[a&&a.contextPath])})})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){i.default(t)};var n,a=r(18),i=(n=a)&&n.__esModule?n:{default:n}},function(t,e,r){"use strict";e.__esModule=!0;var n=r(0);e.default=function(t){t.registerDecorator("inline",function(t,e,r,a){var i=t;return e.partials||(e.partials={},i=function(a,i){var o=r.partials;r.partials=n.extend({},o,e.partials);var s=t(a,i);return r.partials=o,s}),e.partials[a.args[0]]=a.fn,i})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n=r(0),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=n.indexOf(a.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=a.lookupLevel(t),"undefined"!=typeof console&&a.lookupLevel(a.level)<=t){var e=a.methodMap[t];console[e]||(e="log");for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];console[e].apply(console,n)}}};e.default=a,t.exports=e.default},function(t,e,r){"use strict";function n(t){this.string=t}e.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},e.default=n,t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,r=s.COMPILER_REVISION;if(e!==r){if(e<r){var n=s.REVISION_CHANGES[r],a=s.REVISION_CHANGES[e];throw new o.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+a+").")}throw new o.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new o.default("No environment passed to template");if(!t||!t.main)throw new o.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var r={strict:function(t,e){if(!(e in t))throw new o.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var r=t.length,n=0;n<r;n++)if(t[n]&&null!=t[n][e])return t[n][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:a.escapeExpression,invokePartial:function(r,n,i){i.hash&&(n=a.extend({},n,i.hash),i.ids&&(i.ids[0]=!0));r=e.VM.resolvePartial.call(this,r,n,i);var s=e.VM.invokePartial.call(this,r,n,i);null==s&&e.compile&&(i.partials[i.name]=e.compile(r,t.compilerOptions,e),s=i.partials[i.name](n,i));if(null!=s){if(i.indent){for(var l=s.split("\n"),u=0,c=l.length;u<c&&(l[u]||u+1!==c);u++)l[u]=i.indent+l[u];s=l.join("\n")}return s}throw new o.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var r=t[e];return r.decorator=t[e+"_d"],r},programs:[],program:function(t,e,r,n,a){var i=this.programs[t],o=this.fn(t);return e||a||n||r?i=l(this,t,o,e,r,n,a):i||(i=this.programs[t]=l(this,t,o)),i},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var r=t||e;return t&&e&&t!==e&&(r=a.extend({},e,t)),r},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function n(e){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=a.data;n._setup(a),!a.partial&&t.useData&&(i=function(t,e){e&&"root"in e||((e=e?s.createFrame(e):{}).root=t);return e}(e,i));var o=void 0,l=t.useBlockParams?[]:void 0;function u(e){return""+t.main(r,e,r.helpers,r.partials,i,l,o)}return t.useDepths&&(o=a.depths?e!=a.depths[0]?[e].concat(a.depths):a.depths:[e]),(u=c(t.main,u,r,a.depths||[],i,l))(e,a)}return n.isTop=!0,n._setup=function(n){n.partial?(r.helpers=n.helpers,r.partials=n.partials,r.decorators=n.decorators):(r.helpers=r.merge(n.helpers,e.helpers),t.usePartial&&(r.partials=r.merge(n.partials,e.partials)),(t.usePartial||t.useDecorators)&&(r.decorators=r.merge(n.decorators,e.decorators)))},n._child=function(e,n,a,i){if(t.useBlockParams&&!a)throw new o.default("must pass block params");if(t.useDepths&&!i)throw new o.default("must pass parent depths");return l(r,e,t[e],n,0,a,i)},n},e.wrapProgram=l,e.resolvePartial=function(t,e,r){t?t.call||r.name||(r.name=t,t=r.partials[t]):t="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return t},e.invokePartial=function(t,e,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var i=void 0;r.fn&&r.fn!==u&&function(){r.data=s.createFrame(r.data);var t=r.fn;i=r.data["partial-block"]=function(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=s.createFrame(r.data),r.data["partial-block"]=n,t(e,r)},t.partials&&(r.partials=a.extend({},r.partials,t.partials))}();void 0===t&&i&&(t=i);if(void 0===t)throw new o.default("The partial "+r.name+" could not be found");if(t instanceof Function)return t(e,r)},e.noop=u;var n,a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(0)),i=r(1),o=(n=i)&&n.__esModule?n:{default:n},s=r(2);function l(t,e,r,n,a,i,o){function s(e){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=o;return!o||e==o[0]||e===t.nullContext&&null===o[0]||(s=[e].concat(o)),r(t,e,t.helpers,t.partials,a.data||n,i&&[a.blockParams].concat(i),s)}return(s=c(r,s,t,o,n,i)).program=e,s.depth=o?o.length:0,s.blockParams=a||0,s}function u(){return""}function c(t,e,r,n,i,o){if(t.decorator){var s={};e=t.decorator(e,s,r,n&&n[0],i,o,n),a.extend(e,s)}return e}},function(t,e,r){"use strict";(function(r){e.__esModule=!0,e.default=function(t){var e=void 0!==r?r:window,n=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=n),t}},t.exports=e.default}).call(this,r(23))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}]);
//# sourceMappingURL=main.bundle.js.map