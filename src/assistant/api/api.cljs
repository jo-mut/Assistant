(ns assistant.api.api)


(def base-url "https://api.openai.com/v1/chat/completions")
(def api-key "")

(defn options [data]
  #js {:method "POST"
       :headers {:Content-Type "application/json"
                 :Authorization  (str "Bearer" api-key)}
       :body  (js/JSON.stringify (clj->js  data))})

(defn fetch [prompt input-message]
  (let [object {:models "gpt-3.5-turbo"
                :messages [{:role "user"
                            :content input-message}]}]
    (-> (js/fetch base-url  (options object))
        (.then (fn [response]
                 (if (.-ok response)
                   (.json response)
                   (throw (js/Error "Failed to fetch data")))))
        (.then (fn [data]
                 (js/console.log data)))
        (.catch (fn [error]
                  (js/console.log "Error fetching api data" error))))))