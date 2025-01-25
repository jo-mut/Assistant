(ns assistant.components.composer
  (:require [react-native.core :as rn]
            [assistant.constants.images :as images]))

(defn view [{:keys [value, onChangeText, on-press]}]
  [rn/view {:flex-direction  :row
            :style {:justify-content   :space-between
                    :margin-horizontal 20}}
   [rn/text-input
    {:value        value
     :placeholder            "Enter your message"
     :placeholder-text-color "gray"
     :onChangeText onChangeText
     :multiline    true
     :flex         1
     :style        {:align-self       :center
                    :border-radius    20
                    :padding          20
                    :border-color     "gray"
                    :border-width     0.3
                    :color           "white"
                    :max-height       200
                    :min-height       50}}]
   [rn/view {:background-color "white"
             :border-radius    36/2
             :height           36
             :width            36
             :margin-bottom    10
             :margin-left      10
             :align-self       :flex-end
             :align-items      :center
             :justify-content  :center}
    [rn/touchable-opacity
     {:on-press on-press}
     [rn/image
      {:source      (images/get-image :send)
       :resize-mode :contain
       :style       {:width       24
                     :tint-color  "gray"
                     :align-self :center
                     :height     36}}]]]])