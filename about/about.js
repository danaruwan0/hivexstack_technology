// Select elements
const navBtn = document.getElementById("navBtn");
const navBox = document.getElementById("navBox");
const closeBtn = document.getElementById("closeBtn");

// Open menu
navBtn.addEventListener("click", () => {
  navBox.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", () => {
  navBox.classList.remove("active");
});

// Close when link clicked
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navBox.classList.remove("active");
  });
});
