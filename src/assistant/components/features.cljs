(ns assistant.components.features
  (:require
   [assistant.constants.custom-strings :as s]
   [react-native.core :as rn]))


(defn chat-gpt []
  [rn/view {:style {:background-color :#0077b5
                    :padding          10
                    :border-radius    20}}
   [rn/view {:height           30
             :width            30
             :border-radius    10
             :background-color "red"}]
   [rn/text {:style
             {:color         "white"
              :margin-top    10
              :margin-bottom 20}}
    (:chat-gpt-title s/strings)]])

(defn dall-e []
  [rn/view {:style {:background-color :#0077b5
                    :padding          10
                    :border-radius    20
                    :margin-top       40}}
   [rn/view {:height           30
             :width            30
             :border-radius    10
             :background-color "red"}]
   [rn/text {:style
             {:color         "white"
              :margin-top    10
              :margin-bottom 20}}
    (:dalle-title s/strings)]])

(defn smart-ai []
  [rn/view {:style {:background-color :#0077b5
                    :padding          10
                    :border-radius    20
                    :margin-top       40}}
   [rn/view {:height           30
             :width            30
             :border-radius    10
             :background-color "red"}]
   [rn/text {:style
             {:color         "white"
              :margin-top    10
              :margin-bottom 20}}
    (:voice-title s/strings)]])

(defn view []
  [rn/view {:flex  1
            :style {:background-color "black"}}
   [rn/safe-area-view {:flex 1}
    [rn/scroll-view
     [rn/view {:margin-top       50
               :border-radius    100
               :height           100
               :width            100
               :align-self       :center
               :background-color :#0077b5}]
     [rn/view {:flex 1
               :padding-horizontal 20}
      [rn/text {:style
                {:color         "white"
                 :font-size     24
                 :margin-bottom 10
                 :margin-top    50
                 :font-weight   "semibold"}}
       (:features s/strings)]
      [chat-gpt]
      [dall-e]
      [smart-ai]]]]])