(ns assistant.screens.home.view
  (:require
   [react-native.core :as rn]))

(defn view []
  [rn/view {:flex  1
            :style {:background-color "black"
                    :align-items      "center"
                    :justify-content  "center"}}
   [rn/text {:style
             {:color        "white"
              :font-size    30
              :font-weight  "bold"}}
    "Kallu"]])