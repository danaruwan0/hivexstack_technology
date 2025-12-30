// =========================
// Navbar Toggle
// =========================
const navBtn = document.getElementById("navBtn");
const navBox = document.getElementById("navBox");
const closeBtn = document.getElementById("closeBtn");

navBtn.addEventListener("click", () => { navBox.classList.add("active"); });
closeBtn.addEventListener("click", () => { navBox.classList.remove("active"); });
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => { navBox.classList.remove("active"); });
});

// =========================
// Snowfall Animation (Christmas Theme)
// =========================
function createSnowflake() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");

  const size = Math.random() * 5 + 5 + "px";
  snow.style.width = size;
  snow.style.height = size;

  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.animationDuration = Math.random() * 5 + 5 + "s";
  snow.style.animationDelay = Math.random() * 5 + "s";

  document.getElementById("snow").appendChild(snow);

  setTimeout(() => { snow.remove(); }, 10000);
}

// Generate snowflakes continuously
setInterval(createSnowflake, 200);



// =========================
// Limited Offer Popup
// =========================
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("offerOverlay").style.display = "flex";
  }, 2000);
});

document.getElementById("offerClose").addEventListener("click", () => {
  document.getElementById("offerOverlay").style.display = "none";
});
