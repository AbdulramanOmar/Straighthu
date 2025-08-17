// Fade-up Animation
const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.9 }
);

elements.forEach((el) => observer.observe(el));

// Elements
let navToggle = document.getElementById("nav-toggle");
let navLinks = document.getElementById("nav-links");
let header = document.getElementById("main-header");

// Toggle menu
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Add shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});

// Change the src of Img
if (window.innerWidth < 768) {
  document.querySelector(".logo").src = "/images/logo copy.jpg";
} else {
  document.querySelector(".logo").src = "/images/logo.png";
}

// FQA
document.querySelectorAll(".fqa-question").forEach((q) => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});
