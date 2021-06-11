const sound = new Audio("/sounds/hit.mp3");

// play different random similar sounds
// adjust volume to collision strength, body mass or size, ...
// add delay to play to avoid playing in consecutive frames

const playSound = (collision) => {
  if (collision.contact.getImpactVelocityAlongNormal() > 1.5) {
    sound.currentTime = 0;
    sound.volume = Math.random();
    sound.play();
  }
};

export default playSound;
