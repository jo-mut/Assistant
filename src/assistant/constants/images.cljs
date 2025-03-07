(ns assistant.constants.images)

(def images
  {:active-mic         (js/require "../../assets/images/active-mic.png")
   :copy               (js/require "../../assets/images/copy.png")
   :magic-wand         (js/require "../../assets/images/magic-wand.png")
   :send               (js/require "../../assets/images/send.png")
   :like               (js/require "../../assets/images/like.png")
   :dislike            (js/require "../../assets/images/dislike.png")
   :rotate             (js/require "../../assets/images/rotate.png")
   :robot              (js/require "../../assets/images/robot.png")
   :left-arrow         (js/require "../../assets/images/left-arrow.png")})


(defn get-image
  [k]
  (get images k))