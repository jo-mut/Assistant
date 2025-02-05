(ns assistant.api.api
  (:require 
   ["dotenv" :as dotenv]
   [promesa.core :as p]))

(.config dotenv)

(def OPEN_AI_API_KEY (.-OPEN_AI_API_KEY js/process.env))

(def base-url "https://api.openai.com/v1/chat/completions")
(def ollama-url "http://localhost:11434/api/chat/")
(def api-key OPEN_AI_API_KEY)

(defn options [data]
  #js {:method  "POST"
       :headers #js {"Content-Type" "application/json"}
       :body    (js/JSON.stringify (clj->js data))})

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