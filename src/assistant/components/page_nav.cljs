(ns assistant.components.page-nav
  (:require
   [re-frame.core :as rf]
   [react-native.core :as rn]))


(defn left-side
  [{:keys [icon title]}]
  [rn/touchable-opacity
   [rn/image
    {:source      icon
     :resize-mode :contain
     :tint-color  :white
     :style       {:align-self :center
                   :width       24
                   :height      24}}]])

(defn nav-center
  [{:keys [title]}]
  [rn/text
   {:style
    {:color         "white"
     :font-size     24
     :font-weight   "600"}}
   title])

(defn right-side
  [{:keys [component]}]
  [rn/view])

(defn view
  [{:keys [left right center]}]
  [rn/view
   {:flex-direction  :row
    :justify-content :space-between
    :align-content   :center
    :style {:height             56
            :padding-horizontal 20}}
   [left-side left]
   [nav-center center]
   [right-side right]])