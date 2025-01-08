(ns assistant.screens.core
  (:require
   [assistant.screens.home.view :as home]
   [assistant.screens.welcome.view :as welcome]))

(def screens
  [{:name "Home"
    :component home/view}
   {:name "Welcome"
    :component welcome/view}])