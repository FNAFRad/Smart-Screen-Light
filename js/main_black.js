let brightness = 0;

const overlay = document.getElementById('overlay');
const instructions = document.getElementById('instructions');

function updateBrightness() {
  // Update overlay opacity based on brightness
  overlay.style.opacity = brightness / 100;

  // Change text color based on brightness, from black to white
  const textColorValue = brightness <= 50 ? 'black' : 'white';
  instructions.style.color = textColorValue;
}

document.addEventListener('keydown', (e) => {
  if (e.key === '6') {
    if (brightness < 100) {
      brightness += 10;
      updateBrightness();
    }
  } else if (e.key === '4') {
    if (brightness > 0) {
      brightness -= 10;
      updateBrightness();
    }
  } else if (e.key === '5') {
    // Redirect to a new HTML page when 5 is pressed
    window.location.href = 'html/list.html'; // Replace 'list.html' with your file
  }
});
