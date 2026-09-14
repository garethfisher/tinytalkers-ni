/* Tiny Talkers NI — light interactivity. The site works without JS. */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "tinytalkers-theme";

  /* ---- Theme ---- */
  var themeBtn = document.querySelector(".theme-toggle");

  function readStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function prefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
    if (themeBtn) {
      var dark = theme === "dark" || (!theme && prefersDark());
      themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      themeBtn.setAttribute("aria-pressed", String(dark));
    }
  }

  applyTheme(readStored());

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || (prefersDark() ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      applyTheme(next);
    });
  }

  /* ---- Mobile nav ---- */
  var navBtn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function closeNav() {
    if (!nav || !navBtn) return;
    nav.classList.remove("is-open");
    navBtn.setAttribute("aria-expanded", "false");
  }

  if (navBtn && nav) {
    navBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) closeNav();
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
