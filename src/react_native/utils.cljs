(ns react-native.utils
  (:require [reagent.core :as reagent]))

(defn clj->json [data]
  (.stringify js/JSON (clj->js data)))

(defn json->clj [json]
  (when-not (= json "undefined")
    (try
      (js->clj (.parse js/JSON json) :keywordize-keys true)
      (catch js/Error _ (when (string? json) json)))))

(def serialize clj->json)

(defn deserialize [o]
  (try (json->clj o)
       (catch :default _ nil)))

