var recognition = new webkitSpeechRecognition();
//No interruption
recognition.continuous = true;
//intermediate results
recognition.interimResults = true;

recognition.detectionCallback = [];

recognition.setDetectionCallback = function(keyWord, fct){
  recognition.detectionCallback[keyWord] = fct;
}

recognition.onstart = function() {
  recognizing = true;
};
recognition.onerror = function(event) {
  if (event.error == 'no-speech') {
    console.log('no-speech' + JSON.stringify(event));
  }
  if (event.error == 'audio-capture') {
    console.log('audio-capture' + JSON.stringify(event));
  }
  if (event.error == 'not-allowed') {
    console.log('not-allowed' + JSON.stringify(event));
  }
};
recognition.onend = function() {
  //recognizing = false;
};
recognition.onresult = function(event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    //var detectedKeyWord += event.results[i][0].transcript;
    console.log('Recognized : ' + JSON.stringify(event.results[i][0].transcript));
    var word = event.results[i][0].transcript.trim();
    if(recognition.detectionCallback[word]){
      recognition.detectionCallback[word]();
    }
  }
};

recognition.start();
