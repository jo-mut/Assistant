(ns assistant.core
  (:require
   [react-native.core :as rn]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [react-native.navigation.core :as navigation]
   [assistant.screens.core :as screens]
   assistant.events
   assistant.subs))

(defonce nav-ref (r/atom nil))

(defn app-root []
  [navigation/navigation-container
   {:ref navigation/ref}
   [navigation/stack
    {:screenOptions
     {:headerShown     false}
     :initialRouteName "Welcome"}
    screens/screens]])

(defn init []
  (rf/dispatch [:init-app-db])
  (rn/register-component "Assistant" app-root))