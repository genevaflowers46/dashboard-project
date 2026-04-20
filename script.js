const toggleButton = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();

  document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);
function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = document.getElementById("greeting");

  if (hour < 12) {
    greeting.textContent = "Good morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon!";
  } else {
    greeting.textContent = "Good evening!";
  }
}

updateGreeting();