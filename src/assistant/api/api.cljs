(ns assistant.api.api
  (:require [promesa.core :as p]))

(def base-url "https://api.openai.com/v1/chat/completions")
(def ollama-url "http://localhost:11434/api/chat/")
(def api-key "")

(defn options [data]
  #js {:method  "POST"
       :headers #js {"Content-Type" "application/json"}
       :body    (js/JSON.stringify (clj->js data))})

;; (defn fetch [prompt input-message]
;;   (let [object {:model "llama3"
;;                 :messages [{:role "user"
;;                             :content input-message}]
;;                 :stream false}]
;;     (-> (js/fetch ollama-url (options  object))
;;         (.then (fn [response]
;;                  (js/console.log "input data: ", response)
;;                  (if (.-ok response)
;;                    (.json response)
;;                    (throw (js/Error "Failed to fetch data")))))
;;         (.then (fn [data]
;;                  (js/console.log data)))
;;         (.catch (fn [error]
;;                   (js/console.log "Error fetching api data" error))))))


(defn fetch [input-message]
  (->
   (p/let [object {:model "llama3"
                   :messages [{:role "user"
                               :content input-message}]
                   :stream false}]
     (-> (js/fetch ollama-url (options object))
         (.then (fn [response]
                  (if (.-ok response)
                    (.json response)
                    (throw (js/Error "Failed to fetch data")))))
         (.then (fn [data]
                  (js/console.log "fetched js object " data)
                  (js->clj (.-message data) :keywordize-keys true)))
         (.catch (fn [error]
                   (js/console.log "Error fetching api data" error)))))))