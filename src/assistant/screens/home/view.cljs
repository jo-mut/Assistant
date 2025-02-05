(ns assistant.screens.home.view
  (:require
   ["react" :as react]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [react-native.core :as rn]
   [assistant.api.api :as api]
   [assistant.components.composer :as composer]
   [assistant.constants.images :as images]
   [promesa.core :as p]))

(def recording (r/atom false))
(def loaded (r/atom false))
(def onStarted (r/atom false))

(defn clear-chat
  []
  [rn/view {:style {:background-color :white
                    :width            50
                    :height           24
                    :justify-content  :center
                    :align-items      :center
                    :border-radius    10}}
   [rn/text {:style {:color     :black
                     :font-size 9}}
    "Clear"]])


(defn recording-status []
  [rn/view {:style {:background-color :white
                    :width            50
                    :height           24
                    :justify-content  :center
                    :align-items      :center
                    :border-radius    10}}
   [rn/view {:style {:height           15
                     :width            15
                     :background-color :black
                     :border-radius    10}}]])


(defn voice-start []
  (-> ^js rn/voice
      (.start "en-US")
      (.then (fn [result]
               (js/console.log "results started ***** " result)))
      (.catch (fn [error]
                (js/console.error "Error stopping voice recognition:" error)))))

(defn voice-stop []
  (->
   (.stop ^js rn/voice)
   (.then (fn [result]
            (js/console.log "results stopped ***** " result)))
   (.catch (fn [error]
             (js/console.error "Error stopping voice recognition:" error)))))

(defn record-button []
  [rn/touchable-opacity
   {:on-press (fn []
                (reset! recording (not @recording))
                (if @recording
                  (voice-start)
                  (voice-stop)))}
   [rn/image
    {:source      (images/get-image :active-mic)
     :resize-mode :contain
     :style       {:width       36
                   :align-self :center
                   :height     36}}]])

(defn chat-actions []
  [rn/view {:justify-content :flex-end}
   [rn/view {:flex-direction     :row
             :padding-bottom     30
             :padding-horizontal 40
             :align-items        :center
             :justify-content    :space-between}
    [recording-status]
    [record-button]
    [clear-chat]]])

(defn render-messages [messages]
  [rn/view {:flex 1}
   (if messages
     [rn/flat-list
      {:data                    messages
       :content-container-style {:margin-bottom 100}
       :render-fn               (fn [item]
                                  [rn/view {:flex               1
                                            :margin-horizontal  20
                                            :margin-top         5
                                            :border-radius      15
                                            :background-color   :#F2937
                                            :padding-vertical   10}
                                   [rn/view {:flex-direction :row}
                                    [rn/view {:height           30
                                              :width            30
                                              :border-radius    10
                                              :margin-right     10
                                              :background-color "red"}]
                                    [rn/text {:style {:color     :white
                                                      :flex      1
                                                      :flex-wrap :wrap}}
                                     (:content item)]]])}
      :key-fn         (fn [] (str (:id )))]
     [rn/view
      {:flex 1
       :style {:justify-content :center
               :align-items     :center
               :padding         40}}
      [rn/text
       {:style {:color :gray
                :text-align :center}}
       "Type in your message to start chatting with your assistant"]])])



(defn- f-view []
  (let [messages @(rf/subscribe [:messages])]
    [rn/view {:flex  1
              :style {:background-color "black"}}
     [rn/safe-area-view
      {:flex    1
       :show-vertical-scroll-indicator false
       :bounce  false}
      [render-messages messages]
      [rn/keyboard-avoiding-view
       [rn/touchable-without-feedback
        [composer/view
         {:on-press (fn [input-message]
                      (rf/dispatch [:save-message input-message])
                      (p/let [message (api/fetch input-message)]
                        (when (not (nil? message))
                          (rf/dispatch [:save-message message]))))}]]]]]))

(defn view []
  [:f> f-view])