(ns assistant.constants.messages)

(def messages 
  [{:role :user
    :content "How are you?"}
   {:role :assistant
    :content   "I am doing great, how can I help you today?"}
   {:role :user}
   :content "I need help with my homework"
   {:role :assistant
    :content "Sure, I can help you with that. What subject is it?"}
   {:role :user
    :content "History"}
   {:role :assistant
    :content "I would like to know something about the history of  the universe. Like how did it start and how did life evolve and how can we liken this to the development of technology as a life form?"}])