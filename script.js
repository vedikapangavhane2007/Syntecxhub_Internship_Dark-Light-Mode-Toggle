const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  enableDarkMode();
  toggle.checked = true;
} else {
  enableLightMode();
}

// Toggle event
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    enableDarkMode();
    localStorage.setItem("theme", "dark");
  } else {
    enableLightMode();
    localStorage.setItem("theme", "light");
  }
});

// Functions to change colors dynamically using JavaScript
function enableDarkMode() {
  root.style.setProperty("--bg-color", "#121212");
  root.style.setProperty("--text-color", "#ffffff");
}

function enableLightMode() {
  root.style.setProperty("--bg-color", "#ffffff");
  root.style.setProperty("--text-color", "#000000");
}
