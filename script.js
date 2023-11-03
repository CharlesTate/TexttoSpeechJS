// For Testing
console.log(SpeechSynthesisUtterance)

let speech = new SpeechSynthesisUtterance() //This line creates a new instance of the SpeechSynthesisUtterance object, which represents the text that will be spoken.

let voices = []; //This line initializes an empty array called voices where the available voices will be stored.
let voiceSelect = document.querySelector("select"); //This line selects the <select> element from the HTML document, presumably used for selecting different voices.


window.speechSynthesis.onvoiceschanged = () =>{   //is an event that fires when the list of available voices has been updated. The assigned arrow function is a callback that executes when this event occurs.
    voices = window.speechSynthesis.getVoices(); //This line retrieves the available voices using the getVoices() method and assigns them to the voices array.
    speech.voice = voices[0];  //This sets the voice property of the SpeechSynthesisUtterance object (speech) to the first voice in the voices array

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change" , () =>{

    speech.voice = voices[voiceSelect.value]

});

document.querySelector("button").addEventListener("click", () =>{    //select button and when we click
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

// Color Button Scripts
const colorGradients = [
    'linear-gradient(135deg, #010758, #490d61)',
    'linear-gradient(135deg, #ff5733, #33ff57)',
    'linear-gradient(135deg, #33ff57, #5733ff)',
    'linear-gradient(135deg, #5733ff, #ff33b0)',
    'linear-gradient(135deg, #ff33b0, #33b0ff)',
    'linear-gradient(135deg, #33b0ff, #ff5733)'
];

const colorButtons = document.querySelectorAll('.color-button');

for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].style.background = colorGradients[i];
    colorButtons[i].addEventListener('click', function () {
        document.body.style.background = colorGradients[i];
    });
}
