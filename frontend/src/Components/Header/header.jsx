import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../Theme/themeswitch";
import { useNav } from "../Context/NavContext";
// import "./navbar.css"; // make sure the path matches your project

function Navbar() {
  const { isDropdownActive } = useNav();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const menuButtonRef = useRef(null);
  const overlayRef = useRef(null);

  // manage body scroll + focus on open/close
  useEffect(() => {
    document.body.classList.toggle("mil-menu-open", isOpen);
    if (isOpen) {
      // put focus on first focusable in overlay
      setTimeout(() => {
        const first = overlayRef.current?.querySelector(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        first?.focus();
      }, 60);
    } else {
      menuButtonRef.current?.focus?.();
    }
  }, [isOpen]);

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // focus trap while overlay open
  useEffect(() => {
    function trap(e) {
      if (!isOpen || e.key !== "Tab") return;
      const container = overlayRef.current;
      if (!container) return;
      const focusable = Array.from(
        container.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [isOpen]);

  const toggleSubmenu = (key, e) => {
    e.preventDefault();
    setOpenSubmenus((s) => ({ ...s, [key]: !s[key] }));
  };

  return (
    <header className="navbar-wrapper mobile-like-header" role="banner">
      <div className="navbar-inner">
        {/* Logo (left) */}
        <div className="logo-container">
          <NavLink to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
            <img src="/assets/images/Logo/logo2.png" className="" loading="lazy" alt="Logo" />
          </NavLink>
        </div>

        {/* Hamburger (right) */}
        <button
          ref={menuButtonRef}
          className={`hamburger-btn ${isOpen ? "is-open" : ""}`}
          aria-controls="site-fullscreen-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((s) => !s)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Fullscreen overlay */}
      <div
        id="site-fullscreen-menu"
        className={`mil-menu-frame ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        ref={overlayRef}
        onClick={(e) => {
          // if click on backdrop (overlay itself) close
          if (e.target === overlayRef.current) setIsOpen(false);
        }}
      >
        <div className="mil-menu-content" onClick={(e) => e.stopPropagation()}>
          <div className="mil-frame-top overlay-top">
            <div className="logo-container">
            <NavLink to="/" className="mil-logo" onClick={() => setIsOpen(false)}>
              <img src="/assets/images/Logo/logo3.png" className="" alt="Logo" />
            </NavLink>
            </div>
            <button
              className="mil-menu-btn close-btn"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>

          <nav className="mil-main-menu overlay-nav" aria-label="Main site navigation">
            <ul>
              <li>
                <NavLink to="/" className="overlay-link" end onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className="overlay-link" onClick={() => setIsOpen(false)}>
                  About
                </NavLink>
              </li>

              <li>
                    <NavLink to="/service" className="overlay-link" onClick={() => setIsOpen(false)} >
                      Service
                    </NavLink>
              </li>

              <li>
                    <NavLink to="/pricing" className="overlay-link" onClick={() => setIsOpen(false)} >
                      Pricing Plan
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/testimonial" className="overlay-link" onClick={() => setIsOpen(false)} >
                      Testimonial
                    </NavLink>
                  </li>

              {/* <li className={`mil-has-children ${openSubmenus.services ? "expanded" : ""}`}>
                <a
                  href="#services"
                  className={`overlay-link ${isDropdownActive(["/service", "/single_services"]) ? "active" : ""}`}
                  onClick={(e) => toggleSubmenu("services", e)}
                >
                  Services <i className="fa-solid fa-angle-down accent-color" aria-hidden="true"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <NavLink to="/service" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/single_services" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      Single Services
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className={`mil-has-children ${openSubmenus.pages ? "expanded" : ""}`}>
                <a
                  href="#pages"
                  className={`overlay-link ${isDropdownActive([
                    "/case_studies",
                    "/team",
                    "/partnership",
                    "/pricing",
                    "/testimonial",
                    "/faq",
                    "/404_page",
                  ]) ? "active" : ""}`}
                  onClick={(e) => toggleSubmenu("pages", e)}
                >
                  Pages <i className="fa-solid fa-angle-down accent-color" aria-hidden="true"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <NavLink to="/case_studies" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      Case Studies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/team" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      Our Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/partnership" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      Partnership
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pricing" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      Pricing Plan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/testimonial" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      Testimonial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      FAQs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/404_page" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      Error 404
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className={`mil-has-children ${openSubmenus.archive ? "expanded" : ""}`}>
                <a
                  href="#archive"
                  className={`overlay-link ${isDropdownActive(["/blog", "/single_post"]) ? "active" : ""}`}
                  onClick={(e) => toggleSubmenu("archive", e)}
                >
                  Archive <i className="fa-solid fa-angle-down accent-color" aria-hidden="true"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <NavLink to="/blog" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/single_post" onClick={() => setIsOpen(false)} className="overlay-sublink">
                      Single Post
                    </NavLink>
                  </li>
                </ul>
              </li> */}

              <li>
                <NavLink to="/contact" className="overlay-link" onClick={() => setIsOpen(false)}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="mil-divider"></div>

          <div className="overlay-bottom">
            <div className="overlay-contacts">
              {/* <div className="navbar-action-button">
                <ThemeSwitcher />
              </div> */}
              <div className="navbar-icon-wrapper">
                <div className="icon-circle">
                  <i className="fa-solid fa-phone-volume" aria-hidden="true"></i>
                </div>
                <h6>+91 8368755187</h6>
              </div>
            </div>

            <div className="overlay-foot">
              <p className="muted">ILD Trade Centre, 4th Floor
Near Subhash Chowk, Sector 47
Gurugram, Haryana</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
