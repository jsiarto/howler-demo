// Initialize a new MP3
const chopin = new Howl({
  src: ['chopin.mp3']
});

// Setup the audio controls
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

// Attached listeners to the buttons and map to appropriate Howl methods
playButton.addEventListener('click', () => {
  chopin.play();
})

pauseButton.addEventListener('click', () => {
  chopin.pause();
})

stopButton.addEventListener('click', () => {
  chopin.stop();
})