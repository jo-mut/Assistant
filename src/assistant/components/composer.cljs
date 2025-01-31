(ns assistant.components.composer
  (:require [react-native.core :as rn]
            ["react" :as react]
            [assistant.constants.images :as images]))

(defn- f-view
  [{:keys [on-press]}]
  (let [[input-message set-input-message] (react/useState "")]
    [rn/view {:flex-direction  :row
              :style {:justify-content   :space-between
                      :margin-horizontal 20}}
     [rn/text-input
      {:value        input-message
       :placeholder            "Enter your message"
       :placeholder-text-color "gray"
       :onChangeText (fn [value]
                       (set-input-message value))
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
     [rn/view {:background-color :#0077b5
               :border-radius    24
               :height           48
               :width            48
               :margin-bottom    8
               :margin-left      10
               :padding          10
               :align-self       :flex-end
               :align-items      :center
               :justify-content  :center}
      [rn/touchable-opacity
       {:on-press (fn []
                    (on-press input-message)
                    (set-input-message ""))}
       [rn/image
        {:source      (images/get-image :send)
         :resize-mode :contain
         :style       {:width       24
                       :tint-color  "white"
                       :align-self :center
                       :height     36}}]]]]))

(defn view [props]
  [:f> f-view props])