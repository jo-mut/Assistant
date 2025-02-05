(ns assistant.events
  (:require
   [re-frame.core :as rf]
   [react-native.navigation.core :as navigation]))

(def app-db {:messages []})

(rf/reg-event-fx
 :init-app-db
 (fn []
   {:db app-db}))

(rf/reg-fx
 :navigate
 (fn [[screen params]]
   (when (.isReady navigation/ref)
     (.navigate navigation/ref screen (clj->js params)))))

(rf/reg-event-fx
 :navigate-to
 (fn [_ [_ component params]]
   {:navigate [component params]}))

(rf/reg-fx
 :get-screen-params
 (fn [[route]]
   (js->clj (.-params ^js route))))

(rf/reg-event-fx
 :get-current-route
 (fn [_]
   (let [route (.getCurrentRoute navigation/ref)]
     {:get-screen-params [route]})))

(rf/reg-fx
 :add-message
 (fn [message]))

(rf/reg-event-fx
 :save-message
 (fn [{:keys [db]} [_ message]]
   (let [{:keys [role content]
          :or {role    "user"
               content message}} message
         new-message {:id      (js/Date.now)
                      :role    role
                      :content content}]
     {:db (update db :messages conj new-message)})))