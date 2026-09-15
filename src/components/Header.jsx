import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { asset } from "../lib/asset.js";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Get in touch" },
];

function prefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function readStoredTheme() {
  try {
    return localStorage.getItem("tinytalkers-theme");
  } catch {
    return null;
  }
}

export default function Header() {
  const [theme, setTheme] = useState(readStoredTheme); // "light" | "dark" | null (follow system)
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  // Apply the theme to the document whenever it changes.
  useEffect(() => {
    if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  const isDark = theme === "dark" || (!theme && prefersDark());

  function toggleTheme() {
    const next = isDark ? "light" : "dark";
    try {
      localStorage.setItem("tinytalkers-theme", next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  }

  // Close the mobile menu on navigation, Escape, or resize to desktop.
  useEffect(() => setNavOpen(false), [location]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setNavOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 1024) setNavOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <NavLink className="logo-link" to="/" aria-label="Tiny Talkers NI — home">
          <img src={asset("brand_assets/tiny-talkers-logo.svg")} alt="Tiny Talkers" width="350" height="136" />
        </NavLink>

        <nav id="site-nav" className={"site-nav" + (navOpen ? " is-open" : "")} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={isDark}
            onClick={toggleTheme}
          >
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
          </button>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={() => setNavOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
