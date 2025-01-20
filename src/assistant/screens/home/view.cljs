(ns assistant.screens.home.view
  (:require
   ["react" :as react]
   [goog.object :as gobj]
   [reagent.core :as r]
   [react-native.core :as rn]
   [assistant.constants.images :as images]
   [assistant.constants.messages :as messages]
   ["./voice-wrapper" :as VoiceWrapper]))

(def recording (r/atom true))
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
                (js/console.log "recording " @recording)
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
                                            :padding-horizontal 20
                                            :margin-horizontal  20
                                            :margin-top         5
                                            :border-radius      15
                                            :background-color   "gray"
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
      :key-fn         (fn [] (str (rand-int 1000000)))]
     [rn/view])])


(defn- f-view []
  (let [messages messages/messages]
    (rn/use-effect
     (fn []
       (set! (.-onSpeechVolumeChanged rn/voice)
             (fn [event]
               (js/console.log "Speech volume changed" event)))

       (set! (.-onSpeechStart rn/voice)
             (fn [event]
               (js/console.log "Speech started" event)))

       (set! (.-onSpeechEnd rn/voice)
             (fn [event]
               (js/console.log "Speech ended" event)))

       (set! (.-onSpeechError rn/voice)
             (fn [event]
               (js/console.log "Speech error" event)))

       (set! (.-onSpeechRecognized rn/voice)
             (fn [event]
               (js/console.log "Speech recognized" event)))
       (fn []
         (->
          (.destroy ^js rn/voice)
          (.then (fn []
                   (.removeAllListeners rn/voice))))))
     [@onStarted])

    [rn/view {:flex  1
              :style {:background-color "black"}}
     [rn/safe-area-view
      {:flex    1
       :show-vertical-scroll-indicator false
       :bounce  false}
      [render-messages messages]
      [chat-actions]]]))

(defn view []
  [:f> f-view])