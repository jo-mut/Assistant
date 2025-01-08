(ns assistant.core
  (:require
   [react-native.core :as rn]
   [react-native.navigation.core :as navigation]
   [assistant.screens.core :as screens]
   [assistant.screens.home.view :as home]
   assistant.events))


(defn app-root []
  [navigation/navigation-container
   {:ref navigation/ref}
   [navigation/stack
    {:screenOptions
     {:headerShown     false}
     :initialRouteName "Welcome"}
    screens/screens]])

(defn init []
  (rn/register-component "Assistant" app-root))
