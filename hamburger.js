console.log("hamburger.js loaded");

const hamburger = document.querySelector(".hamburger");

const overlay = document.querySelector(".mobile-overlay");

const navLinks = document.querySelectorAll(".mobile-nav a");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

navLinks.forEach(link => {

  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});
