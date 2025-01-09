(ns assistant.screens.home.view
  (:require
   [react-native.core :as rn]
   [assistant.constants.messages :as messages]))

(defn view []
  [rn/view {:flex  1
            :style {:background-color "black"}}
   [rn/safe-area-view
    {:flex    1
     :show-vertical-scroll-indicator false
     :bounce  false}
    [rn/view {:flex 1}
     (if messages/messages
       [rn/flat-list
        {:data          messages/messages
         :render-fn     (fn [item]
                          [rn/view {:padding-horizontal 20
                                    :width              "70%"
                                    :align-self         (if (= :assistant (:role item))
                                                         :flex-end
                                                         :flex-start)
                                    :padding-vertical   10}
                           [rn/view {:style
                                     (if (= :assistant (:role item))
                                       {:align-items :flex-end}
                                       {:align-items :flex-start})} 
                            [rn/text {:style {:color :white}}
                             (:content item)]]])}
        :key-fn         (fn [] (str (rand-int 1000000)))])
     [rn/view]]]])