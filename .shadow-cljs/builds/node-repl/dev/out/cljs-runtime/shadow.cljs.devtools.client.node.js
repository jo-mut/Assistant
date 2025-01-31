goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__24474){
var map__24476 = p__24474;
var map__24476__$1 = cljs.core.__destructure_map(map__24476);
var msg = map__24476__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24476__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24476__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__24482){
var map__24483 = p__24482;
var map__24483__$1 = cljs.core.__destructure_map(map__24483);
var msg = map__24483__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24483__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24483__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__24484 = info;
var map__24484__$1 = cljs.core.__destructure_map(map__24484);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__24487){
var map__24488 = p__24487;
var map__24488__$1 = cljs.core.__destructure_map(map__24488);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24488__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24488__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24489){
var map__24491 = p__24489;
var map__24491__$1 = cljs.core.__destructure_map(map__24491);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24491__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__24492 = cljs.core.seq(files_to_require);
var chunk__24493 = null;
var count__24494 = (0);
var i__24495 = (0);
while(true){
if((i__24495 < count__24494)){
var src = chunk__24493.cljs$core$IIndexed$_nth$arity$2(null, i__24495);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__24571 = seq__24492;
var G__24572 = chunk__24493;
var G__24573 = count__24494;
var G__24574 = (i__24495 + (1));
seq__24492 = G__24571;
chunk__24493 = G__24572;
count__24494 = G__24573;
i__24495 = G__24574;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24492);
if(temp__5804__auto__){
var seq__24492__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24492__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24492__$1);
var G__24576 = cljs.core.chunk_rest(seq__24492__$1);
var G__24577 = c__5525__auto__;
var G__24578 = cljs.core.count(c__5525__auto__);
var G__24579 = (0);
seq__24492 = G__24576;
chunk__24493 = G__24577;
count__24494 = G__24578;
i__24495 = G__24579;
continue;
} else {
var src = cljs.core.first(seq__24492__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__24580 = cljs.core.next(seq__24492__$1);
var G__24581 = null;
var G__24582 = (0);
var G__24583 = (0);
seq__24492 = G__24580;
chunk__24493 = G__24581;
count__24494 = G__24582;
i__24495 = G__24583;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__24505,msg){
var map__24506 = p__24505;
var map__24506__$1 = cljs.core.__destructure_map(map__24506);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24506__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__24507){
var map__24508 = p__24507;
var map__24508__$1 = cljs.core.__destructure_map(map__24508);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24510,done,error){
var map__24511 = p__24510;
var map__24511__$1 = cljs.core.__destructure_map(map__24511);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24511__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__24521_24602 = cljs.core.seq(repl_sources);
var chunk__24523_24603 = null;
var count__24524_24604 = (0);
var i__24525_24605 = (0);
while(true){
if((i__24525_24605 < count__24524_24604)){
var map__24529_24606 = chunk__24523_24603.cljs$core$IIndexed$_nth$arity$2(null, i__24525_24605);
var map__24529_24607__$1 = cljs.core.__destructure_map(map__24529_24606);
var src_24608 = map__24529_24607__$1;
var output_name_24609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24529_24607__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_24609)))){
shadow.cljs.devtools.client.node.closure_import(output_name_24609);


var G__24614 = seq__24521_24602;
var G__24615 = chunk__24523_24603;
var G__24616 = count__24524_24604;
var G__24617 = (i__24525_24605 + (1));
seq__24521_24602 = G__24614;
chunk__24523_24603 = G__24615;
count__24524_24604 = G__24616;
i__24525_24605 = G__24617;
continue;
} else {
var G__24618 = seq__24521_24602;
var G__24619 = chunk__24523_24603;
var G__24620 = count__24524_24604;
var G__24621 = (i__24525_24605 + (1));
seq__24521_24602 = G__24618;
chunk__24523_24603 = G__24619;
count__24524_24604 = G__24620;
i__24525_24605 = G__24621;
continue;
}
} else {
var temp__5804__auto___24622 = cljs.core.seq(seq__24521_24602);
if(temp__5804__auto___24622){
var seq__24521_24623__$1 = temp__5804__auto___24622;
if(cljs.core.chunked_seq_QMARK_(seq__24521_24623__$1)){
var c__5525__auto___24624 = cljs.core.chunk_first(seq__24521_24623__$1);
var G__24625 = cljs.core.chunk_rest(seq__24521_24623__$1);
var G__24626 = c__5525__auto___24624;
var G__24627 = cljs.core.count(c__5525__auto___24624);
var G__24628 = (0);
seq__24521_24602 = G__24625;
chunk__24523_24603 = G__24626;
count__24524_24604 = G__24627;
i__24525_24605 = G__24628;
continue;
} else {
var map__24530_24629 = cljs.core.first(seq__24521_24623__$1);
var map__24530_24630__$1 = cljs.core.__destructure_map(map__24530_24629);
var src_24631 = map__24530_24630__$1;
var output_name_24632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24530_24630__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_24632)))){
shadow.cljs.devtools.client.node.closure_import(output_name_24632);


var G__24633 = cljs.core.next(seq__24521_24623__$1);
var G__24634 = null;
var G__24635 = (0);
var G__24636 = (0);
seq__24521_24602 = G__24633;
chunk__24523_24603 = G__24634;
count__24524_24604 = G__24635;
i__24525_24605 = G__24636;
continue;
} else {
var G__24685 = cljs.core.next(seq__24521_24623__$1);
var G__24687 = null;
var G__24688 = (0);
var G__24689 = (0);
seq__24521_24602 = G__24685;
chunk__24523_24603 = G__24687;
count__24524_24604 = G__24688;
i__24525_24605 = G__24689;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e24517){var e = e24517;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__24531,done,error){
var map__24532 = p__24531;
var map__24532__$1 = cljs.core.__destructure_map(map__24532);
var msg = map__24532__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24532__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24532__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__24534_24694 = cljs.core.seq(sources);
var chunk__24535_24695 = null;
var count__24536_24696 = (0);
var i__24537_24697 = (0);
while(true){
if((i__24537_24697 < count__24536_24696)){
var map__24541_24702 = chunk__24535_24695.cljs$core$IIndexed$_nth$arity$2(null, i__24537_24697);
var map__24541_24703__$1 = cljs.core.__destructure_map(map__24541_24702);
var src_24704 = map__24541_24703__$1;
var provides_24705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24541_24703__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_24706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24541_24703__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_24706)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_24705);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_24706);
} else {
}


var G__24715 = seq__24534_24694;
var G__24716 = chunk__24535_24695;
var G__24717 = count__24536_24696;
var G__24718 = (i__24537_24697 + (1));
seq__24534_24694 = G__24715;
chunk__24535_24695 = G__24716;
count__24536_24696 = G__24717;
i__24537_24697 = G__24718;
continue;
} else {
var temp__5804__auto___24719 = cljs.core.seq(seq__24534_24694);
if(temp__5804__auto___24719){
var seq__24534_24720__$1 = temp__5804__auto___24719;
if(cljs.core.chunked_seq_QMARK_(seq__24534_24720__$1)){
var c__5525__auto___24721 = cljs.core.chunk_first(seq__24534_24720__$1);
var G__24727 = cljs.core.chunk_rest(seq__24534_24720__$1);
var G__24728 = c__5525__auto___24721;
var G__24729 = cljs.core.count(c__5525__auto___24721);
var G__24730 = (0);
seq__24534_24694 = G__24727;
chunk__24535_24695 = G__24728;
count__24536_24696 = G__24729;
i__24537_24697 = G__24730;
continue;
} else {
var map__24542_24731 = cljs.core.first(seq__24534_24720__$1);
var map__24542_24732__$1 = cljs.core.__destructure_map(map__24542_24731);
var src_24733 = map__24542_24732__$1;
var provides_24734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24542_24732__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_24735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24542_24732__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_24735)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_24734);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_24735);
} else {
}


var G__24743 = cljs.core.next(seq__24534_24720__$1);
var G__24744 = null;
var G__24745 = (0);
var G__24746 = (0);
seq__24534_24694 = G__24743;
chunk__24535_24695 = G__24744;
count__24536_24696 = G__24745;
i__24537_24697 = G__24746;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e24533){var e = e24533;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__24543){
var map__24544 = p__24543;
var map__24544__$1 = cljs.core.__destructure_map(map__24544);
var env = map__24544__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24544__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24547){
var map__24548 = p__24547;
var map__24548__$1 = cljs.core.__destructure_map(map__24548);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24548__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24548__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__24549){
var map__24550 = p__24549;
var map__24550__$1 = cljs.core.__destructure_map(map__24550);
var svc = map__24550__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24550__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
