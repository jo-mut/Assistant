goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22874){
var map__22880 = p__22874;
var map__22880__$1 = cljs.core.__destructure_map(map__22880);
var m = map__22880__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22882_23187 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22883_23188 = null;
var count__22884_23189 = (0);
var i__22885_23190 = (0);
while(true){
if((i__22885_23190 < count__22884_23189)){
var f_23191 = chunk__22883_23188.cljs$core$IIndexed$_nth$arity$2(null, i__22885_23190);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23191], 0));


var G__23192 = seq__22882_23187;
var G__23193 = chunk__22883_23188;
var G__23194 = count__22884_23189;
var G__23195 = (i__22885_23190 + (1));
seq__22882_23187 = G__23192;
chunk__22883_23188 = G__23193;
count__22884_23189 = G__23194;
i__22885_23190 = G__23195;
continue;
} else {
var temp__5804__auto___23196 = cljs.core.seq(seq__22882_23187);
if(temp__5804__auto___23196){
var seq__22882_23197__$1 = temp__5804__auto___23196;
if(cljs.core.chunked_seq_QMARK_(seq__22882_23197__$1)){
var c__5525__auto___23198 = cljs.core.chunk_first(seq__22882_23197__$1);
var G__23199 = cljs.core.chunk_rest(seq__22882_23197__$1);
var G__23200 = c__5525__auto___23198;
var G__23201 = cljs.core.count(c__5525__auto___23198);
var G__23202 = (0);
seq__22882_23187 = G__23199;
chunk__22883_23188 = G__23200;
count__22884_23189 = G__23201;
i__22885_23190 = G__23202;
continue;
} else {
var f_23203 = cljs.core.first(seq__22882_23197__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23203], 0));


var G__23204 = cljs.core.next(seq__22882_23197__$1);
var G__23205 = null;
var G__23206 = (0);
var G__23207 = (0);
seq__22882_23187 = G__23204;
chunk__22883_23188 = G__23205;
count__22884_23189 = G__23206;
i__22885_23190 = G__23207;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23209 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23209], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_23209)))?cljs.core.second(arglists_23209):arglists_23209)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22900_23214 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22901_23215 = null;
var count__22902_23216 = (0);
var i__22903_23217 = (0);
while(true){
if((i__22903_23217 < count__22902_23216)){
var vec__22932_23218 = chunk__22901_23215.cljs$core$IIndexed$_nth$arity$2(null, i__22903_23217);
var name_23219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22932_23218,(0),null);
var map__22935_23220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22932_23218,(1),null);
var map__22935_23221__$1 = cljs.core.__destructure_map(map__22935_23220);
var doc_23222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935_23221__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935_23221__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23219], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23223], 0));

if(cljs.core.truth_(doc_23222)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23222], 0));
} else {
}


var G__23232 = seq__22900_23214;
var G__23233 = chunk__22901_23215;
var G__23234 = count__22902_23216;
var G__23235 = (i__22903_23217 + (1));
seq__22900_23214 = G__23232;
chunk__22901_23215 = G__23233;
count__22902_23216 = G__23234;
i__22903_23217 = G__23235;
continue;
} else {
var temp__5804__auto___23236 = cljs.core.seq(seq__22900_23214);
if(temp__5804__auto___23236){
var seq__22900_23237__$1 = temp__5804__auto___23236;
if(cljs.core.chunked_seq_QMARK_(seq__22900_23237__$1)){
var c__5525__auto___23238 = cljs.core.chunk_first(seq__22900_23237__$1);
var G__23243 = cljs.core.chunk_rest(seq__22900_23237__$1);
var G__23244 = c__5525__auto___23238;
var G__23245 = cljs.core.count(c__5525__auto___23238);
var G__23246 = (0);
seq__22900_23214 = G__23243;
chunk__22901_23215 = G__23244;
count__22902_23216 = G__23245;
i__22903_23217 = G__23246;
continue;
} else {
var vec__22938_23247 = cljs.core.first(seq__22900_23237__$1);
var name_23248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22938_23247,(0),null);
var map__22941_23249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22938_23247,(1),null);
var map__22941_23250__$1 = cljs.core.__destructure_map(map__22941_23249);
var doc_23251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22941_23250__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22941_23250__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23248], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23252], 0));

if(cljs.core.truth_(doc_23251)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23251], 0));
} else {
}


var G__23258 = cljs.core.next(seq__22900_23237__$1);
var G__23259 = null;
var G__23260 = (0);
var G__23261 = (0);
seq__22900_23214 = G__23258;
chunk__22901_23215 = G__23259;
count__22902_23216 = G__23260;
i__22903_23217 = G__23261;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__22956 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22957 = null;
var count__22958 = (0);
var i__22959 = (0);
while(true){
if((i__22959 < count__22958)){
var role = chunk__22957.cljs$core$IIndexed$_nth$arity$2(null, i__22959);
var temp__5804__auto___23265__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23265__$1)){
var spec_23266 = temp__5804__auto___23265__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23266)], 0));
} else {
}


var G__23267 = seq__22956;
var G__23268 = chunk__22957;
var G__23269 = count__22958;
var G__23270 = (i__22959 + (1));
seq__22956 = G__23267;
chunk__22957 = G__23268;
count__22958 = G__23269;
i__22959 = G__23270;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__22956);
if(temp__5804__auto____$1){
var seq__22956__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22956__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22956__$1);
var G__23271 = cljs.core.chunk_rest(seq__22956__$1);
var G__23272 = c__5525__auto__;
var G__23273 = cljs.core.count(c__5525__auto__);
var G__23274 = (0);
seq__22956 = G__23271;
chunk__22957 = G__23272;
count__22958 = G__23273;
i__22959 = G__23274;
continue;
} else {
var role = cljs.core.first(seq__22956__$1);
var temp__5804__auto___23275__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23275__$2)){
var spec_23276 = temp__5804__auto___23275__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23276)], 0));
} else {
}


var G__23277 = cljs.core.next(seq__22956__$1);
var G__23278 = null;
var G__23279 = (0);
var G__23280 = (0);
seq__22956 = G__23277;
chunk__22957 = G__23278;
count__22958 = G__23279;
i__22959 = G__23280;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__23052 = datafied_throwable;
var map__23052__$1 = cljs.core.__destructure_map(map__23052);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23052__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23052__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23052__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__23053 = cljs.core.last(via);
var map__23053__$1 = cljs.core.__destructure_map(map__23053);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23053__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23053__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23053__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__23054 = data;
var map__23054__$1 = cljs.core.__destructure_map(map__23054);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23054__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23054__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23054__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__23055 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__23055__$1 = cljs.core.__destructure_map(map__23055);
var top_data = map__23055__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23055__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__23083 = phase;
var G__23083__$1 = (((G__23083 instanceof cljs.core.Keyword))?G__23083.fqn:null);
switch (G__23083__$1) {
case "read-source":
var map__23084 = data;
var map__23084__$1 = cljs.core.__destructure_map(map__23084);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23084__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23084__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__23085 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__23085__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23085,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23085);
var G__23085__$2 = (cljs.core.truth_((function (){var fexpr__23089 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23089.cljs$core$IFn$_invoke$arity$1 ? fexpr__23089.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23089.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23085__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23085__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23085__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23085__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__23090 = top_data;
var G__23090__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23090,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23090);
var G__23090__$2 = (cljs.core.truth_((function (){var fexpr__23092 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23092.cljs$core$IFn$_invoke$arity$1 ? fexpr__23092.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23092.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23090__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23090__$1);
var G__23090__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23090__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23090__$2);
var G__23090__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23090__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23090__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23090__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23090__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__23093 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23093,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23093,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23093,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23093,(3),null);
var G__23096 = top_data;
var G__23096__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23096,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__23096);
var G__23096__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23096__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__23096__$1);
var G__23096__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23096__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__23096__$2);
var G__23096__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23096__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23096__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23096__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23096__$4;
}

break;
case "execution":
var vec__23102 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23036_SHARP_){
var or__5002__auto__ = (p1__23036_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__23110 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23110.cljs$core$IFn$_invoke$arity$1 ? fexpr__23110.cljs$core$IFn$_invoke$arity$1(p1__23036_SHARP_) : fexpr__23110.call(null, p1__23036_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__23111 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__23111__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23111,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__23111);
var G__23111__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23111__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23111__$1);
var G__23111__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23111__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__23111__$2);
var G__23111__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23111__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__23111__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23111__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23111__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23083__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__23122){
var map__23126 = p__23122;
var map__23126__$1 = cljs.core.__destructure_map(map__23126);
var triage_data = map__23126__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23126__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23126__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23126__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23126__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23126__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23126__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23126__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__23139 = phase;
var G__23139__$1 = (((G__23139 instanceof cljs.core.Keyword))?G__23139.fqn:null);
switch (G__23139__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__23140 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__23141 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23142 = loc;
var G__23143 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23144_23343 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23147_23344 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23152_23345 = true;
var _STAR_print_fn_STAR__temp_val__23153_23346 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23152_23345);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23153_23346);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23113_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23113_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23147_23344);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23144_23343);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23140,G__23141,G__23142,G__23143) : format.call(null, G__23140,G__23141,G__23142,G__23143));

break;
case "macroexpansion":
var G__23154 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__23155 = cause_type;
var G__23156 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23157 = loc;
var G__23158 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23154,G__23155,G__23156,G__23157,G__23158) : format.call(null, G__23154,G__23155,G__23156,G__23157,G__23158));

break;
case "compile-syntax-check":
var G__23159 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__23160 = cause_type;
var G__23161 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23162 = loc;
var G__23163 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23159,G__23160,G__23161,G__23162,G__23163) : format.call(null, G__23159,G__23160,G__23161,G__23162,G__23163));

break;
case "compilation":
var G__23164 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__23165 = cause_type;
var G__23166 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23167 = loc;
var G__23168 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23164,G__23165,G__23166,G__23167,G__23168) : format.call(null, G__23164,G__23165,G__23166,G__23167,G__23168));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__23170 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__23171 = symbol;
var G__23172 = loc;
var G__23173 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23174_23355 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23175_23356 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23176_23357 = true;
var _STAR_print_fn_STAR__temp_val__23177_23358 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23176_23357);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23177_23358);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23116_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23116_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23175_23356);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23174_23355);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23170,G__23171,G__23172,G__23173) : format.call(null, G__23170,G__23171,G__23172,G__23173));
} else {
var G__23179 = "Execution error%s at %s(%s).\n%s\n";
var G__23180 = cause_type;
var G__23181 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23182 = loc;
var G__23183 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23179,G__23180,G__23181,G__23182,G__23183) : format.call(null, G__23179,G__23180,G__23181,G__23182,G__23183));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23139__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
