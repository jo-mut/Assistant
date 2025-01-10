(ns assistant.events
  (:require
   [re-frame.core :as rf]
   [react-native.navigation.core :as navigation]))

(def app-db (atom {}))

(rf/reg-event-fx
 {:events [:init-app-db]}
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