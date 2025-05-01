const list = document.querySelectorAll('#list li');
let selectedIndex = 0;

// Function to update the selection
function updateSelection() {
  list.forEach((item, index) => {
    item.classList.remove('selected');
    if (index === selectedIndex) {
      item.classList.add('selected');
    }
  });
}

// Handle keydown events for navigation and selection
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    // Move up in the list
    if (selectedIndex > 0) {
      selectedIndex--;
      updateSelection();
    }
  } else if (e.key === 'ArrowDown') {
    // Move down in the list
    if (selectedIndex < list.length - 1) {
      selectedIndex++;
      updateSelection();
    }
  } else if (e.key === 'Enter') {
    // Select the item (simulate CSK)
    const selectedItem = list[selectedIndex];
    const page = selectedItem.getAttribute('data-page'); // Get the page URL
    window.location.href = page; // Navigate to the corresponding page
  } else if (e.key === 'SoftRight') {
    // Go back to the previous page (simulate RSK)
    window.history.back();
  }
});

// Initially select the first item
updateSelection();