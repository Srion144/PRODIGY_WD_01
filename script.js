// Navbar scroll background change
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

// Active link highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Scroll progress bar update
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

// Dark/Light Mode Toggle
const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Toggle on click
toggle.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  setTheme(newTheme);
});

// Load Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: { enable: true, speed: 1.2 }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } }
  },
  retina_detect: true
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


