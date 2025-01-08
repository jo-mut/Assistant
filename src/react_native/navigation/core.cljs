(ns react-native.navigation.core
  (:require
   ["@react-navigation/native" :refer [NavigationContainer createNavigationContainerRef]]
   ["@react-navigation/native-stack" :refer [createNativeStackNavigator]]
   [reagent.core :as reagent]))


(def navigation-container (reagent/adapt-react-class NavigationContainer))

(def ref (createNavigationContainerRef))

(defn prepare-navigator [navigator screen]
  (fn [& params]
    (let [[props children] (if (map? (first params))
                             [(first params) (second params)]
                             [{} (first params)])]
      (into [navigator props]
            (mapv (fn [props]
                    [screen (update props :component reagent/reactify-component)])
                  children)))))

(defn create-stack-navigator []
  (let [^js stack (createNativeStackNavigator)]
    [(reagent/adapt-react-class (.-Navigator stack))
     (reagent/adapt-react-class (.-Screen stack))]))

(defn stack [& params]
  (let [[navigator screen] (create-stack-navigator)]
    (prepare-navigator navigator screen)))