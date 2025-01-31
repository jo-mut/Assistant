goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19863){
var map__19864 = p__19863;
var map__19864__$1 = cljs.core.__destructure_map(map__19864);
var runtime = map__19864__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19864__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_20018 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_20018)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__19869 = runtime;
var G__19870 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_20018);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__19869,G__19870) : shadow.remote.runtime.shared.process.call(null, G__19869,G__19870));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19871,res){
var map__19872 = p__19871;
var map__19872__$1 = cljs.core.__destructure_map(map__19872);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19872__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19872__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19873 = res;
var G__19873__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19873,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19873);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19873__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19873__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19875 = arguments.length;
switch (G__19875) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19876,msg,handlers,timeout_after_ms){
var map__19877 = p__19876;
var map__19877__$1 = cljs.core.__destructure_map(map__19877);
var runtime = map__19877__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20021 = arguments.length;
var i__5727__auto___20022 = (0);
while(true){
if((i__5727__auto___20022 < len__5726__auto___20021)){
args__5732__auto__.push((arguments[i__5727__auto___20022]));

var G__20023 = (i__5727__auto___20022 + (1));
i__5727__auto___20022 = G__20023;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19881,ev,args){
var map__19882 = p__19881;
var map__19882__$1 = cljs.core.__destructure_map(map__19882);
var runtime = map__19882__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19882__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19883 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19886 = null;
var count__19887 = (0);
var i__19888 = (0);
while(true){
if((i__19888 < count__19887)){
var ext = chunk__19886.cljs$core$IIndexed$_nth$arity$2(null, i__19888);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20028 = seq__19883;
var G__20029 = chunk__19886;
var G__20030 = count__19887;
var G__20031 = (i__19888 + (1));
seq__19883 = G__20028;
chunk__19886 = G__20029;
count__19887 = G__20030;
i__19888 = G__20031;
continue;
} else {
var G__20032 = seq__19883;
var G__20033 = chunk__19886;
var G__20034 = count__19887;
var G__20035 = (i__19888 + (1));
seq__19883 = G__20032;
chunk__19886 = G__20033;
count__19887 = G__20034;
i__19888 = G__20035;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19883);
if(temp__5804__auto__){
var seq__19883__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19883__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19883__$1);
var G__20036 = cljs.core.chunk_rest(seq__19883__$1);
var G__20037 = c__5525__auto__;
var G__20038 = cljs.core.count(c__5525__auto__);
var G__20039 = (0);
seq__19883 = G__20036;
chunk__19886 = G__20037;
count__19887 = G__20038;
i__19888 = G__20039;
continue;
} else {
var ext = cljs.core.first(seq__19883__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20041 = cljs.core.next(seq__19883__$1);
var G__20042 = null;
var G__20043 = (0);
var G__20044 = (0);
seq__19883 = G__20041;
chunk__19886 = G__20042;
count__19887 = G__20043;
i__19888 = G__20044;
continue;
} else {
var G__20048 = cljs.core.next(seq__19883__$1);
var G__20049 = null;
var G__20050 = (0);
var G__20051 = (0);
seq__19883 = G__20048;
chunk__19886 = G__20049;
count__19887 = G__20050;
i__19888 = G__20051;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19878){
var G__19879 = cljs.core.first(seq19878);
var seq19878__$1 = cljs.core.next(seq19878);
var G__19880 = cljs.core.first(seq19878__$1);
var seq19878__$2 = cljs.core.next(seq19878__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19879,G__19880,seq19878__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19906,p__19907){
var map__19908 = p__19906;
var map__19908__$1 = cljs.core.__destructure_map(map__19908);
var runtime = map__19908__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19908__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19909 = p__19907;
var map__19909__$1 = cljs.core.__destructure_map(map__19909);
var msg = map__19909__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19909__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__19914 = cljs.core.deref(state_ref);
var map__19914__$1 = cljs.core.__destructure_map(map__19914);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19919,msg){
var map__19921 = p__19919;
var map__19921__$1 = cljs.core.__destructure_map(map__19921);
var runtime = map__19921__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19921__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19923,key,p__19924){
var map__19926 = p__19923;
var map__19926__$1 = cljs.core.__destructure_map(map__19926);
var state = map__19926__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19926__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19927 = p__19924;
var map__19927__$1 = cljs.core.__destructure_map(map__19927);
var spec = map__19927__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19927__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19927__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19935,key,spec){
var map__19936 = p__19935;
var map__19936__$1 = cljs.core.__destructure_map(map__19936);
var runtime = map__19936__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19936__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___20060 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___20060 == null)){
} else {
var on_welcome_20061 = temp__5808__auto___20060;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_20061.cljs$core$IFn$_invoke$arity$0 ? on_welcome_20061.cljs$core$IFn$_invoke$arity$0() : on_welcome_20061.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19945_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19945_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19946_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19946_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19947_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19947_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19948_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19948_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19949_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19949_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19957,key){
var map__19958 = p__19957;
var map__19958__$1 = cljs.core.__destructure_map(map__19958);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19958__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19971,msg){
var map__19973 = p__19971;
var map__19973__$1 = cljs.core.__destructure_map(map__19973);
var runtime = map__19973__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19973__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19981,p__19982){
var map__19983 = p__19981;
var map__19983__$1 = cljs.core.__destructure_map(map__19983);
var runtime = map__19983__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19983__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19985 = p__19982;
var map__19985__$1 = cljs.core.__destructure_map(map__19985);
var msg = map__19985__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19985__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19985__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19992 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19994 = null;
var count__19995 = (0);
var i__19996 = (0);
while(true){
if((i__19996 < count__19995)){
var map__20008 = chunk__19994.cljs$core$IIndexed$_nth$arity$2(null, i__19996);
var map__20008__$1 = cljs.core.__destructure_map(map__20008);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20008__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__20071 = seq__19992;
var G__20072 = chunk__19994;
var G__20073 = count__19995;
var G__20074 = (i__19996 + (1));
seq__19992 = G__20071;
chunk__19994 = G__20072;
count__19995 = G__20073;
i__19996 = G__20074;
continue;
} else {
var G__20075 = seq__19992;
var G__20076 = chunk__19994;
var G__20077 = count__19995;
var G__20078 = (i__19996 + (1));
seq__19992 = G__20075;
chunk__19994 = G__20076;
count__19995 = G__20077;
i__19996 = G__20078;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19992);
if(temp__5804__auto__){
var seq__19992__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19992__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19992__$1);
var G__20083 = cljs.core.chunk_rest(seq__19992__$1);
var G__20084 = c__5525__auto__;
var G__20085 = cljs.core.count(c__5525__auto__);
var G__20086 = (0);
seq__19992 = G__20083;
chunk__19994 = G__20084;
count__19995 = G__20085;
i__19996 = G__20086;
continue;
} else {
var map__20012 = cljs.core.first(seq__19992__$1);
var map__20012__$1 = cljs.core.__destructure_map(map__20012);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20012__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__20087 = cljs.core.next(seq__19992__$1);
var G__20088 = null;
var G__20089 = (0);
var G__20090 = (0);
seq__19992 = G__20087;
chunk__19994 = G__20088;
count__19995 = G__20089;
i__19996 = G__20090;
continue;
} else {
var G__20092 = cljs.core.next(seq__19992__$1);
var G__20093 = null;
var G__20094 = (0);
var G__20095 = (0);
seq__19992 = G__20092;
chunk__19994 = G__20093;
count__19995 = G__20094;
i__19996 = G__20095;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
