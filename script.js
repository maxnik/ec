var voice = undefined;

function loadTheVoice() {
  var voices = window.speechSynthesis.getVoices();

  voice = voices.filter(function(voice) { return voice.name === 'Google US English'; })[0];
}

loadTheVoice();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = loadTheVoice;
}

var exercise = document.querySelector('.exercise');

exercise.onclick = function(event) {
	if (event.target.tagName === 'A') {
		var speech = new SpeechSynthesisUtterance(event.target.nextSibling.innerText);

		speech.voice = voice;
		speech.lang = 'en-US';
		window.speechSynthesis.speak(speech);
	}
}