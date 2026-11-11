// --------------------------------------------------
// SONAL MIRANI — RESUME WEBSITE
// Basic JavaScript: responsive navigation
// --------------------------------------------------

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", function () {
  const isOpen = siteNav.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close the mobile menu after a navigation link is selected.
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Close the menu when the Escape key is pressed.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }
});
