const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

const inputText = document.getElementById('nama');
const displayText = document.getElementById('displayText');
const displayButton = document.getElementById('displayButton');

displayButton.addEventListener('click', function() {
  displayText.textContent = inputText.value;
});
