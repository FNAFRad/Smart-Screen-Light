let brightness = 0;

const overlay = document.getElementById('overlay');
const instructions = document.getElementById('instructions');

function updateBrightness() {
  overlay.style.opacity = brightness / 100;
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
    window.location.href = '/html/list.html'; // Replace 'newpage.html' with your file
  }
});
