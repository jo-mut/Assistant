goog.provide('assistant.api.api');
assistant.api.api.base_url = "https://api.openai.com/v1/chat/completions";
assistant.api.api.ollama_url = "http://127.0.0.1:11434/";
assistant.api.api.api_key = "";
assistant.api.api.options = (function assistant$api$api$options(data){
return ({"method": "POST", "headers": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null), "body": JSON.stringify(cljs.core.clj__GT_js(data))});
});
assistant.api.api.fetch = (function assistant$api$api$fetch(prompt,input_message){
var object = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"models","models",-1985455662),"gpt-3.5-turbo",new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"user",new cljs.core.Keyword(null,"content","content",15833224),input_message], null)], null)], null);
return fetch(assistant.api.api.base_url,assistant.api.api.options(object)).then((function (response){
if(cljs.core.truth_(response.ok)){
return response.json();
} else {
throw Error("Failed to fetch data");
}
})).then((function (data){
return console.log(data);
})).catch((function (error){
return console.log("Error fetching api data",error);
}));
});

//# sourceMappingURL=assistant.api.api.js.map
