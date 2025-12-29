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






















// contact.js
emailjs.init("Ngg_opYiFveKI80Gj");

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  const title = document.getElementById("title").value.trim();

  const visibleMessage = document.getElementById("message_visible").value.trim();

  // build the combined message (will NOT be shown in UI)
  // const combined = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${visibleMessage}`;

  const combined = `Name: ${name}\nEmail: ${email}\nTitle: ${title}\n\nMessage:\n${visibleMessage}`;

  

  // put into the hidden 'message' field that EmailJS will send
  document.getElementById("message").value = combined;

  // now send the form (this contains the hidden 'message')
  emailjs.sendForm("service_dhbixoa", "template_u71dkys", this)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Your message has been sent successfully.',
        confirmButtonColor: '#007BFF'
      });
      this.reset();
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Failed to send message. Please try again.',
        confirmButtonColor: '#FF0000'
      });
      console.error("EmailJS Error:", error);
    });
});



