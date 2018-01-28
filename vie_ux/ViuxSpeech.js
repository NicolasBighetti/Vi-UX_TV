var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.detectionCallback = function(data){
  console.log('not defined');
};

recognition.setDetectionCallback = function(fct){
  recognition.detectionCallback = fct;
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
  recognizing = false;

  showInfo('');

};
recognition.onresult = function(event) {
  console.log('Recognized : ' + JSON.stringify(event));
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    var detectedKeyWord += event.results[i][0].transcript;

}
};

recognition.start();
