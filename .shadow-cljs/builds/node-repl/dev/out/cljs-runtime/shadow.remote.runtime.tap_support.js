goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__23969,p__23970){
var map__23983 = p__23969;
var map__23983__$1 = cljs.core.__destructure_map(map__23983);
var svc = map__23983__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23983__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23983__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23983__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__23984 = p__23970;
var map__23984__$1 = cljs.core.__destructure_map(map__23984);
var msg = map__23984__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23984__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23984__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23984__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23984__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__24000,p__24001){
var map__24002 = p__24000;
var map__24002__$1 = cljs.core.__destructure_map(map__24002);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24002__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__24003 = p__24001;
var map__24003__$1 = cljs.core.__destructure_map(map__24003);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24003__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__24010,p__24011){
var map__24014 = p__24010;
var map__24014__$1 = cljs.core.__destructure_map(map__24014);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24014__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24014__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__24015 = p__24011;
var map__24015__$1 = cljs.core.__destructure_map(map__24015);
var msg = map__24015__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24015__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__24034,tid){
var map__24036 = p__24034;
var map__24036__$1 = cljs.core.__destructure_map(map__24036);
var svc = map__24036__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24036__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__24055 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__24056 = null;
var count__24057 = (0);
var i__24058 = (0);
while(true){
if((i__24058 < count__24057)){
var vec__24094 = chunk__24056.cljs$core$IIndexed$_nth$arity$2(null, i__24058);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24094,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24094,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__24142 = seq__24055;
var G__24143 = chunk__24056;
var G__24144 = count__24057;
var G__24145 = (i__24058 + (1));
seq__24055 = G__24142;
chunk__24056 = G__24143;
count__24057 = G__24144;
i__24058 = G__24145;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24055);
if(temp__5804__auto__){
var seq__24055__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24055__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24055__$1);
var G__24149 = cljs.core.chunk_rest(seq__24055__$1);
var G__24150 = c__5525__auto__;
var G__24151 = cljs.core.count(c__5525__auto__);
var G__24152 = (0);
seq__24055 = G__24149;
chunk__24056 = G__24150;
count__24057 = G__24151;
i__24058 = G__24152;
continue;
} else {
var vec__24101 = cljs.core.first(seq__24055__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24101,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24101,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__24153 = cljs.core.next(seq__24055__$1);
var G__24154 = null;
var G__24155 = (0);
var G__24156 = (0);
seq__24055 = G__24153;
chunk__24056 = G__24154;
count__24057 = G__24155;
i__24058 = G__24156;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__24043_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__24043_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__24044_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__24044_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__24045_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__24045_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__24046_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__24046_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__24105){
var map__24106 = p__24105;
var map__24106__$1 = cljs.core.__destructure_map(map__24106);
var svc = map__24106__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24106__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24106__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
