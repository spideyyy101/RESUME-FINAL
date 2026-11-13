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


// --------------------------------------------------
// SCROLL MOTION
// Progressive reveals only; no content or layout edits.
// --------------------------------------------------

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!motionPreference.matches && "IntersectionObserver" in window) {
  // Enable animation styles only when the browser can run the reveal logic.
  document.documentElement.classList.add("motion-enabled");

  const revealGroups = [
    [".section-heading"],
    [".about-title", ".about-copy"],
    [".experience-highlights"],
    [".experience-item"],
    [".leadership-feature"],
    [".education-intro", ".education-item"],
    [".skill-group"],
    [".certification-item"],
    [".beyond-layout > div"],
    [".contact-layout > div"]
  ];

  revealGroups.forEach(function (selectors) {
    const elements = document.querySelectorAll(selectors.join(", "));

    elements.forEach(function (element, index) {
      element.classList.add("motion-reveal");
      element.style.setProperty("--motion-delay", Math.min(index * 85, 340) + "ms");
    });
  });

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          // Remove the state outside the viewport so the reveal reverses
          // naturally when the visitor scrolls back to the section.
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -7% 0px"
    }
  );

  document.querySelectorAll(".motion-reveal").forEach(function (element) {
    revealObserver.observe(element);
  });
}
