import Voice from '@react-native-community/voice';

const VoiceWrapper = {
  initListeners: (onSpeechStart, onSpeechVolumeChanged, onSpeechResults, onSpeechEnd) => {
    console.log("voice object log: ", Voice)
    console.log("Voice methods and properties:", Object.getPrototypeOf(Voice));
    console.log(typeof Voice)
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechEnd = onSpeechEnd;
  },
  startListening: async (locale = 'en-US') => {
    try {
      await Voice.start(locale);
    } catch (error) {
      console.error(error);
    }
  },
  stopListening: async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.error(error);
    }
  }
};

export default VoiceWrapper;  