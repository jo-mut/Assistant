(ns assistant.screens.welcome.view
  (:require
   [react-native.core :as rn]
   [assistant.constants.custom-strings :as s]
   [re-frame.core :as rf]))

(defn view []
  [rn/view {:flex 1
            :style
            {:background-color :black}}
   [rn/safe-area-view
    {:flex 1}
    [rn/view {:padding-top 100
              :align-items :center}
     [rn/text {:style
               {:color        :white
                :font-size    30
                :font-weight  :bold}}
      (:app-title s/strings)]
     [rn/text {:style
               {:color        :white
                :margin-top   10}}
      (:welcome-title s/strings)]]
    [rn/view {:flex  1
              :style {:margin-vertical   100
                      :margin-horizontal 20
                      :border-radius     30
                      :align-items       :center
                      :justify-content   :center
                      :background-color  :#0077b5}}]
    [rn/touchable-opacity
     {:onPress #(rf/dispatch [:navigate-to "Home" {}])}
     [rn/view {:border-radius     20
               :margin-horizontal 20
               :align-items       :center
               :justify-content   :center
               :background-color  :#0077b5}
      [rn/text {:style
                {:color        :white
                 :font-size    18
                 :font-weight  :bold
                 :padding      20}}
       (:get-started s/strings)]]]]])