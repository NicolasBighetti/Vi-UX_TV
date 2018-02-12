var recognition = new webkitSpeechRecognition();
recognition.lang = 'fr-FR';

var isPopUpMenu = false;
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
  recognizing = false;
  recognition.start();
};
recognition.onresult = function(event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    //var detectedKeyWord += event.results[i][0].transcript;
    console.log('Recognized : ' + JSON.stringify(event.results[i][0].transcript));
    var word = event.results[i][0].transcript.trim();
    if(!isPopUpMenu && recognition.detectionCallback[word]){
      recognition.detectionCallback[word]();
    }
    else{
      if(event.results[i][0].transcript.indexOf('contacter') >= 0){
        recordClick();
      }
      else if(event.results[i][0].transcript.indexOf('arrêter') >= 0){
        envoyeClick();
      }
    }
  }
};
recognition.start();

setInterval(function(){
  if(!recognizing){
    recognition.start();
  }
}, 5000);
